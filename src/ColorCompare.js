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

function ColorCard(props) {
    const [color, setColor] = React.useState("FFFFFF");
    const [expanded, setExpanded] = React.useState(false);
    let r = 255;
    let g = 255;
    let b = 255;

    const handleColor = (event) => {
        setColor(event.target.value);
    };
    const handleExpand = () => {
        setExpanded(!expanded);
    };
    const handleRGB = (color) => {

    };

    return (
        <Card variant="outlined">
            <Box sx={{height: 300, bgcolor:"#"+color}}></Box>
            <CardActions>
                <TextField onChange={handleColor} label={"Color " + props.colorID} variant="outlined" helperText="Input color hex code, without the '#'"></TextField>
                <IconButton expand={expanded} onClick={handleExpand}><ExpandCircleDownIcon /></IconButton>
            </CardActions>
            <Collapse in={expanded} unmountOnExit>
                <Typography variant="body1">RGB: ({r}, {g}, {b})</Typography>
            </Collapse>
        </Card>
    );
}

export default function ColorCompare(props) {  
    return (
      <Container id="color-compare">
        <ColorCard colorID="1"/>
        <ColorCard colorID="2"/>
      </Container>
    );
}