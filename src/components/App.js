import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <Header message='Naming Contests'/>
                {this.props.contests.map(singleContest =>
                    <ContestPreview key={singleContest.id} {...singleContest}/>
                )}
            </div>
        );
    }
}

export default App;
