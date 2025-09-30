import React, { useState, useEffect } from 'react';

function DebounceInJS() {
    const [query, setQuery] = useState('');
   const [result, setResult] = useState('');

    useEffect(() => {

        const delayBounce = setTimeout(() => {
            if(query.trim() !== '') {
                // Simulate an API call or processing
                fetch(`https://api.example.com/search?query=${query}`)
                    .then(response => response.json())
                    .then(data => {
                        setResult(data); // Assuming data is the result you want to display
                        console.log('API Result:', data);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }
        }, 500); // Debounce delay of 500ms

        return () => {
            clearTimeout(delayBounce); // Cleanup the timeout on unmount or when query changes
        };
    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="debounce-container">
            <h1>Debounce in JS Example</h1>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type something..."
            />
        </div>
    );                  
}   

export default DebounceInJS;