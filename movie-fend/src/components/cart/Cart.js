import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import axios from "axios";
import { infoAppUserByJwtToken } from "../service/Account";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Paypal from "./Paypal";
const currency = (number) => {
    const roundedNumber = Math.floor(number);
    const formattedNumber = roundedNumber.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
    return formattedNumber;
};
function CartDetail() {
    const [carts, setCarts] = useState([]);
    const [toalPrice, setTotalPrice] = useState(0);
    const [checkout, setCheckOut] = useState(false);
    const navigate = useNavigate();

    const getAllCartDetail = async () => {
        const res = infoAppUserByJwtToken();
        if (res != null) {
            const result = await axios.get(`http://localhost:8080/cart-detail?username=${res.sub}`)
            // console.log(result);
            console.log(result.data);
            setCarts(result.data);
        }
    }

    const addToOrder = async () => {
        setCheckOut(true);
        // await addToOrders();
        navigate("/cartdetail")
    }

    const deleteCartDetail = (e,name) => {
        try {
            Swal
                .fire({
                    title: "Bạn có muốn phim này khỏi giỏ hàng?",
                    text: e.name,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Đồng ý",
                    cancelButtonText: "Huỷ",
                })
                .then(async (willDelete) => {
                    if (willDelete.isConfirmed) {
                        const result = infoAppUserByJwtToken();
                        await axios.delete(`http://localhost:8080/delete-cart-detail?username=${result.sub}&id=${e.id}`);
                        Swal.fire("Xoá sản phẩm thành công!", "", "success");
                        getAllCartDetail();
                    }
                })
        }catch(e){
            console.log(e);
        }
    }

    const getTotalPrice = () => {
        // Sử dụng reduce để tính tổng giá
        const total = carts.reduce((acc, product) => {
            return acc + product.price;
        }, 0);
        setTotalPrice(total);

    }

    useEffect(() => {
        getTotalPrice();
        getAllCartDetail();
    }, [carts.length])
    return (
        <>
            <Header />
            <section className="h-100 h-custom" style={{ backgroundColor: '#2d2e37' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><Link to={`/`} href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Quay lại</Link></h5>
                                            <hr className="bg-dark" />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-0"><span className="text-muted">Tổng số phim:</span> <a href="#!" className="text-body"> {carts.length} <i className="fas fa-angle-down mt-1" /></a></p>
                                                </div>
                                            </div>
                                            {carts.map((e, index) => (
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img src={e.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }} />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5 className="text-dark mt-1 ">{e.name}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">

                                                                <div style={{ width: 200 }}>
                                                                    <h5 className="text-dark mb-0">{currency(e.price)}</h5>
                                                                </div>
                                                                <button className="btn btn-ranger" onClick={() => deleteCartDetail(e,e.name)} ><i className="fas fa-trash-alt" />x</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div className="col-lg-5">
                                            <div className="text-white rounded-3" style={{ backgroundColor: "#2d2e37" }}>
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0 text-light">Thông tin cá nhân</h5>
                                                    </div>
                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Nhập tên" />
                                                            <label className="form-label" htmlFor="typeName">Họ và tên </label>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                                                            <label className="form-label" htmlFor="typeText">Số điện thoại</label>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-7">
                                                                <div className="form-outline form-white">
                                                                    <input type="date" id="typeExp" className="form-control form-control-lg" size={7} minLength={7} maxLength={7} />
                                                                    <label className="form-label" htmlFor="typeExp">Ngày sinh</label>

                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="form-outline form-white">
                                                                    <button type="button" className="btn btn-info btn-block btn-lg" >Cập nhật</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </form>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Số phim mua</p>
                                                        <p className="mb-2">{carts.length}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Tổng tiền</p>
                                                        <p className="mb-2">{currency(toalPrice)}</p>
                                                    </div>
                                                    {checkout ? (
                                                        <Paypal propData1={toalPrice} propData2={carts} />
                                                    ):(
                                                        <button type="button" className="btn btn-info btn-block btn-lg" onClick={() => addToOrder()}>
                                                        <div className="d-flex justify-content-between">
                                                            <span>Thanh toán <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                                                        </div>
                                                    </button>
                                                    )
                                                    
                                                    }
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}
export default CartDetail;