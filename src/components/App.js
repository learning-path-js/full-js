import React from 'react';
import Header from './Header';

class App extends React.Component {

    state = {clicksCount: 0};

    nextState() {
        return {clicksCount: this.state.clicksCount + 1};
    }

    render() {
        return (
            <div className='App'>
                <Header message='Header from react'/>
                <div className='text-center'>
                    <h3>counter: {this.state.clicksCount}</h3>
                    <button onClick={() => {
                        this.setState(this.nextState());
                    }}>Click
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
