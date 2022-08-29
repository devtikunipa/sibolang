import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const InternalServer = () => {
    return (
        <Container sx={{ mt: 40 }}>
            <Typography variant='h6' color='primary.dark' align='center' textTransform='uppercase' fontWeight='bold'>
                Upss.. Something is wrong!
            </Typography>
            <Typography variant='subtitle2' align='center'>
                Terjadi kesalahan pada server.
            </Typography>
            <Container sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}>
                <Button variant='contained' onClick={() => window.history.back()}>
                    Kembali
                </Button>
            </Container>
        </Container>
    )
}

export default InternalServer