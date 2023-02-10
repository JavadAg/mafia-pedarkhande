import Container from '@mui/material/Container'
import bg1 from '../../assets/image/bg1.jpg'
import { Typography } from '@mui/material'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#777777',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundImage: `url(${bg1})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply'
      }}
    >
      <Typography
        position='absolute'
        top='0.3rem'
        sx={{ opacity: 0.5 }}
        left='0.4rem'
        fontSize='0.7rem'
      >
        1.0.2
      </Typography>
      {children}
    </Container>
  )
}

export default Layout
