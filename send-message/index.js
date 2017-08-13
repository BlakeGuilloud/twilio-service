'use strict';

const accountSid = process.env['ACCOUNT_SID'];
const authToken = process.env['ACCOUNT_TOKEN'];
const client = require('twilio')(accountSid, authToken);

const { handleError, handleSuccess, fetchPayload } = require('./lib/helpers');

module.exports.send = (event, context, callback) => {
  client.messages.create(fetchPayload(JSON.parse(event.body)))
    .then(message => callback(null, handleSuccess(message)))
    .catch(err => callback(null, handleError(err)));
};