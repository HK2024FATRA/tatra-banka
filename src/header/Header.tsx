import React from 'react';
import logo from '../assets/tb-logo.png';


export const Header = () => {
    const headerStyle = {
        backgroundColor: '#000', // black background
        color: '#fff', // white text
        padding: '10px 20px', // padding
        display: 'flex', // use flex for layout
        alignItems: 'center', // vertical alignment
        justifyContent: 'space-between' // space between the items
    };


    return (
        <div style={headerStyle}>
            <div>
                <img src={logo} alt="Logo" style={{ height: '100px' }} />
            </div>
            <div>
                Účet a platby | Úvery | Platobné karty | Sporenie, investovanie a dôchodok | Poistenie | Životné momenty
            </div>
        </div>
    );
};
