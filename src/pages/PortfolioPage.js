import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';

export default class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pagetitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        )
    }
}
