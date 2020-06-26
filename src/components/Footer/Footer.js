import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube,  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon className="" icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon className="" icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceFooter">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="serviceFooter"><FontAwesomeIcon icon={faEnvelope} /> shawon@gmail.com</p>
                            <p className="serviceFooter"><FontAwesomeIcon icon={faPhone} /> +8801828667369</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">Shawon.com &copy; 2020-2021</a>
                </Container>
            </Fragment>
        ) 
    }
}
