import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
// import tbLogo from '../assets/tb-logo.png'
import logo from '../assets/tb-logo.png';


export const Footer = () => {
    const [color, setColor] = React.useState<ColorPaletteProp>('neutral');
    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                bgcolor: 'black', // This sets the background color to black
                color: 'white', // Ensures the text and icons are visible against the black background
                flexGrow: 1,
                p: 2,
                borderRadius: { xs: 0, sm: 'sm' },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                    variant="soft"
                    size="sm"
                    onClick={() => {
                        const colors: ColorPaletteProp[] = [
                            'primary',
                            'neutral',
                            'danger',
                            'success',
                            'warning',
                        ];
                        const nextColorIndex = colors.indexOf(color) + 1;
                        setColor(colors[nextColorIndex] ?? colors[0]);
                    }}
                >
                    <ColorLensRoundedIcon fontSize="small" />
                </IconButton>
                <Divider orientation="vertical" />
                <IconButton variant="plain">
                    <FacebookRoundedIcon />
                </IconButton>
                <IconButton variant="plain">
                    <GitHubIcon />
                </IconButton>
                <Input
                    variant="soft"
                    placeholder="Type in your email"
                    type="email"
                    name="email"
                    endDecorator={
                        <IconButton variant="soft" aria-label="subscribe">
                            <SendIcon />
                        </IconButton>
                    }
                    sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'flex-start' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >


                <List
                    size="sm"
                    orientation="horizontal"
                    wrap
                    sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
                >
                    <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                        <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton>TatraBanka</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Blog</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>O nás</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                        <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton>Investovanie</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Účty</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Sporenie</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
                <img src={logo} alt="Logo" style={{ height: '100px', }} />
            </Box>
        </Sheet>
    );
}
