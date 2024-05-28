import { Stack, Typography } from '@mui/material'

function Content() {
  return (
    <Stack>
      <Typography variant='h6' sx = {{
        color: 'rgba(35, 35, 35, 1)',
        marginTop: '8px',
        width: { xs: '90%', sm: '80%', md: 400 },
        lineHeight: ' 24px',
        fontSize: { xs: '16px', sm: '18px', md: '20px' },
        marginBottom: '10px' }}>
      Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </Typography></Stack>
  )
}

export default Content
