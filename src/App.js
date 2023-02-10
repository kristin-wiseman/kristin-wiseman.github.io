import React from 'react';
import './App.css';

// MUI Theme & Styling
import { ThemeProvider, createTheme} from '@mui/material/styles';

// MUI Components:
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icons:
import MenuIcon from '@mui/icons-material/Menu';

const kwTheme = createTheme({
  palette: {
    primary: {
      main: '#060039',
      contrastText: '#E3DFFF'
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

// const Offset = styled("div")(({theme}) => theme.mixins.toolbar); for appbar covering text?

function NavBar(props) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" component="div">KW</Typography>
          <IconButton aria-label="menu" size="large">
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
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
      <Box>
        <Typography variant="h4" component="div">More Coming Soon!</Typography>
        <Typography variant="body1">
          For now, please find me on&nbsp;
          <a href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank">LinkedIn</a>
        </Typography>
      </Box>
    </ThemeProvider>
  );
  }
}

export default App;
