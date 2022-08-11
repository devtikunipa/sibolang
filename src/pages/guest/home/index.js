import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CountUp from 'react-countup';
import BgHome from '../../../assets/images/bg-home1.jpg';
import Typograph from '../../../components/Typograph';
import FOrmSibolang from './Forms';
import FlowReport from './FlowReport';
import Footer from '../Footer';
import APIGETALL from '../../../services/axios/GetAll';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        APIGETALL.Sibolangs().then(result => {
            setData(result.data);
        }).catch(error => {
            console.log(error);
        });
    }, [])
    return (
        <Box sx={{
            backgroundImage: `url(${BgHome})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            alignItems: 'center',
            mt: -10,
            pt: 20,
        }}>
            <Typograph text="Layanan Pengaduan Online Manokwari" variant="h4" color="white" fontWeight={600} />
            <Typograph text="Laporan anda akan ditindaklanjuti oleh pihak instansi pemerintah berwenang" variant="h6" color="white" sx={{ mt: 2 }} />
            <FOrmSibolang />
            <Box sx={{ my: 5, py: 6 }}>
                <FlowReport />
            </Box>
            <Box maxWidth sx={{
                mt: 5, pt: 5,
                backgroundColor: '#eceff1',
                opacity: 1,
                backgroundImage: 'radial-gradient(#cfd8dc 2px, transparent 2px), radial- gradient(#cfd8dc 2px, #eceff1 2px)',
                backgroundSize: '80px 80px',
                backgroundPosition: ' 0 0,40px 40px',
            }}>
                <Container sx={{ mx: 'auto', pt: 4, pb: 2 }}>
                    <Typograph text='Jumlah Laporan Sekarang' variant="h4" align='center' textTransform='capitalize' fontWeight='bold' sx={{ pb: 3 }} />
                    <Typograph text={<CountUp end={data.length} duration={1} delay={0} redraw />} variant="h2" align='center' textTransform='capitalize' fontWeight='bold' sx={{ pb: 7 }} />
                    <Footer />
                </Container>
            </Box>
        </Box>
    );
};
export default Home;
