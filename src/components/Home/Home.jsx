import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, MapPin, Car, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/booking', { 
      state: { 
        location: document.querySelector('input[placeholder="Enter location"]').value 
      } 
    });
  };

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <Car className="logo-icon" />
          <span>InstaPark</span>
        </div>
        <nav className="nav">
          <a href="#home" className="active">Home</a>
          <a href="/booking">Bookings</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#login">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Parking Spot</h1>
          <p>Book secure parking spaces in advance, save time and money</p>
          
          <div className="search-box">
            <div className="search-input">
              <MapPin size={20} />
              <input type="text" placeholder="Enter location" />
            </div>
            <div className="search-input">
              <Clock size={20} />
              <input type="datetime-local" />
            </div>
            <button className="btn-primary" onClick={handleSearch}>Find Parking</button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <Search size={24} />
            </div>
            <h3>Search</h3>
            <p>Find parking spots near your destination</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <Clock size={24} />
            </div>
            <h3>Book</h3>
            <p>Reserve your spot in advance</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <Car size={24} />
            </div>
            <h3>Park</h3>
            <p>Follow directions and park with ease</p>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="featured-locations">
        <h2>Featured Parking Locations</h2>
        <div className="locations-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="location-card">
              <img 
                src={`https://source.unsplash.com/800x600/?parking,garage&sig=₹10{i}`} 
                alt={`Featured parking location ₹10{i}`} 
              />
              <div className="location-info">
                <h3>City Center Parking {i}</h3>
                <p><MapPin size={16} /> Downtown Area</p>
                <div className="availability">
                  <span className="available">12 spots available</span>
                  <span className="price">₹10/hr</span>
                </div>
                <button className="btn-secondary" onClick={() => navigate('/booking')}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {[
            {
              name: "Sarah Johnson",
              role: "Regular User",
              text: "InstaPark made finding parking so much easier! No more circling blocks looking for spots.",
              image: "https://source.unsplash.com/200x200/?portrait,woman&sig=1"
            },
            {
              name: "Michael Chen",
              role: "Business Traveler",
              text: "The convenience of booking parking in advance has saved me countless hours.",
              image: "https://source.unsplash.com/200x200/?portrait,man&sig=2"
            },
            {
              name: "Emily Davis",
              role: "City Resident",
              text: "Great prices and even better service. I use InstaPark for all my parking needs now.",
              image: "https://source.unsplash.com/200x200/?portrait,woman&sig=3"
            }
          ].map((testimonial, i) => (
            <div key={i} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Car className="logo-icon" />
              <span>InstaPark</span>
            </div>
            <p>Making parking easier, faster, and more convenient for everyone.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="/booking">Bookings</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>1234 Parking Avenue</li>
              <li>City, State 12345</li>
              <li>contact@instapark.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><LinkedIn size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 InstaPark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;