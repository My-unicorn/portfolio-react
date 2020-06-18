import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Toolbar } from "@material-ui/core";
import "../style.css"

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 0,
        paddingLeft: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    navbar: props => ({
        width: "100%",
        zIndex: 100,
        position: props.isSticky ? "fixed" : "initial",
        top: props.isSticky ? 0 : "",
        background: "#fafafa",
    }),
    underline: {
        width: "100%",
        height: "1px",
        borderRadius: "4px",
        background: "#000",
        position: "absolute",
        bottom: "-3px"
    },
    menuItem: {
        fontSize: theme.spacing(3.6),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        fontFamily: "'Poiret One', cursive",
        fontWeight: 1000,
        "@media (max-width: 600px)":{
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            fontSize: theme.spacing(3)
        },
        "&.selected":{
            fontSize: theme.spacing(4),
            "@media (max-width: 600px)":{
                fontSize: theme.spacing(3.4)
            }
        }
    }
}))
export default function NavBar({ isSticky }) {
    const classes = useStyles({ isSticky: isSticky });
    const [selected, setSelected] = useState(0);

    const navbar = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 }
    }

    const menu = [
        {
            menuItem: "VB",
            to: "header"
        },
        {
            menuItem: "Works",
            to: "works"
        },
        {
            menuItem: "About",
            to: "about"

        },
        {
            menuItem: "Skills",
            to: "skills"
        },
        {
            menuItem: "Contact",
            to: "contact"
        }
    ];

    return (
        <div className={classes.navbar}>
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                variants={navbar}
                center={"x"}
                background={"#fff"}
            >
                <Toolbar className={classes.toolbar}>
                    <AnimateSharedLayout>
                        <ol style={{ transform: "translateZ(0)" }}>
                            {menu.map(({ menuItem, to }, i) => (
                                <Link to={to}
                                    smooth={true}
                                    spy={true}
                                    duration={600}
                                >
                                    <motion.li
                                        animate
                                        key={i}
                                        className={`${classes.menuItem} ${i === selected && "selected"}`}
                                        onClick={() => setSelected(i)}
                                    >
                                        {i === selected && (
                                            <motion.div
                                                layoutId="underline"
                                                className={classes.underline}
                                            />
                                        )}
                                        {menuItem}
                                    </motion.li>
                                </Link>
                            ))}
                        </ol>
                    </AnimateSharedLayout>
                </Toolbar>
            </motion.div>
        </div>
    )
}
