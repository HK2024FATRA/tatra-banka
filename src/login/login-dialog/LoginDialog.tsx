import {
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText
} from '@mui/material';
import {blue} from '@mui/material/colors';
import {useAuth0} from '@auth0/auth0-react';



export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export function LoginDialog(props: SimpleDialogProps) {
    const {onClose, open} = props;
    const { user } = useAuth0();
    const handleClose = () => {
        onClose();
    };
    const { logout } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });

    // const emails = ['username@gmail.com', 'user02@gmail.com'];


    // const handleListItemClick = (value: string) => {
    //     onClose();
    // };

    return (
        <Dialog onClose={handleClose} open={open} fullWidth>
            <DialogTitle>Účet</DialogTitle>
            <Avatar alt="Remy Sharp" src={user?.picture} />
            {user?.name}
            <button onClick={() => logoutWithRedirect()}>Odhlásiť sa</button>

            {/*<Button></Button>*/}
            {/*<ListItem disableGutters key={user?.name}>*/}
            {/*    <ListItemButton>*/}
            {/*        <ListItemAvatar>*/}
            {/*            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>*/}
            {/*            </Avatar>*/}
            {/*        </ListItemAvatar>*/}
            {/*        <ListItemText primary={user?.name} />*/}
            {/*    </ListItemButton>*/}
            {/*</ListItem>*/}

            {/*<List sx={{ pt: 0 }}>*/}
            {/*    {emails.map((email) => (*/}
            {/*        <ListItem disableGutters key={email}>*/}
            {/*            <ListItemButton onClick={() => handleListItemClick(email)}>*/}
            {/*                <ListItemAvatar>*/}
            {/*                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>*/}
            {/*                    </Avatar>*/}
            {/*                </ListItemAvatar>*/}
            {/*                <ListItemText primary={email} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*    <ListItem disableGutters>*/}
            {/*        <ListItemButton*/}
            {/*            autoFocus*/}
            {/*            onClick={() => handleListItemClick('addAccount')}*/}
            {/*        >*/}
            {/*            <ListItemAvatar>*/}
            {/*                <Avatar>*/}
            {/*                </Avatar>*/}
            {/*            </ListItemAvatar>*/}
            {/*            <ListItemText primary="Add account" />*/}
            {/*        </ListItemButton>*/}
            {/*    </ListItem>*/}
            {/*</List>*/}
        </Dialog>
    );
}
