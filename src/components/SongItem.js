import React from "react";
import './SongItem.css'

const SongItem = ({ song }) => {




    return (
        <>
            <li>Title: {song["im:name"]["label"]}<br></br>
                Artist: {song["im:artist"]["label"]}
            </li>
        </>
    )
}

export default SongItem