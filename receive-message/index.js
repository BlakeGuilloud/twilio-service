'use strict';

module.exports.receive = (event, context, callback) => {
  console.log('received!!!', event.body);

  callback(null, event.body);
};