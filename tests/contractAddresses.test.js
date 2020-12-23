const contractAddresses = require('../contractAddresses')

describe('load', () => {
  it('should include the uni pool', () => {
    expect(contractAddresses[1].uni.prizePool).toEqual('0x0650d780292142835F6ac58dd8E2a336e87b4393')
  })
})