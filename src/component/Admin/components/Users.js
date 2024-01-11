import {styled} from "@mui/material/styles";
import {alpha, Box, Button, Container, InputBase, Stack, SvgIcon, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {PlusIcon} from "@heroicons/react/20/solid";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import * as React from "react";
import adminServices from "../../../services/Admin/adminServices";
import {useEffect, useState} from "react";





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
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    }
    ,[])
    const getUsers=()=>{
        adminServices.getUsers().then((data)=>{
console.log(data)
            setUsers(data)
        });




    }
    return (
        <div style={{
            width: '80vw',
            height: '100vh',
            overflowX: 'hidden',
            overflowY: 'scroll',
            '&-ms-overflow-style:': {
                display: 'none',
            },
        }
        }>
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

