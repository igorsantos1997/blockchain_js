import { Block } from "../providers/Block/implementation/Block";
import { Blockchain } from "../providers/Blockchain/implementation/Blockchain";

(async () => {
    //Gera uma classe block 'genérica' para injetar na classe blockchain
    const blockImplementation = new Block(Block.genesis().blockInfo)
    const blockchain = new Blockchain(blockImplementation)

    // const block = new Block({
    //     timestamp: Date.now(),
    //     hash: '56SA5D16A5S6D5AS61D65AS6D5SA6',
    //     lastHash: '6DAS5D65ASD1SA65DASSADAS5',
    //     data: ['teste']
    // })
    // console.log(block.genesis().toString())
    // console.log(Block.genesis().toString())
    // // console.log(block.toString())
    // const firstBlock = await Block.mineBlock(Block.genesis(), '500')
    // console.log(firstBlock.toString())
})()