import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './ButtonStyle.css'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
    root: {
        background: "#a80505",
        color: "white",
        width:"125px",
        borderRadius:"5px",
        height:"50px",
        fontSize:"15px",

    },
    label: {
        textTransform: "capitalize"
    }
});

export default function UsedBotAlert() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const classes = useStyles();

    return (

        <div>
            <button className="ButtonStyle"
             variant="contained"  onClick={handleClickOpen}>
                ?מי זה הפרופסור
      </button>
      
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle dir={"rtl"}  id="alert-dialog-slide-title">{"האם ניסית כבר את הפרופסור?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText dir={"rtl"} id="alert-dialog-slide-description">בשביל לפתוח תקלה קודם יש להעזר בפרופסור, דוקטור התקלות שלנו הוא כבר ידע לעזור לכם בוודאות! כל מה שצריך לעשות זה לעקוב אחרי עולם התוכן שבו יש לכם תקלה וננסה לעזור לכם כמה שאפשר מבלי לפתוח תקלה ולחכות שנעזור לכם!</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        סגור
          </Button>
          
         
        
                </DialogActions>
            </Dialog>

            {/* <div style={{marginTop:"500px"}}><ErrorForm></ErrorForm></div> */}
        </div>
    );
}
