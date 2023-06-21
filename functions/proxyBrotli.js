const http = require('http');
const https = require('https');
const url = require('url');

exports.handler = async (event) => {
  const requestUrl = event.queryStringParameters['url'];
  let protocol = 'http';
  if (/^https:\/\//i.test(requestUrl)) {
    protocol = 'https';
  }
  const parsedUrl = url.parse(protocol + '://' + requestUrl);
  const options = { host: parsedUrl.hostname, port: parsedUrl.port };
  const agent = new http.Agent({ keepAlive: true });
  const req = new http[parsedUrl.scheme](options, agent);
  req.on('response', res => {
    // Set appropriate headers for Brotli encoding
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Encoding', ['gzip', 'br'].includes(req.headers['accept']) ? 'br' : 'gzip');
    res.end(`${res.statusCode} ${res.statusMessage}`);
  });
  await req.get(parsedUrl);
};
