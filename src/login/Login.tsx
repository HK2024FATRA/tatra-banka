import { useAuth0 } from "@auth0/auth0-react";
import {useState} from 'react';
import {Avatar} from '@mui/material';

export function Login() {
    const { loginWithRedirect } = useAuth0();
    const { user } = useAuth0();
    const { isAuthenticated, logout } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });


    if (isAuthenticated) {
        return <>
            <div className="login-head">
                <Avatar alt="Remy Sharp" src={user?.picture} />
            </div>
        </>
    } else {
        return <>
            <button className="tb-button" onClick={() => loginWithRedirect()}>Log In</button>
        </>
    }
}
