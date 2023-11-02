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
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{}}>

                                <>
                                    <li><Link className="dropdown-item" to={`/home/customer`}>Thông tin</Link></li>
                                    <li><Link className="dropdown-item" to={`/home/orders`}>Lịch sử mua hàng</Link></li>
                                    <li><p className="dropdown-item">Đăng xuất</p></li>
                                </>
                                <li><Link to={`/home/login`} className="dropdown-item" >Đăng nhập</Link></li>
                            </ul>

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