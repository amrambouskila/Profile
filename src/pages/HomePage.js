import React from 'react';
import RadarChart from '../components/RadarChart';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div>

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
