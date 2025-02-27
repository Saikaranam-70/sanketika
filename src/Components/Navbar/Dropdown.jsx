import React from 'react'
import { Link } from 'react-router-dom';


const Dropdown = ({ title, items, isOpen, toggle }) => {
    return (
      <div className="nav-link dropdown" onClick={(e) => e.stopPropagation()}>
        <span onClick={toggle}>{title}↓</span>
        {isOpen && (
          <div className="dropdown-content">
            {items.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

export default Dropdown
