import {
  TextField,
  Box,
  Typography,
  Button
} from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Contact() {

  return (
    <Box>
      <Header />
      <Box
        width="100%"
        height="auto"
      >
        <Box
          sx= {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '70%',
            margin: '0 auto'
          }}>
          <Box>
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
              variant="h3"
              pr="10px"
              pl="30px"
              color={'#2EBAC1'}
            >
            </Typography>
            <Box
              sx = {{
                my : 13,
                textAlign: 'center'
              }}>
              <Typography color={'#2EBAC1'}
                sx = {{
                  fontWeight: 400,
                  fontSize: '35px',
                  lineHeight:'48px' }}>
                  Don&apos;t be shy!
              </Typography>
              <Typography color={'#2EBAC1'}
                sx = {{
                  fontWeight: 200,
                  fontSize: '35px',
                  lineHeight:'48px'
                }}>
                Let&apos;s say hi to us.
              </Typography>
            </Box>
          </Box>
          <Box>
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
                placeholder=" Name"
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
                placeholder="email@gmail.com"
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
                Phone number
              </Typography>
              <TextField
                placeholder="Enter your phone number"
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
                Let us know your feeling
              </Typography>
              <TextField
                placeholder="Your message"
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
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Contact
