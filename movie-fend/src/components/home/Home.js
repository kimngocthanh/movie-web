import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import './Home.css';
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [movies, setMovies] = useState([]);

    const getAllMovie = async () => {
        const res = await axios.get(`http://localhost:8080/movie?page=${page}`)
        setTotalPage(res.data.totalPages);
        setMovies(res.data.content);
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

    useEffect(() => {
        getAllMovie();
    }, [page])
    return (
        <>
            <Header />
            <div style={{ marginTop: '120px' }} >
                <section className="home container" id="home">
                    {/* Home Image */}
                    <img
                        src="https://www.elleman.vn/app/uploads/2018/03/09/xep-hang-phim-sieu-anh-hung-marvel-elle-man-feature-10.jpg"
                        alt="home-img"
                        className="home-img"
                    />
                    {/* Home Text */}
                    <div className="home-text">

                    </div>
                </section>
            </div>
            <section className="popular container" id="popular">
                {/* Heading */}
                <div className="heading">
                    <h2 className="heading-title">Phim đang chiếu</h2>
                    <div className="swiper-btn">
                        <i className="bx bx-right-arrow" onClick={()=> prevPage()}><BiLeftArrow /></i>
                        <i className="bx bx-right-arrow" onClick={()=> nextPage()}><BiRightArrow/></i>
                    </div>
                </div>
                {/* Content */}
                <div className="popular-content swiper">
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
            </section>

            <section className="movies container" id="movies">
                {/* Heading */}
                <div className="heading">
                    <h2 className="heading-title">Upcoming Movies</h2>
                </div>

                {/* Upcoming Movies */}
                <div className="movies-content">
                    {/* Movie Box Start */}
                    <div className="movie-box" >
                        <img src="" alt="" className="movie-box-img" />
                        <div className="box-text">
                            <h2 className="movie-title">a</h2>
                            <span className="movie-type">b</span>
                            <a href="" className="promo-button play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>
                        </div>
                    </div>
                    {/* Movie Box End */}
                </div>
            </section>
            <Footer />
        </>)
}
export default Home;