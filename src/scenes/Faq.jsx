import React from 'react'
import {Box, useTheme} from "@mui/material";
import { Header } from "../components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../theme";


const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions'/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography 
                        variant='h5'
                        color={
                            colors.greenAccent[500]
                        }
                        >
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rerum nemo blanditiis optio, 
                        hic modi expedita!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography 
                        color={colors.greenAccent[500]}
                        variant='h5'>
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rerum nemo blanditiis optio, 
                        hic modi expedita!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={
                            colors.greenAccent[500]
                        }
                        variant='h5'>
                        Yet Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rerum nemo blanditiis optio, 
                        hic modi expedita!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={
                            colors.greenAccent[500]
                        }
                        variant='h5'>
                        Last Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rerum nemo blanditiis optio, 
                        hic modi expedita!
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default Faq
