import React from "react"
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode, faDatabase, faMobile} from "@fortawesome/free-solid-svg-icons"


export const services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">  <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3> Frontend Development</h3>
                                <p> Your website will be built with new proven technologies.</p>
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">  <FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/></div>
                                <h3> Backend Development</h3>
                                <p>I approach each project individually and focus on the result.</p>
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

                                <h3> Programming Tutorials</h3>
                                <p>I teach peogramming for the ground up.</p>
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">  <FontAwesomeIcon className="icon" icon={faMobile} size="2x" /></div>

                                <h3>App Development</h3>
                                <p>I teach peogramming for the ground up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default services

