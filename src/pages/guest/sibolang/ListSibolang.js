import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Moment from '../../../components/Moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../../services';

function colorChip(id) {
    if (id === 1) {
        return 'error'
    } else if (id === 2) {
        return 'warning'
    } else if (id === 3) {
        return 'success'
    } else {
        return 'info'
    }
}

const GridItem = ({ dt }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <CardActionArea component="a" href={'detail/' + dt.id} >
                <Card elevation={3}
                    sx={{ display: 'flex', flexDirection: 'column', borderRadius: 1.5 }}
                >
                    <CardHeader
                        title={<Typography variant="h6" fontWeight='bold' >
                            {dt.title.slice(0, 50) + (dt.title.length > 50 ? '...' : '')}
                        </Typography>}
                        subheader={<Typography variant="caption" color="text.secondary">
                            {Moment(dt.created_at)}
                        </Typography>}
                        sx={{ px: 2, py: 1 }}
                    />
                    {
                        dt.galery_sibolang.map((paths, index) => {
                            if (index === 0) {
                                const name = paths.filename.split(".");
                                if (name[1] === 'mp4') {
                                    return (
                                        <ReactPlayer key={index} height='250px' width='100%' controls url={URLROOT + paths.path} playing={true} />
                                    )
                                } else {
                                    return (
                                        <CardMedia key={index}
                                            component="img"
                                            sx={{ height: '250px' }}
                                            image={URLROOT + paths.path}
                                            alt="random"
                                        />
                                    )
                                }
                            }
                        })
                    }
                    <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                        <Typography>
                            {dt.description.slice(0, 80) + (dt.description.length > 90 ? '...' : '')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" textTransform='lowercase'>
                            oleh: {dt.name}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pr: 2, pb: 2 }}>
                        <Button size="normal" sx={{ textTransform: 'capitalize' }}>Selengkapnya...</Button>
                        <Chip label={dt.status.statuse} color={colorChip(dt.status_id)} size="small" sx={{ py: '14px' }} />
                    </CardActions>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
const ListSibolang = ({ data }) => {

    const results = data.map(dt => <GridItem key={dt.id} dt={dt} />);

    const content = results?.length ? results : <Typography align='center'>Belum ada laporan</Typography>
    return (
        <Grid container spacing={3} sx={{ mt: { xs: 1 } }} justifyContent='center'>
            {content}
        </Grid >
    )
}

export default ListSibolang