import { useAuth0 } from "@auth0/auth0-react";

export function Login() {
    const { loginWithRedirect } = useAuth0();
    const { user } = useAuth0();

    return <>
    {user?.name}
    <button onClick={() => loginWithRedirect()}>Log In</button>
    </> ;
}