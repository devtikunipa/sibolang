import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '../Footer';
import Typograph from '../../../components/Typograph';
import Sibolang from '../../../assets/images/sibolang.jpg';

const About = () => {
    return (
        <>
            <Container maxWidth='lg' sx={{ px: 4 }}>
                <Typograph text='SIBOLANG' variant='h4' component='h3' textTransform='uppercase' fontWeight='bold' sx={{ mt: 4, mb: 1 }} />
                <Typograph text='(Sistem Informasi Pengaduan Banjir Longsor, Abrasi dan Genangan)' variant='h6' sx={{ mb: 4 }} />
                <Box
                    sx={{
                        backgroundImage: `url(${Sibolang})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'primary.light',
                        width: 400,
                        height: 300,
                        mx: 'auto',
                        mb: 3
                    }}
                />
                <Typograph variant='body1' paragraph align='justify' text='SIBOLANG merupakan sistem informasi pengaduan masyarakat terhadap kejadian/bencana akibat daya rusak air sesuai dengan namanya. Dengan adanya informasi tersebut membantu pemerintah dalam merespon dan mengambil langkah strategis sesuai ketentuan yang berlaku. Diharapkan sistem informasi ini dapat meningkatkan kepercayaan dan kinerja pelayanan pemerintah kepada masyarakat.' textTransform='none' />
            </Container>
            <Container maxWidth='100' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                <Footer />
            </Container>
        </>
    )
}

export default About