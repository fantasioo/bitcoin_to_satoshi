var Big = require('big.js')
Big.NE = -9

var conversion = 100000000

if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 === 0
  }
}

function toNumber(notNum) {
  return Number(notNum)
}

module.exports = {

  toBitcoin: function(satoshi) {
    var satoshiType = typeof satoshi
    if (satoshiType === 'string') {
      satoshi = toNumber(satoshi)
      satoshiType = 'number'
    }
    if (satoshiType !== 'number'){
      throw new TypeError('toBitcoin must be called on a number or string, got ' + satoshiType)
    }
    if (!Number.isInteger(satoshi)) {
      throw new TypeError('toBitcoin must be called on a whole number or string format whole number')
    }

    var bigSatoshi = new Big(satoshi)
    return bigSatoshi.div(conversion).toString()
  },

  toSatoshi: function(bitcoin) {
    var bitcoinType = typeof bitcoin
    if (bitcoinType === 'string') {
      bitcoin = toNumber(bitcoin)
      bitcoinType = 'number'
    }
    if (bitcoinType !== 'number') {
      throw new TypeError('toSatoshi must be called on a number or string, got ' + bitcoinType)
    }

    var bigBitcoin = new Big(bitcoin)
    return bigBitcoin.times(conversion).toString()
  }

}
