import express from 'express';
import userApiRouter from '../api/user';

const PORT = process.env.PORT || 9090;
const server = express();

server.set('view engine', 'ejs');
server.use('/api/user', userApiRouter);
server.use(express.static('dist'));

server.get('/', (req, res) => {
    res.render('index');
});

server.listen(PORT, () => console.log('Server is listening at port: %s', PORT));