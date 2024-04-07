import { useAuth0 } from "@auth0/auth0-react";
import {useState} from 'react';
import {Avatar} from '@mui/material';
import {LoginDialog} from './login-dialog/LoginDialog.tsx';

export function Login() {
    const { loginWithRedirect } = useAuth0();
    const { user } = useAuth0();
    const { isAuthenticated, logout } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });


    if (isAuthenticated) {
        return <>
            <div onClick={() => {setIsOpen(true)}} style={{marginLeft: '10px'}}>
                <Avatar alt="Remy Sharp" src={user?.picture} />
            </div>
            <LoginDialog open={isOpen} onClose={() => setIsOpen(false)}></LoginDialog>
        </>
    } else {
        return <>
            <button style={{marginLeft: '10px'}} className="tb-button" onClick={() => loginWithRedirect()}>Prihlásenie</button>
        </>
    }
}
