import React, {useState, useEffect} from 'react';
import {Box, Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../components/SearchModal.css';
import '../components/ButtonStyle.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Symptoms, englishToHebrew, fieldsToLoad, symptomToTeam} from '../TakalotForm/indexes';
import Grid from '@material-ui/core/Grid';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        // display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '70px',
        marginTop: '50px'
    },
    root2: {
        textAlign: 'center',
        flexGrow: 1,
    },
    gridRoot: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "250px"
    },
    headers: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "600px"
    },
    select: {
        marginBottom: "15px",
        textAlign: 'center',
        width: "200px",
        hieght: "200px"
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    button: {
        background: "black",
        color: "white",
        marginLeft: "240px",
        marginTop: "40px",
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    submit: {
        marginTop: "40px",
        marginBottom: "40px"
    },
}));

export default function InputAdornments() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [Symptom, setSymptom] = useState('');
    const [load, setLoad] = React.useState(false);
    const history = useHistory()
    const [values, setValues] = React.useState({
        ErrorHeader: '',
        Errorinfo: '',
        Team: '',
        UserName: '',
        ComputerName: '',
        Password: '',
        file: '',
        System: '',
        Voip: '',
        Simptom: '',
        Env: '',
        Tziah: '',
        Totality: '',
        Department: '',
        VapiData: undefined,
        id: ''
    });

    useEffect(() => {
        axios.get("http://tst/takala")
            .then(response => {
                let api_response = response.data
                setValues({...values, id: api_response})
            })
            .catch(error => {
                console.log(error)
                alert(" אופס קרתה שגיאה, אנא נסה לחפש שוב")
            })
    }, [load])

    const handleOpen = () => {
        setOpen(true);
        setLoad(true);

    };
    const handleClose = () => {
        history.push("/home")
        setOpen(false);
    };
    const handleSymptom = (event) => {
        setSymptom(event.target.value);
        console.log(event.target.value)
    };
    const handleTeam = (event) => {
        setValues({...values, Team: event.target.value});
        console.log(event.target.value)
    };
    const symptomHandler = (symptom) => {
        return (
            <div className={classes.root2}>

                {
                    <center>
                        <InputLabel className={classes.select} id="demo-simple-select-label">צוות יעד</InputLabel>
                    </center>
                }
                {
                    < Select
                        className={classes.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.Team}
                        // defaultValue={}
                        onChange={handleTeam}
                    >
                        {symptomToTeam.map((team) => (
                            team[Symptom] ? <MenuItem value={team[Symptom]} key={team[Symptom]}>
                                {team[Symptom]}
                            </MenuItem> : null
                        ))}
                    </Select>
                }
                <br></br>

                {
                    <TextField multiline value={values.ErrorHeader} onChange={handleChange("ErrorHeader")}
                               className={classes.headers}
                               required={true} dir={"rtl"} label={englishToHebrew["ErrorHeader"]} variant="filled"/>
                }
                <br></br>

                {
                    <TextField multiline value={values.Errorinfo} onChange={handleChange("Errorinfo")}
                               className={classes.headers}
                               required={true} dir={"rtl"} label={englishToHebrew["Errorinfo"]} variant="filled"/>
                }
                <Grid container spacing={3}>
                    {
                        symptom.map((field) => (
                            <Grid item xs>
                                <TextField multiline value={values.field} onChange={handleChange(field)}
                                           className={classes.paper}
                                           required={true} dir={"rtl"} label={englishToHebrew[field]} variant="filled"/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
    const handleChange = prop => event => {

        setValues({...values, [prop]: event.target.value});
        console.log(values)
    };
    const submitForm = () => {
        setValues({...values, Team: symptomToTeam[Symptom]});
        console.log(values)
        console.log("Form submited with:" + values)
    }


    return (
        <center>

            <div className={classes.root}>

                <Modal open={open} onClose={handleClose}>
                    <Box className="SearchModal">
                        <center>
                            <h2> יצירת תקלה חדשה </h2>
                            <h4>{values.id}<span> :מזהה התקלה</span></h4>
                            <InputLabel className={classes.select} id="demo-simple-select-label">סימפטום</InputLabel>
                            <Select
                                className={classes.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Symptom}
                                onChange={handleSymptom}
                            >
                                {Symptoms.map((symptom) => (
                                    <MenuItem value={symptom} key={symptom}>
                                        {symptom}
                                    </MenuItem>

                                ))}
                            </Select>
                        </center>
                        {Symptom ? symptomHandler(fieldsToLoad[Symptom]) : null}
                        <center>
                            <Link to="/home">
                                <button className={["ButtonStyle"]}
                                        style={{marginTop: "20px", marginBottom: "30px"}}
                                        variant="contained" onClick={submitForm}>
                                    פתיחת תקלה
                                </button>
                                {/*<Button*/}
                                {/*    onClick={submitForm}*/}
                                {/*    variant="contained" className={classes.submit}>*/}
                                {/*    צור תקלה*/}
                                {/*</Button>*/}
                            </Link>
                        </center>
                    </Box>
                </Modal>
            </div>
        </center>

    );
}
