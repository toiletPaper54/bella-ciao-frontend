import React, {Component} from 'react'

import {Chatbot} from "react-chatbot-kit";
import config from "../chatbot/chatbot/config";
import ActionProvider from "../chatbot/chatbot/ActionProvider";
import MessageParser from "../chatbot/chatbot/MessageParser";
import {Button, Box, Modal} from '@material-ui/core';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import Icon from "@material-ui/core/Icon";
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            showButton: true,
            botWindow: false
        }
        this.HandleClick = this.HandleClick.bind(this);

    };

    HandleClick() {
        // alert(this.props.sss)
        console.log("Opened Takala")
        this.setState({
            showComponent: true, showButton: false, botWindow: false
        });

    }

    componentWillUnmount() {
        this.setState({
            showButton: true
        });
    }

    openBotWindow = () => {
        this.setState({
            botWindow: !this.state.botWindow
        });
    }

    render() {
        return (

            <div>
                <center>
                    {this.state.showButton ?
                        <div>
                            <Link to="worlds">
                                <button className="ButtonStyle"
                                        variant="contained" onClick={this.HandleClick}>
                                    פתיחת תקלה
                                </button>
                            </Link>
                        </div> :
                        null
                    }


                </center>

                <div className="chat" style={{bottom: "10px", marginRight: "10px", position: "fixed", right: 0}}>
                    <Button variant="contained" className="chat" onClick={this.openBotWindow}
                            style={{background: "#2898ec", color: "white"}}>
                        <span>?פססט.. צריך עזרה</span>
                        <Icon className={"fa fa-user-secret"} style={{fontSize: "55px", color: "white"}}></Icon>
                    </Button>

                </div>

                {this.state.botWindow ?
                    <Modal className="chat" open={this.state.botWindow} onClose={this.openBotWindow}><Box
                        className="chat"><Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={MessageParser}/></Box></Modal> :
                    null
                }

            </div>
        )
    }
}
