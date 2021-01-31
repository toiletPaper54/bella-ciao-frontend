import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import GlitchForm from "./TakalotForm/GlitchForm";
import ProfessorWorldsContent from "./Professor/ProfessorWorldsContent";
import baseTemplate from "./components/baseTemplate";


function App() {
    return (
        <div className={["App", "scrollbar"]}>
            <Router>
                <Navbar></Navbar>
                <div className="App">
                    <div className="App__Aside"></div>
                    <div className="App__Form">
                        <Route path="/" component={baseTemplate}>
                        </Route>
                        <Redirect exact from="/" to="home"/>
                        <Route path="/home" component={HomePage}>
                        </Route>
                        <Route path="/worlds" component={ProfessorWorldsContent}>
                        </Route>
                        <Route path="/takala" component={GlitchForm}>
                        </Route>
                    </div>

                </div>
            </Router>


        </div>
    );
}

export default App;
