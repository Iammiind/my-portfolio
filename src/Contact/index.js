import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import './style.css'
import sheep from '../images/sheep.png'
import FontAwesome from 'react-fontawesome'

export default class Skill extends Component {
    render() {
        return(
            <div className="contact-wrapper">
                <div className="container-wrapper">
                    <div className="contact-box">
                        <Row>
                            <Col sm="12" xs="12" md="4">
                                <Row>
                                    <Col xs="2" className="font-awesome-box">
                                        <FontAwesome className="font-awesome" name="envelope" />
                                    </Col>
                                    <Col xs="10">
                                        <div className="contact-label">
                                            E-MAIL
                                        </div>
                                        <div className="contact-content">
                                            onanong.pureemahawong@gmail.com
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" xs="12" md="4">
                                <Row>
                                    <Col xs="2" className="font-awesome-box">
                                        <FontAwesome className="font-awesome" name="phone-square" />
                                    </Col>
                                    <Col xs="10">
                                        <div className="contact-label">
                                            TELEPHONE NUMBER
                                        </div>
                                        <div className="contact-content">
                                            087-304-4704
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" xs="12" md="4">
                                <Row>
                                    <Col xs="2" className="font-awesome-box">
                                        <FontAwesome className="font-awesome" name="facebook-square" />
                                    </Col>
                                    <Col xs="10">
                                        <div className="contact-label">
                                            FACEBOOK
                                        </div>
                                        <div className="contact-content">
                                            <a href="https://facebook.com/iammiind">https://facebook.com/iammiind</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div> 
                    <div className="sheep-box">
                        <img className="pic-sheep" src={sheep} alt="sheep"/>
                    </div>
                </div>
            </div>
        )
    }
}