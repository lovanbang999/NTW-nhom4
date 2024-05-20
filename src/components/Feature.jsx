import { Box, Stack, Typography } from '@mui/material'
import card from './image/card.svg'

function Feature() {
  return (
    <Stack>
      <Stack >
        <Box sx={{ backgroundColor: 'rgba(0, 209, 237, 1)', width: '80px', height:'3px', marginTop: '50px', borderRadius: '100px' }}></Box>
        <Typography variant="h6" color="rgba(58, 16, 151, 1)" sx={{ fontSize: '50px', marginBottom: '50px', fontFamily: 'Montserrat, sans-serif' }}>
Feature
        </Typography>
      </Stack>
      {/* Box sx={{ display: 'flex', flexWrap: 'wrap', margin: }} */}
      <Stack direction = 'row'>
        <Box sx={{
          width: 500,
          height: 390,
          backgroundImage: `url(${card})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '4%'
        }}>
          <Stack>
            <Stack direction="row" spacing={27} sx = {{ alignItems: 'center', marginTop: '30px', marginLeft: '26px' }}>
              <Box sx={{ width: '90px', borderRadius: '7px', textAlign:'center', backgroundColor: 'rgba(243, 237, 255, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}> <Typography>Kiến thức</Typography> </Box>
              <Typography variant="body2" sx = {{ fontFamily: 'Montserrat, sans-serif', color:'rgba(248, 249, 250, 1)' }}>Mar 23 • Andiez Le</Typography>
            </Stack>
            <Typography variant='h1' sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255, 255, 255, 1)', marginTop: '30px', width: '426px', fontSize: '30px', marginLeft: '30px' }}>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</Typography>
          </Stack>
        </Box>
        <Box sx={{
          width: 500,
          height: 390,
          backgroundImage: `url(${card})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '4%'
        }}>
          <Stack>
            <Stack direction="row" spacing={27} sx = {{ alignItems: 'center', marginTop: '30px', marginLeft: '26px' }}>
              <Box sx={{ width: '90px', borderRadius: '7px', textAlign:'center', backgroundColor: 'rgba(243, 237, 255, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}> <Typography>Kiến thức</Typography> </Box>
              <Typography variant="body2" sx = {{ fontFamily: 'Montserrat, sans-serif', color:'rgba(248, 249, 250, 1)' }}>Mar 23 • Andiez Le</Typography>
            </Stack>
            <Typography variant='h1' sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255, 255, 255, 1)', marginTop: '30px', width: '426px', fontSize: '30px', marginLeft: '30px' }}>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</Typography>
          </Stack>
        </Box>
        <Box sx={{
          width: 500,
          height: 390,
          backgroundImage: `url(${card})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '4%'
        }}>
          <Stack>
            <Stack direction="row" spacing={27} sx = {{ alignItems: 'center', marginTop: '30px', marginLeft: '26px' }}>
              <Box sx={{ width: '90px', borderRadius: '7px', textAlign:'center', backgroundColor: 'rgba(243, 237, 255, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}> <Typography>Kiến thức</Typography> </Box>
              <Typography variant="body2" sx = {{ fontFamily: 'Montserrat, sans-serif', color:'rgba(248, 249, 250, 1)' }}>Mar 23 • Andiez Le</Typography>
            </Stack>
            <Typography variant='h1' sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255, 255, 255, 1)', marginTop: '30px', width: '426px', fontSize: '30px', marginLeft: '30px' }}>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
} export default Feature
