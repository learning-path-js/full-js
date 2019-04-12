import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import userApiRouter from '../api/user';

const PORT = process.env.PORT || 9090;
const server = express();

server.set('view engine', 'ejs');
server.use(express.static('dist'));
server.use('/api/user', userApiRouter);

server.get('/', (req, res) => {
    res.render('index', {
        message: 'Hello from EJS object'
    });
});

server.get('/component', (req, res) => {

    const initialMarkup = ReactDOMServer.renderToString(<App/>);

    res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="container">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(PORT, () => console.log('Server is listening at port: %s', PORT));