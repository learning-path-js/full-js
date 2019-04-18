import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

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

class App extends React.Component {

    state = {
        contests: []
    };

    componentDidMount() {

        console.log('Sending AJAX call');

        setTimeout(() => {
            this.setState({contests: data.contests});
            console.log('AJAX completed');
        }, 3000);
    }

    componentWillUnmount() {
        //todo:
    }

    render() {
        return (
            <div className='App'>
                <Header message='Naming Contests'/>
                {this.state.contests.map(singleContest =>
                    <ContestPreview key={singleContest.id} {...singleContest}/>
                )}
            </div>
        );
    }
}

export default App;
