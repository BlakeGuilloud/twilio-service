function handleSuccess(message) {
  const body = JSON.stringify({
    body: message ? message.body : 'No response body',
    from: message ? message.from : 'No response from',
  });

  return {
    statusCode: 200,
    body,
  };
}

function handleError(err) {
  return {
    statusCode: 500,
    message: `Something went wrong in the Twilio-service : ${err}`,
  };
}

function fetchPayload({ body, to, from }) {
  return {
    body: body || 'Default body',
    to: to || '+18438126962',
    from: from || process.env['FROM_NUMBER']
  }
}

module.exports = {
  handleSuccess,
  handleError,
  fetchPayload,
};
