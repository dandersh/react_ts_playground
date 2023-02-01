import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import empire_poster from '../empire_poster.jpg'

type SWPlanet = {
    title: string,
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: string
    edited: string
    url: string;
}

type TPlanet = {
    planet: SWPlanet
}

const SwapiPlanet = ({planet}: TPlanet) => {
    const {title, director, producer} = planet
    return (
        <Card variant="outlined" sx={{ maxWidth: 345, margin: '0px auto' }}>
            <CardMedia
                sx={{ textAlign: 'center' }}
                component="img"
                alt="empire poster"
                image={empire_poster}
            />
            <CardContent>
            <Typography color="primary" >
                Film: {title}
            </Typography>
            <Typography color="secondary">
                Director: {director}
            </Typography>
            <Typography color="secondary">
                Producer(s): {producer}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default SwapiPlanet