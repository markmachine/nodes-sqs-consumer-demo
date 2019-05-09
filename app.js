const { Consumer } = require('sqs-consumer');
const QUEUE_URL = 'http://localhost:9324/queue/sqsTestingQueue'; // 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name'

const app = Consumer.create({
  queueUrl: QUEUE_URL,
  handleMessage: async (message) => {
    // do some work with `message`
    console.log(message);
  }
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();
