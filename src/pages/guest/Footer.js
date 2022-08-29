import React from 'react';
import Typograph from '../../components/Typograph';
import Container from '@mui/material/Container';


const Footer = props => {
    const text = 'Copyright © ' + new Date().getFullYear() + ' by SIKOJA';
    return (
        <Container maxWidth='100' {...props} sx={{ backgroundColor: 'primary.light', }}>
            <Typograph text={text} variant="body2" align='center' textTransform='capitalize' sx={{ pb: 1 }} />
        </Container>
    )
}

export default Footer