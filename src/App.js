import React from 'react';
import './App.css';
//import './PrimaryIconButton.js';

// MUI Theme & Styling
import { ThemeProvider, createTheme} from '@mui/material/styles';

// MUI Components:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icons:
import MenuIcon from '@mui/icons-material/Menu';

const kwTheme = createTheme({
  palette: {
    primary: {
      main: '#020014',
    },
    secondary: {
      main: '#918ea5'
    },
    neutral: {
      main: '#9B9A9E'
    },
    error: {
      main: '#ba1a1a'
    },
    contrastThreshold: 4.5
  }
});

function NavBar(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" component="div">KW</Typography>
          <IconButton onClick={handleMenu} aria-label="menu" aria-controls="main-menu" aria-haspopup="true" size="large">
            <MenuIcon color="neutral"/>
          </IconButton>
          <Menu id="main-menu" anchorEl={anchorEl}
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          keepMounted
          transformOrigin={{vertical: 'top', horizontal: 'right',}}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><a href="#about-me">About</a></MenuItem>
            <MenuItem onClick={handleClose}>Contact Me</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
  );
}

export default function App() {
  return (
    <>
    <ThemeProvider theme={kwTheme}>
      <header>
        <NavBar></NavBar>
      </header>
      <Container maxWidth="md" sx={{bgcolor: secondary}}>
        <Typography variant="h4" component="div">This site is under construction</Typography>
        <Typography variant="body1">There's more coming soon!
            For now, please find me on&nbsp;
            <Link href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank">LinkedIn</Link>
        </Typography>
      </Container>
      <Box sx={{bgcolor: secondary}}>
      <Container id="about-me">
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1">I'm currently a part time apprentice developer at net2Community, Inc. My work there revolves around Drupal (theming and site building), but in my spare time I like to use the MERN stack. Here's where I say more good things about myself and maybe move the link to my LinkedIn from above. This bio may be incomplete, but at least it says more about me than lorem ipsum text..?</Typography>
      </Container>
      </Box>
    </ThemeProvider>
    </>
  );
};
