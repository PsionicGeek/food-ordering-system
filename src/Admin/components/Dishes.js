import {alpha, Box, Button, Container, InputBase, Stack, SvgIcon, Typography} from "@mui/material";
import {PlusIcon} from "@heroicons/react/20/solid";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import * as React from "react";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
//"dish": {
//  "id": 1,
//  "name": "Dish 1",
//  "description": "Dish 1 description",
//  "image": “www.image.jpg",
//  "price": 10,
//  "created_at": "2016-11-22T15:28:52.000Z",
//  "updated_at": "2016-11-22T15:28:52.000Z",
//  "deleted_at": null,
//  "category_id": 1,
//  "in_stock": true,
//  "ingredients": ["ingredient 1", "ingredient 2", "ingredient 3"]
// },
const dishes=[
    {
        id: 1,
        name: "Dish 1",
        description: "Dish 1 description",
        image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
        price: 10,
        created_at: "2016-11-22T15:28:52.000Z",
        updated_at: "2016-11-22T15:28:52.000Z",
        deleted_at: null,
        category_id: 1,
        in_stock: true,
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"]
    },
    {
        id: 2,
        name: "Dish 2",
        description: "Dish 2 description",
        image:"https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
        price: 10,
        created_at: "2016-11-22T15:28:52.000Z",
        updated_at: "2016-11-22T15:28:52.000Z",
        deleted_at: null,
        category_id: 1,
        in_stock: true,
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"]
    },
    {
        id: 3,
        name: "Dish 3",
        description: "Dish 3 description",
        image: "https://media.istockphoto.com/id/146807105/photo/food-pyramid-pie-chart.jpg?s=612x612&w=0&k=20&c=SX0hFBaED3Wwi0G2pLfhsYN1GRjlyK8wzqHf-qUyJOk=",
        price: 10,
        created_at: "2016-11-22T15:28:52.000Z",
        updated_at: "2016-11-22T15:28:52.000Z",
        deleted_at: null,
        category_id: 1,
        in_stock: true,
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"]
    }
];
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
const Dishes = () => {
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
                            <Stack spacing={1}>
                                <Typography variant="h4" paddingLeft={15}>
                                    Dishes
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
                        <div style={{justifyContent: 'center', display: 'flex'}}>

                            <div style={{height: 600, width: 1200}}>

                                <MDBTable align='middle'>
                                    <MDBTableHead>
                                        <tr>
                                            <th scope='col'>Name</th>
                                            <th scope='col'>Description</th>
                                            <th scope='col'>Id</th>
                                            <th scope='col'>Ingredients</th>
                                            <th scope='col'>Actions</th>

                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>

                                        {dishes.map((category) => (

                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src={category.image}
                                                            alt=''
                                                            style={{width: '45px', height: '45px'}}
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

                                                <td>{category.id}</td>
                                                <td>
                                                    <p className='fw-normal mb-1'>{category.ingredients.map((ingred)=>{
                                                        return ingred+", "
                                                    })}</p>

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
        </div>
    );
}
export default Dishes;
