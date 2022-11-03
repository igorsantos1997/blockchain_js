export interface IBlockData {
    timestamp: number|string,
    lastHash: string,
    hash: string,
    data: string
}

export interface hashData {
    timestamp: number|string, 
    lastHash: string, 
    data: string
}

export interface IBlock{
    readonly blockInfo: IBlockData,
    toString(): string ,
    hash(data: hashData): Promise<string>
    genesis(): IBlock
    mineBlock(lastBlock: IBlock, data: string): Promise<IBlock>
    isValidBlockHash(data: hashData, block: IBlock): Promise<boolean>
}

