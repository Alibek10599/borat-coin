import React, {Component} from 'react'
import './Footer.css'
import {Redirect} from 'react-router'
import history from "../history/History";
import terms from '../pictures/terms.jpg'
import privacy from '../pictures/privacy.jpg'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: 0, destination: '/'};
    }

    handleOnClick = (string) => {
        this.setState({redirect: 1, destination: string});
    }

    openInNewTab = (url) =>{
        window.open(url, '_blank');
    }

    render() {
        if (this.state.redirect === 1) {
            this.setState({redirect: 0});
            history.push('/');
            return (<Redirect to={{
                pathname: this.state.destination
            }}/>);
        }
        return (
            <div className="Footer-container">
                <div className="col col1">
                    <div className="innercol">
                        <p>
                            BORAT COIN LTD
                        </p>
                        <p>
                            COPYRIGHT © 2021
                        </p>
                        <p>
                            All Rights Reserved
                        </p>
                    </div>
                </div>
                <div className="col col2">
                    <div className="innercol">
                        <p>
                            More:
                        </p>
                        <p onClick={() => this.handleOnClick("/about")}>
                            About
                        </p>
                        <p onClick={() => this.handleOnClick("/contact")}>
                            Contact
                        </p>
                    </div>
                </div>
                <div className="col col3">
                    <div className="innercol">
                        <p>
                            Terms
                        </p>
                        <p onClick={() =>this.openInNewTab(terms)}>
                            Legal
                        </p>
                        <p onClick={() =>this.openInNewTab(privacy)}>
                            Privacy
                        </p>
                    </div>
                </div>
                <div className="col col4">
                    <div className="innercol">

                        <br/>
                        <a href="https://twitter.com/theboratcoin">
                            Twitter
                        </a>
                        <br/><br/>
                        <a href="https://www.github.com/Alibek10599">
                            Github
                        </a>
                        <br/><br/>
                        <i src=""></i>
                        <a href="http://www.tiktok.com/@boratcoin">
                            Tik-Tok
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
