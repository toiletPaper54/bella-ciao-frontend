import React from "react";
import Button from "@material-ui/core/Button";
import solutions from "./ProfessorConfig"
import ProfessorSolutions from "./ProfessorSolutions";

export default class ProfessorSystems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            system: ''
        }
        this.baseState = this.state
    }

    resetState = () => {
        this.setState(this.baseState)
        console.log("Initialized State")
    }

    loadIssues = (systemData, system) => async () => {
        await this.resetState()
        this.setState({
            showComponent: true,
            system: system
        })
        console.log("system selected is:" + this.state.system)

    };


    render() {
        return (
            <div>
                <center>
                    {
                        this.props.systemsData.sys.map((world) => (
                            <Button key={world}
                                    onClick={this.loadIssues(this.props.systemsData, world)}
                                    style={{
                                        color: "white",
                                        marginTop: "80px",
                                        marginRight: "85px",
                                        marginLeft: "85px",
                                        borderRadius: "100px",
                                        width: "130px",
                                        height: "60px"
                                    }}
                                    variant={"contained"} color="primary">{world}
                            </Button>

                        ))
                    }
                    {
                        this.state.showComponent ?
                            <ProfessorSolutions solutions={solutions[this.state.system]}></ProfessorSolutions> : null
                    }

                </center>
            </div>
        )
    }
}