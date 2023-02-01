import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const url = 'https://swapi.dev/api/films/'

// The episode_id is different from the film id passed as a path paramater so we map episode_id => film id
/**
 * @todo Find a developer friendly way to represent the map below
 */
const mappedFilmKeys = new Map([[4,1],[5,2],[6,3],[1,4],[2,5],[3,6]])

const SwapiFilms = () => {
    const [films, setFilms] = useState({results: []})
    const [isLoading, setIsLoading] = useState(false)

    const getFilmInfo = (film: any) => {
        const {episode_id: filmId} = film
        fetch(`${url}${mappedFilmKeys.get(filmId)}`)
            .then( (response) => response.json())
            .then( (json) => console.log(json))
    }

    useEffect(() => {
        fetch(url)
            .then( (response) => response.json())
            .then( (json) => setFilms(json))
            .then(() => setIsLoading(false))
    }, [])

    return (
        <List>
            {films.results.map( (film: any) => {
                return <ListItem 
                    key={film.episode_id}
                    onClick={() => getFilmInfo(film)}
                >
                    {film.title}
                </ListItem>
            })}
        </List>
    )
}

export default SwapiFilms