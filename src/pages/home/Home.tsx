
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

function Home({}: Props) {
  return (
    <div>
      <h1>Home Page Designs</h1>
      <ul>
        <li> <Link to="/homepageone">Homepage One</Link></li>
        <li> <Link to="/homepagetwo">Homepage Two</Link></li>
      </ul>
     
      
    </div>
  )
}

export default Home