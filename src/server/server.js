import express from 'express';
import apiRouter from '../api/router';

const PORT = process.env.PORT || 9090;
const server = express();

server.set('view engine', 'ejs');
server.use('/api', apiRouter);
server.use(express.static('dist'));

server.get('/', (req, res) => {
    res.render('index');
});

server.listen(PORT, () => console.log('Server is listening at port: %s', PORT));