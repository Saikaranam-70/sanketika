import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <>
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Book Your Seat Section */}
      <div className="section book-seat">
        <h2>Book Your Seat</h2>
        <p>
          Reserve your seat now to secure your spot at Sanketika Polytechnic College. Fill out the form below, and our admissions team will get in touch with you shortly.
        </p>
        <form className="seat-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select id="course" name="course" required>
              <option value="">Choose a course</option>
              <option value="cse">Computer Science Engineering</option>
              <option value="ece">Electronics and Communication Engineering</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
              <option value="ai">Artificial Intelligince</option>
              <option value="aiml">AI &ML</option>
              <option value="eee">Electrical</option>
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
          <iframe className='location-frame'
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Sanketika Polytechnic College &amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="College Location"
            aria-label="Google Maps location of Sanketika Polytechnic College"
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
            <p>+91 7095835048</p>
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
    <Footer />
    </>
  );
};

export default Contact;
