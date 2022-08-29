import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Moment from '../../../components/Moment';
import moment from 'moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../../services';

const MainMedia = (props) => {
    const { dataDisp } = props;
    return (
        <Box sx={{ pt: 2 }}>
            <Typography variant='h6' textTransform='capitalize' fontWeight='bold' color='primary.dark'>Tindaklanjut Laporan</Typography>
            {
                dataDisp[0] ? (
                    dataDisp[0].description ? (
                        <>
                            <Typography variant='subtitle1' color='grey.600' fontStyle='italic' paragraph>{Moment(dataDisp[0].updated_at)}, Oleh {dataDisp[0].instance.instance}</Typography>
                            <Typography variant='body1' color='grey.900' >Keterangan: {dataDisp[0].description}</Typography>
                            <Typography variant='body1' color='grey.900'>Estimasi: {moment(dataDisp[0].estimation_date).format('LL')}</Typography>
                            <ImageList
                                sx={{ width: '100', height: 'auto' }}
                                variant="quilted"
                                cols={3}
                                rowHeight={130}
                                width='100%'
                            >
                                {
                                    dataDisp[0].file_sibolangdisp.map((galery) => {
                                        const extension = galery.filename.split('.')
                                        if (extension[1] === 'mp4') {
                                            return (
                                                <ReactPlayer key={galery.id} height='auto' width='100%' controls url={URLROOT + galery.path} playing={true} />

                                            )
                                        } else {
                                            return (
                                                <ImageListItem key={galery.id}>
                                                    <img
                                                        src={URLROOT + galery.path}
                                                        alt={galery.filename}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            )
                                        }
                                    })
                                }
                            </ImageList>
                        </>
                    ) : (
                        <>
                            <Typography variant='subtitle1' color='grey.600' fontStyle='italic' >{Moment(dataDisp[0].created_at)}, Oleh Admin SIBOLANG</Typography>
                            <Typography variant='body1' color='grey.900' >Keterangan: Laporan ini akan di ditindaklanjuti oleh pihak {dataDisp[0].instance.instance}.</Typography>
                        </>
                    )
                ) : (
                    <Typography variant='body1' color='grey.900' >Laporan belum didisposisikan</Typography>
                )
            }
        </Box>
    )
}

export default MainMedia