


const SongsDetails = ({songs}) => {

    return(
        <div>
            {
             songs.name != undefined &&
             <div className="songs-details">
                   <h2>Song Details</h2>
                   <h3>{songs.name}</h3>
                   <p>{songs.author}</p>
                   <p>{songs.duration}</p>
                   <p>{songs.genere}</p>
                   <p>{songs.album}</p>

             </div>
            }
        </div>
    )
}

export default SongsDetails