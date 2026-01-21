import slugify from "slugify";
import { prisma } from "../lib/prisma.js";
import { composeService } from "../services/Compose.js";

const composeFileSync = async (slug: string) => {
  const instances = await prisma.instance.findMany({
    where: {
      workspaces: {
        slug: slug,
      },
    },
    include: {
      domains: true,
      ports: true,
    },
  });
  await composeService.writeFile(slug, instances!);
};

const checkWorkspaceExists = async (slug: string) => {
  const workspace = await prisma.workspace.findFirst({
    where: { slug: slug },
  });
  return !!workspace;
};

async function generateUniqueInstanceSlug(name: string) {
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const exists = await prisma.instance.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!exists) break;

    slug = `${baseSlug}_${counter}`;
    counter++;
  }

  return slug;
}

export { composeFileSync, generateUniqueInstanceSlug, checkWorkspaceExists };
