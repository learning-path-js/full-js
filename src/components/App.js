import React, {useState} from 'react';

export default function App () {

    const [count, setCount] = useState(0);

    return (
        <div>
            Simple React state full application.
            <br /><br />
            Here is a button that will track how many times you click it:
            <br /><br />
            <button onClick={() => setCount(count+1)}>
                Clicked count: {count}
            </button>
        </div>
    );
}