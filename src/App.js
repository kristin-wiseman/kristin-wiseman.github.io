import React from 'react';
import './App.css';

// MUI Components:
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

// MUI Icons:
import MenuIcon from '@mui/icons-material/Menu';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <nav>
        <h1 id="site-title">KW</h1>
        <button onClick={handleMenu} aria-label="menu" aria-controls="main-menu" aria-haspopup="true">
          <MenuIcon id="main-menu-icon"/>
        </button>
        <ul id="main-menu" anchorEl={anchorEl}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        keepMounted
        transformOrigin={{vertical: 'top', horizontal: 'right',}}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
          <li onClick={handleClose}><a href="#about-section">About</a></li>
          <li onClick={handleClose}><a href='#contact-section'>Contact Me</a></li>
        </ul>
      </nav>
  );
}

function ColorCompare(props) {
  const [color1, setColor1] = React.useState("FFFFFF");
  const [color2, setColor2] = React.useState("FFFFFF");
  const [expanded, setExpanded] = React.useState(false);

  const handleColor1 = (event) => {
    setColor1(event.target.value);
  };
  const handleColor2 = (event) => {
    setColor2(event.target.value);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="color-compare" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 6">
        <Card variant="outlined">
          <Box sx={{height: 300, bgcolor:"#"+color1}}></Box>
          <CardActions>
            <TextField id='c1' onChange={handleColor1} label="Color 1" variant="outlined" helperText="Input color hex code, without the '#'"></TextField>
            <IconButton expand={expanded} onClick={handleExpandClick}><ExpandCircleDownIcon /></IconButton>
          </CardActions>
          <Collapse in={expanded} unmountOnExit>
            <p>RGB: </p>
          </Collapse>
        </Card>
      </Box>
      <Box gridColumn="span 6">
        <Card variant="outlined">
          <Box sx={{height: 300, bgcolor:"#"+color2}}></Box>
          <CardActions>
            <TextField id='c2' onChange={handleColor2} label="Color 2" variant="outlined" helperText="Input color hex code, without the '#'"></TextField>
            <IconButton expand={expanded} onClick={handleExpandClick}><ExpandCircleDownIcon /></IconButton>
          </CardActions>
          <Collapse in={expanded} unmountOnExit>
            <p>RGB: </p>
          </Collapse>
        </Card>
      </Box>

    </Box>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <div>
        <h2>This site is under construction</h2>
        <p>There's more coming soon!
            For now, please find me on&nbsp;
            <a href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank">LinkedIn</a>
        </p>
      </div>
      <h3>Color Comparator</h3>
      <ColorCompare />
      <div id="about-section">
        <h3>About Me</h3>
        <p>I'm currently a part time apprentice developer at net2Community, Inc. My work there revolves around Drupal (theming and site building), but in my spare time I like to use the MERN stack. Here's where I say more good things about myself and maybe move the link to my LinkedIn from above. This bio may be incomplete, but at least it says more about me than lorem ipsum text..?</p>
      </div>
      <div id="contact-section">
        <h3>Contact</h3>
        <a href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
        <a href="mailto:kristin.w.dev@gmail.com"><EmailIcon /></a>
        <a href="https://github.com/kristin-wiseman"><GitHubIcon /></a>
      </div>
    </>
  );
};
