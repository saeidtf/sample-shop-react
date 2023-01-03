import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import LayoutHeader from './LayoutHeader'
export default function Layout() {
  return (
    <Box sx={{maxWidth:'100%' , overflowX:'hidden', overflowY:'auto',height:'100vh'}}>
      <LayoutHeader />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  )
}
