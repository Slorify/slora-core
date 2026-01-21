import type { Request, Response } from "express"
import { proxyService } from "../services/Proxy.js"


export const installProxy = async (req: Request, res: Response) => {
  try {
    proxyService.install();

    res.status(201).json({ success: true, message: "Proxy installation started." })
  } catch (err) {

    res.status(400).json({ success: false, message: "Proxy installation failed.", err })
  }
}

export const startProxy = async (req: Request, res: Response) => {
  try {
    await proxyService.start();
    res.status(201).json({ success: true, message: "Proxy has started." })
  } catch (err) {

    res.status(400).json({ success: false, message: "Proxy starting failed.", err })
  }
}

export const stopProxy = async (req: Request, res: Response) => {
  try {
    await proxyService.stop();

    res.status(201).json({ success: true, message: "Proxy has been stopped." })
  } catch (err) {
    res.status(201).json({ success: true, message: "Proxy stopping failed.", err })
  }
}

export const logsProxy = async (req: Request, res: Response) => {
  try {
    proxyService.logs()
    res.status(201).json({ success: true, message: "Fetching proxy logs." })
  } catch (err) {
    res.status(400).json({ success: false, message: "Fetching proxy logs failed", err })
  }
}
