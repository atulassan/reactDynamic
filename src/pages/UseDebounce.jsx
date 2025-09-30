import React, {useState, useEffect} from "react";
import useCustomDebounceHook from "./Hooks/useCustomDebounceHook";

function UseDebounce() {

    const [query, setQuery] = useState();
    const useDebouncedvalue = useCustomDebounceHook(query, 500);

    useEffect(()=> {
        if(useDebouncedvalue) {
            fetch(`https://api.example.com/search?q=${useDebouncedvalue}`)
            .then(result=>result.json())
            .then(data=>{
                console.log('Search Results', data);
            })
            .catch((err)=> console.log(error));
        }
    }, [useDebouncedvalue])
    return(
        <>
            <input
      type="text"
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search..."
    />
        </>
    )
}

export default UseDebounce;