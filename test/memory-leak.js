
const memwatch = require('@ardatan/node-memwatch');

memwatch.on('leakx', function (info) {
  console.err('memory leak detected');
  throw new Error(info);
  process.exit(42);
});

const { generateMinimalVast } = require('./helpers');

for (let i = 0; i < 200; i++) {
  const vast = generateMinimalVast();
  vast.toXml();
}

process.exit(0);