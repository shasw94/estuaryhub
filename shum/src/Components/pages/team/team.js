import React, { Component } from 'react';


class Team extends Component {
    render() {
        return (
            <div className="team-container">
                <div className="row">
                    <div className="content-wrapper">
                        <div className=" col-xs-12 content-section winter-blue">
                            <div className="tag-line">
                                Team
                            </div>
                            <div className="row team-individual text-center">
                                <div className="col-sm-6 profile ">
                                    <img src={require('../../../Assets/Images/umid.jpg')} className="img-responsive image" alt="Image" />
                                    <div className="overlay">
                                        <div className="text-name">Umid ghimire</div>
                                        <div className="description">
                                            <span className="text-center yellow">CO-FOUNDER</span><br />
                                            <span className="des">B Tech in Electronics and communication from MNNIT Allahabad, India </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 profile">
                                    <img src={require('../../../Assets/Images/shaswat.png')} className="img-responsive image" alt="Image" />
                                    <div className="overlay">
                                        <div className="text-name">Shaswat Pandey</div>
                                        <div className="description">
                                            <span className="text-center yellow">CO-FOUNDER</span><br />
                                            <span className="des"> B Tech in Electronics and communication from MNNIT Allahabad, India </span>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Team;
