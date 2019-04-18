import express from 'express';
import apiRouter from '../api/router';
import config from './config';

import serverRender from './server_render';

const server = express();

server.set('view engine', 'ejs');
server.use('/api', apiRouter);
server.use(express.static('dist'));

server.get('/', (req, res) => {
    serverRender()
        .then(({initialMarkup, initialData}) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(console.error);

});


server.listen(config.port, config.host, () => console.log('Server listening at : %s:%s', config.host, config.port));