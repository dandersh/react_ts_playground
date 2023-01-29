import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type SearchType = {
  variant?: string;
  label?: string;
  data: object;
}

// typing can also be 'ComponentType' imported from 'react'
const WithSearch = <P extends {}> (WrappedComponent: new() => React.Component<SearchType>) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm( (searchTerm) => searchTerm = event.target.value)
  }

  let searchData = {}
  return (
    <Box>
      <TextField
        variant="standard"
        label="Search term here"
        value={searchTerm}
        onChange={handleSearchTerm}
      >
        <WrappedComponent data={searchData} />
      </TextField>
    </Box>
  )
}

export default WithSearch