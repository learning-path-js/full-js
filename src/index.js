import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
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

ReactDOM.render(
    <App contests={data.contests}/>,
    document.getElementById('container')
);
