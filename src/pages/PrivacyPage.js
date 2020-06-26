import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription';
import Footer from '../components/Footer/Footer';

export default class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Description"/>
                <PageTop pagetitle="Privacy Description"/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        )
    }
}