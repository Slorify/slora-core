import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { composeService } from "../services/Compose.js";
import { PATHS } from "../config/paths.js";
import { fileService } from "../services/FileSystem.js";
import slugify from "slugify";

export const createWorkspace = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const slug = slugify(name, { lower: true, strict: true });

    const email = req.session.user?.email;

    if (!email) {
      res.status(401).json({
        success: false,
        message: "Unauthorized user please login first.",
      });
    }
    const user = await prisma.user.findFirst({
      where: { email: email! },
      select: { id: true, email: true, role: true, username: true },
    });

    const existingWorkspace = await prisma.workspace.findFirst({
      where: { slug: slug },
      select: { name: true, slug: true },
    });

    if (existingWorkspace?.slug) {
      return res
        .status(409)
        .json({ success: false, message: "Workspace already exists." });
    }

    const workspace = await prisma.workspace.create({
      data: {
        name: name,
        description: description,
        user: {
          connect: { id: user?.id! },
        },
        slug: slug,
      },
    });

    await fileService.createDir(`${PATHS.workspaces}/${slug}`);

    return res.status(201).json({
      success: true,
      message: "Workspace created succssfully.",
      workspace,
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: "Workspace creation failed.", err });
  }
};

export const deleteWorkspace = async (req: Request, res: Response) => {
  try {
    const slug = String(req.params.slug);
    const email = req.session.user?.email;
    if (!email) {
      res.status(401).json({
        success: false,
        message: "Unauthorized user please login first.",
      });
    }

    const existingWorkspace = await prisma.workspace.findFirst({
      where: {
        slug: slug,
      },
      select: {
        name: true,
        user: true,
        instances: true,
      },
    });

    if (!existingWorkspace) {
      return res
        .status(404)
        .json({ success: false, message: "Workspace does not exists." });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email!,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });

    if (user?.email !== existingWorkspace?.user.email) {
      return res
        .status(409)
        .json({ success: false, message: "Forbidden User Permission." });
    }

    const deletedWorkspace = await prisma.workspace.delete({
      where: { slug: slug },
    });

    await fileService.deleteDir(`${PATHS.workspaces}/${slug}`);
    await composeService.down(
      undefined,
      `${PATHS.workspaces}/${slug}`,
      `${slug}`,
    );

    return res.status(202).json({
      succes: true,
      message: "Workspace deleted succssfully.",
      deletedWorkspace,
    });
  } catch (err) {
    res
      .status(400)
      .json({ succes: false, message: "Workspace deletation failed.", err });
  }
};

export const getWorkspace = async (req: Request, res: Response) => {
  try {
    let slug = String(req.params.slug);
    const email = req.session.user?.email;
    if (!email) {
      res.status(401).json({
        success: false,
        message: "Unauthorized user please login first.",
      });
    }

    const existingWorkspace = await prisma.workspace.findFirst({
      where: {
        slug: slug,
      },
      select: {
        name: true,
        description: true,
        user: true,
        instances: true,
      },
    });

    if (!existingWorkspace) {
      return res
        .status(404)
        .json({ success: false, message: "Workspace does not exists." });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email!,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });

    if (user?.email !== existingWorkspace?.user.email) {
      res.status(401).json({ success: false, message: "Forbidden User." });
    }
    const workspace = await prisma.workspace.findFirst({
      where: { slug },
      select: {
        name: true,
        description: true,
        slug: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            profile: true,
            role: true,
            registerdAt: true,
          },
        },
        instances: true,
      },
    });
    res.status(202).json(workspace);
  } catch (err) {
    res
      .status(404)
      .json({ succes: true, message: "Workspace getting failed." });
  }
};

export const getAllWorkspaces = async (req: Request, res: Response) => {
  try {
    const email = req.session.user?.email;

    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user please login first.",
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email!,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const workspaces = await prisma.workspace.findMany({
      where: {
        user: {
          id: user?.id!,
        },
      },
      select: {
        name: true,
        description: true,
        slug: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            profile: true,
            role: true,
            registerdAt: true,
          },
        },
        _count: {
          select: {
            instances: true,
          },
        },
      },
    });
    res.status(202).json(workspaces);
  } catch (err) {
    res
      .status(404)
      .json({ succes: true, message: "Workspace getting failed." });
  }
};
