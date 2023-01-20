import Container from '@mui/material/Container'
import Header from './Header/Header'
import bg1 from '../../assets/image/bg1.jpg'

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
      {children}
    </Container>
  )
}

export default Layout
