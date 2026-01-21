export declare const GitOAuthMenifest: (name: string) => Promise<{
    name: string;
    url: string;
    hook_attributes: {
        url: string;
    };
    redirect_url: string;
    public: boolean;
    default_permissions: {
        issues: string;
        checks: string;
        contents: string;
    };
    default_events: string[];
}>;
//# sourceMappingURL=OAuthHandler.d.ts.map