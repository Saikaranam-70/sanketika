import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Book Your Seat Section */}
      <div className="section book-seat">
        <h2>Book Your Seat</h2>
        <p>
          Reserve your seat now to secure your spot at Sanketika Polytechnic College. Fill out the form below, and our admissions team will get in touch with you shortly.
        </p>
        <form className="seat-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select id="course" name="course" required>
              <option value="">Choose a course</option>
              <option value="cse">Computer Science Engineering</option>
              <option value="ece">Electronics and Communication Engineering</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
            </select>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>

      {/* Location Section with Google Map */}
      <div className="section location">
        <h2>Our Location</h2>
        <p>
          Visit us at our campus located in the heart of Visakhapatnam. We are easily accessible by public and private transport.
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.231230874035!2d83.218485315355!3d17.530902299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3411c7a2b5f8d5%3A0x5f5f5f5f5f5f5f5f!2sSanketika%20Polytechnic%20College!5e0!3m2!1sen!2sin!4v1633080000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="College Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="section contact-details">
        <h2>Contact Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <h3>Address</h3>
            <p>
              Sanketika Polytechnic College,<br />
              Visakhapatnam, Andhra Pradesh,<br />
              India - 530041
            </p>
          </div>
          <div className="detail-item">
            <h3>Phone</h3>
            <p>+91 123 456 7890</p>
          </div>
          <div className="detail-item">
            <h3>Email</h3>
            <p>info@sanketikapolytechnic.edu</p>
          </div>
          <div className="detail-item">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;