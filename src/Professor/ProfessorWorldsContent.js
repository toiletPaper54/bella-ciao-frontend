import React from "react";
import {withStyles} from "@material-ui/core";
import {worlds} from "./ProfessorWorldConfig";
import ProfessorSystems from "./ProfessorSystems";
import 'font-awesome/css/font-awesome.min.css';
import Icon from "@material-ui/core/Icon";
import UsedBotAlert from "../components/UsedBotAlert";

const useStyles = theme => ({
    div1: {
        display: "inline-block",
        marginRight: "70px"
    },

    spanstyler: {
        marginLeft: "70px"
    },
    icon1: {
        marginTop: "60px",
        marginLeft: "70px",
        display: "inline-block",
        color: "#14c944",
        fontSize: 80,
        cursor: "pointer"
    },
    icon2: {
        marginTop: "60px",
        display: "inline-block",
        // color: "#2898ec",
        fontSize: 80,
        cursor: "pointer"
    }
})


class ProfessorWorldsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nd: false,
            xt: false,
            ar: false,
            sys: []

        }
    }

    handleClick = (syss, array) => () => {
        console.log(syss, array)
        this.setState({
            nd: false, xt: false, ar: false, [syss]: true, sys: array
        });

    };

    render() {
        const {classes} = this.props
        return (
            <div>
                <center>
                    <UsedBotAlert/>
                    {
                        worlds.map((world) => (
                            <div className={classes.div1}>
                                <Icon className={[world.icon_1, classes.icon1]}
                                      color="primary"
                                      onClick={this.handleClick(world.official_name, world.systems)}>
                                </Icon>
                                <Icon className={[world.icon_2, classes.icon2]}
                                      color="primary"
                                      onClick={this.handleClick(world.official_name, world.systems)}> </Icon>
                                <div><span className={classes.spanstyler}>{world.name}</span></div>
                            </div>
                        ))
                    }

                    {this.state.nd ?
                        <ProfessorSystems systemsData={this.state.sys}></ProfessorSystems> : null}
                    {this.state.xt ?
                        <ProfessorSystems systemsData={this.state.sys}></ProfessorSystems> : null}
                    {this.state.ar ?
                        <ProfessorSystems systemsData={this.state.sys}></ProfessorSystems> : null}
                </center>
            </div>
        )
    }

}

export default withStyles(useStyles)(ProfessorWorldsContent)