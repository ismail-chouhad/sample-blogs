import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData]= useState(null)
    const [isPending, setIsPending]= useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() =>{
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')//fetch data error
                }
                return res.json();
            })
            .then(res => {
                // console.log(res);
                setData(res);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)//server connection error
            })
        },500)
    },[url]);
    return { data, isPending, error };
}
export default useFetch;

