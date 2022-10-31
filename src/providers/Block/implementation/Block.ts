import { rejects } from "assert"
import Crypto from "crypto"
import { IBlock, IBlockData, hashData } from "../IBlock"

class Block implements IBlock{

    constructor(readonly blockInfo: IBlockData){
    }

    toString = () => {
        return `Block = 
                Timestamp = ${this.blockInfo.timestamp}
                LastHash = ${this.blockInfo.lastHash.substring(0, 10)}
                Hash = ${this.blockInfo.hash.substring(0, 10)}
                Data = ${this.blockInfo.data}
                `
    }

    static genesis = () => {
        return new this({
            timestamp: 'Genesis time', 
            lastHash: '---------', 
            hash: 'JFSJ39S93KS',
            data: '', 
        })
    }

    static mineBlock = async (lastBlock: IBlock, data: any) => {
        const timestamp = Date.now()
        const lastHash = lastBlock.blockInfo.hash
        const hash = await lastBlock.hash({timestamp, lastHash, data})
    
        return new this({timestamp, lastHash, hash, data})
    }

    hash = (data: hashData): Promise<string> => {
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
}

export { Block }