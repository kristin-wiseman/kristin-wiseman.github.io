import React from 'react';
import './App.css';
//import './PrimaryIconButton.js';

// MUI Theme & Styling
import { ThemeProvider, createTheme} from '@mui/material/styles';

// MUI Components:
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
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
          <IconButton onClick={handleMenu} aria-label="menu" aria-controls="main-menu" size="large">
            <MenuIcon color="neutral"/>
          </IconButton>
          <Menu id="main-menu" anchorEl={anchorEl}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          keepMounted
          transformOrigin={{vertical: 'top', horizontal: 'right',}}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>About</MenuItem>
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
      <Container maxWidth="md" background-color="secondary">
        <Typography variant="h4" component="div">More Coming Soon!</Typography>
        <Typography variant="body1">
          For now, please find me on&nbsp;
          <Link href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank">LinkedIn</Link>
        </Typography>
      </Container>
    </ThemeProvider>
    </>
  );
};
