export interface IBlockData {
    timestamp: number|string,
    lastHash: string,
    hash: string,
    data: any
}

export interface hashData {
    timestamp: number|string, 
    lastHash: string, 
    data: any
}

export interface IBlock{
    readonly blockInfo: IBlockData,
    toString(): string ,
    hash(data: hashData): Promise<string>
}

