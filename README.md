# Simple NodeJs SQS Consumer

The goal of this repository is to provide a quick template for NodeJS SQS templates to be used with alpin-sqs

## Background

This introduced me to ElasticMQ, which this project is based on and is described by it's creators as:

> a  message queue system, offering an actor-based Scala and an SQS-compatible REST (query) interface.

Using his work as inspiration I decided to improve upon it by implementing the following:

- Reduce the Docker image foot-print as much as possible.
- Automatically update to the latest ElasticMQ server.

### Installation

```js
npm i
node app.js
```

