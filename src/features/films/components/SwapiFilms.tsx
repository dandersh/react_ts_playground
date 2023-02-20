import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {useQuery } from 'react-query'

const url = 'https://swapi.dev/api/films/'

// The episode_id is different from the film id passed as a path paramater so we map episode_id => film id
/**
 * @todo Find a developer friendly way to represent the map below
 */
const mappedFilmKeys = new Map([[4,1],[5,2],[6,3],[1,4],[2,5],[3,6]])

const SwapiFilms = () => {
    const { isLoading, error, data = {results: []} } = useQuery('films', () => {
        fetch('https://swapi.dev/api/films/').then( res => res.json())
    })

    const getFilmInfo = (film: any) => {
        const {episode_id: filmId} = film
        fetch(`${url}${mappedFilmKeys.get(filmId)}`)
            .then( (response) => response.json())
    }

    if (isLoading) return <p>'Loading...'</p>

    return (
        <List>
            {data.results.map( (film: any) => {
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