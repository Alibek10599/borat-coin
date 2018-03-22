import React, {Component} from 'react'
import './Contact.css'
import Footer from "../../footer/Footer"
import {Parallax, Background} from 'react-parallax';
var html = "<iframe width=\"540\" height=\"830\" src=\"https://my.sendinblue.com/users/subscribe/js_id/36kax/id/1\" frameborder=\"0\" scrolling=\"no\" allowfullscreen style=\"display: block;margin-left: auto;margin-right: auto;\"></iframe>"
var htmlMobile = "<iframe width=\"300\" height=\"560\" src=\"https://my.sendinblue.com/users/subscribe/js_id/36kax/id/2\" frameborder=\"0\" scrolling=\"no\" allowfullscreen style=\"display: block;margin-left: auto;margin-right: auto;\"></iframe>"


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0, html: html};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
        if (window.innerWidth <= 550) {
            this.setState({html: htmlMobile})
        }
        else {
            this.setState({html: html})
        }
    }

    render() {
        return (
            <header className="Contact-container">
                <div className="Contact-wrapper">
                    <Parallax
                        className="header"
                        slowerScrollRate="true"
                        bgImage={require('../../pictures/landing_background.jpg')}
                        bgImageAlt="art"
                        bgStyle={{marginTop: "20px"}}
                        strength={200}
                    >
                        <div className="Contact-content" dangerouslySetInnerHTML={{__html: this.state.html}}/>
                    </Parallax>
                </div>
            </header>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;