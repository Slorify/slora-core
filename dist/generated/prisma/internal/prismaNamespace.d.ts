import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.3.0
 * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "session" | "user" | "githubApp" | "profile" | "workspace" | "instance" | "gitRepo" | "domain" | "port";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        GithubApp: {
            payload: Prisma.$GithubAppPayload<ExtArgs>;
            fields: Prisma.GithubAppFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GithubAppFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GithubAppFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>;
                };
                findFirst: {
                    args: Prisma.GithubAppFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GithubAppFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>;
                };
                findMany: {
                    args: Prisma.GithubAppFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>[];
                };
                create: {
                    args: Prisma.GithubAppCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>;
                };
                createMany: {
                    args: Prisma.GithubAppCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GithubAppCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>[];
                };
                delete: {
                    args: Prisma.GithubAppDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>;
                };
                update: {
                    args: Prisma.GithubAppUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>;
                };
                deleteMany: {
                    args: Prisma.GithubAppDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GithubAppUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GithubAppUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>[];
                };
                upsert: {
                    args: Prisma.GithubAppUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubAppPayload>;
                };
                aggregate: {
                    args: Prisma.GithubAppAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGithubApp>;
                };
                groupBy: {
                    args: Prisma.GithubAppGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GithubAppGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GithubAppCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GithubAppCountAggregateOutputType> | number;
                };
            };
        };
        Profile: {
            payload: Prisma.$ProfilePayload<ExtArgs>;
            fields: Prisma.ProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findMany: {
                    args: Prisma.ProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                create: {
                    args: Prisma.ProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                createMany: {
                    args: Prisma.ProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                delete: {
                    args: Prisma.ProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                update: {
                    args: Prisma.ProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfile>;
                };
                groupBy: {
                    args: Prisma.ProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileCountAggregateOutputType> | number;
                };
            };
        };
        Workspace: {
            payload: Prisma.$WorkspacePayload<ExtArgs>;
            fields: Prisma.WorkspaceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>;
                };
                findFirst: {
                    args: Prisma.WorkspaceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>;
                };
                findMany: {
                    args: Prisma.WorkspaceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>[];
                };
                create: {
                    args: Prisma.WorkspaceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>;
                };
                createMany: {
                    args: Prisma.WorkspaceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>[];
                };
                delete: {
                    args: Prisma.WorkspaceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>;
                };
                update: {
                    args: Prisma.WorkspaceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>;
                };
                deleteMany: {
                    args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>[];
                };
                upsert: {
                    args: Prisma.WorkspaceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkspacePayload>;
                };
                aggregate: {
                    args: Prisma.WorkspaceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWorkspace>;
                };
                groupBy: {
                    args: Prisma.WorkspaceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WorkspaceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WorkspaceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WorkspaceCountAggregateOutputType> | number;
                };
            };
        };
        Instance: {
            payload: Prisma.$InstancePayload<ExtArgs>;
            fields: Prisma.InstanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InstanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InstanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>;
                };
                findFirst: {
                    args: Prisma.InstanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InstanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>;
                };
                findMany: {
                    args: Prisma.InstanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>[];
                };
                create: {
                    args: Prisma.InstanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>;
                };
                createMany: {
                    args: Prisma.InstanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InstanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>[];
                };
                delete: {
                    args: Prisma.InstanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>;
                };
                update: {
                    args: Prisma.InstanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>;
                };
                deleteMany: {
                    args: Prisma.InstanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InstanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InstanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>[];
                };
                upsert: {
                    args: Prisma.InstanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstancePayload>;
                };
                aggregate: {
                    args: Prisma.InstanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInstance>;
                };
                groupBy: {
                    args: Prisma.InstanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InstanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstanceCountAggregateOutputType> | number;
                };
            };
        };
        GitRepo: {
            payload: Prisma.$GitRepoPayload<ExtArgs>;
            fields: Prisma.GitRepoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GitRepoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GitRepoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>;
                };
                findFirst: {
                    args: Prisma.GitRepoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GitRepoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>;
                };
                findMany: {
                    args: Prisma.GitRepoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>[];
                };
                create: {
                    args: Prisma.GitRepoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>;
                };
                createMany: {
                    args: Prisma.GitRepoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GitRepoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>[];
                };
                delete: {
                    args: Prisma.GitRepoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>;
                };
                update: {
                    args: Prisma.GitRepoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>;
                };
                deleteMany: {
                    args: Prisma.GitRepoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GitRepoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GitRepoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>[];
                };
                upsert: {
                    args: Prisma.GitRepoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GitRepoPayload>;
                };
                aggregate: {
                    args: Prisma.GitRepoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGitRepo>;
                };
                groupBy: {
                    args: Prisma.GitRepoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GitRepoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GitRepoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GitRepoCountAggregateOutputType> | number;
                };
            };
        };
        Domain: {
            payload: Prisma.$DomainPayload<ExtArgs>;
            fields: Prisma.DomainFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DomainFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>;
                };
                findFirst: {
                    args: Prisma.DomainFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>;
                };
                findMany: {
                    args: Prisma.DomainFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>[];
                };
                create: {
                    args: Prisma.DomainCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>;
                };
                createMany: {
                    args: Prisma.DomainCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>[];
                };
                delete: {
                    args: Prisma.DomainDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>;
                };
                update: {
                    args: Prisma.DomainUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>;
                };
                deleteMany: {
                    args: Prisma.DomainDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DomainUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DomainUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>[];
                };
                upsert: {
                    args: Prisma.DomainUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainPayload>;
                };
                aggregate: {
                    args: Prisma.DomainAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDomain>;
                };
                groupBy: {
                    args: Prisma.DomainGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DomainGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DomainCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DomainCountAggregateOutputType> | number;
                };
            };
        };
        Port: {
            payload: Prisma.$PortPayload<ExtArgs>;
            fields: Prisma.PortFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>;
                };
                findFirst: {
                    args: Prisma.PortFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>;
                };
                findMany: {
                    args: Prisma.PortFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>[];
                };
                create: {
                    args: Prisma.PortCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>;
                };
                createMany: {
                    args: Prisma.PortCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>[];
                };
                delete: {
                    args: Prisma.PortDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>;
                };
                update: {
                    args: Prisma.PortUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>;
                };
                deleteMany: {
                    args: Prisma.PortDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>[];
                };
                upsert: {
                    args: Prisma.PortUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortPayload>;
                };
                aggregate: {
                    args: Prisma.PortAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePort>;
                };
                groupBy: {
                    args: Prisma.PortGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Type'
 */
export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>;
/**
 * Reference to a field of type 'Type[]'
 */
export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    session?: Prisma.SessionOmit;
    user?: Prisma.UserOmit;
    githubApp?: Prisma.GithubAppOmit;
    profile?: Prisma.ProfileOmit;
    workspace?: Prisma.WorkspaceOmit;
    instance?: Prisma.InstanceOmit;
    gitRepo?: Prisma.GitRepoOmit;
    domain?: Prisma.DomainOmit;
    port?: Prisma.PortOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map