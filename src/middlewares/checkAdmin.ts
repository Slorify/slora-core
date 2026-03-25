import { prisma } from "../lib/prisma.js";
import type { Response, Request, NextFunction } from "express";

export async function checkAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const email = req.session.user?.email as string;
    const user = await prisma.user.findUnique({
      where: { email },
      select: { role: true },
    });
    if (user?.role === "ADMIN") {
      return next(); 
    } else {
      return res.status(403).json({ message: "You are not an admin" });
    }
  } catch (err) {
    console.error(err);
  }
}
