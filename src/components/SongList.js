import React from "react";
import SongItem from "./SongItem";


const SongList = ({ songs }) => {

    const songNodes = songs.map((song, index) => {
        return <SongItem song={song} key={index} />
    })


    return (
        <>

            <ol>{songNodes}</ol>

        </>
    )
}

export default SongList