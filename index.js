'use strict'

var contractAddresses = require('./contractAddresses')
var contractVersions = require('./contractVersions')
var prizePoolBuilders = require('./prizePoolBuilders')
var prizePoolContracts = require('./prizePoolContracts')
var tokenBlockList = require('./erc20BlockList')

module.exports = {
  contractAddresses,
  contractVersions,
  prizePoolBuilders,
  prizePoolContracts,
  tokenBlockList
}
