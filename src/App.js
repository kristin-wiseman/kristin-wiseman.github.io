import React from 'react';
import './App.css';

// MUI Theme & Styling
import { ThemeProvider, createTheme} from '@mui/material/styles';

// MUI Components:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icons:
import MenuIcon from '@mui/icons-material/Menu';

const kwTheme = createTheme({
  palette: {
    primary: {
      main: '#060039'
      //contrastText: '#E3DFFF'
    },
    secondary: {
      main: '#918ea5'
    },
    neutral: {
      main: '#929094'
    },
    error: {
      main: '#ba1a1a'
    },
    contrastThreshold: 4.5
  }
});

function NavBar(props) {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" component="div">KW</Typography>
          <IconButton aria-label="menu" size="large">
            <MenuIcon fontSize="inherit" color={kwTheme.palette.primary.contrastText} />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  return (
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
  );
  }
}

export default App;
