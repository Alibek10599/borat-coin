import React, {Component} from 'react'
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="Footer-container">
                <div className="col col1">
                    <div className="innercol">
                        <p>
                            ARTPIECE.IO
                        </p>
                        <p>
                            COPYRIGHT © 2018
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
                        <p>
                            About
                        </p>
                        <p>
                            Contact
                        </p>
                    </div>
                </div>
                <div className="col col3">
                    <div className="innercol">
                        <p>
                            Terms
                        </p>
                        <p>
                            Legal
                        </p>
                        <p>
                            Privacy
                        </p>
                    </div>
                </div>
                <div className="col col4">
                    <div className="innercol">

                        <br/>
                        <a href="https://www.google.com">
                            Twitter
                        </a>
                        <br/><br/>
                        <a href="https://www.google.com">
                            Github
                        </a>
                        <br/><br/>
                        <a href="https://www.google.com">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;