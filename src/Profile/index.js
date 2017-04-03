import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import './style.css'

export default class Profile extends Component {
    render() {
        return(
            <div className="profile-wrapper">
                <div className="container-wrapper">
                    <div className="profile-bg">
                        <Row>
                            <Col sm="12" xs="12" md="5" className="profile-left">
                                <div className="profile-pic" />
                                <div className="profile-box">
                                        <div className="content-name"> Onanong </div>
                                        <div className="content-lastname"> Pureemahawong </div>
                                        <div className="content-nickname"> (Mind) </div>
                                        <div className="content-birth"> 30 April 1996 </div>
                                </div>
                            </Col>
                            <Col sm="12" xs="12" md="7">
                                <div className="profile2-box">
                                    <div className="content-box">   
                                        <span className="profile-span2">LANGUAGES</span><br/>
                                            <div className="profile-content">
                                                Thai &nbsp;<small className="content-span">(excellent)</small><br/>
                                                English &nbsp;<small className="content-span">(fairly)</small><br/>
                                            </div>
                                    </div>
                                    <div className="content-box">      
                                        <span className="profile-span2">EDUCATION</span><br/>
                                            <div className="profile-content">
                                                Chiang Mai University, College of Art, Media and Technology<br/>
                                                Bachelor of Science Program in Software Engineering
                                            </div>
                                    </div>
                                    <div className="content-box">        
                                        <span className="profile-span2">AWARD </span><br/>
                                            <div className="profile-content">
                                                2015 : Certification of Academic Excellent, Chiang Mai University
                                            </div>
                                    </div>
                                    <div className="content-box">
                                        <span className="profile-span2"> EXPERIENCE </span><br/>
                                            <div className="profile-content">
                                                September - December (2016) : Junior Front-End Web Developer at ZPRING Co.,Ltd.
                                            </div>
                                    </div>
                                    <div className="content-box">
                                        <span className="profile-span2"> GITHUB </span><br/>
                                            <div className="profile-content">
                                                <a href="https://github.com/Iammiind">https://github.com/Iammiind</a>
                                            </div>
                                    </div>
                                    <div className="content-box">    
                                        <span className="profile-span2">Hobbies </span><br/>
                                            <ul>
                                                <li>Surfing Social Media</li>
                                                <li>Watching Movies</li>
                                                <li>Reading Books</li>
                                                <li>Listening Music</li>
                                            </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}