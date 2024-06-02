import {
  Box,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'
import slide1 from '../assets/image/slide1.svg'
import slide2 from '../assets/image/slide2.svg'
import slide3 from '../assets/image/slide3.svg'
import slide4 from '../assets/image/slide4.svg'
import CardFrame from '@/components/CardFrame'
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

function SlidesImg() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 2, sm: 2, md: 3 },
        justifyContent: 'space-evenly',
        margin: '80px 0 50px'
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.image}
          sx={{
            width: 346,
            borderRadius: '20px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
        >
          <CardMedia component="img" height="200" image={card.image} />
          <CardContent
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              padding: '24px'
            }}
          >
            <CardFrame />
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default SlidesImg
