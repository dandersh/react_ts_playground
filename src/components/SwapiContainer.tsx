import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import SwapiList from './SwapiList'

const url = 'https://swapi.dev/api/people/'

const wrapComponent = (Component: any) => (props: any) => {
    if (props.isLoading)  {
        return <Typography variant="h3" component="h3">Loading data.</Typography>
    } else if (!props.data) { 
        return <Typography variant="h3" component="h3">No data loaded yet.</Typography>
    }
    return <Component {...props} />
}

const WrappedSwapiList = wrapComponent(SwapiList)

const SwapiContainer = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then( (response) => response.json())
            .then( (json) => setData(json))
            .then(() => setIsLoading(false))
    }, [])

    return <WrappedSwapiList data={data} />

}

export default SwapiContainer;