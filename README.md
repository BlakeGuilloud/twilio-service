## Twilio-service powered by AWS Lambda and hosted on API Gateway.

### Send-message
```javascript
const url = 'https://irwtq7dtld.execute-api.us-east-1.amazonaws.com/dev/message/send';

const payload = {
  body: String,
  to: String,
  from: String,
};

axios.post(url, payload);
```
