import { Link, useNavigate } from "react-router-dom";


function Header() {
    return (
        <>
            <header>
                {/* Navigation Bar */}
                <div className="nav container">
                    {/* Logo */}
                    <a href="/" className="logo"><Link className="text-light" to='/home'>KNT-movie</Link></a>
                    {/* Search Box */}
                    {/* <div className="search-box">
                    <input
                        type="search"
                        name="name"
                        id="search-input"
                        placeholder="Search Movie"
                    />
                    <i className="bx bx-search" ></i>
                </div> */}
                    {/* User */}
                    <div>
                        {/* Add your user-related content here */}
                    </div>
                    <a className="user">
                        <img
                            src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                            alt="user-img"
                            className="user-img"
                        />
                        {
                           <span className="user-info">Đăng nhập</span>

                        }

                        {/* Dropdown list Start */}

                        {/* <div className="dropdown-list">
                        <div className="dropdown-item">
                            <i className="bx bx-cog"></i>
                            <div className="dropdown-text" onClick={() => toLogin()}>Login</div>
                        </div>
                        <div className="dropdown-item">
                            <i className="bx bx-log-out-circle"></i>
                            <div className="dropdown-text" onClick={() => handleLogout()}>Log out</div>
                        </div>
                    </div> */}

                        {/* Dropdown list end */}
                    </a>
                </div>

                {/* 
            <div className="d-flex justify-content-between text-light container mb-2">
                <div><a><Link to='../showtime-list' className="text-light">Showtimes</Link></a></div>
                <div><a><Link to='../showtime-list' className="text-light">Movie</Link></a></div>
                <div><a><Link to='../showtime-list' className="text-light">Event</Link></a></div>
                <div><a><Link to='../showtime-list' className="text-light">Price</Link></a></div>
                <div><a><Link to='../showtime-list' className="text-light">Support</Link></a></div>
                <div><a><Link to='../history-ticket' className="text-light">History</Link></a></div>
            </div> */}
            </header>
        </>
    )
}
export default Header;