import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Player, BigPlayButton } from 'video-react'

export default class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageCourse">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3 className="CourseFullTitle">Full Dynamic Website With Admin Panel</h3>
                                    <h5 className="CourseSubTitle">Total Lecture=30</h5>
                                    <h5 className="CourseSubTitle">Total Student=30</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="CourseDescription">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h1 className="serviceName">Skill You Get</h1>
                            <ul>
                                <li className="serviceFooter"> Unlimited Dynamic Product Category </li>
                                <li className="serviceFooter"> Admin Can Add, Edit, Delete Product Dynamically  </li>
                                <li className="serviceFooter"> Dynamic shipping point facilities </li>
                                <li className="serviceFooter"> Admin can send special offer for special user </li>
                                <li className="serviceFooter"> App force update system form server </li>
                                <li className="serviceFooter"> User can make wishlist  </li>
                                <li className="serviceFooter"> Unlimited Dynamic Product Category </li>
                                <li className="serviceFooter"> Unlimited Dynamic Product Category </li>
                            </ul>
                            <Button variant="info">More Info</Button>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col> 
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
