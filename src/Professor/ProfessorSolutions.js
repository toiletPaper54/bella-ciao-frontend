import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {Button} from '@material-ui/core';
import GlitchForm from '../TakalotForm/GlitchForm';
import 'font-awesome/css/font-awesome.min.css';
import Icon from "@material-ui/core/Icon";
import {HashRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
        fontSize: 18,
        fontFamily: "sans-serif"

    },
    root: {
        width: '100%',
    },
    handIcon: {
        marginLeft: "10px"
    },
    popover: {
        width: "80%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(4),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

export default function ProfessorSolutions(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(true);
    const [visible, setvisible] = React.useState(false);

    const openForm = async () => {
        await setvisible(false)
        setvisible(true)
    }

    const handleClose = () => {
        setAnchorEl(false);
    };


    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.root}>
            <center>
                <Popover id={id}
                         anchorEl={anchorEl}
                         open={open}
                         onClose={handleClose}
                         anchorOrigin={{vertical: 'center', horizontal: 'center'}}
                         transformOrigin={{vertical: 'center', horizontal: 'center'}}
                         className={classes.root}
                >
                    {
                        props.solutions.popoverTitles.map((answer, index) => (

                            <Accordion className={classes.root} key={answer}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    dir={"rtl"}>

                                    <Typography dir={"rtl"} style={{fontSize: "22px"}}
                                                className={classes.typography}>
                                        <Icon className={["fa fa-hand-o-left", classes.handIcon]}
                                              color="primary">
                                        </Icon>
                                        {answer}</Typography>
                                </AccordionSummary>
                                <Typography dir={"rtl"}
                                            className={classes.typography}>{props.solutions.popoverContents[index][answer]}</Typography>
                                <center>
                                    <Link to="/takala" className="FormField__Link_Nav">
                                        <Button onClick={openForm} style={{
                                            background: "#a80505",
                                            color: "white",
                                            marginBottom: "30px",
                                            marginTop: "30px"
                                        }}>פתיחת
                                            תקלה</Button>
                                    </Link>
                                </center>
                            </Accordion>
                        ))

                    }
                </Popover>

                {/*{*/}
                {/*    visible ?  <GlitchForm/> : false*/}
                {/*}*/}
            </center>
        </div>
    )
}