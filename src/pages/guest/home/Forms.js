import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typograph from '../../../components/Typograph';
import APIGETALL from '../../../services/axios/GetAll';
import Alert from '@mui/material/Alert';
import APISTORE from '../../../services/axios/Store';
import { useDropzone } from 'react-dropzone';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import APIUPLOAD from '../../../services/axios/Upload';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import LoadingBackDrop from '../../../components/LoadingBackDrop';
import AlertSnackbar from '../../../components/AlertSnackbar';
import { useNavigate } from 'react-router-dom';


const FormSikoja = () => {
    const navigate = useNavigate();
    const initialDataState = {
        title: '',
        description: '',
        village_id: null,
        category_id: null,
        name: '',
        hp: null,

    }

    const [data, setData] = useState(initialDataState);
    const [categories, setCategories] = useState([]);
    const [villages, setVillages] = useState([]);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [message, setMessage] = useState('Belum ada aktivitas!');
    const [codeStatus, setCodeStatus] = useState(true);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [checked, setChecked] = useState(false);
    const [files, setFiles] = useState([]);
    const { getRootProps, isDragActive } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'video/mp4': ['.mp4']
        },
        maxFiles: 4,
        maxSize: 10240000,
        minSize: 1,
        noClick: true,
        useFsAccessApi: false,
    });

    const thumbs = files.map(file => {
        if (file.type === 'video/mp4') {
            return (
                <ReactPlayer key={file.name} height='100%' width='100%' controls url={file.preview} />
            )
        } else {
            return (
                <ImageListItem key={file.name} cols={1} rows={1}>
                    <img
                        src={file.preview}
                        alt={file.name}
                        loading="lazy"
                    />
                </ImageListItem>
            )
        }
    });


    useEffect(() => {
        APIGETALL.Categories().then(result => {
            setCategories(result.data)
        });
    }, []);
    useEffect(() => {
        APIGETALL.Villages().then(result => {
            const dataVillages = result.data.sort((a, b) => (a.village > b.village) ? 1 : ((b.village > a.village) ? -1 : 0));
            setVillages(dataVillages)
        });
    }, []);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'hp' && value.toString().length > 12) {
            setData({ ...data });
        } else {
            setData({ ...data, [name]: value });
        }
        setMessage({ status: false });
    };
    const handleOnSelectedVillage = (event, newValue) => {
        const id = newValue.id;
        setData({ ...data, village_id: id })
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked === true) {
            setData({ ...data, village_id: null })
        }
    };

    const save = async () => {
        try {
            const result = await APISTORE.StoreSibolang(data);
            await Promise.all(files.map(async (file) => {
                const data2 = new FormData();
                data2.append('galery', file)
                data2.append('sibolang_id', result.data.id);
                await APIUPLOAD.UploadGalery(data2)
            }))
            setMessage("Laporan telah disampaikan");
            setCodeStatus(true);
            setOpenSnackbar(true);
            navigate(`/detail/${result.data.id}`);
        } catch (e) {
            setMessage('Gagal menyimpan laporan, coba lagi!')
            setCodeStatus(false)
            setOpenSnackbar(true)
            setOpenBackdrop(false)
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (files.length === 0) {
            setMessage("Silahkan upload gambar atau video sebagai bukti pengaduan!");
            setCodeStatus(true);
            setOpenSnackbar(true);
        } else {
            setOpenBackdrop(true);
            save();
        }
    }

    const handleChangeFile = (e) => {
        const acceptedFiles = Object.values(e.target.files);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }


    return (
        <Container maxWidth="lg" sx={{ mx: "auto", mt: 6 }}>
            <LoadingBackDrop open={openBackdrop} onClick={() => setOpenBackdrop(true)} />
            <AlertSnackbar message={message} status={codeStatus} opensnackbar={openSnackbar} setOpensnackbar={setOpenSnackbar} />
            <Grid container>
                <Grid item align='center' lg={8} xs={12} sm={12} md={10} sx={{ mx: 'auto' }}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', px: 3 }}
                    >
                        <form onSubmit={handleOnSubmit}>
                            <CardContent>
                                <Typograph text="SIBOLANG MANOKWARI" gutterBottom variant="h5" textTransform='uppercase' fontWeight='bold' sx={{ py: 2 }} />
                                <Alert severity={message.code === 201 ? 'success' : 'error'} sx={{ mb: 2, display: `${message.status ? 'flex' : 'none'}` }} >{message.msg}</Alert>
                                <FormControl fullWidth >
                                    <FormLabel id="radion-button" sx={{ mb: 1 }}>Pilih kategori Pengaduan!</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="radion-button"
                                        name="category_id"
                                        value={data.category_id}
                                        onChange={handleOnChange}
                                        sx={{ mb: 1, display: 'flex', justifyContent: 'space-around' }}
                                    >
                                        {
                                            categories.map((category) => (
                                                <FormControlLabel key={category.id} value={category.id} control={<Radio required checked={data.category_id == category.id} />} label={category.category} />
                                            ))
                                        }
                                    </RadioGroup>
                                    <TextField required id="title" name='title' label="Judul Laporan Anda" variant="outlined" value={data.title} onChange={handleOnChange} />
                                    <TextField required id="description" name='description' multiline rows={4} label="Isi Laporan Anda" variant="outlined" value={data.description} onChange={handleOnChange} sx={{ mt: 2 }} />
                                    <Autocomplete
                                        disabled={checked}
                                        id="village_id"
                                        name='village_id'
                                        options={villages}
                                        sx={{ mt: 2 }}
                                        getOptionLabel={(villages) => `${villages.village}`}
                                        noOptionsText='Nama Kampung Tidak Ditemukan'
                                        renderInput={(params) => <TextField {...params} required label="Nama Kampung" />}
                                        onChange={handleOnSelectedVillage}
                                    />
                                    <FormControlLabel control={<Checkbox checked={checked}
                                        onChange={handleChecked} />} label="Belum ada nama kampung" />
                                    <Grid container sx={{ mt: 1 }} spacing={2}>
                                        <Grid item lg={7} md={12} xs={12}>
                                            <TextField fullWidth required id="name" name='name' label="Nama Anda" value={data.name} variant="outlined" onChange={handleOnChange} />
                                        </Grid>
                                        <Grid item lg={5} md={12} xs={12}>
                                            <TextField fullWidth required id="hp" name='hp' type='number' label="Nomor Hp Anda (08...)" variant="outlined" value={!data.hp ? '' : data.hp} onChange={handleOnChange} />
                                        </Grid>
                                    </Grid>
                                    <Paper sx={{ cursor: 'pointer', background: '#fafafa', color: '#bdbdbd', border: '1px dashed #ccc', '&:hover': { border: '1px solid #ccc' }, mt: 2, pt: 2 }}>
                                        <Button
                                            variant="text"
                                            component="label"
                                        >
                                            Upload
                                            <input
                                                type="file"
                                                hidden
                                                multiple
                                                onChange={handleChangeFile}
                                            />
                                        </Button>
                                        <div style={{ padding: '20px', height: 'auto' }} {...getRootProps()}>
                                            {isDragActive ? (
                                                <Typograph variant='subtitle1' text='Drop disini..' color='primary.main' />
                                            ) : (
                                                <Typograph variant='subtitle1' text='Drag & Drop atau klik untuk memilih gambar..' />
                                            )}
                                        </div>
                                    </Paper>
                                    {files.length != 0 ? (
                                        <Container >
                                            <ImageList
                                                sx={{ width: '100', height: 'auto' }}
                                                variant="quilted"
                                                cols={4}
                                                rowHeight={121}
                                            >
                                                {thumbs}
                                            </ImageList>
                                        </Container>
                                    ) : null}
                                </FormControl>
                            </CardContent>
                            <CardActions sx={{ px: 2, pb: 4, pt: 1 }}>
                                <Button fullWidth size='large' type='submit' variant='contained' sx={{ fontSize: 18 }}>Lapor</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormSikoja