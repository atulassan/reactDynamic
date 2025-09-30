import React, {useState, useEffect} from 'react'

function useCustomDebounceHook(value, delay) {
    const [debouncedVal, setBouncedVal] = useState(value);
    useEffect(()=>{
        let timer = setTimeout(()=> {
            setBouncedVal(value);
        }, delay);
        //cleanup function
        return ()=> clearTimeout(timer);
    }, [value, delay]);
    return debouncedVal;
}

export default useCustomDebounceHook;