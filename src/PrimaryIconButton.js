import React from 'react';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';

const PrimaryIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    size: "large"
  }));

export default function StyledCustomization() {
    return <PrimaryIconButton></PrimaryIconButton>
}