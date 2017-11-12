import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollUpButton from "react-scroll-up-button";

class Aim extends Component {
    render() {
        return (
            <div className="Aim row">
                <div className="content-wrapper">
                    <div className=" col-xs-12 content-section">
                        <ScrollUpButton />
                        <div className="tag-line">
                            What we do
                        </div>
                        <div className="row">
                            <div className="col-sm-4 contain">
                                <img src={require('../../../Assets/Images/development.svg')} className="img-responsive image" alt="Image" />
                                <div className="middle">
                                    <div className="text">Development</div>
                                </div>
                            </div>
                            <div className="col-sm-4 contain">
                                <img src={require('../../../Assets/Images/security.svg')} className="img-responsive image" alt="Image" />
                                <div className="middle">
                                    <div className="text">Security</div>
                                </div>
                            </div>
                            <div className="col-sm-4 contain">
                                <img src={require('../../../Assets/Images/service.svg')} className="img-responsive image" alt="Image" />
                                <div className="middle">
                                    <div className="text">Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Aim;
