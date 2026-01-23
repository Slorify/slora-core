import type { Request, Response } from "express";

export const getInstanceStatus = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      success: true,
      message: "Status .",
    });
  } catch (err) { }
};
