import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import mainLogo from '../bella.png'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    inputRoot: {
        color: 'inherit',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a80505',
        },
        secondary: {
            main: '#a80505',
        },
    },
});

export default function ButtonAppBar() {
    const [takalaId, settakalaId] = React.useState('');
    const classes = useStyles();

    const handleValue = (event) => {
        settakalaId(event.target.value);
        console.log(event.target.value)
    };

    const searchTakalaId = async () => {
        const data = {"takala": takalaId}
        axios.post("http://tst/home", {takala: takalaId}, {headers:{'Content-Type':'application/json'}})
            .then(response => {
                let api_response = response.data
                console.log(api_response)
            })
            .catch(error => {
                console.log(error)
                alert(" אופס קרתה שגיאה, אנא נסה לחפש שוב")
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/home" className="FormField__Link_Nav">
                            <Icon className="fa fa-home" color="inherit" aria-label="menu"></Icon>
                            {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                            {/*    <MenuIcon/>*/}
                            {/*    /!*<img src={mainLogo}style={{width:"150px",height:"35px"}} />*!/*/}
                            {/*</IconButton>*/}
                        </Link>

                        <Typography variant="h6" className={classes.title}>
                        </Typography>
                        <Button onClick={searchTakalaId} color="inherit">חפש אותי</Button>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                onChange={handleValue}
                                placeholder="חיפוש תקלה קיימת"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <Link to="/home" className="FormField__Link_Nav">
                            <Button color="inherit">התקלות שלי</Button>
                        </Link>

                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>

    );
}

