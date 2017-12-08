import app from './app';

const port = 3000;
const server = app.listen(port);

server.on('listening', () =>
    console.log(`Server application started on localhost:${port}`)
);
