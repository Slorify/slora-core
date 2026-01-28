export const getInstanceStatus = async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: "Status .",
        });
    }
    catch (err) { }
};
//# sourceMappingURL=status.controller.js.map