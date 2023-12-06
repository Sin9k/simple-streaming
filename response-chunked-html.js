var http = require('http');

http
  .createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');

    let html = `<!DOCTYPE html><html><body><h1>Загружаем html файл кусками</h1>`;

    response.write(html);

    setTimeout(function () {
      html = '<h2>Второй кусок спустя 2 секунды</h2>';

      response.write(html);
    }, 2000);

    setTimeout(function () {
      html = '<h2>Третий кусок спустя 6 секунд</h2></body></html>';

      response.end(html);
    }, 6000);
  })
  .listen(3001, null);
