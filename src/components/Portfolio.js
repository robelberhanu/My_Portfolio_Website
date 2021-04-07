import React from "react";
import loanshark from "../images/loan_shark.png";
import gant from "../images/gant.png";
import profile from "../images/Profile.png";
import wits from "../images/witsS.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// React Popup Box
import {PopupManager, PopupboxContainer, PopupboxManager} from "react-popupbox"; 
import "react-popupbox/dist/react-popupbox.css"

export const Portfolio = () => {

    //Portfolio Popup

    const openPopupboxPortfolio = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={profile} alt="Personal Developer Portfolio.."/>
        <p>lorem10</p>
        <b>Github:</b><a className="hyper-link" onClick = {() => window.open("https://github.com/Robel-robel/My_Portfolio_Website") }>https://github.com/Robel-robel/My_Portfolio_Website</a>
        </>
        )
        PopupboxManager.open({content}) 
    }

    const popupboxConfigPortfolio ={
        titleBar: {
            enable: true,
            text: "Personal Developer Portfolio"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

      //Wits Popup

      const openPopupboxWits = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={wits} alt="Personal Developer Portfolio.."/>
        <p>lorem10</p>
        <b>Github:</b><a className="hyper-link" onClick = {() => window.open("https://github.com/Robel-robel/Crunch-Time") }>https://github.com/Robel-robel/Crunch-Time</a>
        </>
        )
        PopupboxManager.open({content}) 
    }

    const popupboxConfigWits ={
        titleBar: {
            enable: true,
            text: "Communicaton System For Wits Sports"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     // Gant chart popup

     const openPopupboxGant = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={gant} alt="Gant Chart.."/>
        <p>lorem10</p>
        <b>Github:</b><a className="hyper-link" onClick = {() => window.open("https://github.com/Robel-robel/Code-Bat") }>https://github.com/Robel-robel/Code-Bat</a>
        </>
        )
        PopupboxManager.open({content}) 
    }

    const popupboxConfigGant ={
        titleBar: {
            enable: true,
            text: "Gant Chat producer for chemical engineers"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxLoan = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={loanshark} alt="LoanShark.."/>
        <p>lorem10</p>
        <b>Github:</b><a className="hyper-link" onClick = {() => window.open("https://github.com/Robel-robel/Android-LoanShark-App") }>https://github.com/Robel-robel/Android-LoanShark-App</a>
        </>
        )
        PopupboxManager.open({content}) 
    }

    const popupboxConfigLoan ={
        titleBar: {
            enable: true,
            text: "Android App for loan sharks"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={profile} alt="My Developer Portfolio.." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxWits}>
                        <img className="portfolio-image" src={wits} alt="Wits Sports Council Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxGant}>
                        <img className="portfolio-image" src={gant} alt="Gant Chart" />
                        <div className="overflow">
                        </div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxLoan }>
                        <img className="portfolio-image" src={loanshark} alt="LoanShark App" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPortfolio}/>
            <PopupboxContainer {...popupboxConfigWits}/>
            <PopupboxContainer {...popupboxConfigGant}/>
            <PopupboxContainer {...popupboxConfigLoan}/>


        </div>
    )
}
export default Portfolio;
