import { Block } from "../providers/Block/implementation/Block";
(async () => {
    const block = new Block({
        timestamp: Date.now(),
        hash: '56SA5D16A5S6D5AS61D65AS6D5SA6',
        lastHash: '6DAS5D65ASD1SA65DASSADAS5',
        data: ['teste']
    })
    // console.log(block.toString())
    const firstBlock = await Block.mineBlock(Block.genesis(), '500')
    console.log(firstBlock.toString())
})()