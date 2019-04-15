import React from 'react';
import Header from './Header';

class App extends React.Component {

    state = {clicksCount: 0}

    render() {
        return (
            <div className='App'>
                <Header message='Header from react'/>
                <div className='text-center'>
                    <h3>counter: {this.state.clicksCount}</h3>
                    <button onClick={() => {
                        this.setState({clicksCount: this.state.clicksCount + 1});
                    }}>Click
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
