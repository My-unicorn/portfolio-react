import React from "react";
import { makeStyles, Typography, Box, Container, Grid } from "@material-ui/core";
import portrait from "./assets/portrait.jpg";
import rothko from "./assets/rothko.jpg";
import firminGirard from "./assets/firmin-girard.jpg";
import sanfrancisco from "./assets/san-francisco.jpg";
import nantes from "./assets/nantes.jpg";
import Title from "../Title";
import { motion, useTransform, useViewportScroll, useMotionValue } from "framer-motion"

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        width: "100%",
        padding: theme.spacing(20, 0, 15, 0),
        background: "#fafafa",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        "@media (max-width: 600px)": {
            padding: theme.spacing(14, 0, 5, 0),
        },
        "& .MuiGrid-grid-md-8": {
            paddingRight: theme.spacing(10),
            [theme.breakpoints.down(1100)]: {
                paddingRight: theme.spacing(0),
            }
        }
    },
    gridImages:{
        position:"relative",
        "@media (max-width: 600px)":{
            display: "none"
        }
    }
}))

export default function About() {
    const classes = useStyles();

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  
    return (
        <div id="about" className={classes.root}>
            <Container maxWidth="md">
                <Title>
                    <Typography>Hello, I'm Victoire</Typography>
                </Title>
                <Grid container>
                    <Grid item md={6} >
                        <Typography paragraph className={classes.description}>
                            <Box lineHeight={2}>
                                Certified Full-Stack Web Developer at UC Berkeley, I am equipped with the skills needed to create effective application from creation to execution.
                                My goal is to develop powerful products with fast user interface and optimized performance while getting an attractive UI/UX interfaces.
                             </Box>
                            <Box lineHeight={2}>
                                My background in Art History makes me think creatively with an artistic outlook. I think of
                                the interface like a painting where I seek to create harmony and a good balance between the
                                color and components. My specialities are React.js and material UI to get a clean and modern design.
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item md={6} className={classes.gridImages}>
                        <motion.img
                            src={portrait}
                            alt="Portrait"
                            style={{
                                height: "180px",
                                position: "absolute",
                                top: "20px",
                                left: "120px",
                                filter: "grayscale(60%)",
                                scale
                            }}
                        />
                        <motion.img
                            src={sanfrancisco}
                            alt="San Francisco"
                            style={{
                                height: "120px",
                                position: "absolute",
                                top: "300px",
                                left: "90px",
                                filter: "grayscale(60%)",
                                scale
                            }}
                        />
                        <motion.img
                            src={nantes}
                            alt="Nantes"
                            style={{
                                height: "55px",
                                position: "absolute",
                                top: "260px",
                                left: "350px",
                                filter: "grayscale(60%)",
                                scale

                            }}
                        />
                        <motion.img
                            src={firminGirard}
                            alt="Firmin Girard"
                            style={{
                                height: "115px",
                                position: "absolute",
                                top: "70px",
                                left: "360px",
                                filter: "grayscale(60%)",
                                scale

                            }}
                        />
                        <motion.img
                            src={rothko}
                            alt="Rothko"
                            style={{
                                height: "170px",
                                position: "absolute",
                                top: "360px",
                                left: "270px",
                                scale
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

