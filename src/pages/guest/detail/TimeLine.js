import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DriveFileMove from '@mui/icons-material/DriveFileMove';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Moment from '../../../components/Moment';

const TimeLine = (props) => {
    const { dataSibolang, dataDisp } = props;

    return (
        <Timeline position="alternate" sx={{ bgcolor: 'primary.light', borderRadius: 2, py: 2 }}>
            <Typography variant='h5' fontWeight='bold'>Status Laporan</Typography>
            <Divider sx={{ my: 1 }} />
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography>{Moment(dataSibolang[0].created_at)}</Typography>
                    <Typography variant='subtitile1'>Oleh: {dataSibolang[0].name}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='error'>
                        <AssignmentIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: dataDisp[0] ? 'warning.main' : 'grey' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography component="span" color='primary.main' fontWeight='bold'>
                        Laporan Diterima
                    </Typography>
                    <Typography variant='subtitile1' paragraph align='left'>
                        {dataSibolang[0].title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', mt: 2 }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography>{dataDisp[0] ? Moment(dataDisp[0].created_at) : ''}</Typography>
                    <Typography variant='subtitile1'>Oleh Admin SIBOLANG</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: dataDisp[0] ? 'warning.main' : 'grey' }} >
                        <DriveFileMove />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: dataDisp[0] ? (dataDisp[0].description && dataDisp[0].estimation_date ? 'success.main' : '') : '' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography component="span" color={dataDisp[0] ? 'primary' : 'text.secondary'} fontWeight='bold'>
                        Laporan Didisposisikan
                    </Typography>
                    <Typography variant='subtitile2' paragraph align='right' textTransform='camelcase' color={dataDisp[0] ? 'grey.dark' : 'text.secondary'}>
                        {dataDisp[0] ? `Laporan anda akan ditindak lanjuti oleh ${dataDisp[0].instance.instance}` : 'admin belum mendisposisikan laporan ini'}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', mt: 2 }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography>{dataDisp[0] ? (dataDisp[0].description ? Moment(dataDisp[0].updated_at) : '') : ''}</Typography>
                    <Typography variant='subtitile1'> {dataDisp[0] ? 'Oleh:' + dataDisp[0].instance.instance : ''}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={dataDisp[0] ? (dataDisp[0].description ? 'success' : 'grey') : 'grey'} >
                        <PendingActionsIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: dataSibolang[0].status_id === 4 ? 'info.main' : 'grey' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography component="span" color={dataDisp[0] ? (dataDisp[0].description ? 'primary' : 'text.secondary') : 'text.secondary'} fontWeight='bold'>
                        Laporan DItindaklanjuti
                    </Typography>
                    <Typography variant='subtitile1' paragraph align='left' color={dataDisp[0] ? (dataDisp[0].description ? 'grey.dark' : 'text.secondary') : 'text.secondary'}>
                        {dataDisp[0] ? (dataDisp[0].description ? dataDisp[0].description : 'pihak berwenang belum ada tindakan lanjut') : 'laporan belum didisposisikan'}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', mt: 2 }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {dataSibolang[0].status_id === 4 ? Moment(dataSibolang[0].updated_at) : ''}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={dataSibolang[0].status_id === 4 ? 'info' : 'grey'}>
                        <CheckCircleOutlineIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, pt: 2 }}>
                    <Typography component="span" color={dataSibolang[0].status_id === 4 ? 'primary' : 'text.secondary'} fontWeight='bold'>
                        Selesai
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default TimeLine