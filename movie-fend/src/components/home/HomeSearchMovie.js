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
function HomeSearchMovie() {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const [searchInMovie, setSearchInMovie] = useState("searchByName");
    const [searchInput, setSearchInput] = useState("");
    const [type, setType] = useState([]);
    const [searchType,setSearchType] = useState("");


    const getMovieByName = async () => {
        console.log(params);
        const res = await axios.get(`http://localhost:8080/movie/search?page=${page}&searchMovie=${searchInMovie}&search=${searchInput}&searchType=${searchType}`);
        setTotalPage(res.data.totalPages);
        console.log(res);
        setMovies(res.data.content);
    }

    const handleSortOption = (e) => {
        // setSearchInMovie("searchByType");
        console.log(searchType);
        setSearchType(e.target.value);
    }

    const getTypeMovie = async () => {
        const res = await axios.get(`http://localhost:8080/type-movie`)
        setType(res.data);
    }

    const handleSearch = async () => {
        setSearchInput(document.getElementById("search").value);
        setPage(0);
    }

    const nextPage = () => {
        if (page + 1 < totalPage) {
            setPage((prev) => prev + 1)
        }
    }

    const handleSearchOption = (e) => {
        console.log(e.target.value);
        setSearchInMovie(e.target.value);
    }

    const prevPage = () => {
        if (page > 0) {
            setPage((prev) => prev - 1)
        }
    }

    useEffect(() => {
        getMovieByName();
        getTypeMovie();
    }, [params.keywork, page, searchInMovie, searchInput,searchType])

    return (
        <>
            <Header />
            <section className="popular container" id="popular" style={{ marginTop: '80px' }}>
                {/* Heading */}
                <div className="row row-function d-flex">
                    <div className="col-9 col-search d-flex align-items-center justify-content-start gap-3">
                        <label>Tìm kiếm: </label>
                        <div className="btn-group">
                            <select
                                onChange={(e) => handleSearchOption(e)}
                                style={{ width: '150px', borderRadius: '5px', color: 'black' }}
                                id="select" className="appearance-none pl-8 pr-6 py-2 px-2">
                                <option selected value= "">--Chọn tất cả--</option>
                                <option value="searchByName"> Tên phim</option>
                                <option value="searchByPerformer">Tên diễn viên</option>
                                <option value="searchByCountry">Quốc gia</option>
                                <option value="searchByYear">Năm phát hành</option>
                            </select>
                        </div>


                        <input style={{ width: '250px', borderRadius: '5px' }}
                            className="appearance-none pl-8 pr-6 py-2 bg-white text-sm focus:outline-none px-2"
                            placeholder="Tìm phim..."
                            id={'search'} />


                        <button className="btn btn-outline-warning px-2"
                            style={{ marginRight: `auto`, width: `auto`, marginLeft: '5px' }}
                            onClick={() => handleSearch()}
                            value="searchInMedicine" >
                            <i className="fa-solid fa-magnifying-glass"></i>
                            Tìm kiếm
                        </button>


                        <div className="col-6 d-flex align-items-center justify-content-end gap-3" style={{ marginRight: "-16rem" }}>
                            <label>Thể loại</label>
                            <div className="btn-group">
                                <div className="btn-group">
                                    <select
                                        onChange={handleSortOption}
                                        style={{ width: '150px', borderRadius: '5px', color: 'black' }}
                                        id="select" className="appearance-none pl-8 pr-6 py-2 px-2">
                                            <option value={""} style={{ borderRadius: "1rem" }}>--chọn tất cả--</option>
                                        {type.map((e) => (
                                            <>
                                                <option value={e.id} style={{ borderRadius: "1rem" }}>{e.name}</option>
                                            </>
                                        ))}

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="popular-content swiper" style={{ marginTop: "3rem" }}>
                    <h4 className="text-center">Danh sách phim</h4>
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

export default HomeSearchMovie;