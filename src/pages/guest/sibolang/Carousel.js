import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Moment from '../../../components/Moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../../services';
import { Divider } from '@mui/material';

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

const Carousel = (props) => {
  const data = props.lastUpdate.find((_, i) => (i === 0));
  const extension = data.galery_sibolang[0].filename.split(".");
  return (
    <Grid container alignItems='center' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, bgcolor: 'primary.light', mt: 2, borderRadius: 2 }}>
      <Grid item lg={6} md={6}>
        {
          extension[1] === 'mp4' ? (
            <Box>
              <ReactPlayer height='auto' width='100%' controls url={URLROOT + data.galery_sibolang[0].path} playing={true} />
            </Box>
          ) : (
            <Paper
              sx={{
                height: '360px',
                widht: '100%',
                backgroundColor: 'grey.300',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${URLROOT}${data.galery_sibolang[0].path})`,
              }}
            />
          )
        }
      </Grid>
      <Grid item lg={6} md={6}>
        <Box
          sx={{
            p: { xs: 3, md: 6 },
            pr: 0,
            backgroundColor: 'primary.light',
          }}
        >
          <Typography component="h2" variant="h5" color="inherit" textTransform='capitalize' fontWeight={600}>
            {data.title.slice(0, 65) + (data.title.length > 65 ? '...' : '')}
          </Typography>
          <Typography variant="subtitel1" color="text.secondary" gutterBottom>
            {Moment(data.created_at)}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h6" color="inherit" paragraph>
            {data.description.slice(0, 100) + (data.description.length > 100 ? '...' : '')}
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Chip label={data.status.statuse} color={colorChip(data.status_id)} size="medium" />
          </Box>
          <Link variant="subtitle1" href={'/detail/' + data.id} color='primary.main' sx={{ pl: 1 }}>
            Selengkapnya...
          </Link>
        </Box>
      </Grid>
    </Grid>
  );

}

export default Carousel