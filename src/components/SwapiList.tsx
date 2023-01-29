import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash'

type SWPerson = {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
}

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 250 }
]

type TotalResults = {
    count: string
    next: string
    previous: boolean
    results: Array<SWPerson>
}

type TotalPayload = {
    data: TotalResults
}

const SwapiList = ({ ...data }: TotalPayload) => {

    const { data: people } = data;
    const names = people.results.map((item: any) => {
        return _.pickBy(item, (data, key) => key === 'name')
    })

    return (
        <Box sx={{ height: 400, width: '100%' }} >
            <DataGrid
                columns={columns}
                getRowId={(row) => row.name}
                rows={names}
                
            />
        </Box>
    )
}

export default SwapiList