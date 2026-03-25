import type { Request, Response } from "express";
import { readConfig, setConfig } from "../handlers/configHandler.js";
import { prisma } from "../lib/prisma.js";

const checkStartup = async (req: Request, res: Response) => {
  try {
    const config = await readConfig();
    if (config && Object.keys(config).length > 0) {
      res.status(200).json({ success: false, done: true, config });
    } else {
      res.status(200).json({
        success: true,
        done: false,
        message: "Startup has been starting..",
      });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

const writeStartup = async (req: Request, res: Response) => {
  try {
    const { email, proxyMode, swarmMode, domain, port } = req.body;
    const config = await readConfig();

    const user = await prisma.user.update({
      where: { email },
      data: { role: "ADMIN" },
    });
    if (!config) {
      await setConfig({ proxyMode, swarmMode, domain, port });
      const newConfig = await readConfig();
      res.status(200).json({
        success: true,
        message: "Startup setup has done..",
        user: user,
        config: newConfig,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "The setup had already done.",
        config,
      });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { checkStartup, writeStartup };
