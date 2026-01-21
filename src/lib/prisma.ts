import 'dotenv/config';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { PrismaClient } from '../../generated/prisma/client.js';

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? '',
});

const prisma = new PrismaClient({ adapter });

export { prisma };