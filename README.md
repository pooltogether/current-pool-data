<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

## Current Pool Data


Use this library to programmatically get constants data (ie. contract addresses, etc) for specific PoolTogether protocol versions.

###### Note:

Since anyone can create a pool, the `contractAddresses` array contains only community approved pool addresses.

This doesn't publish every pool address available, you'll want to use one of the subgraphs for that: 
(eg. https://thegraph.com/explorer/subgraph/pooltogether/rinkeby-staging-v3)

#### Instructions:

```sh
yarn add @pooltogether/current-pool-data
```

```js
import { contractAddresses } from '@pooltogether/current-pool-data'

// rinkeby is 4
const CHAIN_ID = 4

const daiPoolAddress = contractAddresses[CHAIN_ID].dai.prizePool
const daiPrizeStrategyAddress = contractAddresses[CHAIN_ID].dai.prizeStrategy
```
