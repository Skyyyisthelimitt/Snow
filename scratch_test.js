const { getTweet } = require('react-tweet/api');

async function test() {
  try {
    const tweet = await getTweet('2061018611721146651');
    console.log('Result:', JSON.stringify(tweet, null, 2));
  } catch (err) {
    console.error('Caught Error:', err);
  }
}

test();
