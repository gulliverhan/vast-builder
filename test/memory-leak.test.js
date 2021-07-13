
describe('Memory leak', () => {
  it.skip('should not have a memory leak', () => {
    try {
      require('child_process').execSync('node ./test/memory-leak.js');
    } catch (error) {
      throw new Error('memory leak detected');
    }
  });
});
