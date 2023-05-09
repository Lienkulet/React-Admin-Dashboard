import { Box } from '@mui/material'
import React from 'react'
import { Header, LineChart } from '../components'

const Line = () => {
  return (
    <Box m='20px'> 
        <Header title='Bar Chart' subtitle='Simple bar chart'  />
        <Box height='75vh'>
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line