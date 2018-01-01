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
                        <div className="tag-line white">
                            <span className="red">THE CLOUD COMPANY</span> <br/> <span className="black">making<span className="yellow"> cloud </span> safer for <span className="yellow">businesses</span></span>
                        </div>
                        <div className="btn-text">
                            <div> How we do it </div>
                            
                        </div>
                        <div className="text white">
                         Application security encompasses measures or counter-measures that are taken during the development life-cycle to protect applications from threats that can come through flaws in the application design, development, deployment, upgrade or maintenance. Some basic techniques used for application security are: a) Input parameter validation, b) User/Role Authentication & Authorization, c) Session management, parameter manipulation & exception management, and d) Auditing and logging.
                        Information security protects information from unauthorized access to avoid identity theft and to protect privacy. Major techniques used to cover this are: a) Identification, authentication & authorization of user, b) Cryptography.
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Aim;
