import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model GithubApp
 *
 */
export type GithubAppModel = runtime.Types.Result.DefaultSelection<Prisma.$GithubAppPayload>;
export type AggregateGithubApp = {
    _count: GithubAppCountAggregateOutputType | null;
    _avg: GithubAppAvgAggregateOutputType | null;
    _sum: GithubAppSumAggregateOutputType | null;
    _min: GithubAppMinAggregateOutputType | null;
    _max: GithubAppMaxAggregateOutputType | null;
};
export type GithubAppAvgAggregateOutputType = {
    id: number | null;
    app_id: number | null;
    userId: number | null;
};
export type GithubAppSumAggregateOutputType = {
    id: number | null;
    app_id: number | null;
    userId: number | null;
};
export type GithubAppMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    slug: string | null;
    app_id: number | null;
    private_key: string | null;
    cloneToken: string | null;
    isInstalled: boolean | null;
    createdAt: Date | null;
    userId: number | null;
};
export type GithubAppMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    slug: string | null;
    app_id: number | null;
    private_key: string | null;
    cloneToken: string | null;
    isInstalled: boolean | null;
    createdAt: Date | null;
    userId: number | null;
};
export type GithubAppCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    app_id: number;
    private_key: number;
    owner_login: number;
    cloneToken: number;
    isInstalled: number;
    createdAt: number;
    userId: number;
    _all: number;
};
export type GithubAppAvgAggregateInputType = {
    id?: true;
    app_id?: true;
    userId?: true;
};
export type GithubAppSumAggregateInputType = {
    id?: true;
    app_id?: true;
    userId?: true;
};
export type GithubAppMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    app_id?: true;
    private_key?: true;
    cloneToken?: true;
    isInstalled?: true;
    createdAt?: true;
    userId?: true;
};
export type GithubAppMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    app_id?: true;
    private_key?: true;
    cloneToken?: true;
    isInstalled?: true;
    createdAt?: true;
    userId?: true;
};
export type GithubAppCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    app_id?: true;
    private_key?: true;
    owner_login?: true;
    cloneToken?: true;
    isInstalled?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
};
export type GithubAppAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GithubApp to aggregate.
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubApps to fetch.
     */
    orderBy?: Prisma.GithubAppOrderByWithRelationInput | Prisma.GithubAppOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GithubAppWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubApps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubApps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GithubApps
    **/
    _count?: true | GithubAppCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GithubAppAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GithubAppSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GithubAppMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GithubAppMaxAggregateInputType;
};
export type GetGithubAppAggregateType<T extends GithubAppAggregateArgs> = {
    [P in keyof T & keyof AggregateGithubApp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGithubApp[P]> : Prisma.GetScalarType<T[P], AggregateGithubApp[P]>;
};
export type GithubAppGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubAppWhereInput;
    orderBy?: Prisma.GithubAppOrderByWithAggregationInput | Prisma.GithubAppOrderByWithAggregationInput[];
    by: Prisma.GithubAppScalarFieldEnum[] | Prisma.GithubAppScalarFieldEnum;
    having?: Prisma.GithubAppScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GithubAppCountAggregateInputType | true;
    _avg?: GithubAppAvgAggregateInputType;
    _sum?: GithubAppSumAggregateInputType;
    _min?: GithubAppMinAggregateInputType;
    _max?: GithubAppMaxAggregateInputType;
};
export type GithubAppGroupByOutputType = {
    id: number;
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: runtime.JsonValue;
    cloneToken: string;
    isInstalled: boolean;
    createdAt: Date;
    userId: number;
    _count: GithubAppCountAggregateOutputType | null;
    _avg: GithubAppAvgAggregateOutputType | null;
    _sum: GithubAppSumAggregateOutputType | null;
    _min: GithubAppMinAggregateOutputType | null;
    _max: GithubAppMaxAggregateOutputType | null;
};
type GetGithubAppGroupByPayload<T extends GithubAppGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GithubAppGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GithubAppGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GithubAppGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GithubAppGroupByOutputType[P]>;
}>>;
export type GithubAppWhereInput = {
    AND?: Prisma.GithubAppWhereInput | Prisma.GithubAppWhereInput[];
    OR?: Prisma.GithubAppWhereInput[];
    NOT?: Prisma.GithubAppWhereInput | Prisma.GithubAppWhereInput[];
    id?: Prisma.IntFilter<"GithubApp"> | number;
    name?: Prisma.StringFilter<"GithubApp"> | string;
    slug?: Prisma.StringFilter<"GithubApp"> | string;
    app_id?: Prisma.IntFilter<"GithubApp"> | number;
    private_key?: Prisma.StringFilter<"GithubApp"> | string;
    owner_login?: Prisma.JsonFilter<"GithubApp">;
    cloneToken?: Prisma.StringFilter<"GithubApp"> | string;
    isInstalled?: Prisma.BoolFilter<"GithubApp"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"GithubApp"> | Date | string;
    userId?: Prisma.IntFilter<"GithubApp"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type GithubAppOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    private_key?: Prisma.SortOrder;
    owner_login?: Prisma.SortOrder;
    cloneToken?: Prisma.SortOrder;
    isInstalled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type GithubAppWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    app_id?: number;
    AND?: Prisma.GithubAppWhereInput | Prisma.GithubAppWhereInput[];
    OR?: Prisma.GithubAppWhereInput[];
    NOT?: Prisma.GithubAppWhereInput | Prisma.GithubAppWhereInput[];
    name?: Prisma.StringFilter<"GithubApp"> | string;
    slug?: Prisma.StringFilter<"GithubApp"> | string;
    private_key?: Prisma.StringFilter<"GithubApp"> | string;
    owner_login?: Prisma.JsonFilter<"GithubApp">;
    cloneToken?: Prisma.StringFilter<"GithubApp"> | string;
    isInstalled?: Prisma.BoolFilter<"GithubApp"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"GithubApp"> | Date | string;
    userId?: Prisma.IntFilter<"GithubApp"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "app_id">;
export type GithubAppOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    private_key?: Prisma.SortOrder;
    owner_login?: Prisma.SortOrder;
    cloneToken?: Prisma.SortOrder;
    isInstalled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.GithubAppCountOrderByAggregateInput;
    _avg?: Prisma.GithubAppAvgOrderByAggregateInput;
    _max?: Prisma.GithubAppMaxOrderByAggregateInput;
    _min?: Prisma.GithubAppMinOrderByAggregateInput;
    _sum?: Prisma.GithubAppSumOrderByAggregateInput;
};
export type GithubAppScalarWhereWithAggregatesInput = {
    AND?: Prisma.GithubAppScalarWhereWithAggregatesInput | Prisma.GithubAppScalarWhereWithAggregatesInput[];
    OR?: Prisma.GithubAppScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GithubAppScalarWhereWithAggregatesInput | Prisma.GithubAppScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"GithubApp"> | number;
    name?: Prisma.StringWithAggregatesFilter<"GithubApp"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"GithubApp"> | string;
    app_id?: Prisma.IntWithAggregatesFilter<"GithubApp"> | number;
    private_key?: Prisma.StringWithAggregatesFilter<"GithubApp"> | string;
    owner_login?: Prisma.JsonWithAggregatesFilter<"GithubApp">;
    cloneToken?: Prisma.StringWithAggregatesFilter<"GithubApp"> | string;
    isInstalled?: Prisma.BoolWithAggregatesFilter<"GithubApp"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GithubApp"> | Date | string;
    userId?: Prisma.IntWithAggregatesFilter<"GithubApp"> | number;
};
export type GithubAppCreateInput = {
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken: string;
    isInstalled?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutGithubAppInput;
};
export type GithubAppUncheckedCreateInput = {
    id?: number;
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken: string;
    isInstalled?: boolean;
    createdAt?: Date | string;
    userId: number;
};
export type GithubAppUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutGithubAppNestedInput;
};
export type GithubAppUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GithubAppCreateManyInput = {
    id?: number;
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken: string;
    isInstalled?: boolean;
    createdAt?: Date | string;
    userId: number;
};
export type GithubAppUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubAppUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GithubAppListRelationFilter = {
    every?: Prisma.GithubAppWhereInput;
    some?: Prisma.GithubAppWhereInput;
    none?: Prisma.GithubAppWhereInput;
};
export type GithubAppOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GithubAppCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    private_key?: Prisma.SortOrder;
    owner_login?: Prisma.SortOrder;
    cloneToken?: Prisma.SortOrder;
    isInstalled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GithubAppAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GithubAppMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    private_key?: Prisma.SortOrder;
    cloneToken?: Prisma.SortOrder;
    isInstalled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GithubAppMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    private_key?: Prisma.SortOrder;
    cloneToken?: Prisma.SortOrder;
    isInstalled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GithubAppSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GithubAppCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GithubAppCreateWithoutUserInput, Prisma.GithubAppUncheckedCreateWithoutUserInput> | Prisma.GithubAppCreateWithoutUserInput[] | Prisma.GithubAppUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubAppCreateOrConnectWithoutUserInput | Prisma.GithubAppCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GithubAppCreateManyUserInputEnvelope;
    connect?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
};
export type GithubAppUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GithubAppCreateWithoutUserInput, Prisma.GithubAppUncheckedCreateWithoutUserInput> | Prisma.GithubAppCreateWithoutUserInput[] | Prisma.GithubAppUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubAppCreateOrConnectWithoutUserInput | Prisma.GithubAppCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GithubAppCreateManyUserInputEnvelope;
    connect?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
};
export type GithubAppUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GithubAppCreateWithoutUserInput, Prisma.GithubAppUncheckedCreateWithoutUserInput> | Prisma.GithubAppCreateWithoutUserInput[] | Prisma.GithubAppUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubAppCreateOrConnectWithoutUserInput | Prisma.GithubAppCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GithubAppUpsertWithWhereUniqueWithoutUserInput | Prisma.GithubAppUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GithubAppCreateManyUserInputEnvelope;
    set?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    disconnect?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    delete?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    connect?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    update?: Prisma.GithubAppUpdateWithWhereUniqueWithoutUserInput | Prisma.GithubAppUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GithubAppUpdateManyWithWhereWithoutUserInput | Prisma.GithubAppUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GithubAppScalarWhereInput | Prisma.GithubAppScalarWhereInput[];
};
export type GithubAppUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GithubAppCreateWithoutUserInput, Prisma.GithubAppUncheckedCreateWithoutUserInput> | Prisma.GithubAppCreateWithoutUserInput[] | Prisma.GithubAppUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubAppCreateOrConnectWithoutUserInput | Prisma.GithubAppCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GithubAppUpsertWithWhereUniqueWithoutUserInput | Prisma.GithubAppUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GithubAppCreateManyUserInputEnvelope;
    set?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    disconnect?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    delete?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    connect?: Prisma.GithubAppWhereUniqueInput | Prisma.GithubAppWhereUniqueInput[];
    update?: Prisma.GithubAppUpdateWithWhereUniqueWithoutUserInput | Prisma.GithubAppUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GithubAppUpdateManyWithWhereWithoutUserInput | Prisma.GithubAppUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GithubAppScalarWhereInput | Prisma.GithubAppScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type GithubAppCreateWithoutUserInput = {
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken: string;
    isInstalled?: boolean;
    createdAt?: Date | string;
};
export type GithubAppUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken: string;
    isInstalled?: boolean;
    createdAt?: Date | string;
};
export type GithubAppCreateOrConnectWithoutUserInput = {
    where: Prisma.GithubAppWhereUniqueInput;
    create: Prisma.XOR<Prisma.GithubAppCreateWithoutUserInput, Prisma.GithubAppUncheckedCreateWithoutUserInput>;
};
export type GithubAppCreateManyUserInputEnvelope = {
    data: Prisma.GithubAppCreateManyUserInput | Prisma.GithubAppCreateManyUserInput[];
};
export type GithubAppUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GithubAppWhereUniqueInput;
    update: Prisma.XOR<Prisma.GithubAppUpdateWithoutUserInput, Prisma.GithubAppUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GithubAppCreateWithoutUserInput, Prisma.GithubAppUncheckedCreateWithoutUserInput>;
};
export type GithubAppUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GithubAppWhereUniqueInput;
    data: Prisma.XOR<Prisma.GithubAppUpdateWithoutUserInput, Prisma.GithubAppUncheckedUpdateWithoutUserInput>;
};
export type GithubAppUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GithubAppScalarWhereInput;
    data: Prisma.XOR<Prisma.GithubAppUpdateManyMutationInput, Prisma.GithubAppUncheckedUpdateManyWithoutUserInput>;
};
export type GithubAppScalarWhereInput = {
    AND?: Prisma.GithubAppScalarWhereInput | Prisma.GithubAppScalarWhereInput[];
    OR?: Prisma.GithubAppScalarWhereInput[];
    NOT?: Prisma.GithubAppScalarWhereInput | Prisma.GithubAppScalarWhereInput[];
    id?: Prisma.IntFilter<"GithubApp"> | number;
    name?: Prisma.StringFilter<"GithubApp"> | string;
    slug?: Prisma.StringFilter<"GithubApp"> | string;
    app_id?: Prisma.IntFilter<"GithubApp"> | number;
    private_key?: Prisma.StringFilter<"GithubApp"> | string;
    owner_login?: Prisma.JsonFilter<"GithubApp">;
    cloneToken?: Prisma.StringFilter<"GithubApp"> | string;
    isInstalled?: Prisma.BoolFilter<"GithubApp"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"GithubApp"> | Date | string;
    userId?: Prisma.IntFilter<"GithubApp"> | number;
};
export type GithubAppCreateManyUserInput = {
    id?: number;
    name: string;
    slug: string;
    app_id: number;
    private_key: string;
    owner_login: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken: string;
    isInstalled?: boolean;
    createdAt?: Date | string;
};
export type GithubAppUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubAppUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubAppUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    app_id?: Prisma.IntFieldUpdateOperationsInput | number;
    private_key?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_login?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cloneToken?: Prisma.StringFieldUpdateOperationsInput | string;
    isInstalled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubAppSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    app_id?: boolean;
    private_key?: boolean;
    owner_login?: boolean;
    cloneToken?: boolean;
    isInstalled?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["githubApp"]>;
export type GithubAppSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    app_id?: boolean;
    private_key?: boolean;
    owner_login?: boolean;
    cloneToken?: boolean;
    isInstalled?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["githubApp"]>;
export type GithubAppSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    app_id?: boolean;
    private_key?: boolean;
    owner_login?: boolean;
    cloneToken?: boolean;
    isInstalled?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["githubApp"]>;
export type GithubAppSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    app_id?: boolean;
    private_key?: boolean;
    owner_login?: boolean;
    cloneToken?: boolean;
    isInstalled?: boolean;
    createdAt?: boolean;
    userId?: boolean;
};
export type GithubAppOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "app_id" | "private_key" | "owner_login" | "cloneToken" | "isInstalled" | "createdAt" | "userId", ExtArgs["result"]["githubApp"]>;
export type GithubAppInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GithubAppIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GithubAppIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $GithubAppPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GithubApp";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        slug: string;
        app_id: number;
        private_key: string;
        owner_login: runtime.JsonValue;
        cloneToken: string;
        isInstalled: boolean;
        createdAt: Date;
        userId: number;
    }, ExtArgs["result"]["githubApp"]>;
    composites: {};
};
export type GithubAppGetPayload<S extends boolean | null | undefined | GithubAppDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GithubAppPayload, S>;
export type GithubAppCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GithubAppFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GithubAppCountAggregateInputType | true;
};
export interface GithubAppDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GithubApp'];
        meta: {
            name: 'GithubApp';
        };
    };
    /**
     * Find zero or one GithubApp that matches the filter.
     * @param {GithubAppFindUniqueArgs} args - Arguments to find a GithubApp
     * @example
     * // Get one GithubApp
     * const githubApp = await prisma.githubApp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GithubAppFindUniqueArgs>(args: Prisma.SelectSubset<T, GithubAppFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one GithubApp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GithubAppFindUniqueOrThrowArgs} args - Arguments to find a GithubApp
     * @example
     * // Get one GithubApp
     * const githubApp = await prisma.githubApp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GithubAppFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GithubAppFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GithubApp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppFindFirstArgs} args - Arguments to find a GithubApp
     * @example
     * // Get one GithubApp
     * const githubApp = await prisma.githubApp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GithubAppFindFirstArgs>(args?: Prisma.SelectSubset<T, GithubAppFindFirstArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GithubApp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppFindFirstOrThrowArgs} args - Arguments to find a GithubApp
     * @example
     * // Get one GithubApp
     * const githubApp = await prisma.githubApp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GithubAppFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GithubAppFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more GithubApps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GithubApps
     * const githubApps = await prisma.githubApp.findMany()
     *
     * // Get first 10 GithubApps
     * const githubApps = await prisma.githubApp.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const githubAppWithIdOnly = await prisma.githubApp.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GithubAppFindManyArgs>(args?: Prisma.SelectSubset<T, GithubAppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a GithubApp.
     * @param {GithubAppCreateArgs} args - Arguments to create a GithubApp.
     * @example
     * // Create one GithubApp
     * const GithubApp = await prisma.githubApp.create({
     *   data: {
     *     // ... data to create a GithubApp
     *   }
     * })
     *
     */
    create<T extends GithubAppCreateArgs>(args: Prisma.SelectSubset<T, GithubAppCreateArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many GithubApps.
     * @param {GithubAppCreateManyArgs} args - Arguments to create many GithubApps.
     * @example
     * // Create many GithubApps
     * const githubApp = await prisma.githubApp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GithubAppCreateManyArgs>(args?: Prisma.SelectSubset<T, GithubAppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many GithubApps and returns the data saved in the database.
     * @param {GithubAppCreateManyAndReturnArgs} args - Arguments to create many GithubApps.
     * @example
     * // Create many GithubApps
     * const githubApp = await prisma.githubApp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GithubApps and only return the `id`
     * const githubAppWithIdOnly = await prisma.githubApp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GithubAppCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GithubAppCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a GithubApp.
     * @param {GithubAppDeleteArgs} args - Arguments to delete one GithubApp.
     * @example
     * // Delete one GithubApp
     * const GithubApp = await prisma.githubApp.delete({
     *   where: {
     *     // ... filter to delete one GithubApp
     *   }
     * })
     *
     */
    delete<T extends GithubAppDeleteArgs>(args: Prisma.SelectSubset<T, GithubAppDeleteArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one GithubApp.
     * @param {GithubAppUpdateArgs} args - Arguments to update one GithubApp.
     * @example
     * // Update one GithubApp
     * const githubApp = await prisma.githubApp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GithubAppUpdateArgs>(args: Prisma.SelectSubset<T, GithubAppUpdateArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more GithubApps.
     * @param {GithubAppDeleteManyArgs} args - Arguments to filter GithubApps to delete.
     * @example
     * // Delete a few GithubApps
     * const { count } = await prisma.githubApp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GithubAppDeleteManyArgs>(args?: Prisma.SelectSubset<T, GithubAppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GithubApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GithubApps
     * const githubApp = await prisma.githubApp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GithubAppUpdateManyArgs>(args: Prisma.SelectSubset<T, GithubAppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GithubApps and returns the data updated in the database.
     * @param {GithubAppUpdateManyAndReturnArgs} args - Arguments to update many GithubApps.
     * @example
     * // Update many GithubApps
     * const githubApp = await prisma.githubApp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GithubApps and only return the `id`
     * const githubAppWithIdOnly = await prisma.githubApp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GithubAppUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GithubAppUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one GithubApp.
     * @param {GithubAppUpsertArgs} args - Arguments to update or create a GithubApp.
     * @example
     * // Update or create a GithubApp
     * const githubApp = await prisma.githubApp.upsert({
     *   create: {
     *     // ... data to create a GithubApp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GithubApp we want to update
     *   }
     * })
     */
    upsert<T extends GithubAppUpsertArgs>(args: Prisma.SelectSubset<T, GithubAppUpsertArgs<ExtArgs>>): Prisma.Prisma__GithubAppClient<runtime.Types.Result.GetResult<Prisma.$GithubAppPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of GithubApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppCountArgs} args - Arguments to filter GithubApps to count.
     * @example
     * // Count the number of GithubApps
     * const count = await prisma.githubApp.count({
     *   where: {
     *     // ... the filter for the GithubApps we want to count
     *   }
     * })
    **/
    count<T extends GithubAppCountArgs>(args?: Prisma.Subset<T, GithubAppCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GithubAppCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a GithubApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GithubAppAggregateArgs>(args: Prisma.Subset<T, GithubAppAggregateArgs>): Prisma.PrismaPromise<GetGithubAppAggregateType<T>>;
    /**
     * Group by GithubApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAppGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends GithubAppGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GithubAppGroupByArgs['orderBy'];
    } : {
        orderBy?: GithubAppGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GithubAppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGithubAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GithubApp model
     */
    readonly fields: GithubAppFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for GithubApp.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GithubAppClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the GithubApp model
 */
export interface GithubAppFieldRefs {
    readonly id: Prisma.FieldRef<"GithubApp", 'Int'>;
    readonly name: Prisma.FieldRef<"GithubApp", 'String'>;
    readonly slug: Prisma.FieldRef<"GithubApp", 'String'>;
    readonly app_id: Prisma.FieldRef<"GithubApp", 'Int'>;
    readonly private_key: Prisma.FieldRef<"GithubApp", 'String'>;
    readonly owner_login: Prisma.FieldRef<"GithubApp", 'Json'>;
    readonly cloneToken: Prisma.FieldRef<"GithubApp", 'String'>;
    readonly isInstalled: Prisma.FieldRef<"GithubApp", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"GithubApp", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"GithubApp", 'Int'>;
}
/**
 * GithubApp findUnique
 */
export type GithubAppFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * Filter, which GithubApp to fetch.
     */
    where: Prisma.GithubAppWhereUniqueInput;
};
/**
 * GithubApp findUniqueOrThrow
 */
export type GithubAppFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * Filter, which GithubApp to fetch.
     */
    where: Prisma.GithubAppWhereUniqueInput;
};
/**
 * GithubApp findFirst
 */
export type GithubAppFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * Filter, which GithubApp to fetch.
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubApps to fetch.
     */
    orderBy?: Prisma.GithubAppOrderByWithRelationInput | Prisma.GithubAppOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GithubApps.
     */
    cursor?: Prisma.GithubAppWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubApps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubApps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GithubApps.
     */
    distinct?: Prisma.GithubAppScalarFieldEnum | Prisma.GithubAppScalarFieldEnum[];
};
/**
 * GithubApp findFirstOrThrow
 */
export type GithubAppFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * Filter, which GithubApp to fetch.
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubApps to fetch.
     */
    orderBy?: Prisma.GithubAppOrderByWithRelationInput | Prisma.GithubAppOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GithubApps.
     */
    cursor?: Prisma.GithubAppWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubApps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubApps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GithubApps.
     */
    distinct?: Prisma.GithubAppScalarFieldEnum | Prisma.GithubAppScalarFieldEnum[];
};
/**
 * GithubApp findMany
 */
export type GithubAppFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * Filter, which GithubApps to fetch.
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubApps to fetch.
     */
    orderBy?: Prisma.GithubAppOrderByWithRelationInput | Prisma.GithubAppOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GithubApps.
     */
    cursor?: Prisma.GithubAppWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubApps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubApps.
     */
    skip?: number;
    distinct?: Prisma.GithubAppScalarFieldEnum | Prisma.GithubAppScalarFieldEnum[];
};
/**
 * GithubApp create
 */
export type GithubAppCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * The data needed to create a GithubApp.
     */
    data: Prisma.XOR<Prisma.GithubAppCreateInput, Prisma.GithubAppUncheckedCreateInput>;
};
/**
 * GithubApp createMany
 */
export type GithubAppCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many GithubApps.
     */
    data: Prisma.GithubAppCreateManyInput | Prisma.GithubAppCreateManyInput[];
};
/**
 * GithubApp createManyAndReturn
 */
export type GithubAppCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * The data used to create many GithubApps.
     */
    data: Prisma.GithubAppCreateManyInput | Prisma.GithubAppCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * GithubApp update
 */
export type GithubAppUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * The data needed to update a GithubApp.
     */
    data: Prisma.XOR<Prisma.GithubAppUpdateInput, Prisma.GithubAppUncheckedUpdateInput>;
    /**
     * Choose, which GithubApp to update.
     */
    where: Prisma.GithubAppWhereUniqueInput;
};
/**
 * GithubApp updateMany
 */
export type GithubAppUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update GithubApps.
     */
    data: Prisma.XOR<Prisma.GithubAppUpdateManyMutationInput, Prisma.GithubAppUncheckedUpdateManyInput>;
    /**
     * Filter which GithubApps to update
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * Limit how many GithubApps to update.
     */
    limit?: number;
};
/**
 * GithubApp updateManyAndReturn
 */
export type GithubAppUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * The data used to update GithubApps.
     */
    data: Prisma.XOR<Prisma.GithubAppUpdateManyMutationInput, Prisma.GithubAppUncheckedUpdateManyInput>;
    /**
     * Filter which GithubApps to update
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * Limit how many GithubApps to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * GithubApp upsert
 */
export type GithubAppUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * The filter to search for the GithubApp to update in case it exists.
     */
    where: Prisma.GithubAppWhereUniqueInput;
    /**
     * In case the GithubApp found by the `where` argument doesn't exist, create a new GithubApp with this data.
     */
    create: Prisma.XOR<Prisma.GithubAppCreateInput, Prisma.GithubAppUncheckedCreateInput>;
    /**
     * In case the GithubApp was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GithubAppUpdateInput, Prisma.GithubAppUncheckedUpdateInput>;
};
/**
 * GithubApp delete
 */
export type GithubAppDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
    /**
     * Filter which GithubApp to delete.
     */
    where: Prisma.GithubAppWhereUniqueInput;
};
/**
 * GithubApp deleteMany
 */
export type GithubAppDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GithubApps to delete
     */
    where?: Prisma.GithubAppWhereInput;
    /**
     * Limit how many GithubApps to delete.
     */
    limit?: number;
};
/**
 * GithubApp without action
 */
export type GithubAppDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubApp
     */
    select?: Prisma.GithubAppSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubApp
     */
    omit?: Prisma.GithubAppOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GithubAppInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=GithubApp.d.ts.map