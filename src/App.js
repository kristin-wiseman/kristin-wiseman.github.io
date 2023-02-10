import React from 'react';
import './App.css';

// MUI Theme & Styling
import { ThemeProvider, createTheme} from '@mui/material/styles';

// MUI Components:
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// MUI Icons:
import MenuIcon from '@mui/icons-material/Menu';

const kwTheme = createTheme({
  palette: {
    primary: {
      main: '#060039'
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
    <Box>
      <AppBar>
        <IconButton aria-label="menu" size="large">
          <MenuIcon fontSize="inherit" />
        </IconButton>
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
        <p>More Coming Soon!</p>
        <p>
          For now, please find me on&nbsp;
          <a href='https://linkedin.com/in/kristinwiseman' rel="noreferrer" target="_blank">LinkedIn</a>
        </p>
      </Box>
    </ThemeProvider>
  );
  }
}

export default App;
