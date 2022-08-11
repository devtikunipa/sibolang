import React from 'react'
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
const LoadingSkeleton = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Skeleton variant="rectangular" width='100' height='400px' />
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rectangular" width='100' height='200px' />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rectangular" width='100' height='200px' />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rectangular" width='100' height='200px' />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rectangular" width='100' height='200px' />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rectangular" width='100' height='200px' />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rectangular" width='100' height='200px' />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default LoadingSkeleton