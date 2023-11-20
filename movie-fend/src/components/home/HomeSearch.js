import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
} from "react-icons/ai";
function HomeSearch() {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const [searchInMovie, setSearchInMovie] = useState("searchByName");
    const [searchInput, setSearchInput] = useState("");
    const [type, setType] = useState([]);


    const getMovieByName = async () => {
        console.log(params);
        const res = await axios.get(`http://localhost:8080/movie-by-name?name=${params.keywork}&page=${page}`);
        setTotalPage(res.data.totalPages);
        console.log(res);
        setMovies(res.data.content);
    }


    const handleSortOption = (e) => {
        console.log(e.target.value);
        setSearchInMovie("searchByType");
        setSearchInput(e.target.value);
    }

    const nextPage = () => {
        if (page + 1 < totalPage) {
            setPage((prev) => prev + 1)
        }
    }

    const prevPage = () => {
        if (page > 0) {
            setPage((prev) => prev - 1)
        }
    }

    const getTypeMovie = async () => {
        const res = await axios.get(`http://localhost:8080/type-movie`)
        setType(res.data);
    }

    const handleSearch = async () => {
        setSearchInput(document.getElementById("search").value);
        setPage(0);
    }

    const handleSearchOption = (e) => {
        console.log(e.target.value);
        setSearchInMovie(e.target.value);
    }

    useEffect(() => {
        getTypeMovie();
        getMovieByName();
    }, [params.keywork, page, searchInMovie, searchInput])

    return (
        <>
            <Header />

            <section className="popular container" id="popular" style={{ marginTop: '100px' }}>
                
                    <h4 className="text-center">Danh sách phim</h4>

                
                {/* Content */}
                <div className="popular-content swiper" style={{ marginTop: "3rem" }}>
                    <div className="movies-content">
                        {/* Movie Box Start */}
                        {movies.map((m) => (
                            <div className="movie-box" >
                                <img src={m.image} alt="" className="movie-box-img" />
                                <div className="box-text">
                                    <h2 className="movie-title">{m.name}</h2>
                                    {/* <span className="movie-type">{}</span> */}
                                    <Link to={`/movie/${m.id}`} className="promo-button play-btn">
                                        <i className="bx bx-right-arrow"><BiRightArrow /></i>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* Movie Box End */}
                    </div>
                </div>
                <div className="row justify-content-center" style={{ marginTop: "2rem" }}>
                    <div className="col-sm-2 text-center d-flex align-items-center justify-content-between">
                        <button className="btn btn-outline-warning" onClick={() => prevPage()}>
                            <AiOutlineDoubleLeft />
                        </button>
                        <div className="text-warning fs-5">
                            {page + 1} / {totalPage}
                        </div>
                        <button className="btn btn-outline-warning" onClick={() => nextPage()}>
                            <AiOutlineDoubleRight />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HomeSearch;