const https = require('https');

const start = Date.now();

function doRequest() {
  https.request('https://www.google.com.pk', res => {
    res.on('data', () => {
    })
    res.on('end', () => {
      console.log('Time:', Date.now() - start);
    })
  }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
