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
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3
        }}>
          <Typography
            fontWeight="bold"
            sx = {{
              background: 'linear-gradient(to right, #66CDAA, #87CEFA)',
              WebkitBackgroundClip: 'text', // Cho trình duyệt Webkit
              WebkitTextFillColor: 'transparent', // Loại bỏ màu chữ gốc
              backgroundClip: 'text', // Cho các trình duyệt khác
              textFillColor: 'transparent',
              mt: 6,
              fontSize: { xs: 40, sm: 50, md: 60 }
            }}>
      Monkey Blogging
          </Typography>
        </Box>
        <Box
          sx= {{
            display: { xs: 'column', sm: 'column', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '65%',
            margin: '50px auto',
            gap: '20px'
          }}>
          <Box>
            <Box
              sx={{
                width: 'auto',
                minWidth: 250,
                height: '160px',
                mb: { xs: 3, sm: 5, md: 7 },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(./public/monkey.svg)'
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
                mb: 10,
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
                  width: { xs: 350, sm: 470, md: 500 },
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
                  width: { xs: 350, sm: 470, md: 500 },
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
                  width: { xs: 350, sm: 470, md: 500 },
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
                  width: { xs: 350, sm: 470, md: 500 },
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
                  margin: '30px auto',
                  width: '200px',
                  lineHeight: '40px',
                  background: 'linear-gradient(to right, #66CDAA, #87CEFA)',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(to right, #00A7B4, #A4D96C)',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                    '&:active': {
                      background: 'linear-gradient(to right, #66CDAA, #87CEFA)'
                    }
                  }
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
