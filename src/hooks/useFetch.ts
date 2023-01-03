import { useEffect, useState } from "react";

function useFetch<T>(url: string){
    const baseUrl = 'https://shopapi.taherifard.ir'
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<T | any>()
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(baseUrl + url)
        .then(res => res.json())
        .then(data => {
            setData(data)
        }).catch(err => {
            setIsError(true)
        }).finally(() => {
            setLoading(false)
        })

    }, [url])    

    return {loading, data , isError}
}

export default useFetch;