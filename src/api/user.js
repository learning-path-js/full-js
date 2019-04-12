import express from 'express';

const userApiRouter = express.Router();


userApiRouter.get('/', (req, res) => {
    res.send('User info\n');
});

export default userApiRouter;

