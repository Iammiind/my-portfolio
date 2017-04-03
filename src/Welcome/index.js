import React, { Component } from 'react'
import './style.css'

export default class Welcome extends Component {
    render() {
        return(
            <div className="welcome-wrapper">
                <div className="container-wrapper welcome-sheep"> 
                    <div className="welcome-banner">
                        <div className="text-welcome">
                            WELCOME TO
                        </div>
                        <div className="text-portfolio">
                            MIND PORTFOLIO
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}