'use strict'

var contractAddresses = require('./contractAddresses')
var contractVersions = require('./contractVersions')
var poolWithMultipleWinnersBuilders = require('./poolWithMultipleWinnersBuilders')
var prizePoolContracts = require('./prizePoolContracts')
var tokenBlockList = require('./erc20BlockList')
var proposalsToSnapshots = require('./proposalsToSnapshots')
var constants = require('./constants')
var subgraphs = require('./subgraphUris')
var podContractAddresses = require('./podContractAddresses')

module.exports = {
  contractAddresses,
  contractVersions,
  podContractAddresses,
  poolWithMultipleWinnersBuilders,
  prizePoolContracts,
  tokenBlockList,
  proposalsToSnapshots,
  ...constants,
  ...subgraphs
}
