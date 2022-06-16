import React from "react";

const GenreSelect = ({ genres, onGenreSelect }) => {

    const options = genres.map((genre, index) => {
        return <option value={index}>{genre.name}</option>
    })

    const handleSelect = (event) => {
        const chosenIndex = event.target.value;

        onGenreSelect(chosenIndex);
    }

    return (
        <select onChange={handleSelect}>
            <option selected disabled value="">Select Genre</option>
            {options}
        </select>
    )
}


export default GenreSelect