import { ReactNode, useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectOption = {
  value: string;
  label: string;
}

type SelectProps = {
  options: SelectOption[];
  handleChange: (event: SelectChangeEvent<undefined>, child: ReactNode) => void;
}

const SelectField = ({options, handleChange}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState()

  return (
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={selectedOption}
      onChange={handleChange}
      label="Age"
    >
      {options.map( (item: SelectOption) => {
        return <option value={item.value}>
          {item.label}
        </option>
      })}
    </Select>
  )
}

export default SelectField