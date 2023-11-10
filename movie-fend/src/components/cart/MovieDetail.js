// import '../home/Home.css'
import { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { infoAppUserByJwtToken } from '../service/Account';
import Swal from 'sweetalert2';
function MovieDetail() {
    const [movie, setMovie] = useState();
    const [url, setUrl] = useState([]);
    const [carts,setCarts] = useState([]);
    const prams = useParams();
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
    const getUrlVideo = async () => {
        const res = await axios.get(`http://localhost:8080/video?id=${prams.id}`)
        setUrl(res.data);
    }

    const createCartDetail = async () => {
        const res = infoAppUserByJwtToken();
        if (res != null) {
            try{
                await axios.post(`http://localhost:8080/create-cart-detail?username=${res.sub}&idMovie=${prams.id}`)
                Swal.fire("Thêm giỏ hàng thành công!");
            }catch(e){
                console.log(e);
            }
        } else {
            Swal.fire("Vui lòng đăng nhập tài khoản!", "", "warning");
            navigate("/login")
        }
    }

    useEffect(() => {
        getUrlVideo();
        getMovie();
        getAllCartDetail();
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

                </div>

            </div>
            <Footer />
        </>
    )
}
export default MovieDetail;