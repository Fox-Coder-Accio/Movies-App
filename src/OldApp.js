import React,{useState} from "react";


const moviesData = [
    {"title": "3 Idiots", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Dangal", "actor": "Aamir Khan", "genre": "Biographical/Sports", "director": "Nitesh Tiwari"},
    {"title": "Bahubali: The Beginning", "actor": "Prabhas", "genre": "Action/Fantasy", "director": "S.S. Rajamouli"},
    {"title": "Lagaan", "actor": "Aamir Khan", "genre": "Drama/Sports", "director": "Ashutosh Gowariker"},
    {"title": "PK", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Sholay", "actor": "Amitabh Bachchan", "genre": "Action/Adventure", "director": "Ramesh Sippy"},
    {"title": "Bajrangi Bhaijaan", "actor": "Salman Khan", "genre": "Drama/Action", "director": "Kabir Khan"},
    {"title": "Gully Boy", "actor": "Ranveer Singh", "genre": "Musical/Drama", "director": "Zoya Akhtar"},
    {"title": "Queen", "actor": "Kangana Ranaut", "genre": "Comedy/Drama", "director": "Vikas Bahl"},
    {"title": "Andhadhun", "actor": "Ayushmann Khurrana", "genre": "Thriller/Comedy", "director": "Sriram Raghavan"}
]


const OldApp = () => {

    const [selectedMovie, setSelectedMovie] = useState(null)

    // let a = false

    // console.log(selectedMovie)


    return(
        <div>
            <h1>Movies App</h1>

            {
                 moviesData.map(movie =>(
                   
                    <h3  onClick={()=>setSelectedMovie(movie)}
                    style={{
                        backgroundColor: "black",
                        color: "tomato",
                        border: "2px solid green",
                        width: "30%"
                    }}>{movie.title}</h3>
                   
                 ))
            }
            {
                 selectedMovie!=null && (
                    <div>
                        <h1>{selectedMovie.title}</h1>
                        <p>{selectedMovie.actor}</p>
                        <p>{selectedMovie.genre}</p>
                        <p>{selectedMovie.director}</p>
                    </div>
                 )
            }
        </div>
    )
}

export default OldApp;
