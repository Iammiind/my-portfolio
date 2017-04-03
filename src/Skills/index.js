import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import './style.css'
import js from '../images/js.png'
import html from '../images/html.png'
import java from '../images/java.png'
import react from '../images/react.png'
import angular from '../images/angularjs.png'
import mvc from '../images/mvc.png'
import redux from '../images/redux.png'
import respone from '../images/respone.png'

export default class Skill extends Component {
    render() {
        return(
            <div className="skill-wrapper">
                <div className="container-wrapper">
                    <div>
                        <Row>
                            <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={js} alt="js" />
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">JavaScript</div>
                                            <div className="content-level-skill">Intermediate</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                             <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={html} alt="html" />
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">HTML/CSS</div>
                                            <div className="content-level-skill">Intermediate</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                             <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={java} alt="java" />
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">Java</div>
                                            <div className="content-level-skill">Basic</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={react} alt="rreact"/>
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">React</div>
                                            <div className="content-level-skill">Basic</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                         <Row>
                             <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={angular} alt="angular" />
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">AngularJS</div>
                                            <div className="content-level-skill">Basic</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={redux} alt="redux"/>
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">Redux</div>
                                            <div className="content-level-skill">Experienced</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                          <Row>
                             <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className=" skill-pic " src={mvc} alt="mvc" />
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">MVC</div>
                                            <div className="content-level-skill">Experienced</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="12" xs="12" md="6">
                                <div className="skill-box">
                                    <Row>
                                        <Col sm="6" xs="12" md="6" className="skill-pic-wrapper">
                                            <img className="skill-pic" src={respone} alt="respone" />
                                        </Col>
                                        <Col sm="6" xs="12" md="6" className="skill-content">
                                            <div className="content-name-skill">Responesive Web</div>
                                            <div className="content-level-skill">Experienced</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}