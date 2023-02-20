import Character from '../types/Character';
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash'

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 250 }
]

type TotalResults = {
    count: number
    next: string
    previous: boolean | null
    results: Array<Character>
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