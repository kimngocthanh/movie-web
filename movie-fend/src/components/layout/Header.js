import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { infoAppUserByJwtToken } from "../service/Account";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../reducer/CartReducer";
import { LiaSearchSolid } from "react-icons/lia";

function Header({ inputSearch, onInputChange }) {
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [username, setUsername] = useState(null);
    const [carts, setCarts] = useState([]);
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");

    const getUsername = () => {
        const res = infoAppUserByJwtToken();
        if (res != null) {
            setUsername(res.sub);
            dispatch(getCart(res.sub))
        }
    }

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
        // console.log(keyword);
    };

    const getAllCartDetail = async () => {
        const res = infoAppUserByJwtToken();
        if (res != null) {
            const result = await axios.get(`http://localhost:8080/cart-detail?username=${res.sub}`)
            // console.log(result);
            setCarts(result.data);
        }
    }

    const searchMedicines = (keyword) => {
        console.log(keyword);
        // if(keyword=null){
        //     navigate(`/`);
        // }

        navigate(`/home/search/${keyword}`);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        searchMedicines(keyword);
    };


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

    const handleButtonClick = () => {

    }

    useEffect(() => {
        getAllCartDetail();
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
                    <Link className="text-light" to={`/home-search-movie`} >Danh sách phim</Link>

                    {/* Search Box */}
                    <div className="search-box">
                        <input
                            type="search"
                            name="name"
                            id="search-input"
                            placeholder="Nhập phim"
                            value={inputSearch}
                            onChange={(event) => {
                                handleInputChange(event)
                            }}
                            aria-label="Search"
                        />
                        {/* <input type="search" id="form-input-home" className="form-control" value={inputSearch}
                                placeholder="Tìm kiếm sản phẩm..." onChange={(event) => {
                                    handleInputChange(event);
                                    // onInputChange(event);
                                }} aria-label="Search" /> */}
                            < LiaSearchSolid style={{color: "white"}} onClick={(e) => handleSearch(e)}/>
                    </div>
                    {/* User */}
                    <div >
                        <form className="user p-1">
                            <PiShoppingCartSimpleLight className="user-img" size={100}/>
                            <Link className="text-light" to={`/cartdetail`}>
                                Giỏ hàng
                                <span className="badge bg-black text-white ms-1 rounded-pill">{cart.data?.length}</span>
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
                                    {username != null && <div className="p-2">{username}</div>}
                                </a>
                            </div>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{ backgroundColor: "transparent" }}>
                                <li><Link className="dropdown-item bg-light mt-1" to={`/customer`}>Thông tin</Link></li>
                                <li><Link className="dropdown-item bg-light mt-1" to={`/movie-play`}>Phim đã mua</Link></li>
                                <li><p className="dropdown-item bg-light mt-1" onClick={() => handleLogOut()}>Đăng xuất</p></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="dropdown text-end">
                            <div className="users-icon">
                                <form className="text-light d-flex justify-content-center align-items-center" id="dropdownUser1" aria-expanded="false">
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