const toHumanField = (field: string) =>
  field
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .toLowerCase();

export const prismaErrorHandler = (err: any) => {
  if (err?.code === "P2002") {
    const fields =
      err?.meta?.target ||
      err?.meta?.cause?.constraint?.fields ||
      err?.meta?.driverAdapterError?.cause?.constraint?.fields ||
      [];

    const model = err?.meta?.modelName || err?.meta?.cause?.modelName;

    const readable =
      Array.isArray(fields) && fields.length > 0
        ? fields.map(toHumanField).join(", ")
        : "one of the fields";

    return {
      status: 409,
      body: {
        success: false,
        code: "UNIQUE_CONSTRAINT_VIOLATION",
        message: `The value for ${readable} is already in use.`,
        fields,
        model,
      },
    };
  }

  return null;
};
