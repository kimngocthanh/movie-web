import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { infoAppUserByJwtToken } from "../service/Account";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Swal from "sweetalert2";

function Header() {
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    const getUsername = () => {

        const res = infoAppUserByJwtToken();
        if (res != null) {
            setUsername(res.sub);
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUsername(undefined);
        // navigate("/");
        Swal.fire({
            title: "Đăng xuất thành công",
            icon: "success",
        });
        navigate("/");
        window.location.reload();
    };

    useEffect(() => {
        getUsername();
    }, []);


    return (
        <>
            <header>
                {/* Navigation Bar */}
                <div className="nav container">
                    {/* Logo */}
                    <a href="/" className="logo">
                        <Link className="text-light" to='/'>KNT-movie</Link>
                    </a>
                    {/* Search Box */}
                    <div className="search-box">
                        <input
                            type="search"
                            name="name"
                            id="search-input"
                            placeholder="Nhập phim"
                        />
                        <i className="bx bx-search"></i>
                    </div>
                    {/* User */}
                    <div style={{ marginRight: "1rem" }}>
                        <form className="user">
                            <PiShoppingCartSimpleLight className="user-img" />
                            <Link className="text-light" to={`/cartdetail`}>
                                Giỏ hàng
                                <span className="badge bg-black text-white ms-1 rounded-pill">3</span>
                            </Link>
                        </form>
                    </div>
                    {JwtToken ? (
                        <div className="dropdown text-end">
                            <div data-bs-toggle="dropdown" className="users-icon">
                                <a href="#" className="text-light d-flex justify-content-center align-items-center" id="dropdownUser1" aria-expanded="false">
                                    <img
                                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                        alt="user-img"
                                        className="user-img"
                                    />
                                    {username != null && <div className="p-1">{username}</div>}
                                </a>
                            </div>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{ backgroundColor: "transparent" }}>
                                <li><Link className="dropdown-item bg-light mt-1" to={`/home/customer`}>Thông tin</Link></li>
                                <li><Link className="dropdown-item bg-light mt-1" to={`/home/orders`}>Lịch sử mua hàng</Link></li>
                                <li><p className="dropdown-item bg-light mt-1" onClick={() => handleLogOut()}>Đăng xuất</p></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="dropdown text-end">
                            <div className="users-icon">
                                <form  className="text-light d-flex justify-content-center align-items-center" id="dropdownUser1" aria-expanded="false">
                                    <img
                                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                        alt="user-img"
                                        className="user-img"
                                    />
                                    <Link to={`/login`} className="dropdown-item text-light">Đăng nhập</Link>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );

}
export default Header;
{/* Dropdown list Start */ }

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

{/* Dropdown list end */ }
{/* 
<div className="d-flex justify-content-between text-light container mb-2">
    <div><a><Link to='../showtime-list' className="text-light">Showtimes</Link></a></div>
    <div><a><Link to='../showtime-list' className="text-light">Movie</Link></a></div>
    <div><a><Link to='../showtime-list' className="text-light">Event</Link></a></div>
    <div><a><Link to='../showtime-list' className="text-light">Price</Link></a></div>
    <div><a><Link to='../showtime-list' className="text-light">Support</Link></a></div>
    <div><a><Link to='../history-ticket' className="text-light">History</Link></a></div>
</div> */}