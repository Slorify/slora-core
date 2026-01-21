import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { composeService } from "../services/Compose.js";
import { PATHS } from "../config/paths.js";
import { railpackService } from "../services/Railpack.js";
import { gitService } from "../services/GitService.js";
import { dockerService } from "../services/Docker.js";
import {
  composeFileSync,
  checkWorkspaceExists,
  generateUniqueInstanceSlug,
} from "../handlers/instanceHandler.js";
import { fileService } from "../services/FileSystem.js";

export const getInstance = async (req: Request, res: Response) => {
  try {
    const slug = String(req.params.slug);
    const islug = String(req.params.islug);

    const instance = await prisma.instance.findFirst({
      where: { slug: islug, workspaces: { slug: slug } },
    });

    if (!instance) {
      res.status(400).json({ success: false, message: "Instance not exists." });
    }

    res.status(200).json({ success: true, instance });
  } catch (err) {
    res.status(400).json({ success: false, message: "Instance fetch error." });
  }
};

export const createInstance = async (req: Request, res: Response) => {
  try {
    const { name, type, gitUrl, volume, ports, domains, enviorement } =
      req.body;
    const slug = String(req.params.slug);

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields." });
    }

    const workspaceExists = await checkWorkspaceExists(slug);
    if (!workspaceExists) {
      return res
        .status(402)
        .json({ success: false, message: "Workspace does not exists." });
    }

    const instanceSlug = await generateUniqueInstanceSlug(name);
    const instance = await prisma.instance.create({
      data: {
        name: name,
        slug: instanceSlug,
        image: instanceSlug + ":latest",
        type,
        gitUrl,
        enviorement,
        volume,
        ports: {
          create: ports,
        },
        domains: {
          create: domains,
        },
        workspaces: {
          connect: {
            slug: slug,
          },
        },
      },
    });

    await composeFileSync(slug);

    res.status(201).json({
      success: true,
      message: "Instance created successfully.",
      data: instance,
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: true, message: "Instance creation error.", err });
  }
};

export const deleteInstance = async (req: Request, res: Response) => {
  try {
    const islug = String(req.params.islug);
    const slug = String(req.params.slug);

    const existingInstance = await prisma.instance.findFirst({
      where: { slug: islug, workspaces: { slug: slug } },
    });
    if (!existingInstance) {
      return res
        .status(400)
        .json({ success: false, message: "Instance does not exists." });
    }
    const deletedInstance = await prisma.instance.delete({
      where: { slug: islug, workspaces: { slug: slug } },
    });

    await fileService.deleteDir(`${PATHS.workspaces}/${slug}/${islug}`);
    await dockerService.stop(`${slug}`, `${slug}-${islug}`);
    await dockerService.remove(`${slug}`, `${slug}-${islug}`);
    await composeFileSync(slug);

    res.status(201).json({
      success: true,
      message: "Instance deleted successfully.",
      data: deletedInstance,
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance deletation failed.", err });
  }
};

export const updateInstance = async (req: Request, res: Response) => {
  try {
    const islug = String(req.params.islug);
    const slug = String(req.params.slug);
    const { name, image, volume, ports, domains, enviorement } = req.body;

    const updatedInstance = await prisma.instance.update({
      where: { slug: islug, workspaces: { slug: slug } },
      data: {
        name,
        image,
        volume,
        domains: { update: domains },
        ports: { update: ports },
        enviorement,
      },
    });

    await composeFileSync(slug);

    res.status(201).json({
      success: true,
      message: "Instance updated successfully.",
      data: updatedInstance,
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance updation failed.", err });
  }
};

export const getAllInstances = async (req: Request, res: Response) => {
  try {
    const slug = String(req.params.slug);
    const instances = await prisma.instance.findMany({
      where: {
        workspaces: {
          slug: slug,
        },
      },
    });

    res.status(200).json(instances);
  } catch (err) {
    res.status(400).json({ success: false, message: "Instances fetch error." });
  }
};

// Server actions

export const syncComposeFile = async (req: Request, res: Response) => {
  try {
    const slug = String(req.params.slug);
    await composeFileSync(slug);

    res
      .status(200)
      .json({ success: true, message: "Compose file synced successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Compose file sync error.", err });
  }
};

export const deployInstance = async (req: Request, res: Response) => {
  try {
    const { islug, slug } = req.params;
    const instance = await prisma.instance.findFirst({
      where: {
        slug: String(islug),
      },
    });

    if (!instance) {
      return res
        .status(400)
        .json({ success: false, message: "Instance does not exists." });
    }

    if (instance?.gitUrl) {
      await gitService.clone(
        instance?.gitUrl,
        `${PATHS.workspaces}/${slug}/${instance.slug}`,
        `${slug}-${instance.slug}`,
      );
    }

    if (instance?.type === "Railpacks") {
      await railpackService.install(`${slug}-${instance.slug}`);
      await railpackService.build(
        `${PATHS.workspaces}/${slug}/${instance.slug}`,
        `${slug}-${instance.slug}`,
      );
    }

    await composeService.up(
      instance?.slug!,
      `${PATHS.workspaces}/${slug}`,
      `${slug}-${instance?.slug}`,
    );

    res.send({ success: true, message: "Instance deployment started." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance deployment error.", err });
  }
};

export const startInstance = async (req: Request, res: Response) => {
  try {
    const { islug, slug } = req.params;
    const instance = await prisma.instance.findFirst({
      where: {
        slug: String(islug),
      },
    });

    await composeService.start(
      instance?.slug!,
      `${PATHS.workspaces}/${slug}`,
      `${slug}-${instance?.slug}`,
    );

    res.send({ success: true, message: "Instance started successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance start error.", err });
  }
};

export const stopInstance = async (req: Request, res: Response) => {
  try {
    const { islug, slug } = req.params;
    const instance = await prisma.instance.findFirst({
      where: {
        slug: String(islug),
      },
    });

    await composeService.stop(
      instance?.slug!,
      `${PATHS.workspaces}/${slug}`,
      `${slug}-${instance?.slug}`,
    );
    res.send({ success: true, message: "Instance stopped successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance stop error.", err });
  }
};

export const restartInstance = async (req: Request, res: Response) => {
  try {
    const { islug, slug } = req.params;
    const instance = await prisma.instance.findFirst({
      where: {
        slug: String(islug),
      },
    });
    await composeService.down(
      instance?.slug!,
      `${PATHS.workspaces}/${slug}`,
      `${slug}-${instance?.slug}`,
    );
    res.send({ success: true, message: "Instance restarted successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance restart error.", err });
  }
};

export const logsInstance = async (req: Request, res: Response) => {
  try {
    const { islug, slug } = req.params;
    const instance = await prisma.instance.findFirst({
      where: {
        slug: String(islug),
      },
    });

    dockerService.logs(instance?.slug!, `${slug}-${instance?.slug}`);

    res.send({ success: true, message: "Instance logs fetched successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance logs fetch error.", err });
  }
};
