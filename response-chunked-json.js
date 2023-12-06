var http = require('http');

http
  .createServer(function (request, response) {
    response.setHeader('Content-Type', 'application/json');

    const result = JSON.stringify({
      user: 'АйТи Синяк',
    }); // {"user":"АйТи Синяк"}

    response.write(result.substring(0, 7));

    setTimeout(() => {
      response.write(result.substring(7, 14));
    }, 2000);

    setTimeout(() => {
      response.end(result.substring(14, 21));
    }, 4000);
  })
  .listen(3001, null);
