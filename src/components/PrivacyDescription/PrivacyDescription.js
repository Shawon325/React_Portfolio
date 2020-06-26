import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-4">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p className="serviceFooter">By viewing, using, or interacting in any manner with this site, including banners, advertising, or pop-ups, downloads, and as a condition of the website to allow his lawful viewing, Visitor forever waives all right to claims of damage of any and all description based on any causal factor resulting in any possible harm, no matter how heinous or extensive, whether physical or emotional, foreseeable or unforeseeable, whether personal or commercial in nature. For any jurisdictions that may now allow for these exclusions our maximum liability will not exceed the amount paid by you, if any, for using our website or service. Additionally, you agree not to hold us liable for any damages related to issues beyond our control, including but not limited to, acts of God, war, terrorism, insurrection, riots, criminal activity, natural disasters, disruption of communications or infrastructure, labor shortages or disruptions (including unlawful strikes), shortages of materials, and any other events which are not within our control. </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
