import React,{useState} from "react";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";

const App = () => {

    const [selectedMovie, setSelectedMovie] = useState(null)

    // let a = false

    console.log(selectedMovie)


    return(
        <div>
            <h1>Movies App</h1>

           <MovieList updateSelectedMovie={setSelectedMovie}/>
           <MovieDisplay selectedMovie={selectedMovie}/>
        </div>
    )
}

export default App;


{/* <MovieDisplay x="hello" /> */}
