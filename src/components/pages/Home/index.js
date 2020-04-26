import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to CHU Oran COVID-19 dashboard</h1>
      <p>
        Please <Link to="/login">Login to continue</Link>
      </p>
    </div>
  );
}

export default Home;
