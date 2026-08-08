import React from 'react';
import data from '../data';

function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container hero-inner">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">{data.name}</h1>
        <h2 className="hero-subtitle">{data.role}</h2>
        <p className="hero-tagline">{data.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
