import React from 'react';
import DriveFileMove from '@mui/icons-material/DriveFileMove';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const FlowReport = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align='center' textTransform='capitalize' fontWeight='bold' sx={{ pb: 7 }}>
                Bagaimana Laporan Saya Diproses?
            </Typography>
            <Box sx={{ width: '100%', py: 5, overflow: { xs: 'scroll', sm: 'visible', md: 'visible', lg: 'visible' } }}>
                <Stepper activeStep={4} alternativeLabel>
                    <Step>
                        <StepLabel icon={
                            <Avatar sx={{ bgcolor: 'error.main' }}>
                                <AssignmentIcon />
                            </Avatar>
                        }>
                            <Typography variant='h6' fontWeight='bold'>
                                Laporan Diterima
                            </Typography>
                            <Typography variant='subtitle2' color='text.secondary'>
                                Anda dapat melaporan kerusakan jalan melalui form diatas
                            </Typography>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel icon={
                            <Avatar sx={{ bgcolor: 'warning.main' }}>
                                <DriveFileMove />
                            </Avatar>
                        }>
                            <Typography variant='h6' fontWeight='bold'>
                                Didisposisikan
                            </Typography>
                            <Typography variant='subtitle2' color='text.secondary'>
                                Laporan anda akan didisposisikan oleh admin kepada instansi yang berwenang
                            </Typography>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel icon={
                            <Avatar sx={{ bgcolor: 'success.main' }}>
                                <PendingActionsIcon />
                            </Avatar>
                        }>
                            <Typography variant='h6' fontWeight='bold'>
                                Ditindaklanjuti
                            </Typography>
                            <Typography variant='subtitle2' color='text.secondary'>
                                Instansi yang berwenang akan merespon laporan anda
                            </Typography>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel icon={
                            <Avatar sx={{ bgcolor: 'info.main' }}>
                                <CheckCircleOutlineIcon />
                            </Avatar>
                        }>
                            <Typography variant='h6' fontWeight='bold'>
                                Selesai
                            </Typography>
                            <Typography variant='subtitle2' color='text.secondary'>
                                Laporan pengaduan anda telah diselesaikan.
                            </Typography>
                        </StepLabel>
                    </Step>
                </Stepper>
            </Box>
        </Container>
    )
}

export default FlowReport