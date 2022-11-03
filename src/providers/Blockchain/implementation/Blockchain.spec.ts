import { Blockchain } from "./Blockchain";
import { Block } from '../../Block/implementation/Block'
import { IBlockchain } from '../IBlockchain'

describe('Blockchain', () => {
    let bc: IBlockchain;
    beforeEach(() => {
        bc = new Blockchain(new Block(Block.genesis().blockInfo))
    })

    it('starts with genesis block', async () => {
        const blocks = await bc.getChain()
        expect(blocks[0].toString()).toEqual(Block.genesis().toString())
    })
    it('adds a new block', async () => {
        const newBlock = await bc.addBlock('Contract 123456 !')
        const blocks = await bc.getChain()
        
        expect(blocks[0].toString()).not.toEqual(newBlock.toString())
        expect(blocks[1].toString()).toEqual(newBlock.toString())
    })
})