import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import whiteLogo from '../../asset/image/whiteLogo.svg'
import blueLogo from '../../asset/image/blueLogo.svg'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

export default class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100) {
            this.setState({navVariant:'light', navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll', navBarItem:'navItemScroll'})
        } else if(window.scrollY<100) {
            this.setState({navVariant:'dark', navBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack:'navBackground', navBarItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}/> Md. Shahidul Bhuiyan</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/courses">COURCES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/portfolio">PORTFOLI</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
