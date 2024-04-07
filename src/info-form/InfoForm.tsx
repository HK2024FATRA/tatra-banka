import './InfoForm.css';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React from 'react';


export function InfoForm() {

    const [age, setAge] = React.useState('');


    return (
        <>
            <div className="form-body">
                <h3>Povedz nám o sebe niečo</h3>
                <form>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </div>
        </>
    )

}
