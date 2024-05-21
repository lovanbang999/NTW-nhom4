import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import pcbig from './image/pcbig.svg'
import one from './image/one.svg'
import two from './image/two.svg'
import three from './image/three.svg'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
function NewestUpdate() {
  return (
    <Stack>
      <Stack >
        <Box sx={{ backgroundColor: 'rgba(0, 209, 237, 1)', width: '80px', height:'3px', marginTop: '50px', borderRadius: '100px' }}></Box>
        <Typography variant="h6" color="rgba(58, 16, 151, 1)" sx={{ fontSize: '50px', marginBottom: '30px', fontFamily: 'Montserrat, sans-serif' }}>
      Newest Update
        </Typography>
      </Stack>

      <Stack direction="row" spacing={6}>
        <Stack>
          <Box sx={{
            width: 720,
            height: 430,
            backgroundImage: `url(${pcbig})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginLeft: '-16px',
            borderRadius: '5%'
          }}>
          </Box>
          <Stack>
            <Box sx={{ width: '90px', borderRadius: '7px', textAlign:'center', backgroundColor: 'rgba(243, 237, 255, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif', marginTop: '25px' }}> <Typography>Kiến thức</Typography> </Box>
            <Typography variant='h1' sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(35, 35, 35, 1)', marginTop: '15px', width: '700px', fontSize: '30px' }}>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</Typography>
            <Typography variant="body2" sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(35, 35, 35, 1)', marginTop: '15px' }}>Mar 23 • Andiez Le</Typography>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2} sx ={{ background: 'rgba(243, 237, 255, 1)', width: '720px',
          backgroundSize: 'cover',
          backgroundPosition: 'center' }}>
          <Stack spacing={2} sx={{ backgroundColor: 'rgba(243, 237, 255, 1)' }}>
            {[one, two, three].map((image, index) => (
              <Card key={index} sx={{ display: 'flex', height: '180px', backgroundColor: 'rgba(243, 237, 255, 1)', boxShadow: 'none', paddingTop: '30px', paddingLeft: '20px' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, height: 180 }}
                  image={image}
                  alt={`Card ${index + 1}`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 0.5 }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ width: '90px', borderRadius: '7px', textAlign:'center', backgroundColor: 'rgba(255, 255, 255, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}> <Typography color={'rgba(107, 107, 107, 1)'}>Kiến thức</Typography> </Box>
                    <Typography variant='h6' sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(35, 35, 35, 1)', marginTop: '20px', width: '426px', fontSize: '18px', marginBottom: '10px' }}>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</Typography>
                    <Typography variant="body2" sx = {{ fontFamily: 'Montserrat, sans-serif', color:'rgba(35, 35, 35, 1)' }}>Mar 23 • Andiez Le</Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
export default NewestUpdate
