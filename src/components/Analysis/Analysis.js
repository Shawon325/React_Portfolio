import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

export default class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[
                    {Technology:'Java', Projects:100},
                    {Technology:'Kotlin', Projects:20},
                    {Technology:'SQL', Projects:35},
                    {Technology:'Bootstrap', Projects:90},
                    {Technology:'Jquery', Projects:85},
                    {Technology:'React', Projects:65},
                    {Technology:'PHP', Projects:100},
                    {Technology:'Angular', Projects:50}
            ]
        }
    }
    render() {
        var blue = "rgba(8, 139, 247, 0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceTitle">Technology Used</h1>
                    <Row>
                        <Col style={{ width:'100%', height:'300px' }} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                <Tooltip/>
                                <Bar dataKey="Projects" fill={blue}>

                                </Bar>
                            </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.

                                I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.

                                Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
