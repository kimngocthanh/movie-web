// import '../home/Home.css'
import { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { infoAppUserByJwtToken } from '../service/Account';
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../reducer/CartReducer';
function MovieDetail() {
    const [movie, setMovie] = useState();
    const [url, setUrl] = useState([]);
    const [carts, setCarts] = useState([]);
    const [page, setPage] = useState(0);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [comments, setComments] = useState([]);

    const prams = useParams();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    const navigate = useNavigate();

    const getMovie = async () => {
        const res = await axios.get(`http://localhost:8080/movie/${prams.id}`)
        console.log(res);
        setMovie(res.data)
    }
    const getAllCartDetail = async () => {
        const res = infoAppUserByJwtToken();
        if (res != null) {
            const result = await axios.get(`http://localhost:8080/cart-detail?username=${res.sub}`)
            // console.log(result);
            console.log(result.data);
            setCarts(result.data);
        }
    }

    const getComment = async () => {
        const res = await axios.get(`http://localhost:8080/comment?idMovie=${prams.id}`);
        console.log(res);
        setComments(res.data);
    }
    const getMovieLByType = async () => {
        const res = await axios.get(`http://localhost:8080/movie-by-type?id=${prams.id}&page=${page}&size=5`)
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
    const getUrlVideo = async () => {
        const res = await axios.get(`http://localhost:8080/video?id=${prams.id}`)
        setUrl(res.data);
    }

    const playVideo = async () => {
        const ress = infoAppUserByJwtToken();
        if (ress != null) {
            const res = await axios.get(`http://localhost:8080/check-movie?username=${ress.sub}&idMovie=${prams.id}`);
            if (res.status == 201) {
                navigate(`/video/${prams.id}`);
            }
            if (res.status == 204) {
                Swal.fire("Mua phim trước khi xem! ")
            }
        }

    }

    const createComment = async () => {
        let comment = document.getElementById("comment-text").value;
        const ress = infoAppUserByJwtToken();
        if(ress != null) {
            await axios.post(`http://localhost:8080/create-comment?username=${ress.sub}&idMovie=${prams.id}&comment=${comment}`)
            getComment();
        }
    }

    const createCartDetail = async () => {
        const res = infoAppUserByJwtToken();
        if (res != null) {
            try {
                const ress = await axios.post(`http://localhost:8080/create-cart-detail?username=${res.sub}&idMovie=${prams.id}`)
                console.log(ress);
                if (ress.status == 201) {
                    dispatch(getCart(res.sub));
                    Swal.fire("Thêm giỏ hàng thành công!");
                } else if (ress.status == 204) {
                    Swal.fire("Sản phẩm đã có trong giỏ hàng!");
                } else if (ress.status == 205) {
                    Swal.fire("Sản phẩm đã được mua!");
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            Swal.fire("Vui lòng đăng nhập tài khoản!", "", "warning");
            navigate("/login")
        }
    }
    useEffect(() => {
        document.title = "KNT-movie";
    }, []);

    useEffect(() => {
        getMovieLByType();
        getUrlVideo();
        getMovie();
        getAllCartDetail();
        getComment();
    }, [prams.id]);

    if (movie === undefined) {
        return null;
    }

    return (
        <>
            <Header />

            <div style={{ marginTop: '8rem' }}>
                <div className='d-flex justify-content-center h-75'>

                    <ReactPlayer
                        url={movie.trailer}
                        id="url-path-for-video"
                        controls
                        width="75%"
                        height="40rem"

                    />
                </div>
                <div className="play-container container ">
                    <div  >
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Phim: {movie.name}</h2>
                            <button className="btn btn-outline-warning"  onClick={() => playVideo()}>Xem phim</button>
                            <button className="btn btn-outline-warning" onClick={() => createCartDetail()} id="add-cart">Thêm giỏ hàng</button>
                        </div>

                        <div className="promo-button mt-2">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Tác giả :</span>
                                <span style={{ paddingLeft: '0.3rem' }}>{movie.director}</span>
                            </div>
                        </div>
                        <div className="promo-button mt-2">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Diễn viên chính:</span>
                                <span style={{ paddingLeft: '0.3rem' }}>{movie.performer}</span>
                            </div>
                        </div>
                        <div className="promo-button mt-2">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Năm phát hành:</span>
                                <span style={{ paddingLeft: '0.3rem' }}>{movie.date}</span>
                            </div>
                        </div>
                        <div className="promo-button mt-2">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Quốc gia:</span>
                                <span style={{ paddingLeft: '0.3rem' }}>{movie.country}</span>
                            </div>
                        </div>
                        <div className="promo-button mt-2">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Giới thiệu phim:</span>
                                <span style={{ paddingLeft: '0.3rem' }}>{movie.describes}</span>
                            </div>
                        </div>
                        <div className="promo-button mt-2 d-flex justify-content-between align-items-center">
                            <div className="content-text">
                                <span style={{ color: 'var(--main-color)' }}>Tổng số tập:</span>
                                <span style={{ paddingLeft: '0.3rem' }}>{url.length}</span>
                            </div>
                            <Link to={`/`} className="btn btn-outline-warning">Quay lại</Link>
                        </div>
                    </div>
                    <div className="heading mt-5">
                        <h2 className="heading-title">Phim tương tự</h2>
                        <div className="swiper-btn">
                            <i className="bx bx-right-arrow" onClick={() => prevPage()}><BiLeftArrow /></i>
                            <i className="bx bx-right-arrow" onClick={() => nextPage()}><BiRightArrow /></i>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="popular-content swiper" style={{ marginTop: "1rem" }}>
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
                </div>


            </div>



            <div className="container mt-5">
                <h1>Bình luận và Đánh giá</h1>
                <div className="row">
                    <div className="col-md-8">
                        <div className="comment-section">
                            {/* Hiển thị các bình luận */}
                            {comments.map((comment) => (
                                <div className="comment" >
                                    <div className="user-info">
                                        <span className="username">{comment.userName}</span>
                                    </div>
                                    <div className="comment-content">
                                        <p>{comment.commentText}</p>
                                        <div className="comment-meta">
                                            <span className="comment-date">{comment.date}</span>
                                            {/* <span className="comment-like">Like</span> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Form nhập bình luận */}
                        <div className="new-comment mt-4">
                            <textarea className="form-control" rows="3" placeholder="Viết bình luận của bạn..." defaultValue={""} id="comment-text" />
                            <button className="btn btn-outline-warning mt-2" onClick={() => createComment()}>Gửi</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Phần đánh giá */}
                        <div className="rating-section mt-3">
                            {/* Hiển thị điểm đánh giá */}
                            <div className="user-rating">
                                {/* Điểm đánh giá */}
                            </div>
                            {/* Điều chỉnh để người dùng có thể đánh giá */}
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}
export default MovieDetail;