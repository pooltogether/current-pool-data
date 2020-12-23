const contractVersions = require('../contractVersions')

describe('load', () => {
  it('should include the uni pool', () => {
    expect(contractVersions[1]['0x363d3d373d3d3d363d737194c20df246937be2a21f842bddcc770caf43d35af43d82803e903d91602b57fd5bf3'].version)
      .toEqual('3.0.1')
  })
})