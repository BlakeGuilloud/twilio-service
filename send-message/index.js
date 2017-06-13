'use strict';

const accountSid = process.env['ACCOUNT_SID'];
const authToken = process.env['ACCOUNT_TOKEN'];
const client = require('twilio')(accountSid, authToken);

function handleSuccess(message) {
  const body = JSON.stringify({
    body: message.body,
    from: message.from,
  });

  return {
    statusCode: 200,
    body,
  }
}

function handleError(err) {
  return {
    statusCode: 500,
    message: 'Something went terribly wrong.'
  }
}

module.exports.send = (event, context, callback) => {
  const body = {
    body: 'hello',
    to: '+18438126962',
    from: process.env['FROM_NUMBER']
    // mediaUrl: 'https://s3-us-west-2.amazonaws.com/8-bit-pets/wocky.png'
  };

  client.messages.create(body)
    .then(message => callback(null, handleSuccess(message)))
    .catch(err => callback(null, handleError(err)));
};