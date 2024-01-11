import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {alpha, Box, Button, Container, InputBase, Modal, Stack, SvgIcon, Typography} from '@mui/material';
import {ArrowDownOnSquareIcon, ArrowUpOnSquareIcon, PlusIcon} from "@heroicons/react/20/solid";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SearchIcon from "@mui/icons-material/Search";
import {styled} from "@mui/material/styles";
import AddCategoryForm from "./form-components/AddCategoryForm";
import adminServices from "../../../services/Admin/adminServices";
import {useEffect} from "react";

// const categories=[
//     {
//         id: 1,
//         name: "Category 1",
//         description: "Category 1 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     },
//     {
//         id: 2,
//         name: "Category 2",
//         description: "Category 2 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     },
//     {
//         id: 3,
//         name: "Category 3",
//         description: "Category 3 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     },
//     {
//         id: 4,
//         name: "Category 4",
//         description: "Category 4 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     },
//     {
//         id: 5,
//         name: "Category 5",
//         description: "Category 5 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     },
//     {
//         id: 6,
//         name: "Category 6",
//         description: "Category 6 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     },
//     {
//         id: 7,
//         name: "Category 7",
//         description: "Category 7 description",
//         image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
//         created_at: "2016-11-22T15:28:52.000Z",
//         updated_at: "2016-11-22T15:28:52.000Z",
//         deleted_at: null
//     }
// ];
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function Categories() {
    const [categories, setCategories] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        getCategories();
    },[]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getCategories =  () => {
        const data =adminServices.getCategories().then((data)=>{
            console.log(data)
            setCategories(data);
        });
    }
    return (
        <div>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
            >
                <Stack spacing={1} >
                    <Typography variant="h4" paddingLeft={15}>
                        Categories
                    </Typography>

                </Stack>
                <div>
                    <Stack paddingRight={15} direction={'row'}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    <Button
                        onClick={handleOpen}
                        startIcon={(
                            <SvgIcon fontSize="small" >
                                <PlusIcon />
                            </SvgIcon>
                        )}
                        variant="contained"
                    >
                        Add
                    </Button>
                    </Stack>
                </div>
            </Stack>
        <div style={{justifyContent:'center', display:'flex'}}>

        <div style={{ height: 600, width: 1200 }} >

            <MDBTable align='middle'>
            <MDBTableHead>
            <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>

            <th scope='col'>Actions</th>

            </tr>
            </MDBTableHead>
            <MDBTableBody>

{categories.map((category) => (

            <tr key={category._id}>
            <td>
            <div className='d-flex align-items-center'>
            <img
            src={category.image}
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
        />
            <div className='ms-3'>
                <p className='fw-bold mb-1'>{category.name}</p>

            </div>
        </div>
                    </td>
                    <td>
                        <p className='fw-normal mb-1'>{category.description}</p>

                    </td>


                    <td>
                        <MDBBtn color='link' rounded size='sm'>
                            Edit
                        </MDBBtn>
                    </td>
                </tr>
    ))}

            </MDBTableBody>
        </MDBTable>

        </div>
        </div>
                    </Stack>
                </Container>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddCategoryForm getCategories={getCategories} handleClose={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}
