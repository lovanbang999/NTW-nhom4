import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import pcbig from '@/assets/image/pcbig.svg'
import one from '@/assets/image/one.svg'
import two from '@/assets/image/two.svg'
import three from '@/assets/image/three.svg'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useMediaQuery, useTheme } from '@mui/material'
import KnowledgeBT from './KnowledgeBT'

function Headline() {
  return (
    <Stack>
      <Stack>
        <Box sx={{ backgroundColor: 'rgba(0, 209, 237, 1)', width: '80px', height:'3px', marginTop: '50px', borderRadius: '100px' }}></Box>
        <Typography variant="h6" color="rgba(58, 16, 151, 1)" sx={{ fontSize: { xs: '30px', md: '50px' } }}>
            Newest Update
        </Typography>
      </Stack>
    </Stack>
  )
}

function Banner_Left() {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Stack spacing = {2}>
      <Box sx={{
        width: isMediumScreen ? '100%' : 720,
        height: isMediumScreen ? 300 : 430,
        backgroundImage: `url(${pcbig})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5%',
        marginLeft: '-16px',
        '@media (min-width: 960px) and (max-width: 1279px)': {
          width: 600
        }
      }}>
      </Box>
      <Stack>
        <Stack sx={{
          width: '90px',
          borderRadius: '7px',
          textAlign: 'center',
          backgroundColor: 'rgba(243, 237, 255, 1)',
          textTransform: 'none',
          marginTop: '25px'
        }}>
          <Typography>
        Kiến thức
          </Typography>
        </Stack>
        <Typography variant='h1'
          sx = {{
            color: 'rgba(35, 35, 35, 1)',
            marginTop: '15px',
            width: isMediumScreen ? '100%' : 700,
            fontSize: { xs: '24px', sm: '28px', md: '30px' },
            '@media (min-width: 960px) and (max-width: 1279px)': { // Media query cho 962px
              fontSize: '26px'
            }
          }}>
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </Typography>
        <Typography variant="body2"
          sx = {{
            color: 'rgba(35, 35, 35, 1)',
            marginTop: '15px'
          }}>
          Mar 23 • Andiez Le
        </Typography>
      </Stack>
    </Stack>
  )
}

function Slider() {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Stack direction="column"
      sx ={{
        background: 'rgba(243, 237, 255, 1)',
        width: isMediumScreen ? '100%' : 720,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
        '@media (min-width: 900px) and (max-width: 1400px)': { // Media query cho 962px
          width: 650
        }
      }}>
      <Stack spacing={2}
        sx={{
          backgroundColor: 'rgba(243, 237, 255, 1)'
        }}>
        {[one, two, three].map((image, index) => (
          <Card key={index} sx={{
            display: 'flex',
            backgroundColor: 'rgba(243, 237, 255, 1)',
            boxShadow: 'none',
            padding: '20px',
            borderRadius: '3%' }}>
            <CardMedia
              sx = {{
                width: '30%'
              }}
              component="img"
              image={image}
              alt={`Card ${index + 1}`}
            />
            <Stack sx={{ display: 'flex',
              flexDirection: 'column',
              width: '100%' }}>
              <CardContent>
                <KnowledgeBT />
                <Typography variant='h6' sx = {{
                  color: 'rgba(35, 35, 35, 1)',
                  marginTop: '8px',
                  width: '100%',
                  lineHeight: { xs: '20px', sm: '22px', md: '24px' },
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                  marginBottom: '10px' }}>
      Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </Typography>
                <Typography variant="body2"
                  sx = {{
                    color:'rgba(35, 35, 35, 1)'
                  }}>
                    Mar 23 • Andiez Le
                </Typography>
              </CardContent>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}
export default function NewestUpdate() {
  return (
    <Grid container spacing={4} alignItems='center'>
      <Grid item xs={12}><Headline/></Grid>
      <Grid item xs={12} md = {6}><Banner_Left/></Grid>
      <Grid item xs={12} md = {6}><Slider/></Grid>
    </Grid>
  )
}
