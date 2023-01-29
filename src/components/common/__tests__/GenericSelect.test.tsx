import { render } from '@testing-library/react';
import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';
import GenericSelect from '../GenericSelect';

test('renders Select Field component', () => {
    render(
        <GenericSelect options={[{ value: '', label: ''}]} handleChange={function (event: SelectChangeEvent<undefined>, child: ReactNode) {} } />
    )
});