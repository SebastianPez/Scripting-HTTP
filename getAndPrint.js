var https = require("https");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
}


function getAndPrintHTML (options) {
  var bodyStr = '' + "\n";

    https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      bodyStr += chunk;
      console.log(bodyStr);
    });
  });

}

getAndPrintHTML(requestOptions);

