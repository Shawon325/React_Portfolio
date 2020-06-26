import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'

export default class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails/>
                <Footer/>
            </Fragment>
        )
    }
}
