const MAX_SAFE_INTEGER = 7199254740991

const PRIZE_POOL_TYPES = Object.freeze({
  compound: 'compound',
  genericYield: 'genericYield',
  stake: 'stake'
})

const SECONDS_PER_BLOCK = Object.freeze({
  1: 14,
  3: 14,
  4: 14,
  137: 2
})

const SECONDS_PER_HOUR = 3600
const SECONDS_PER_DAY = 86400
const SECONDS_PER_WEEK = 604800
const SECONDS_PER_YEAR = 31536000

module.exports = {
  MAX_SAFE_INTEGER,
  PRIZE_POOL_TYPES,
  SECONDS_PER_BLOCK,
  SECONDS_PER_WEEK,
  SECONDS_PER_DAY,
  SECONDS_PER_HOUR,
  SECONDS_PER_YEAR
}
