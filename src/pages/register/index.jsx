import {
  TextField,
  Box,
  Typography,
  Button,
  Avatar
} from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <Box width="100vw" height="100vh">
      <Box
        width="auto"
        height="auto"
        alignItems={'center'}
        position={'absolute'}
        left={'50%'}
        textAlign={'center'}
        sx={{ transform: 'translateX(-50%)' }}
      >
        <Box
          sx={{
            width: 'auto',
            height: '160px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(./public/react.svg)'
          }}
        ></Box>

        <Typography
          fontWeight={'700'}
          lineHeight={'48px'}
          variant="h4"
          pr="10px"
          pl="30px"
          color={'#2EBAC1'}
        >
            Monkey Blogging
        </Typography>
        {/* <form onSubmit={handleSubmit}> */}

        <Box marginTop={'24px'} textAlign={'left'}>
          <Typography
            variant="h4"
            fontSize={'16px'}
            fontWeight={'600'}
            color={'#3C4563'}
          >
             Fullname
          </Typography>
          <TextField
            placeholder=" Enter your fullname"
            variant="outlined"
            type="text"
            sx={{
              width: '500px',
              backgroundColor: ' white',
              borderRadius: '20px',
              marginTop: '8px',
              '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: '20px'
              },
              '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '14px 14px'
              }
            }}
          />
        </Box>
        <Box marginTop={'24px'} textAlign={'left'}>
          <Typography
            variant="h4"
            fontSize={'16px'}
            fontWeight={'600'}
            color={'#3C4563'}
          >
              Email address
          </Typography>
          <TextField
            placeholder="Enter your email address"
            variant="outlined"
            type="text"
            sx={{
              width: '500px',
              backgroundColor: ' white',
              borderRadius: '20px',
              marginTop: '8px',
              '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: '20px'
              },
              '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '14px 14px'
              }
            }}
          />
        </Box>
        <Box marginTop={'24px'} textAlign={'left'}>
          <Typography
            variant="h4"
            fontSize={'16px'}
            fontWeight={'600'}
            color={'#3C4563'}
          >
              Password
          </Typography>
          <TextField
            placeholder="Enter your password"
            variant="outlined"
            type= 'text'
            sx={{
              width: '500px',
              backgroundColor: ' white',
              borderRadius: '20px',
              marginTop: '8px',
              '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: '20px'
              },
              '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '14px 14px'
              }
            }}
          />
        </Box>

        <Box marginTop={'24px'} textAlign={'left'}>
          <Typography
            variant="h4"
            fontSize={'16px'}
            fontWeight={'600'}
            color={'#3C4563'}
          >
            Return password
          </Typography>
          <TextField
            placeholder="Enter your password"
            variant="outlined"
            type= 'text'
            sx={{
              width: '500px',
              backgroundColor: ' white',
              borderRadius: '20px',
              marginTop: '8px',
              '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: '20px'
              },
              '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '14px 14px'
              }
            }}
          />
        </Box>

        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-around'}
          width={'80%'}
          margin={'8px 0 8px 10%'}
        >
          <Button
            variant="contained"
            color="info"
            sx={{
              margin: '12px 0',
              width: '200px',
              lineHeight: '40px',
              background: 'linear-gradient(to right, #00A7B4, #A4D96C)'
            }}
          >
              Sign In
          </Button>
        </Box>
        <Box margin={'16px 0'}>
          <Box margin={'0 auto'} width={'100%'} border={'1px solid #ccc'}></Box>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          marginBottom={'16px'}
        >
          <AppleIcon sx={{ fontSize:'50px' }}/>
          <Avatar
            sx={{
              margin: '0 20px'
            }}
            alt="google"
            src="./public/google.svg"
          />
          <Avatar alt="facebook" src="./public/facebook.svg" />
        </Box>
        <Box
          sx = {{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography
            fontSize={'16px'}
            fontWeight={'500'}
            color={'#263238CC'}
            sx = {{ marginRight: '4px' }}
          >
                You have an account,
          </Typography>
          <NavLink
            to = "/login"
            style={{
              textDecoration: 'none'
            }}
          >
            <Typography
              fontSize={'16px'}
              fontWeight={'500'}
              color={'#A4D96C'}
            >
              Sign in.
            </Typography>
          </NavLink>
        </Box>
        {/* </form> */}
      </Box>
    </Box>
  )
}

export default Register
