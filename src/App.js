import React, {useState, useMemo} from 'react';
import useFetch from './useFetch';

function App() {
    const [count, setCount] = useState(0);
    const { data } = useFetch(
        "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
    );

    const longestWord = useMemo(() => computeLongestWord(data), [data]);

    return (
        <div>
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <div>{longestWord}</div>
        </div>
    );
}

export default App;
