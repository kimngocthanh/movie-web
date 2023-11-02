import Footer from "../layout/Footer";
import Header from "../layout/Header";
import './Home.css'
function Home() {
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
                    <h2 className="heading-title">Showing Movies</h2>
                    <div className="swiper-btn">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
                {/* Content */}
                <div className="popular-content swiper">
                    <div className="movies-content">
                        {/* Movie Box Start */}
                        {/* {showingMovies.map((m) => ( */}
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
                        {/* ))} */}
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