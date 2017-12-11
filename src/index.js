import app from './app';

const port = 3001;
const server = app.listen(port);

server.on('listening', () =>
    console.log(`Server application started on localhost:${port}`)
);
