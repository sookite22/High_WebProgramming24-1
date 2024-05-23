const http = require('node:http'); // 'node:http'를 가져다 쓰겠다. (npm 쓸 필요 없음, 소스를 가져다 쓸 때는 사용해야 함)

const hostname = '127.0.0.1';
const port = 3000; // 일반적으로 js는 포트 3000 사용(바꿀 수 있음)

const server = http.createServer((req, res) => {
  res.statusCode = 200; // 응답
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});