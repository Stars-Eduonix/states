import React, {useState} from "react" 
import SongsDetails from "./SongsDetails"


// data for 5 songs with its details(name, author, duration, genere, album) 

const songData = [
    {
        name: "Dil Bechara", author: "A.R. Rahman", duration: "4:02", genere: "Bollywood", album: "Dil Bechara"
    },
    {
        name: "Tum Hi Ho", author: "Arijit Singh", duration: "4:22", genere: "Bollywood", album: "Aashiqui 2"
    },
    {
        name: "Do Pal" , author: "Lata Mangeshkar, Sonu Nigam", duration: "4:06", genere: "Bollywood", album: "Veer-Zaara"
    },
    {
        name: "Tum Se Hi", author: "Mohit Chauhan", duration: "5:07", genere: "Bollywood", album: "Jab We Met"
    },
    {
        name: "Tum Mile", author: "Neeraj Shridhar", duration: "5:41", genere: "Bollywood", album: "Tum Mile"
    },
    {
        name: "One Love", author: "Blue", duration: "4:01", genere: "Pop", album: "One Love"
    }
]

const Songs = () => {
    let  [songDetails, setSongDetails] = useState({})


    return(
        <div className="songs">
            <h1>Songs</h1> 
            {
                songData.map((song, index) => (
                        <div className="songs-box">
                            <h3>{song.name}</h3>
                            <button
                             onClick={() => setSongDetails(song)}
                            >More Info</button>
                        </div>
                ))
            }
             <SongsDetails  songs={songDetails}/>
        </div>
    )
}

export default Songs