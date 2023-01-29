import { useEffect, useState } from 'react'

type RequestData = {
  url: string,
  method: string,
  payload?: object
}

type FetchProps = {
  request: RequestData
}

const useFetch = ({request} : FetchProps) => {
  const [response, setResponse] = useState<object | null>()
  const [isLoading, setIsLoading] = useState<boolean | null>()
  const [isError, setIsError] = useState<boolean | null>()

  const { url, method, payload } = request
  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
      setIsLoading(false)
    }
    fetchData();
  }, [url]);
  return response;
}

export default useFetch