import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Moment from '../../../components/Moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../../services';

const DescSibolang = (props) => {
    const { dataSibolang } = props;
    return (
        <Box>
            <Typography variant='h6' textTransform='capitalize' fontWeight='bold' color='primary.dark'> {dataSibolang[0].title}</Typography>
            <Typography variant='subtitle1' color='grey.600' fontStyle='italic' paragraph textTransform='capitalize'>{Moment(dataSibolang[0].created_at)}, Oleh {dataSibolang[0].name}</Typography>
            <Typography variant='body1' color='grey.900' >Keterangan: {dataSibolang[0].description}</Typography>
            <Typography variant='body1' color='grey.900'>Kampung: {dataSibolang[0].village ? dataSibolang[0].village.village : '-'} </Typography>
            <ImageList
                sx={{ width: '100', height: 'auto' }}
                variant="quilted"
                cols={3}
                rowHeight={130}
                width='100%'
            >
                {
                    dataSibolang[0].galery_sibolang.map((galery) => {
                        const extension = galery.filename.split('.')
                        if (extension[1] === 'mp4') {
                            return (
                                <ReactPlayer height='auto' width='100%' controls url={URLROOT + galery.path} playing={true} />

                            )
                        } else {
                            return (
                                <ImageListItem key={galery.id}>
                                    <img
                                        src={URLROOT + galery.path}
                                        alt='satuuu'
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            )
                        }
                    })
                }
            </ImageList>
        </Box >
    )
}

export default DescSibolang