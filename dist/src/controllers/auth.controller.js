import { prisma } from "../lib/prisma.js";
import { comparePassword, hashPassword } from "../lib/passwordHasher.js";
export const registerAuth = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        if (!username || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Please enter all fields." });
        }
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [{ username }, { email }],
            },
        });
        if (existingUser) {
            return res
                .status(409)
                .json({ success: false, message: "User already exists." });
        }
        const hashedPassword = await hashPassword(password);
        const user = firstname && lastname
            ? await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    password: hashedPassword,
                    profile: {
                        create: {
                            firstname: firstname,
                            lastname: lastname,
                        },
                    },
                },
            })
            : await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    password: hashedPassword,
                    profile: {
                        create: {},
                    },
                },
            });
        res
            .status(200)
            .json({ success: true, message: "User registerd successfully.", user });
    }
    catch (err) {
        res
            .status(400)
            .json({ success: false, message: "Registration Failed.", err });
    }
};
export const loginAuth = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username && !email) {
            return res.status(400).json({
                success: false,
                message: "Username or email are required.",
            });
        }
        if (!password) {
            return res
                .status(409)
                .json({ success: false, message: "Please enter password." });
        }
        const sessionUser = req.session.user;
        const user = username
            ? await prisma.user.findFirst({ where: { username } })
            : await prisma.user.findFirst({ where: { email } });
        if (sessionUser) {
            if (sessionUser?.email === user?.email) {
                return res.status(200).json({
                    success: true,
                    message: "You are already logged in.",
                });
            }
        }
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exists please register.",
            });
        }
        const isValid = await comparePassword(password, user?.password);
        if (!isValid) {
            res.status(409).json({ success: false, message: "Invalid Password." });
        }
        if (isValid) {
            req.session.regenerate((e) => {
                if (e) {
                    return res
                        .status(500)
                        .json({ message: "Session regeneration failed." });
                }
                req.session.user = {
                    id: user?.id,
                    email: user?.email,
                    username: user?.username,
                };
                res
                    .status(200)
                    .json({ success: true, message: "You logged in successfully." });
            });
        }
    }
    catch (err) {
        res.status(400).json({ success: false, message: "Login failed.", err });
    }
};
export const logoutAuth = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                res.status(500).json({ success: false });
            }
            res.clearCookie("emberlabs-session");
            res.status(201).json({ success: true, message: "Logout successfully." });
        });
    }
    catch (e) { }
};
export const getMeAuth = async (req, res) => {
    try {
        const sessionUser = req.session.user;
        if (!sessionUser) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized user." });
        }
        if (!sessionUser?.email) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized user." });
        }
        const user = await prisma.user.findUnique({
            where: { email: sessionUser?.email },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                profile: true,
                workspaces: true,
                registerdAt: true,
            },
        });
        res.status(200).json({ success: true, user });
    }
    catch (e) {
        res
            .status(400)
            .json({ success: false, message: "User could not be found." });
    }
};
//# sourceMappingURL=auth.controller.js.map