import { render } from '@testing-library/react';
import SelectField from '../SelectField';
import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';

test('renders Select Field component', () => {
    render(
        <SelectField options={[]} handleChange={function (event: SelectChangeEvent<undefined>, child: ReactNode) {} } />
    )

});