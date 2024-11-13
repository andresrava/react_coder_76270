import { useEffect,useState } from "react"

function useFetch(url) {

    const [data,setData]=useState(null);
    const [loading,setLoading]= useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        fetch(url)
        .then(response=>response.json())
        .then(info=>{
            console.log(info);
            setData(info);
            setLoading(false);
        })
        .catch(error=>{
            setError(error);
            setLoading(false);
        })
    },[url])

    return {data,loading,error}

}

export default useFetch