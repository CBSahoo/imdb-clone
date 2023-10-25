import React, { useEffect, useState } from 'react'
import './MovieList.css'
import { useParams } from 'react-router-dom';
import { Cards } from '../Cards/Cards';

export const MovieList = () => {

    let api_key = "230fef50be55f4fdb930717da1d346c4";

    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular" }?api_key=${api_key}`)
        .then( response => response.json())
        .then( data => setMovieList(data.results))
    }

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}
