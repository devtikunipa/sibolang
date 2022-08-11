import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Carousel from './Carousel';
import ListSibolang from './ListSibolang';
import Footer from '../Footer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import APIGETALL from '../../../services/axios/GetAll';
import LoadingSkeleton from './LoadingSkeleton';


const Sikojas = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleOnChange = (e) => {
        if (!e.target.value) return setSearch(data);

        const filterData = data.filter(dat => dat.title.toLowerCase().includes(e.target.value.toLowerCase()) || dat.description.toLowerCase().includes(e.target.value.toLowerCase()) || dat.name.toLowerCase().includes(e.target.value.toLowerCase()));

        setSearch(filterData);

    }
    const handleSubmit = (e) => e.preventDefault()

    useEffect(() => {
        APIGETALL.Sibolangs().then(result => {
            setData(result.data);
            setSearch(result.data)
            setIsLoading(false);
        });
    }, []);


    return (
        isLoading ? (
            <LoadingSkeleton />
        ) : (
            <>
                <Container maxWidth='lg'>
                    <form className='search' onSubmit={handleSubmit}>
                        <Paper
                            sx={{ px: 0, display: 'flex', bgcolor: 'primary.light', alignItems: 'center', width: '100%', mx: 'auto', my: 4 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1, p: 2 }}
                                placeholder="Masukkan kata kunci judul atau nama pelapor"
                                name='search'
                                onChange={handleOnChange}
                                inputProps={{ 'aria-label': 'Masukkan kata kunci judul atau nama pelapor', 'onChange': handleOnChange }}
                            />
                            <IconButton type="submit" sx={{ p: 2, pr: 2 }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </form>
                    <Carousel lastUpdate={search} />
                    <ListSibolang data={search} />
                    <Box sx={{ mx: 'auto', mt: 5, textAlign: 'center' }}>
                        <Button variant='outlined'>Load more...</Button>
                    </Box>
                </Container>
                <Container maxWidth='100' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                    <Footer />
                </Container>
            </>
        )
    )
}

export default Sikojas