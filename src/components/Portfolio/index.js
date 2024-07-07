import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import PSF from '../../assets/images/waterdrop.png'
import Map from '../../assets/images/map.png'
import Marketplace from '../../assets/images/Marketplace.png'
import Award from '../../assets/images/First-Place.png'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="project-grid">
                <div className="project-container">
                        <div className="image">
                            <img src={ Marketplace }alt="logo"/>
                        </div>
                        <div className="text">
                        <h2 className="project-title">Bronco Swap</h2>
                            <p className="project-description">
                            Worked in 4-person team to develop a university marketplace Vue.js app with datatbase interaction using Firebase OAuth and Firestore as a part of <a className="devpost-link" href="https://devpost.com/software/bronco-swap" target="_blank">H4H 2024</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="image">
                            <img src={ Award }alt="logo"/>
                        </div>
                        <div className="text">
                        <h2 className="project-title">Capital Insights</h2>
                            <p className="project-description">
                            Created a Vue.js app that utlizes INRIX APIs, webscraping, and a statistical algorithm to evaluate the quality of storefront property listings in San Francisco. Won 1st place out of 300+ participants at <a className="devpost-link" href="https://devpost.com/software/capital-insights" target="_blank">INRIX Hack 2023</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="image">
                            <img src={ PSF }alt="logo"/>
                        </div>
                        <div className="text">
                        <h2 className="project-title">Project Safe Water</h2>
                            <p className="project-description">
                            Led 6-person team to develop website that evaluated water safety and accessibility across 48 states, using flask/python, API calls, and HMTL/CSS/JS for <a className="devpost-link" href="https://devpost.com/software/project-safe-water" target="_blank">SCU Hack For Humanity 2023</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="image">
                            <img src={ Map }alt="logo"/>
                        </div>
                        <div className="text">
                        <h2 className="project-title">Transportation Optimized</h2>
                            <p className="project-description">
                            Created website that optimized travel times between two destinations based on traffic and construction, using Node.js, geocoding and INRIX APIs for <a className="devpost-link" href="https://devpost.com/software/transportation-optimized-task-list" target="_blank">INRIX Hack 2022</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Loader type="ball-spin-fade-loader"/>
        </>
    );
}

export default Portfolio;