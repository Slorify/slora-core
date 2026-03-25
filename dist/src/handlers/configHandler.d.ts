declare enum ProxyType {
    DOMAIN = "DOMAIN",
    PORT = "PORT"
}
interface Config {
    proxyMode: ProxyType;
    port?: number;
    domain?: string;
    swarmMode: boolean;
}
export declare function setConfig({ proxyMode, port, domain, swarmMode, }: Config): Promise<void>;
export declare function readConfig(): Promise<any>;
export {};
//# sourceMappingURL=configHandler.d.ts.map