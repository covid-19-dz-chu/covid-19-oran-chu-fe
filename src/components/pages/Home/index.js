import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>I'm an ugly home page</h1>
      <p>
        Please <Link to="/login">Login to continue</Link>
        Please <Link to="/dashboard">Dashboard</Link>
      </p>
    </div>
  )
}

export default Home
