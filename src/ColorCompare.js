import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';

//import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ForwardIcon from '@mui/icons-material/Forward';

function ColorCard(props) {
    const [color, setColor] = React.useState("");
    const [expanded, setExpanded] = React.useState(false);

    const handleColor = (event) => {
        setColor(event.target.value);
    };
    const handleExpand = () => {
        setExpanded(!expanded);
    };
    const handleRGB = () => {
        if (/[^a-f\d]+/i.test(color) || (color.length!==3 && color.length!==6)) {
            return "Enter a valid hex code"
        } else if (color.length === 3) {
            return "A 6 digit color"
        } else {
            return `(${parseInt(color.slice(0,2), 16)}, ${parseInt(color.slice(2,4), 16)}, ${parseInt(color.slice(4,6), 16)})`;
        }
    };

    return (
        <Card variant="outlined">
            <Box sx={{height: 300, bgcolor:"#"+color}}></Box>
            <CardActions>
                <TextField onChange={handleColor} label={"Color " + props.colorID + " Hex"} variant="outlined" helperText="Input color hex code, without the '#'"></TextField>
                <IconButton onClick={handleExpand}><ForwardIcon /></IconButton>
            </CardActions>
            <Collapse in={expanded} unmountOnExit>
                <TextField label="RGB" variant="outlined" value={handleRGB()} InputProps={{readOnly: true,}}></TextField>
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