import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {

    state = {
        contests: this.props.initialContests
    };

    componentDidMount() {

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
