import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceFooter">Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceFooter">Email Address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceFooter">Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceFooter">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="serviceFooter"><FontAwesomeIcon icon={faEnvelope} /> shawon@gmail.com</p>
                            <p className="serviceFooter"><FontAwesomeIcon icon={faPhone} /> +8801828667369</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
