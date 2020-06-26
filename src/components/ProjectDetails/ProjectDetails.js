import React, { Component, Fragment } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

export default class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src="https://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Human Resource Management</h2>
                            <p className="serviceFooter">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                            <ul>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                            </ul>
                            <Button variant="info">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
