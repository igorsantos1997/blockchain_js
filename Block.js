class Block{

    constructor(timestamp, lastHash, hash, data){
        Object.assign(this, {
            timestamp, lastHash, hash, data
        })
    }

    toString = () => {
        return `Block = 
                Timestamp = ${this.timestamp}
                LastHash = ${this.lastHash.substring(0, 10)}
                Hash = ${this.hash.substring(0, 10)}
                Data = ${this.data}
                `
    }

    static genesis = () => new this('Genesis time', '---------', 'JFSJ39S93KS', {})

    static mineBlock = (lastBlock, data) => {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = 'todo'

        return new this(timestamp, lastHash, hash, data)
    }
}

module.exports = Block