import React, {useState, useMemo} from 'react';

function UseMemo() {
    const [count, setCount] = useState(0);
    const calculation = useMemo(()=> expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((count) => count+1);
    }

    return (
        <>
            <h1>UseMemo Sample</h1>
            <h2>useMemo returns a memoized value.</h2>
            <p>Count: {count}, Calculation: {calculation}</p>
            <button onClick={increment} value="Increment">Increment</button>
        </>
    )

}

export default UseMemo;

function expensiveCalculation(num) {
    console.log('calculating....');
    for(let i=0; i<1000; i++) {
        num += 1;
    }
    return num;
}