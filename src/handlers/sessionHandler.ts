import session, { type SessionOptions } from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { prisma } from "../lib/prisma.js";
import type { RequestHandler } from "express";

const sessionOptions: SessionOptions = {
  name: "emberlabs-session",
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,

  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
  }),

  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
  },
};
export const sessionHandler: RequestHandler = session(sessionOptions);
