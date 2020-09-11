import React from 'react';
import './App.scss';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Academics from "./pages/Academics";
import GlobalNavbar from "./components/GlobalNavbar";
import Footer from "./components/Footer";

const pages = [
    {
        name: 'Projects',
        path: 'projects',
        component: Projects
    },
    {
        name: 'Experience',
        path: 'experience',
        component: Experience
    },
    {
        name: 'Academics',
        path: 'academics',
        component: Academics
    },
];


function App() {
    return (
        <div className="App">
            <Router>
                <GlobalNavbar sitePages={pages}/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    {
                        pages.map(page => <Route path={'/' + page.path} component={page.component}/>)
                    }
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;