import React from 'react'
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import Dashboard from './scenes/Dashboard'
import { Topbar, Sidebar } from './scenes/global'
import { Route, Routes } from 'react-router-dom'
import Team from './scenes/Team'
import Contacts from './scenes/Contacts'
import Invoices from './scenes/Invoices'
import Form from './scenes/Form'
import Calendar from './scenes/Calendar'
import Faq from './scenes/Faq'
import Bar from './scenes/Bar'
import { PieChart } from './components'
import Line from './scenes/Line'
import Geography from './scenes/Geography'


const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                <div className='app'>
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/team' element={<Team />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/invoices' element={<Invoices />} />
                            <Route path='/form' element={<Form />} />
                            <Route path='/calendar' element={<Calendar />} />  
                            <Route path='/faq' element={<Faq />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<PieChart />} />
                            <Route path='/line' element={<Line />} />
                            <Route path='/geography' element={<Geography />} />
                        </Routes>
                    </main>
                </div>
                        </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
