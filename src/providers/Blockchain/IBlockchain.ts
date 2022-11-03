import { IBlock } from "../Block/IBlock"
export interface IBlockchain {
    addBlock(data: string): Promise<IBlock>
    getChain(): Promise<IBlock[]>
}