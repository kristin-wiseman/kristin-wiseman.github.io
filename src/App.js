import React from 'react';
import './App.css';
//import './PrimaryIconButton.js';

// MUI Theme & Styling
import { ThemeProvider, createTheme} from '@mui/material/styles';

// MUI Components:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icons:
import MenuIcon from '@mui/icons-material/Menu';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography id="site-title" variant="h1" component="div">KW</Typography>
          <IconButton onClick={handleMenu} aria-label="menu" aria-controls="main-menu" aria-haspopup="true" size="large">
            <MenuIcon id="main-menu-icon"/>
          </IconButton>
          <Menu id="main-menu" anchorEl={anchorEl}
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          keepMounted
          transformOrigin={{vertical: 'top', horizontal: 'right',}}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><a href="#about-section">About</a></MenuItem>
            <MenuItem onClick={handleClose}><a href='#contact-section'>Contact Me</a></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
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
            <Typography variant="body1">RGB: </Typography>
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
            <Typography variant="body1">RGB: </Typography>
          </Collapse>
        </Card>
      </Box>

    </Box>
  );
}

export default function App() {
  return (
    <>
    <ThemeProvider theme={kwTheme}>
      <header>
        <NavBar />
      </header>
      <Container maxWidth="md">
        <Typography variant="h2" component="div">This site is under construction</Typography>
        <Typography variant="body1">There's more coming soon!
            For now, please find me on&nbsp;
            <Link href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank">LinkedIn</Link>
        </Typography>
      </Container>
      <Typography variant="h3">Color Comparator</Typography>
      <ColorCompare />
      <Box sx={{bgcolor: kwTheme.palette.neutral.main}}>
        <Container id="about-section">
          <Typography variant="h3">About Me</Typography>
          <Typography variant="body1">I'm currently a part time apprentice developer at net2Community, Inc. My work there revolves around Drupal (theming and site building), but in my spare time I like to use the MERN stack. Here's where I say more good things about myself and maybe move the link to my LinkedIn from above. This bio may be incomplete, but at least it says more about me than lorem ipsum text..?</Typography>
        </Container>
      </Box>
      <Container id="contact-section">
        <Typography variant="h3">Contact</Typography>
        <Link href="https://linkedin.com/in/kristinwiseman" rel="noreferrer" target="_blank"><LinkedInIcon /></Link>
        <Link href="mailto:kristin.w.dev@gmail.com"><EmailIcon /></Link>
        <Link href="https://github.com/kristin-wiseman"><GitHubIcon /></Link>
      </Container>
    </ThemeProvider>
    </>
  );
};
