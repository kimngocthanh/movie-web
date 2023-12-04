import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import { infoAppUserByJwtToken } from "../service/Account";

function MoviePlay() {
    const [url, setUrl] = useState([]);
    const [i, setI] = useState(0);
    const [page, setPage] = useState(0);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const prams = useParams();
    const navigate = useNavigate();

    const getUrlVideo = async () => {
        const res = await axios.get(`http://localhost:8080/video?id=${prams.id}`)
        setUrl(res.data);
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
        document.title = "KNT-movie";
        const checkMovieAccess = async () => {
            const ress = infoAppUserByJwtToken();
            if (ress != null) {
                try {
                    const res = await axios.get(`http://localhost:8080/check-movie?username=${ress.sub}&idMovie=${prams.id}`);
                    if (res.status === 204) {
                        navigate(`/page-404`);
                    }
                } catch (error) {
                    navigate(`/page-404`);
                }
            }
        }
        checkMovieAccess();
    }, [prams.id]);

    const getMovieLByType = async () => {
        const res = await axios.get(`http://localhost:8080/movie-by-type?id=${prams.id}&page=${page}&size=5`)
        setTotalPage(res.data.totalPages);
        setMovies(res.data.content);
    }

    const choseVideo = (index) => {
        setI(index);
    }

    useEffect(() => {
        getMovieLByType();
        getUrlVideo();
    }, [prams.id, page]);
    return (
        <>
            <Header />

            <div style={{ marginTop: '8rem' }}>
                <div className='d-flex justify-content-center h-75'>

                    <ReactPlayer
                        url={url[i]}
                        id="url-path-for-video"
                        controls
                        width="75%"
                        height="40rem"
                    />
                </div>
                <div className="play-container container ">
                    <div  >
                        <div className="promo-button mt-2">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Chọn tập phim : </span>
                                {url.map((e, index) => (
                                    <>
                                        <button className="knt-button" style={{ marginLeft: "8px" }} onClick={() => choseVideo(index)} > tập {index + 1} </button>
                                    </>
                                ))}
                            </div>
                        </div>

                    </div>
                    <section className="popular container" id="popular">
                        {/* Heading */}
                        <div className="heading">
                            <h2 className="heading-title">Phim tương tự</h2>
                            <div className="swiper-btn">
                                <i className="bx bx-right-arrow" onClick={() => prevPage()}><BiLeftArrow /></i>
                                <i className="bx bx-right-arrow" onClick={() => nextPage()}><BiRightArrow /></i>
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

                </div>

            </div>
            <Footer />
        </>
    )
}
export default MoviePlay;