import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";
import GenreSelect from "../components/GenreSelect";
import "./SongContainer.css"

const SongsContainer = () => {

    const [songs, setSongs] = useState([])




    const genres = ([
        { name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
        { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
        { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
        { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }
    ])

    const [genre, setGenre] = useState(
        genres[0]
    )


    useEffect(() => {
        getSongs();
    }, [genre])

    const getSongs = function () {
        fetch(genre.url)
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
    }

    const onGenreSelect = (index) => {
        setGenre(genres[index]);
    }


    return (
        <div>
            <GenreSelect genres={genres} onGenreSelect={onGenreSelect} />
            <SongList songs={songs} />
        </div>
    )
}


export default SongsContainer