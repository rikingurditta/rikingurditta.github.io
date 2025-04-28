import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import FullPageRow from "../components/FullPageRow";
import Col from "react-bootstrap/Col";
import TitleRow from "../components/TitleRow";
import NewTabLink from "../components/NewTabLink";
import compile from "../TSRegex/js/compiletest";
import {wellFormedBrackets} from "../TSRegex/js/Lexical";
import donut from "../images/02_doughnut_end_of_lvl_2.png";
import flamingo from "../images/flamingo.png"
import joma from "../images/jomapumpkin2 viewport.png"
import joma_tortoise from "../images/jo ma tor toise.png"
import piggie from "../images/piggie.png"

let soundcloud_div_style = {
    fontSize: '10px',
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans -serif',
    fontWeight: '100',
};


export default function Projects() {
    let startRe = '\\w(i)([dgiknru]| ){8}\\1t{2}a+.*!?';
    let startString = 'rikin gurditta is cool!';

    let [justLoaded, setJustLoaded] = useState(true);
    let [accepted, setAccepted] = useState('');
    let [inputRegex, setInputRegex] = useState(startRe);
    let [inputText, setInputText] = useState(startString);

    function handleRegexChange(event) {
        let newRe = event.target.value;
        if (newRe !== inputRegex) {
            updateAccepted(newRe, inputText)
        }
        setInputRegex(newRe);

    }

    function handleTextChange(event) {
        setInputText(event.target.value);
        updateAccepted(inputRegex, event.target.value);
    }

    function updateAccepted(regex, text) {
        if (regex === '' || text === '') {
            setAccepted('');
        } else if (!wellFormedBrackets(regex)) {
            setAccepted('invalid regex');
        } else {
            console.log('regex:', regex);
            console.log('string:', text);
            let nfa = compile(regex).getNFA();
            console.log(nfa);
            setAccepted('' + nfa.checkString(text));
        }
    }

    if (justLoaded) {
        updateAccepted(startRe, startString);
        setJustLoaded(false);
    }

    return (
        <Container fluid>
            <TitleRow style={{backgroundColor: '#DDDDFF'}}>
                <Col md={4} className="my-auto">
                    <h1>Projects</h1>
                </Col>
                <Col md={4}/>
            </TitleRow>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h2>Regular Expression Compiler</h2>
                    <p>
                        My theory of computation class briefly mentioned <NewTabLink
                        href="https://en.wikipedia.org/wiki/Thompson%27s_construction">Thompson's
                        algorithm</NewTabLink>. It seemed interesting, so I decided to implement it as a compiler for a
                        subset of Perl RegEx. It supports quantifiers with <code>{"re{m,n}"}?+*</code>, character groups
                        with <code>[chars]</code>, union with <code>a|b</code>, the wildcards <code>.\w\d</code>, and
                        capture groups with <code>(parentheses)</code>.
                    </p>
                    <p>
                        <NewTabLink href="https://github.com/rikingurditta/TSRegex">Here's</NewTabLink> the GitHub repo!
                    </p>
                </Col>
                <Col md={4} className="my-auto">
                    <h4>Try it out!</h4>
                    <p>
                        Regex:
                        <br/>
                        <input value={inputRegex} onChange={handleRegexChange}
                               style={{width: '100%', fontFamily: 'monospace'}}/>
                    </p>
                    <p>
                        Text:
                        <br/>
                        <input value={inputText} onChange={handleTextChange} style={{width: '100%'}}/>
                    </p>
                    <p>
                        Accepted: <b><span
                        style={{color: accepted === 'true' ? '#11DD11' : '#FF1111'}}>{accepted}</span></b>
                    </p>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#EEEEFF'}}>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Bomberman</h2>
                    <p>
                        For my CSC207 - Software Design project, my group made three Android games that allowed for
                        customization and online syncing. Within the group, my partner and I made a clone of Bomberman.
                    </p>
                    <p>
                        <NewTabLink href="https://github.com/rikingurditta/csc207">Here's</NewTabLink> the GitHub repo!
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: 'center'}}>
                    <iframe title="Bomberman" width="100%" height="315px" src="https://www.youtube.com/embed/PJKzzpyJ2fo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </Col>
            </FullPageRow>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h2>Music</h2>
                    <p>
                        I've been producing electronic music and hip hop for a really long time. Here's something I
                        dropped a couple years ago, it samples Nas's verses from <i>The World Is Yours</i> as well as
                        clips of Brian Kernighan and DJ Premier.
                    </p>
                    <p>
                        <NewTabLink href="https://soundcloud.com/chocolate-milk-music">Here's</NewTabLink> my SoundCloud!
                    </p>
                </Col>
                <Col md={4} className="my-auto" style={{textAlign: 'center'}}>
                    <iframe title="Presidents" width="80%" height="350px" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/487898616&color=%236c4149&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    <div style={soundcloud_div_style}>
                        <NewTabLink href="https://soundcloud.com/chocolate-milk-music" title="Chocolate Milk"
                                    style={{color: '#cccccc', textDecoration: 'none',}}>Chocolate Milk</NewTabLink>> · <NewTabLink
                        href="https://soundcloud.com/chocolate-milk-music/presidents" title="Presidents"
                        style={{color: '#cccccc', textDecoration: 'none'}}>Presidents</NewTabLink></div>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#EEEEFF'}}>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>3D Modelling</h2>
                    <p>
                        One of my hobbies is 3D modeling. Here's some of my super serious super realistic work.
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: 'center'}}>
                    <Carousel style={{object_fit: "contain"}}>
                        <Carousel.Item>
                            <img src={flamingo} style={{height: '350px'}} alt="flamingo"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={joma} style={{height: '350px'}} alt="joma"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={joma_tortoise} style={{height: '350px', align: 'right'}} alt="tortoise"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={donut} style={{height: '350px'}} alt="donut"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={piggie} style={{height: '350px', align: 'right'}} alt="piggie"/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </FullPageRow>
        </Container>
    );
}