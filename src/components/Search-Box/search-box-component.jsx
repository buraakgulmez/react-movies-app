import { useState, useEffect } from "react";
import "./search-box-components-styles.css";
import apiData from "../../api.json"; // JSON dosyasını içeri aktarıyoruz

const SearchBox = ({ setFilteredMovies }) => {
    const [searchFilm, setSearchFilm] = useState("");

    useEffect(() => {
        getMovies();
    }, [searchFilm]);

    function getMovies() {
        const getData = apiData.movies.filter(item =>
            item.title.toLowerCase().includes(searchFilm.toLowerCase())
        ).map(i => {
            return {
                id: i.id,
                title: i.title,
                img: i.img,
                description: i.description,
                directed:i.directed,
                year:i.year,
            }
        });
        setFilteredMovies(getData);
    }

    function filmSearching(e) {
        setSearchFilm(e.target.value);
    }

    return (
        <div className="search-box-container">
            <div className="mainSearchBox">
                <h3 className="search-box-baslik">Search Movie</h3>
                <input onChange={filmSearching} type="text" placeholder="Search..." />
                <br />
                {searchFilm}
            </div>
        </div>
    );
}

export default SearchBox;
