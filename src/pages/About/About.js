import React, {Component} from 'react'
import Footer from '../../footer/Footer'
import ReactDOM from 'react-dom'
import './About.css'
import solidityImage from '../../pictures/smart_contract.svg'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0, opacity: 1, zindex: 1};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateOpacity = this.updateOpacity.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.updateOpacity)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    updateOpacity() {
        var opa = (-1 * (window.scrollY - 1900) / 1900);
        if (opa <= 0) {
            this.setState({zindex: -1})
        }
        else {
            this.setState({zindex: 1})
        }
        this.setState({opacity: opa})
    }

    render() {
        return (
            <div className="Content-container">
                <div className="Content-column1">
                    <div className="Content-image-container" style={{
                        height: this.state.height - 70 + "px",
                        opacity: this.state.opacity, zIndex: this.state.zindex
                    }}>
                        <div className="Image-container" style={{height: this.state.height - 70 + "px"}}>
                            <div className="Content-image"/>
                        </div>
                    </div>
                </div>
                <div className="Content-column2">
                    <div className="Content-section-img"/>
                    <div className="Content-section">
                        <h1>Powered By The Ethereum Blockchain</h1>
                        <a href="http://www.ethereum.org">First You're Hearing Of It? Check It Out</a>
                        <h3>A decentralized platform that runs smart contracts: applications that run exactly as
                            programmed without any
                            possibility of downtime, censorship, fraud or third party interference.</h3>
                    </div>
                    <div style={{backgroundImage: 'url(' + 'https://i.gifer.com/7P6x.gif' + ')'}}
                         className="Content-section-img"/>
                    <div className="Content-section">
                        <h1>Backed By Smart Contracts</h1>
                        <h3>The ArtPiece.io platform consists of transferable digital assets
                            that are represented by smart contracts on the Ethereum blockchain</h3>
                    </div>
                    <div style={{backgroundImage: 'url(' + require('./../../pictures/art_gallery.jpg') + ')'}}
                         className="Content-section-img"/>
                    <div className="Content-section">
                        <h1>Blockchain Art</h1>
                        <h3>These cryptocollectable assets represent part ownership of a work of fine art and are
                            bought,
                            sold, and traded on the artpiece.io marketplace.
                        </h3>
                    </div>
                    <div style={{backgroundImage: 'url(' + require('./../../pictures/landing_background.jpg') + ')'}}
                         className="Content-section-img"/>
                    <div className="Content-section">
                        <h1>Own The Borat coin</h1>
                        <h3>Accumulate all of the tokens in a series to redeem for the actual art piece.</h3>
                    </div>
                </div>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div className="About-container">
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default About;
