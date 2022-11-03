import { rejects } from "assert"
import Crypto from "crypto"
import { IBlock, IBlockData, hashData } from "../IBlock"

/**
 * genesis -> Função para gerar o bloco inicial
 * mineBlock -> Função para gerar cadeia de blocos. Recebe como argumento o bloco anterior, armazena o hash do block anterior, hash atual e timestamp
 * hash -> Função para gerar hash
 */

class Block implements IBlock {

    constructor(readonly blockInfo: IBlockData) {
    }

    toString = () => {
        return `Block = 
                Timestamp = ${this.blockInfo.timestamp}
                LastHash = ${this.blockInfo.lastHash.substring(0, 10)}
                Hash = ${this.blockInfo.hash.substring(0, 10)}
                Data = ${this.blockInfo.data}
                `
    }

    static hash = (data: hashData): Promise<string> => {
        return new Promise((resolve, reject) => {
            const hash = Crypto.createHash("sha256")
            hash.on('readable', () => {
                const data = hash.read()
                if (data) resolve(data.toString('hex'))
                reject(false)
            })
            hash.write(`${data.timestamp}${data.lastHash}${data.data}`)
            hash.end()
        })
    }

    static genesis = () => {
        return new this({
            timestamp: 'Genesis time',
            lastHash: '---------',
            hash: 'JFSJ39S93KS',
            data: '',
        })
    }

    static mineBlock = async (lastBlock: IBlock, data: string) => {
        const timestamp = Date.now()
        const lastHash = lastBlock.blockInfo.hash
        const hash = await lastBlock.hash({ timestamp, lastHash, data })

        return new this({ timestamp, lastHash, hash, data })
    }

    static isValidBlockHash = async (data: IBlockData, block: IBlock): Promise<boolean> => {
        const hash = await this.hash(data)
        if (hash !== block.blockInfo.hash) return false
        return true
    }


    //Gambi para funções estáticas
    genesis = (): IBlock => Block.genesis()
    mineBlock = async (lastBlock: IBlock, data: string): Promise<IBlock> => Block.mineBlock(lastBlock, data)
    isValidBlockHash = async (data: IBlockData, block: IBlock): Promise<boolean> => Block.isValidBlockHash(data, block)
    hash = async (data: IBlockData): Promise<string> => Block.hash(data)

}

export { Block }