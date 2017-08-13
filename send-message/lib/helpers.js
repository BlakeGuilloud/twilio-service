function stripAndShapePhone(phoneNumber) {
  let formattedNumber = phoneNumber.replace(/[^0-9]/g, '');

  if (formattedNumber[0] === '1') {
    formattedNumber = `+${formattedNumber}`;
  } else {
    formattedNumber = `+1${formattedNumber}`;
  }

  return formattedNumber;
}

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

function fetchPayload(event) {
  // parse the incoming event and set default values if none are provided.
  const {
    body = 'Heyyo world',
    to = '+18438126962',
    from = process.env['FROM_NUMBER'],
  } = JSON.parse(event);

  // TODO: Add validation of some sort to prevent invalid phone numbers from being passed to twilio.
  return {
    body,
    to: stripAndShapePhone(to),
    from: stripAndShapePhone(from),
  };
}

module.exports = {
  handleSuccess,
  handleError,
  fetchPayload,
};
