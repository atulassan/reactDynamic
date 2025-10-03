import {useEffect, useState} from 'react';

function useGetQuery(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false));
    }, [])
    return { loading, data };
}

export default useGetQuery;