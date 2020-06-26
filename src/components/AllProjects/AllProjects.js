import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardTitleDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
