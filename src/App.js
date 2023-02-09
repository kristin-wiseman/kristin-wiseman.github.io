import React from 'react';
import './App.css';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(props) {
  return (
    <Box>
      <AppBar>
        <IconButton>
          <MenuIcon/>
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
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <div>
        <p>More Coming Soon!</p>
        <p>
          For now, please find me on&nbsp;
          <a href='https://linkedin.com/in/kristinwiseman' rel="noreferrer" target="_blank">LinkedIn</a>
        </p>
      </div>
    </>
  );
  }
}

export default App;
