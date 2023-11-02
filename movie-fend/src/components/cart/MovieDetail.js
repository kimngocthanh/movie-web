// import '../home/Home.css'
import Header from '../layout/Header';
function MovieDetail() {
    return (
        <>
            <Header />
            <div style={{marginTop: '8rem'}}>
                <div className="play-container container ">
                    <img alt className="play-img" />
                    <div className="play-text">
                        <h2>name movie</h2>
                        <div className="rating">
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star-half" />
                        </div>
                        <div className="tags">
                            <span>Thể loại</span>
                            <span>4K</span>
                        </div>
                        <a href="/movie" className="promo-button">
                            <i className="bx bx-arrow-back" />
                            <span>Back</span>
                        </a>
                        <a href className="promo-button" style={{ marginTop: '1rem' }}>
                            <i className="bx bx-cut" />
                            <span>Edit Movie</span>
                        </a>
                    </div>
                    <i className="bx bx-play-circle play-movie" />
                    <div className="video-container">
                        <div className="video-box">
                            <video id="myvideo" controls />
                            <i className="bx bx-x close-video" />
                        </div>
                    </div>
                </div>
                <div className="content container">
                    <div className="content-text">
                        <span style={{ color: 'var(--main-color)' }}>Director :</span>
                        <span style={{ paddingLeft: '0.3rem' }}>mô tả</span>
                    </div>
                </div>
                <div className="content container">
                    <div className="content-text">
                        <span style={{ color: 'var(--main-color)' }}>Performers:</span>
                        <span style={{ paddingLeft: '0.3rem' }}>Tác giả</span>
                    </div>
                </div>
                <div className="content container">
                    <div className="content-text">
                        <p style={{ color: 'var(--main-color)' }}>Description:</p>
                        <p>Mô tả</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MovieDetail;