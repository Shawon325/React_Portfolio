import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import team from '../../asset/image/team.png';
import { Link } from 'react-router-dom';

export default class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>  
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>  
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>  
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImage" src={team}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify coursesTitle">Web Development</h5>
                                    <p className="text-justify coursesDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="coursesDetails float-left" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>       
                    </Row>                    
                </Container>
            </Fragment>
        )
    }
}
