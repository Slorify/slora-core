import https from "https";
export const getPublicIP = () => {
    return new Promise((resolve, reject) => {
        https
            .get("https://api.ipify.org?format=json", (res) => {
            let data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => {
                try {
                    resolve(JSON.parse(data).ip);
                }
                catch (err) {
                    reject(err);
                }
            });
        })
            .on("error", reject);
    });
};
//# sourceMappingURL=getPublicIp.js.map