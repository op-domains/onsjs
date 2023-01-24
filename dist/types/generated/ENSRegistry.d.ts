import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ENSRegistryInterface extends utils.Interface {
    functions: {
        "isApprovedForAll(address,address)": FunctionFragment;
        "old()": FunctionFragment;
        "owner(bytes32)": FunctionFragment;
        "recordExists(bytes32)": FunctionFragment;
        "resolver(bytes32)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setOwner(bytes32,address)": FunctionFragment;
        "setRecord(bytes32,address,address,uint64)": FunctionFragment;
        "setResolver(bytes32,address)": FunctionFragment;
        "setSubnodeOwner(bytes32,bytes32,address)": FunctionFragment;
        "setSubnodeRecord(bytes32,bytes32,address,address,uint64)": FunctionFragment;
        "setTTL(bytes32,uint64)": FunctionFragment;
        "ttl(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isApprovedForAll" | "old" | "owner" | "recordExists" | "resolver" | "setApprovalForAll" | "setOwner" | "setRecord" | "setResolver" | "setSubnodeOwner" | "setSubnodeRecord" | "setTTL" | "ttl"): FunctionFragment;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "old", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "recordExists", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "resolver", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRecord", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setResolver", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSubnodeOwner", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setSubnodeRecord", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setTTL", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ttl", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "old", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTTL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "NewOwner(bytes32,bytes32,address)": EventFragment;
        "NewResolver(bytes32,address)": EventFragment;
        "NewTTL(bytes32,uint64)": EventFragment;
        "Transfer(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewResolver"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewTTL"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface NewOwnerEventObject {
    node: string;
    label: string;
    owner: string;
}
export type NewOwnerEvent = TypedEvent<[
    string,
    string,
    string
], NewOwnerEventObject>;
export type NewOwnerEventFilter = TypedEventFilter<NewOwnerEvent>;
export interface NewResolverEventObject {
    node: string;
    resolver: string;
}
export type NewResolverEvent = TypedEvent<[
    string,
    string
], NewResolverEventObject>;
export type NewResolverEventFilter = TypedEventFilter<NewResolverEvent>;
export interface NewTTLEventObject {
    node: string;
    ttl: BigNumber;
}
export type NewTTLEvent = TypedEvent<[string, BigNumber], NewTTLEventObject>;
export type NewTTLEventFilter = TypedEventFilter<NewTTLEvent>;
export interface TransferEventObject {
    node: string;
    owner: string;
}
export type TransferEvent = TypedEvent<[string, string], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ENSRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSRegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        old(overrides?: CallOverrides): Promise<[string]>;
        owner(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        recordExists(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        resolver(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOwner(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRecord(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setResolver(node: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSubnodeOwner(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSubnodeRecord(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTTL(node: PromiseOrValue<BytesLike>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ttl(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    old(overrides?: CallOverrides): Promise<string>;
    owner(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    recordExists(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    resolver(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOwner(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRecord(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setResolver(node: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSubnodeOwner(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSubnodeRecord(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTTL(node: PromiseOrValue<BytesLike>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ttl(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        old(overrides?: CallOverrides): Promise<string>;
        owner(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        recordExists(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        resolver(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setOwner(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRecord(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setResolver(node: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSubnodeOwner(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setSubnodeRecord(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTTL(node: PromiseOrValue<BytesLike>, ttl: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        ttl(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "NewOwner(bytes32,bytes32,address)"(node?: PromiseOrValue<BytesLike> | null, label?: PromiseOrValue<BytesLike> | null, owner?: null): NewOwnerEventFilter;
        NewOwner(node?: PromiseOrValue<BytesLike> | null, label?: PromiseOrValue<BytesLike> | null, owner?: null): NewOwnerEventFilter;
        "NewResolver(bytes32,address)"(node?: PromiseOrValue<BytesLike> | null, resolver?: null): NewResolverEventFilter;
        NewResolver(node?: PromiseOrValue<BytesLike> | null, resolver?: null): NewResolverEventFilter;
        "NewTTL(bytes32,uint64)"(node?: PromiseOrValue<BytesLike> | null, ttl?: null): NewTTLEventFilter;
        NewTTL(node?: PromiseOrValue<BytesLike> | null, ttl?: null): NewTTLEventFilter;
        "Transfer(bytes32,address)"(node?: PromiseOrValue<BytesLike> | null, owner?: null): TransferEventFilter;
        Transfer(node?: PromiseOrValue<BytesLike> | null, owner?: null): TransferEventFilter;
    };
    estimateGas: {
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        old(overrides?: CallOverrides): Promise<BigNumber>;
        owner(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        recordExists(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        resolver(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOwner(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRecord(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setResolver(node: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSubnodeOwner(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSubnodeRecord(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTTL(node: PromiseOrValue<BytesLike>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ttl(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        old(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recordExists(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolver(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRecord(node: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setResolver(node: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeOwner(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeRecord(node: PromiseOrValue<BytesLike>, label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTTL(node: PromiseOrValue<BytesLike>, ttl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ttl(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}