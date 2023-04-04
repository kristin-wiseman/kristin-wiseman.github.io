import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


export default function ColorCompare(props) {
    const [color1, setColor1] = React.useState("FFFFFF");
    const [color2, setColor2] = React.useState("FFFFFF");
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
  
    const handleColor1 = (event) => {
      setColor1(event.target.value);
    };
    const handleColor2 = (event) => {
      setColor2(event.target.value);
    };
    const handleExpand1 = () => {
      setExpanded1(!expanded1);
    };
    const handleExpand2 = () => {
      setExpanded2(!expanded2);
    };
  
    return (
      <Container id="color-compare">
        <Card variant="outlined">
          <Box sx={{height: 300, bgcolor:"#"+color1}}></Box>
          <CardActions>
            <TextField id='c1' onChange={handleColor1} label="Color 1" variant="outlined" helperText="Input color hex code, without the '#'"></TextField>
            <IconButton expand={expanded1} onClick={handleExpand1}><ExpandCircleDownIcon /></IconButton>
          </CardActions>
          <Collapse in={expanded1} unmountOnExit>
            <Typography variant="body1">RGB: </Typography>
          </Collapse>
        </Card>
        <Card variant="outlined">
          <Box sx={{height: 300, bgcolor:"#"+color2}}></Box>
          <CardActions>
            <TextField id='c2' onChange={handleColor2} label="Color 2" variant="outlined" helperText="Input color hex code, without the '#'"></TextField>
            <IconButton expand={expanded2} onClick={handleExpand2}><ExpandCircleDownIcon /></IconButton>
          </CardActions>
          <Collapse in={expanded2} unmountOnExit>
            <Typography variant="body1">RGB: </Typography>
          </Collapse>
        </Card>
      </Container>
    );
  }