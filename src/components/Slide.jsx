import { Box, Stack, Typography, Card, CardMedia, CardContent } from '@mui/material'
import slide1 from './image/slide1.svg'
import slide2 from './image/slide2.svg'
import slide3 from './image/slide3.svg'
import slide4 from './image/slide4.svg'

const cards = [
  {
    image: slide1
  },
  {
    image: slide2
  },
  {
    image: slide3
  },
  {
    image: slide4
  }
]

function App() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, margin: '80px 0 50px' }}>
      {cards.map((card) => (
        <Card key={card.title} sx={{ width: 346, borderRadius: '20px', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="200"
            image={card.image}
          />
          <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', padding: '24px' }}>
            <Stack direction="column" >
              <Box sx={{ width: '90px', borderRadius: '7px', textAlign:'center', backgroundColor: 'rgba(243, 237, 255, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}> <Typography color={'rgba(107, 107, 107, 1)'}>Kiến thức</Typography> </Box>
              <Typography variant='h1' sx = {{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(35, 35, 35, 1)', marginTop: '15px', marginBottom: ' 25px', width: '320px', fontSize: '20px' }}>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</Typography>
              <Typography variant="body2" sx = {{ fontFamily: 'Montserrat, sans-serif', color:'rgba(107, 107, 107, 1)' }}>Mar 23 • Andiez Le</Typography>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default App
