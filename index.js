'use strict'

var contractAddresses = require('./contractAddresses')
var contractVersions = require('./contractVersions')
var poolWithMultipleWinnersBuilders = require('./poolWithMultipleWinnersBuilders')
var prizePoolContracts = require('./prizePoolContracts')
var tokenBlockList = require('./erc20BlockList')

module.exports = {
  contractAddresses,
  contractVersions,
  poolWithMultipleWinnersBuilders,
  prizePoolContracts,
  tokenBlockList
}
