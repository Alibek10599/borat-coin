import React, {Component} from 'react'
import './Home.css'
import Footer from "../../footer/Footer"
import {Parallax, Background} from 'react-parallax';
import {SocialIcon} from 'react-social-icons';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
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
    }

    render() {
        return (
            <div style={{background: "white"}}>
                <Parallax
                    className="header"
                    slowerScrollRate="true"
                    bgImage={require('../../pictures/landing_background.jpg')}
                    bgImageAlt="art"
                    bgStyle={{marginTop: "20px"}}
                    strength={200}
                >
                    <div style={{width: this.state.width + "px", height: this.state.height + "px"}}>
                        <div className="Prototypes" style={{height: this.state.height+70 + "px"}}>
                            <div className="Prototypes-image-container">
                                <div className="Prototypes-image"/>
                            </div>
                        </div>
                        <div className="Explainer">
                        <h1>Buy, Sell, And Trade <br />Blockchain Art</h1>
                        <h2>Redeem Tokens For Piece</h2>
                            <button>SIGN UP TODAY</button>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
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
    }

    render() {
        return (
            <div>
                <div className="Home-sidebar" style={{width: this.state.width - 30 + "px"}}>
                    <SocialIcon className="Sidebar-social" style={{width: "25px", height: "25px", margin: "10px"}}
                                color="white"
                                url="http://twitter.com/artpieceio"/>
                    <SocialIcon className="Sidebar-social" style={{width: "25px", height: "25px", margin: "10px"}}
                                color="white"
                                url="http://telegram.com/artpieceio"/>
                    <SocialIcon className="Sidebar-social" style={{width: "25px", height: "25px", margin: "10px"}}
                                color="white"
                                url="http://facebook.com/artpieceio"/>
                    <SocialIcon className="Sidebar-social" style={{width: "25px", height: "25px", margin: "10px"}}
                                color="white"
                                url="http://github.com/artpieceio"/>
                </div>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <div className="preload" style={{display: "block"}}>
                    <div className="parallax1 parallax1-before"/>
                    <div className="parallax1 parallax2-before"/>
                    <div className="parallax1 parallax3-before"/>
                </div>
                <Sidebar/>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Home;