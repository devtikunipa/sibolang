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
  const { lastUpdate } = props;
  return (
    lastUpdate.map((post, index) => {
      if (index === 0 && post.galery_sibolang[0]) {
        const extension = post.galery_sibolang[0].filename.split(".");
        return (
          <Grid container key={index} alignItems='center' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, bgcolor: 'primary.light', mt: 2, borderRadius: 2 }}>
            <Grid item lg={6}>
              {
                extension[1] === 'mp4' ? (
                  <Box>
                    <ReactPlayer height='auto' width='100%' controls url={URLROOT + post.galery_sibolang[0].path} playing={true} />
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
                      backgroundImage: `url(${URLROOT}${post.galery_sibolang[0].path})`,
                    }}
                  />
                )
              }
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 6 },
                  pr: 0,
                  backgroundColor: 'primary.light',
                }}
              >
                <Typography component="h2" variant="h5" color="inherit" textTransform='capitalize' fontWeight={600}>
                  {post.title.slice(0, 65) + (post.title.length > 65 ? '...' : '')}
                </Typography>
                <Typography variant="subtitel1" color="text.secondary" gutterBottom>
                  {Moment(post.created_at)}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6" color="inherit" paragraph>
                  {post.description.slice(0, 100) + (post.description.length > 100 ? '...' : '')}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Chip label={post.status.statuse} color={colorChip(post.status_id)} size="medium" />
                </Box>
                <Link variant="subtitle1" href={'/detail/' + post.id} color='primary.main' sx={{ pl: 1 }}>
                  Selengkapnya...
                </Link>
              </Box>
            </Grid>
          </Grid>
        )
      }
    })
  );

}

export default Carousel