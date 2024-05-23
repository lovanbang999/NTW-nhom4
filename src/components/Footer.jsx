import { Box, Container, Typography, Grid } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LineWeight } from "@mui/icons-material";
import { Link } from "@mui/material";


export default function Footer() {
    return (
        <>
            <Grid container bgcolor='#F5F5F7'>
                <Container 
                    maxWidth ='lg'
                    sx={{
                        paddingTop: "60px"
                    }}>
                    <Grid item >
                        <Grid 
                        container 
                        rowSpacing={2} 
                        columnSpacing={15}>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Box marginBottom={'16px'}>
                                    <Box
                                        marginLeft={'40px'}
                                        sx={{
                                            width: "auto",
                                            height: "66px",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "20%",
                                            backgroundImage: `url(./public/react.svg)`,
                                        }}
                                    ></Box>
                                    <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}>Monkey Blogging</Typography>
                                </Box>                   
                                <Typography fontSize={'14px'} width={'320px'}>The best apratment and condominium management website today</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.5} lg={2.2}>
                                <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}
                                     sx={{
                                         paddingBottom: "16px"
                                        }}
                                    >Property</Typography>
                                <Typography fontSize={'14px'}>House</Typography>
                                <Typography fontSize={'14px'}>Apartment</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.5} lg={2.2}>
                                <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}
                                 sx={{
                                         paddingBottom: "10px"
                                        }}
                                        >Article</Typography>
                                <Typography fontSize={'14px'}>New Article</Typography>
                                <Typography fontSize={'14px'}>Popular Article</Typography>
                                <Typography fontSize={'14px'}>Most Read</Typography>
                                <Typography fontSize={'14px'}>Tips & Tricks</Typography>
                            </Grid>
                            <Grid item xs={'auto'} md={3} sm={6} lg={3.5}>
                                <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}
                                 sx={{
                                         paddingBottom: "10px"
                                        }}
                                >Contanct</Typography>
                                <Typography fontSize={'14px'}>No.24, Lane 165, Khuong Thuong Street</Typography>
                                <Typography fontSize={'14px'}>+(84) 392395851</Typography>
                                <Typography fontSize={'14px'}>tbviet2004@gmail.com</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item mb='20px' mt='36px' >
                        <Link href="/" color='#3C4563'>
                            <FacebookOutlinedIcon
                                sx={{
                                    mr: 3,
                                    ':hover': {
                                        cursor: 'pointer',
                                        color: '#00A7B4'
                                    }
                                }} />
                        </Link>
                        <Link href="/" color='#3C4563'>
                            <TwitterIcon
                                sx={{
                                    mr: 3,
                                    ':hover': {
                                        cursor: 'pointer',
                                        color: '#00A7B4'
                                    }
                                }} />
                        </Link>
                        <Link href="/" color='#3C4563'>
                            <InstagramIcon
                                sx={{
                                    mr: 3,
                                    ':hover': {
                                        cursor: 'pointer',
                                        color: '#00A7B4'
                                    }
                                }} />
                        </Link>
                    </Grid>
                    <Grid item >
                        <Box width='auto'
                            height='1px'
                            bgcolor='#0000001A'
                        />
                        <Grid 
                            item mt={'16px'}   
                            display={'flex'}
                            justifyContent={'center'}
                            >
                                <Typography color={'#888B97'} >© Copyright 2022 Homemie. All rights reserved.</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}