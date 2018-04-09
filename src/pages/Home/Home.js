import React, {Component} from 'react'
import './Home.css'
import Footer from "../../footer/Footer"
import {Parallax, Background} from 'react-parallax';
import {SocialIcon} from 'react-social-icons';
import {Redirect} from 'react-router'
import history from "../../history/History";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0, redirect: 0};
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

    handleOnClick = () => {
        this.setState({redirect: 1});
    }

    render() {
        if (this.state.redirect === 1) {
            this.setState({redirect: 0});
            history.push('/');
            return (<Redirect to={{
                pathname: '/contact'
            }}/>);
        }
        let style;
        if (this.state.width > 600) {
            style = {width: this.state.width + "px", height: this.state.height + "px"}
        }
        else {
            style = {width: "100%", height: "600px"};
        }
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
                    <div style={style}>
                        <div className="Prototypes" style={{height: this.state.height + 70 + "px"}}>
                            <div className="Prototypes-image-container">
                                <div className="Prototypes-image"/>
                            </div>
                        </div>
                        <div className="Explainer">
                            <h1>Buy, Sell, and Trade<br/>Collectable Art on the Blockchain.<br/></h1>
                            <h2>Redeem Tokens For Works of Art</h2>
                            <button onClick={this.handleOnClick}>SIGN UP TODAY</button>
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
        this.state = {width: 0, height: 0, redirect: 0};
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
                {/*<Sidebar/>*/}
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Home;