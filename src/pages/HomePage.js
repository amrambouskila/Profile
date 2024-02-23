import React from 'react';
import RadarChart from '../components/RadarChart';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
            {/*<nav className="navbar">*/}
            {/*    /!* Assuming you're using <a> or <Link> for navigation *!/*/}
            {/*    <a href="#home" className="nav-item">Home</a>*/}
            {/*    <a href="#skills" className="nav-item">Skill Tree</a>*/}
            {/*    <a href="#resume" className="nav-item">Resume</a>*/}
            {/*    <a href="#projects" className="nav-item">Projects</a>*/}
            {/*    <a href="#contact" className="nav-item">Contact</a>*/}
            {/*</nav>*/}

            <section className="introduction">
                <img src="/images/me.jpg" alt="Amram" className="img-size"/>
                <p>Hi, I'm Amram, a Data Scientist and Machine Learning Engineer. Welcome to my portfolio!</p>
            </section>


            <section className="chart-section">
                <div className="chart-container">
                    <RadarChart/>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
