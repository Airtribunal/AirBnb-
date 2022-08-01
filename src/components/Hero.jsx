import React from 'react';
import grid from './grid.svg';

const Hero = () => {
    return (
        <section className="hero">
            <img src={grid} alt="" />
            <div className="hero-info">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led
                    by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    );
}

export default Hero;
