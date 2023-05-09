import React from 'react'
import { GeographyChart, Header } from '../components'
import { Box } from '@mui/material'

const Geography = () => {
  return (
    <Box m='20px'> 
        <Header title='Bar Chart' subtitle='Simple bar chart'  />
        <Box height='75vh'>
            <GeographyChart />
        </Box>
    </Box>
  )
}

export default Geography