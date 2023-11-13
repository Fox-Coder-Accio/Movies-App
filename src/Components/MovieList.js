import React,{useState} from "react";

import moviesData from "../data/moviesData";
// import MovieDisplay from "./MovieDisplay";


const MovieList = ({updateSelectedMovie}) => {


    return(
        <div>
            {
                 moviesData.map((movie, index) =>(
                   
                    <h3  key={index} onClick={() => updateSelectedMovie(movie)}
                    style={{
                        backgroundColor: "black",
                        color: "tomato",
                        border: "2px solid green",
                        width: "30%"
                    }}>{movie.title}</h3>
                   
                 ))
            }
            {/* <MovieDisplay selectedMovie={selectedMovie}/> */}
        </div>
    )
}

export default MovieList;