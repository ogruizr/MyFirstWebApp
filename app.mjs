import { createServer } from 'http';

const server = createServer((request, response) => {
response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
response.write('Hello ');
response.end(' World, My name is Oscar Ruiz\n');
});

server.listen(8080, () => {
    console.log(
        `Server is listening to http://localhost:${server.address().port}`,
    );
});