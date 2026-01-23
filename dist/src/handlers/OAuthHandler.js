import https from "https";
import { getPublicIP } from "../utils/getPublicIp.js";
import { randomUUID } from "crypto";
https.get("https://api.ipify.org?format=json", (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
        const publicIP = JSON.parse(data).ip;
    });
});
let APP_URL = process.env.APP_URL;
const publicIP = await getPublicIP();
if (!APP_URL) {
    APP_URL = "http://" + publicIP;
}
const currentTime = (d) => {
    const result = String(d.getDate()).padStart(2, "0") +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        d.getFullYear();
    return result;
};
export const GitOAuthMenifest = async () => {
    const name = "Slorify " + currentTime(new Date()) + "-" + randomUUID().slice(0, 5);
    const menifest = {
        name: name,
        url: APP_URL,
        hook_attributes: {
            url: "http://" + publicIP + "/providers/github/events",
        },
        redirect_url: APP_URL + "/api/v1/providers/github/redirect",
        public: true,
        default_permissions: {
            issues: "write",
            checks: "write",
            contents: "read",
        },
        default_events: ["issues", "issue_comment", "check_suite", "check_run"],
    };
    return menifest;
};
//# sourceMappingURL=OAuthHandler.js.map