import React, {Component} from 'react'
import UsedBotAlert from './UsedBotAlert'
import mainLogo from '../bella_transperent.png'
import ProfessorWorldsContent from "../Professor/ProfessorWorldsContent";
import {Chatbot} from "react-chatbot-kit";
import config from "../chatbot/chatbot/config";
import ActionProvider from "../chatbot/chatbot/ActionProvider";
import MessageParser from "../chatbot/chatbot/MessageParser";
import {Button, Box, Modal} from '@material-ui/core';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import Icon from "@material-ui/core/Icon";
import {HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import {getInitialState} from "react-chatbot-kit/src/components/Chatbot/utils";

export default class baseTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            botWindow: false
        }

    };

    openBotWindow = () => {
        this.setState({
            botWindow: !this.state.botWindow
        });
    }

    render() {
        return (

            <div>
                <center>
                    <img src={mainLogo}/>
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
