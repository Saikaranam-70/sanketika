import React from 'react';
import './Sports.css';
import playgroundImage from '../../assets/playground.webp'; // Adjust the path as needed
import gymImage from '../../assets/gym.webp';
import sportsImage from '../../assets/sports.webp';
import Footer from '../Footer/Footer';

const Sports = () => {
  return (
    <>
    <div className="physical-education-container">
      <div className="section">
        <h2>The Significance of Physical Education</h2>
        <p>
          Physical education (PE) is a part of education that helps students develop physical skills, knowledge, and behaviors that enable them to be active and healthy throughout their lives.
        </p>
        <p>
          Physical skills help students develop motor skills through activities like walking, jogging, running, jumping, climbing, and more. It also helps students learn about movement and safety, and how to use these skills to perform in a variety of activities.
        </p>
      </div>

      <div className="section">
        <h2>Facilities</h2>
        <div className="facilities">
          <div className="facility">
            <img src={playgroundImage} alt="Playground" />
            <p>
              The college has a very big playground for Athletics, Football, Cricket, and track and field sports, which is a special privilege to our sportsmen and women.
            </p>
          </div>
          <div className="facility">
            <img src={sportsImage} alt="Gymnasium" />
            <p>
              Separate courts are built for Volleyball, Shuttle Badminton, Ball Badminton, and Throwball. Well-equipped modern gymnasiums are provided for both boys and girls, and mini auditoriums for indoor games.
            </p>
          </div>
          <div className="facility">
            <img src={gymImage} alt="Sports" />
            <p>
              The electrifying enthusiasm of our Physical Directors is a significant factor in our success. We have well-qualified and experienced Physical Directors.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>The Past Glory of the Department of Physical Education</h2>
        <p>
          The college has been the forerunner in the field of sports and games and has bagged many medals, prizes, and trophies in various events at all levels in the University, District, State, National, and International competitions.
        </p>
        <p>
          We are proud of our previous sports personalities who have brought many laurels to our institution.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Sports;