import React from "react";

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