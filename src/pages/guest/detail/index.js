import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/system/Container';
import DescDisp from './DescDisp';
import Footer from '../Footer';
import APIGETONE from '../../../services/axios/GetOne';
import { Grid, Skeleton } from '@mui/material';
import TimeLine from './TimeLine';
import DescSibolang from './DescSibolang';

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [sibolang, setSibolang] = useState([]);
    const [disposisi, setDisposisi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        APIGETONE.SibolangOne(params.id).then(result => {
            setSibolang(result.data);
        }).then(() => {
            APIGETONE.DispOne(params.id).then(result => {
                setDisposisi(result.data);
            })
        }).catch(() => {
            !sibolang?.length ? navigate('/notfound', { replace: true }) : setDisposisi(null);
        }).finally(() => {
            setIsLoading(false)
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <Container maxWidth='lg' sx={{ mt: 2, p: 0, }}>
                    <Skeleton variant='reagtangle' width='100' height='350px' />
                    <Grid container sx={{ mt: 1 }} spacing={2}>
                        <Grid item lg={6} sm={12}>
                            <Skeleton variant='reagtangle' width='100' height='200px' />
                            <Skeleton />
                            <Skeleton width='80%' />
                            <Skeleton width='60%' />
                        </Grid>
                        <Grid item lg={6} sm={12}>
                            <Skeleton variant='reagtangle' width='100' height='200px' />
                            <Skeleton />
                            <Skeleton width='80%' />
                            <Skeleton width='60%' />
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                <Container maxWidth='lg' sx={{ pt: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item lg={5} md={5} sm={12}>
                            <TimeLine dataSibolang={sibolang} dataDisp={disposisi} />
                        </Grid>
                        <Grid item lg={7} md={6} sm={12}>
                            <Container sx={{ p: 1, mb: 4, mt: 2 }}>
                                <DescSibolang dataSibolang={sibolang} />
                                <DescDisp dataDisp={disposisi} />
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            )
            }
            <Container maxWidth='100' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                <Footer />
            </Container>
        </>
    )
}

export default Detail