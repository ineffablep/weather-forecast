import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>React Sample Apps</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Weather forecast APP <Link to="weather-forecast">demo app</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
