var https = require("https");

function getAndPrintHTML () {
  var bodyStr = '' + "\n";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'

    }
    https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      bodyStr += chunk;
      console.log(bodyStr);
    });
  });

}

getAndPrintHTML();