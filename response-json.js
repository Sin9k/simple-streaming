var http = require('http');

http
  .createServer(function (request, response) {
    response.setHeader('Content-Type', 'application/json');

    const result = JSON.stringify({
      user: 'АйТи Синяк',
    }); // {"user":"АйТи Синяк"}

    response.end(result);
  })
  .listen(3001, null);
