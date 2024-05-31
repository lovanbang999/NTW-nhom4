import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function KnowledgeBT() {
  return (
    <Box sx={{
      width: '90px',
      borderRadius: '7px',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      textTransform: 'none',
      paddiing: '8px'
    }}>
      <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
        Kiến thức
      </Typography>
    </Box>
  )
}
export default KnowledgeBT
