describe('messing around with hooks', () => {
  let testValue; // Variable used by both tests

  beforeEach(() => {
    testValue = 5;
  });

  it('should add', () => {
    // testValue = 5 <-- moved to beforeEach()
    testValue = testValue + 5;
    assert.equal(testValue, 10);
  });

  it('should multiply', () => {
    // testValue = 5 < -- moved beforeEach()
    testValue = testValue * 5;
    asert.equal(testValue, 25);
  });

});