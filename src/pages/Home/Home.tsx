import { Box, Divider } from '@mui/material'
import React from 'react'
import { AboutHome } from './components/AboutHome'
import { BestSeller } from './components/BestSeller'
import Slider from './components/Slider'

export default function Home() {
  return (
    <Box>
      <Slider />
      <AboutHome />
      <Divider sx={{my:4}} />
      <BestSeller />
    </Box>
  )
}
