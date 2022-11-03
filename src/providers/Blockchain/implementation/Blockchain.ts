import { IBlockchain } from "../IBlockchain";
import { IBlock } from "../../Block/IBlock";

class Blockchain implements IBlockchain{
    private chain: Array<IBlock>
    
    constructor(private Block: IBlock){
        this.chain = [Block.genesis()]
    }

    addBlock = async (data: string) => {
        const lastBlock: IBlock = this.chain.at(-1) || this.Block.genesis()
        const block = await this.Block.mineBlock(lastBlock, data)
        this.chain.push(block)
        return block
    }

    getChain = async () => this.chain

    isValidChain = async (chain: IBlockchain): Promise<boolean> => {
        const blocks = await chain.getChain()
        if (blocks[0].toString() !== this.Block.genesis().toString()) return false
        
        const isValid = blocks.every(async (block, index) => {
            if (index === 1) return true //Bloco gênesis

            const lastBlock:IBlock = blocks[index - 1]
            if (
                block.blockInfo.lastHash !== lastBlock.blockInfo.hash 
                || await this.Block.isValidBlockHash(block.blockInfo, block)
                ) return false
            return true
        })
        
        return isValid
    } 
}

export { Blockchain }