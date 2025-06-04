import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import Container from "react-bootstrap/Container";
import NewTabLink from "../components/NewTabLink";
import lastfm_logo from "../images/lastfm.png";
import goodreads_logo from "../images/goodreads.svg";
import linkedin_logo from "../images/linkedin.svg";
import github_logo from "../images/github-mark.svg";

export default function Footer(props) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center "
                 style={{minHeight: '30vh', backgroundColor: '#EEEEEE'}}>
                <Col md={4} className="my-auto">
                    <h2>Contact</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p style={{textAlign: 'center'}}>
                        <NewTabLink href="https://github.com/rikingurditta">
                            <img src={github_logo}
                                 alt="github profile"
                                 style={{width: '64px'}}/>
                        </NewTabLink>
                        {"\t"}
                        <NewTabLink href="https://www.linkedin.com/in/rikin-gurditta">
                            <img src={linkedin_logo}
                                 alt="linkedin profile"
                                 style={{width: '64px'}}/>
                        </NewTabLink>
                        {"\t"}
                        <NewTabLink href="https://www.last.fm/user/galactustrombon">
                            <img src={lastfm_logo}
                                 alt="lastfm profile"
                                 style={{width: '64px'}}/>
                        </NewTabLink>
                        {"\t"}
                        <NewTabLink href=" https://www.goodreads.com/rikin">
                            <img src={goodreads_logo}
                                 alt="goodreads profile"
                                 style={{width: '64px'}}/>
                        </NewTabLink>
                    </p>
                    <p style={{fontSize: '12px', textAlign: 'center'}}>
                        Personal email: <a href="mailto:rikingurditta@gmail.com">rikingurditta@gmail.com</a>
                        <br/>
                        School email: <a
                        href="mailto:rikin.gurditta@mail.utoronto.ca">rikin.gurditta@mail.utoronto.ca</a>
                        <br/>
                        I use any pronouns
                    </p>
                </Col>
            </Row>
        </Container>
    );
}