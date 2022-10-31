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
}

module.exports = Block