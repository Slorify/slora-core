import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client.js").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client.js").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client.js").AnyNullClass;
export declare const ModelName: {
    readonly Session: "Session";
    readonly User: "User";
    readonly GithubApp: "GithubApp";
    readonly Profile: "Profile";
    readonly Workspace: "Workspace";
    readonly Instance: "Instance";
    readonly GitRepo: "GitRepo";
    readonly Domain: "Domain";
    readonly Port: "Port";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly sid: "sid";
    readonly data: "data";
    readonly expiresAt: "expiresAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly registerdAt: "registerdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const GithubAppScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly app_id: "app_id";
    readonly private_key: "private_key";
    readonly owner_login: "owner_login";
    readonly cloneToken: "cloneToken";
    readonly isInstalled: "isInstalled";
    readonly createdAt: "createdAt";
    readonly userId: "userId";
};
export type GithubAppScalarFieldEnum = (typeof GithubAppScalarFieldEnum)[keyof typeof GithubAppScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly avtarUrl: "avtarUrl";
    readonly userId: "userId";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const WorkspaceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly userId: "userId";
    readonly maxInstances: "maxInstances";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum];
export declare const InstanceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly image: "image";
    readonly type: "type";
    readonly status: "status";
    readonly gitUrl: "gitUrl";
    readonly uploadPath: "uploadPath";
    readonly volume: "volume";
    readonly enviorement: "enviorement";
    readonly workspaceId: "workspaceId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InstanceScalarFieldEnum = (typeof InstanceScalarFieldEnum)[keyof typeof InstanceScalarFieldEnum];
export declare const GitRepoScalarFieldEnum: {
    readonly id: "id";
    readonly appId: "appId";
    readonly repo: "repo";
    readonly branch: "branch";
    readonly instanceId: "instanceId";
};
export type GitRepoScalarFieldEnum = (typeof GitRepoScalarFieldEnum)[keyof typeof GitRepoScalarFieldEnum];
export declare const DomainScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly domain: "domain";
    readonly port: "port";
    readonly instanceId: "instanceId";
};
export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum];
export declare const PortScalarFieldEnum: {
    readonly id: "id";
    readonly host: "host";
    readonly internal: "internal";
    readonly instanceId: "instanceId";
};
export type PortScalarFieldEnum = (typeof PortScalarFieldEnum)[keyof typeof PortScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client/runtime/client.js").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client.js").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client.js").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client.js").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client.js").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client.js").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map