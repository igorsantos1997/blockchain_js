import { Block } from "./Block";
import { IBlock } from "../IBlock"
describe('Block', () => {
    let data: string;
    let lastBlock: IBlock;
    let block: IBlock;

    beforeEach(async ()=> {
        data = 'index.html';
        lastBlock = Block.genesis();
        block = await Block.mineBlock(lastBlock, data);
    })

    it('sets the `data` to match the input', () => {
        expect(block.blockInfo.data).toEqual(data)
    })
    
    it('sets the `lastHash` to match the hash of the last Block', () => {
        expect(block.blockInfo.lastHash).toEqual(lastBlock.blockInfo.hash)
    })

})