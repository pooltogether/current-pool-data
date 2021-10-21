const POOLTOGETHER_SUBGRAPH_URIS = {
  1: {
    '3.1.0': 'https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_1_0',
    '3.3.2': 'https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_3_2',
    '3.3.8': 'https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_3_8',
    '3.4.3': 'https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3'
  },
  3: {
    '3.1.0': 'https://api.thegraph.com/subgraphs/name/pooltogether/ropsten-v3'
  },
  4: {
    '3.1.0': 'https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-staging-v3_1_0',
    '3.3.2': 'https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_3_2',
    '3.3.8': 'https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_3_8',
    '3.4.3': 'https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3'
  },
  56: {
    '3.4.3': 'https://api.thegraph.com/subgraphs/name/pooltogether/bsc-staging-v3_4_3'
  },
  137: {
    '3.3.0': 'https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-polygon-v3_3',
    '3.3.8': 'https://api.thegraph.com/subgraphs/name/pooltogether/polygon-v3_3_8',
    '3.4.3': 'https://api.thegraph.com/subgraphs/name/pooltogether/polygon-v3_4_3'
  },
  42220: {
    '3.4.5': 'https://api.thegraph.com/subgraphs/name/pooltogether/celo-v3_4_5'
  }
}

const LOOTBOX_GRAPH_URIS = {
  1: 'https://api.thegraph.com/subgraphs/name/pooltogether/lootbox-v1_0_0',
  3: '',
  4: 'https://api.thegraph.com/subgraphs/name/pooltogether/ptv3-lootbox-rinkeby-staging'
}

const UNISWAP_GRAPH_URIS = {
  1: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  4: 'https://api.thegraph.com/subgraphs/name/blockrockettech/uniswap-v2-subgraph-rinkeby',
  56: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2',
  137: 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap',
  42220: 'https://api.thegraph.com/subgraphs/name/sushiswap/celo-exchange'
}

module.exports = {
  POOLTOGETHER_SUBGRAPH_URIS,
  LOOTBOX_GRAPH_URIS,
  UNISWAP_GRAPH_URIS
}
