declare const composeFileSync: (slug: string) => Promise<void>;
declare const checkWorkspaceExists: (slug: string) => Promise<boolean>;
declare function generateUniqueInstanceSlug(name: string): Promise<string>;
export { composeFileSync, generateUniqueInstanceSlug, checkWorkspaceExists };
//# sourceMappingURL=instanceHandler.d.ts.map