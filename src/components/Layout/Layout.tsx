import Container from '@mui/material/Container'
import React from 'react'
import Header from './Header/Header'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#dfdfdf',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <Header />
      {children}
    </Container>
  )
}

export default Layout
