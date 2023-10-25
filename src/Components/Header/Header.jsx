import React from 'react'
import './Header.css'
import imdb_logo from '../Assets/imdb-Logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to="/"><img className='header_icon' src={imdb_logo} alt="" /></Link>
            <Link to="/movies/popular" ><span>Popular</span></Link>
            <Link to="/movies/top_rated" ><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" ><span>Upcoming</span></Link>
        </div>
        <div className="headerRight">

        </div>
    </div>
  )
}
