import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/contests', (req, res) => {
    const data =
        {
            "contests": [
                {
                    "id": 1,
                    "categoryName": "Business/Company",
                    "contestName": "Cognitive Building Bricks"
                },
                {
                    "id": 2,
                    "categoryName": "Magazine/Newsletter",
                    "contestName": "Educating people about sustainable food production"
                },
                {
                    "id": 3,
                    "categoryName": "Software Component",
                    "contestName": "Big Data Analytics for Cash Circulation"
                },
                {
                    "id": 4,
                    "categoryName": "Website",
                    "contestName": "Free programming books"
                }
            ]
        };

    res.send(data);
});

apiRouter.get('/user', (req, res) => {
    res.send('User info\n');
});


export default apiRouter;

