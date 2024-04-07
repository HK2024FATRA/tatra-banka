import './InfoForm.css';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React from 'react';


export function InfoForm() {

    const [profession, setProfession] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    return (
        <>
            {/*<div className="form-body">*/}
                {/*<h3>Povedz nám o sebe niečo</h3>*/}
                {/*<form>*/}
                    {/*<FormControl fullWidth>*/}
                    {/*    <InputLabel id="demo-simple-select-label">Profesia</InputLabel>*/}
                    {/*    <Select*/}
                    {/*        labelId="demo-simple-select-label"*/}
                    {/*        id="demo-simple-select"*/}
                    {/*        value={profession}*/}
                    {/*        onChange={(e) => setProfession(e.target.value)}*/}
                    {/*        label="Profesia">*/}
                    {/*        <MenuItem value={'Inžinier'}>Inžinier</MenuItem>*/}
                    {/*        <MenuItem value={'Učiteľ'}>Učiteľ</MenuItem>*/}
                    {/*        <MenuItem value={'Záhradník'}>Záhradník</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}

                    {/*<FormControl fullWidth>*/}
                    {/*    <InputLabel id="demo-simple-select-label">Meno</InputLabel>*/}
                    {/*    <Select*/}
                    {/*        labelId="demo-simple-select-label"*/}
                    {/*        id="demo-simple-select"*/}
                    {/*        value={profession}*/}
                    {/*        onChange={(e) => setProfession(e.target.value)}*/}
                    {/*        label="Profesia">*/}
                    {/*        <MenuItem value={'Inžinier'}>Inžinier</MenuItem>*/}
                    {/*        <MenuItem value={'Učiteľ'}>Učiteľ</MenuItem>*/}
                    {/*        <MenuItem value={'Záhradník'}>Záhradník</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}
                {/*</form>*/}
            {/*</div>*/}
        </>
    )

}
