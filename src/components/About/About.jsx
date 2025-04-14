import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About InstaPark</h1>
          <p>Revolutionizing urban parking through innovative technology</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At InstaPark, we're committed to eliminating the stress of urban parking by 
            providing real-time spot availability, seamless reservations, and intelligent 
            navigation to available spaces.
          </p>
        </div>
        <div className="mission-image"></div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <div className="member-photo member1"></div>
            <h3>Alex Johnson</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <div className="member-photo member2"></div>
            <h3>Sarah Chen</h3>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <div className="member-photo member3"></div>
            <h3>Michael Rodriguez</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Parking Spots Available</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Cities Served</p>
          </div>
          <div className="stat-item">
            <h3>500,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon innovation"></div>
            <h3>Innovation</h3>
            <p>We constantly push boundaries to create smarter parking solutions.</p>
          </div>
          <div className="value-card">
            <div className="value-icon sustainability"></div>
            <h3>Sustainability</h3>
            <p>Reducing urban congestion and emissions through efficient parking.</p>
          </div>
          <div className="value-card">
            <div className="value-icon community"></div>
            <h3>Community</h3>
            <p>Building solutions that benefit both drivers and cities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;