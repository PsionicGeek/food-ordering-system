import {alpha, Box, Button, Container, InputBase, Stack, SvgIcon, Tab, Tabs, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {PlusIcon} from "@heroicons/react/20/solid";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import * as React from "react";
import {styled} from "@mui/material/styles";
import PropTypes from "prop-types";
import adminServices from "../../../services/Admin/adminServices";
import {useEffect} from "react";

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


const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const [value, setValue] = React.useState(0);
useEffect(()=>{
    getOrders();
},[]);
    const getOrders=()=>{
        adminServices.getOrders().then((data)=>{
            setOrders(data);
        })
            .catch((err)=>{
                console.log(err)
            })
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                    Orders
                                </Typography>

                            </Stack>
                            <div>
                                <Stack paddingRight={15} direction={'row'}>
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon/>
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{'aria-label': 'search'}}
                                        />
                                    </Search>

                                </Stack>
                            </div>
                        </Stack>
                        <Box sx={{ width: '100%' }} paddingLeft={15} paddingRight={15}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Pending" {...a11yProps(0)} />
                                    <Tab label="Completed" {...a11yProps(1)} />
                                    <Tab label="Cancelled" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <div style={{justifyContent: 'center', display: 'flex'}}>

                                    <div style={{height: 600, width: 1100}}>

                                        <MDBTable align='middle'>
                                            <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>Id</th>
                                                    <th scope='col'>User</th>
                                                    <th scope='col'>Date & Time</th>
                                                    <th scope='col'>Price</th>
                                                    <th scope='col'>Dishes</th>
                                                    <th scope='col'>Status</th>
                                                    <th scope='col'>Actions</th>

                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>

                                                {orders.map((order) => (

                                                 order.status==1|| order.status==2||order.status==3? <tr>
                                                     <td>
                                                         <div className='d-flex align-items-center'>

                                                             <div className='ms-3'>
                                                                 <p className='fw-bold mb-1'>{order._id}</p>

                                                             </div>
                                                         </div>
                                                     </td>
                                                     <td>
                                                         <p className='fw-normal mb-1'>{order.user}</p>

                                                     </td>
                                                     <td>
                                                         <p className='fw-normal mb-1'>{order.created_at}</p>

                                                     </td>
                                                     <td>
                                                         <p className='fw-normal mb-1'>{order.total}</p>

                                                     </td>
                                                     <td>
                                                         <p className='fw-normal mb-1'>{order.dishes.map((d)=>{
                                                             return (
                                                                 <div>
                                                                     <p className='fw-normal mb-1'>{d.dish.name + ' x '
                                                                         + d.quantity}</p>
                                                                 </div>
                                                             )
                                                         })}</p>

                                                     </td>

                                                     <td>{order.status == 1 ? 'Pending' : order.status == 2 ? 'In Progress' : 'Ready'}</td>
                                                     <td>
                                                         {
                                                             order.status == 1 ?
                                                                 <Stack direction='row'>
                                                                     <MDBBtn color='link' rounded size='sm'>
                                                                         Accept
                                                                     </MDBBtn>
                                                                     <MDBBtn color='link' rounded size='sm'>
                                                                         Reject
                                                                     </MDBBtn>
                                                                 </Stack>:
                                                                 order.status == 2 ?
                                                                        <Stack >
                                                                            <MDBBtn color='link' rounded size='sm'>Ready?? </MDBBtn>

                                                                        </Stack> :
                                                                        <Stack >
                                                                            <MDBBtn color='link' rounded size='sm'> Completed?</MDBBtn>

                                                                        </Stack>
                                                         }
                                                         <MDBBtn color='link' rounded size='sm'>

                                                         </MDBBtn>
                                                     </td>
                                                 </tr> : null
                                                ))}

                                            </MDBTableBody>
                                        </MDBTable>

                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <div style={{justifyContent: 'center', display: 'flex'}}>

                                    <div style={{height: 600, width: 1100}}>

                                        <MDBTable align='middle'>
                                            <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>Id</th>
                                                    <th scope='col'>User</th>
                                                    <th scope='col'>Date & Time</th>
                                                    <th scope='col'>Price</th>
                                                    <th scope='col'>Dishes</th>
                                                    <th scope='col'>Status</th>

                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>

                                                {orders.map((order) => (

                                                    order.status==4? <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>

                                                                <div className='ms-3'>
                                                                    <p className='fw-bold mb-1'>{order.id}</p>

                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.user_id}</p>

                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.created_at}</p>

                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.total}</p>

                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.dishes.map((dish)=>{
                                                                return (
                                                                    <div>
                                                                        <p className='fw-normal mb-1'>{dish.dish_id + ' x ' + dish.quantity}</p>
                                                                    </div>
                                                                )
                                                            })}</p>

                                                        </td>

                                                        <td>Delivered</td>

                                                    </tr> : null
                                                ))}

                                            </MDBTableBody>
                                        </MDBTable>

                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <div style={{justifyContent: 'center', display: 'flex'}}>

                                    <div style={{height: 600, width: 1100}}>

                                        <MDBTable align='middle'>
                                            <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>Id</th>
                                                    <th scope='col'>User</th>
                                                    <th scope='col'>Date & Time</th>
                                                    <th scope='col'>Price</th>
                                                    <th scope='col'>Dishes</th>
                                                    <th scope='col'>Status</th>

                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>

                                                {orders.map((order) => (

                                                    order.status==5? <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>

                                                                <div className='ms-3'>
                                                                    <p className='fw-bold mb-1'>{order.id}</p>

                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.user_id}</p>

                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.created_at}</p>

                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.total}</p>

                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{order.dishes.map((dish)=>{
                                                                return(
                                                                    <div>
                                                                    <p className='fw-normal mb-1'>{dish.dish_id + ' x ' + dish.quantity}</p>
                                                                    </div>
                                                                )
                                                            })}</p>

                                                        </td>

                                                        <td>Cancelled</td>

                                                    </tr> : null
                                                ))}

                                            </MDBTableBody>
                                        </MDBTable>

                                    </div>
                                </div>
                            </CustomTabPanel>
                        </Box>

                    </Stack>
                </Container>
            </Box>
        </div>
    );
}
export default Orders;

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
