


import {Box, Container, LinearProgress, Unstable_Grid2 as Grid} from '@mui/material';
import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
    Button,
    CardActions,

    CardHeader,
    Divider,

} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import {ComputerDesktopIcon, DeviceTabletIcon, ListBulletIcon, PhoneIcon, UsersIcon} from "@heroicons/react/20/solid";
import {useEffect, useState} from "react";
import adminServices from "../../../services/Admin/adminServices";
import {useNavigate} from "react-router-dom";

const now = new Date();

const Page = () => {
const[earning,setEarning]=useState(0);

    const navigate = useNavigate();
    const isLogin=localStorage.getItem("isLogged");
    const user = localStorage.getItem('user');

    const isAdmin = localStorage.getItem('isAdmin');

const getEarning=()=>{
       const data=adminServices.getEarning().then((res)=>{
              console.log(res)
              setEarning(res.totalEarning)

       });


}
    return (<>

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewBudget
                            difference={12}
                            positive
                            sx={{height: '100%'}}
                            value="$24k"
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewTotalCustomers
                            difference={16}
                            positive={false}
                            sx={{height: '100%'}}
                            value="1.6k"
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewTasksProgress
                            sx={{height: '100%'}}
                            value={75.5}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewTotalProfit
                            sx={{height: '100%'}}
                            value={"Rs. "+earning}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        lg={8}
                    >
                        <OverviewSales
                            chartSeries={[
                                {
                                    name: 'This year',
                                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                                },
                                {
                                    name: 'Last year',
                                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                                }
                            ]}
                            sx={{height: '100%'}}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                    >
                        <OverviewTraffic
                            chartSeries={[63, 15, 22]}
                            labels={['Desktop', 'Tablet', 'Phone']}
                            sx={{height: '100%'}}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                    >

                    </Grid>
                    <Grid
                        xs={12}
                        md={12}
                        lg={8}
                    >

                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>)
};



export default Page;


 const OverviewBudget = (props) => {
    const { difference, positive = false, sx, value } = props;

    return (
        <Card sx={sx}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            Budget
                        </Typography>
                        <Typography variant="h4">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'error.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <CurrencyDollarIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                {difference && (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Stack
                            alignItems="center"
                            direction="row"
                            spacing={0.5}
                        >
                            <SvgIcon
                                color={positive ? 'success' : 'error'}
                                fontSize="small"
                            >
                                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                            </SvgIcon>
                            <Typography
                                color={positive ? 'success.main' : 'error.main'}
                                variant="body2"
                            >
                                {difference}%
                            </Typography>
                        </Stack>
                        <Typography
                            color="text.secondary"
                            variant="caption"
                        >
                            Since last month
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};

OverviewBudget.prototypes = {
    difference: PropTypes.number,
    positive: PropTypes.bool,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired
};


const useChartOptions = () => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: 'solid'
        },
        grid: {
            borderColor: theme.palette.divider,
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                columnWidth: '40px'
            }
        },
        stroke: {
            colors: ['transparent'],
            show: true,
            width: 2
        },
        theme: {
            mode: theme.palette.mode
        },
        xaxis: {
            axisBorder: {
                color: theme.palette.divider,
                show: true
            },
            axisTicks: {
                color: theme.palette.divider,
                show: true
            },
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            labels: {
                offsetY: 5,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
                offsetX: -10,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        }
    };
};

const OverviewSales = (props) => {
    const { chartSeries, sx } = props;
    const chartOptions = useChartOptions();

    return (
        <Card sx={sx}>
            <CardHeader
                action={(
                    <Button
                        color="inherit"
                        size="small"
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <ArrowPathIcon />
                            </SvgIcon>
                        )}
                    >
                        Sync
                    </Button>
                )}
                title="Sales"
            />
            <CardContent>

            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <ArrowRightIcon />
                        </SvgIcon>
                    )}
                    size="small"
                >
                    Overview
                </Button>
            </CardActions>
        </Card>
    );
};

OverviewSales.protoTypes = {
    chartSeries: PropTypes.array.isRequired,
    sx: PropTypes.object
};

 const OverviewTasksProgress = (props) => {
    const { value, sx } = props;

    return (
        <Card sx={sx}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            gutterBottom
                            variant="overline"
                        >
                            Task Progress
                        </Typography>
                        <Typography variant="h4">
                            {value}%
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'warning.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <ListBulletIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                <Box sx={{ mt: 3 }}>
                    <LinearProgress
                        value={value}
                        variant="determinate"
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

OverviewTasksProgress.propTypes = {
    value: PropTypes.number.isRequired,
    sx: PropTypes.object
};

export const OverviewTotalCustomers = (props) => {
    const { difference, positive = false, sx, value } = props;

    return (
        <Card sx={sx}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            Total Customers
                        </Typography>
                        <Typography variant="h4">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'success.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <UsersIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                {difference && (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Stack
                            alignItems="center"
                            direction="row"
                            spacing={0.5}
                        >
                            <SvgIcon
                                color={positive ? 'success' : 'error'}
                                fontSize="small"
                            >
                                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                            </SvgIcon>
                            <Typography
                                color={positive ? 'success.main' : 'error.main'}
                                variant="body2"
                            >
                                {difference}%
                            </Typography>
                        </Stack>
                        <Typography
                            color="text.secondary"
                            variant="caption"
                        >
                            Since last month
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};

OverviewTotalCustomers.propTypes = {
    difference: PropTypes.number,
    positive: PropTypes.bool,
    value: PropTypes.string.isRequired,
    sx: PropTypes.object
};

const OverviewTotalProfit = (props) => {
    const { value, sx } = props;

    return (
        <Card sx={sx}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            Total Profit
                        </Typography>
                        <Typography variant="h4">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'primary.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <CurrencyDollarIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
            </CardContent>
        </Card>
    );
};

OverviewTotalProfit.propTypes = {
    value: PropTypes.string,
    sx: PropTypes.object
};

const useChartOptions2 = (labels) => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

const iconMap = {
    Desktop: (
        <SvgIcon>
            <ComputerDesktopIcon />
        </SvgIcon>
    ),
    Tablet: (
        <SvgIcon>
            <DeviceTabletIcon />
        </SvgIcon>
    ),
    Phone: (
        <SvgIcon>
            <PhoneIcon />
        </SvgIcon>
    )
};

export const OverviewTraffic = (props) => {
    const { chartSeries, labels, sx } = props;
    const chartOptions = useChartOptions2(labels);

    return (
        <Card sx={sx}>
            <CardHeader title="Traffic Source" />
            <CardContent>

                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    {chartSeries.map((item, index) => {
                        const label = labels[index];

                        return (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                {iconMap[label]}
                                <Typography
                                    sx={{ my: 1 }}
                                    variant="h6"
                                >
                                    {label}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    variant="subtitle2"
                                >
                                    {item}%
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
};

OverviewTraffic.propTypes = {
    chartSeries: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    sx: PropTypes.object
};


