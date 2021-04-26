'use strict'

var contractAddresses = require('./contractAddresses')
var contractVersions = require('./contractVersions')
var poolWithMultipleWinnersBuilders = require('./poolWithMultipleWinnersBuilders')
var prizePoolContracts = require('./prizePoolContracts')
var tokenBlockList = require('./erc20BlockList')
var constants = require('./constants')

module.exports = {
  contractAddresses,
  contractVersions,
  poolWithMultipleWinnersBuilders,
  prizePoolContracts,
  tokenBlockList,
  ...constants
}
