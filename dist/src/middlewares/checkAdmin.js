import { prisma } from "../lib/prisma.js";
export async function checkAdmin(req, res, next) {
    try {
        const email = req.session.user?.email;
        const user = await prisma.user.findUnique({
            where: { email },
            select: { role: true },
        });
        if (user?.role === "ADMIN") {
            return next();
        }
        else {
            return res.status(403).json({ message: "You are not an admin" });
        }
    }
    catch (err) {
        console.error(err);
    }
}
//# sourceMappingURL=checkAdmin.js.map