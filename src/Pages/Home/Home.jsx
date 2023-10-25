import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { MovieList } from '../../Components/MovieList/MovieList';

export const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    var clickOnce = true;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
      };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=230fef50be55f4fdb930717da1d346c4&language=en-US`)
        .then( response => response.json())
        .then( data => {setPopularMovies(data.results); console.log(data.results);});
    }, []);

    useEffect(() => {

        if(clickOnce)
        {
            setTimeout(() => {
                var element = document.getElementsByClassName('control-prev');
                element[0].click();
                clickOnce = false;
            }, 1000);
        }
    }, [])

    return (
        
        <div className="poster">
            <Carousel showStatus={false} showThumbs={false} transitionTime={2} autoPlay={true} infiniteLoop={true} >
            {
                popularMovies.map(movie =>  (

                    <Link style={{textDecoration: 'none', color: 'white'}} to={`/movie/${movie.id}`} key={movie.id}>
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                        </div>
                        <div className="posterImage_overlay">
                            <div className="posterImage_title">{ movie ? movie.original_title : ""}</div>
                            <div className="posterImage_runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage_rating">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa-star"/>
                                </span>
                            </div>
                            <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                ))
            } 
            </Carousel>
            <MovieList /> 
        </div>
    )
}
