import {styled} from "@mui/material/styles";
import {alpha, Box, Button, Container, InputBase, Stack, SvgIcon, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {PlusIcon} from "@heroicons/react/20/solid";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import * as React from "react";

const users=[
    {
        "_id": "659e20e8a02273409ab01bc5",
        "username": "Himanshu",
        "mobileNumber": "2222222222",
        "email": "mh@mh.com",
        "password": "$2b$10$/OXFEporWmD.jMN4HmwMTe6T4qnJaZqXnaDmszjXS2MZP7riKHibu",
        "address": [
            "Gurugram",
            "VWITS"
        ],
        "isAdmin": false,
        "orders": [
            {
                "_id": "659e9669b0f3e30b6aeee230",
                "status": 1,
                "deleted_at": null,
                "user": "659e20e8a02273409ab01bc5",
                "total": 1290,
                "dishes": [
                    {
                        "_id": "659e20bfa02273409ab01bc2",
                        "name": "Icecream Chicken",
                        "description": "Chicken with butter",
                        "image": "www.btck.jpg",
                        "price": 500,
                        "deleted_at": null,
                        "user": "659e20618d4329632d76d0e4",
                        "in_stock": true,
                        "ingredients": [
                            "butter",
                            "chicken"
                        ],
                        "created_at": "2024-01-10T04:44:47.309Z",
                        "updated_at": "2024-01-10T04:44:47.309Z",
                        "__v": 0
                    },
                    {
                        "_id": "659e8ca5d0dc7a4b710839bf",
                        "name": "Daal Makahani",
                        "description": "Daal",
                        "image": "www.btck.jpg",
                        "price": 790,
                        "deleted_at": null,
                        "user": "659e23d3a02273409ab01bd2",
                        "in_stock": true,
                        "ingredients": [
                            "Daal",
                            "Makahani"
                        ],
                        "created_at": "2024-01-10T12:25:09.945Z",
                        "updated_at": "2024-01-10T12:25:09.945Z",
                        "__v": 0
                    }
                ],
                "created_at": "2024-01-10T13:06:49.207Z",
                "updated_at": "2024-01-10T13:06:49.207Z",
                "__v": 0
            }
        ],
        "__v": 1
    },
    {
        "_id": "659e2219a02273409ab01bcb",
        "username": "Mohak",
        "mobileNumber": "2222242222",
        "email": "ok@ok.com",
        "password": "$2b$10$RwWBZ8mEbJreJ38AvA0dgeqbWWwhSD2zFFnbKQoKXVPuSpVwPOhla",
        "address": [
            "Gurugram",
            "VWITS"
        ],
        "isAdmin": false,
        "orders": [],
        "__v": 0
    },

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
const Users = () => {
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
                                    Users
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

                                </Stack>
                            </div>
                        </Stack>
                        <div style={{justifyContent: 'center', display: 'flex'}}>

                            <div style={{height: 600, width: 1200}}>

                                <MDBTable align='middle'>
                                    <MDBTableHead>
                                        <tr>
                                            <th scope='col'>Name</th>
                                            <th scope='col'>Mobile</th>
                                            <th scope='col'>Email</th>


                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>

                                        {users.map((user) => !user.isAdmin?(

                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>{user.username}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>{user.mobileNumber}</p>

                                                </td>

                                                <td>{user.email}</td>

                                            </tr>
                                        ):null)}

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
export default Users;

