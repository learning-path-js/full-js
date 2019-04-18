import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends React.Component {

    API_CONTESTS_URL = '/api/contests';

    state = {
        contests: []
    };

    componentDidMount() {
        axios.get(this.API_CONTESTS_URL)
            .then(resp => {
                this.setState({contests: resp.data.contests});
            })
            .catch(console.error);
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
