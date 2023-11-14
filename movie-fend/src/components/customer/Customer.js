import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import axios from "axios";
import { infoAppUserByJwtToken } from "../service/Account";
import { Field, Form, Formik } from "formik";
import Swal from "sweetalert2";

function Customer() {
    const [customer, setCustomers] = useState();

    const getCustomerByAccount = async () => {
        const result = infoAppUserByJwtToken();
        if (result != null) {
            const res = await axios.get(`http://localhost:8080/customer?username=${result.sub}`);
            console.log(res);
            setCustomers(res.data);
        }
    }

    const createCustomer = async (value) => {
        console.log(value);
        const result = infoAppUserByJwtToken();
        if (result != null) {
            await axios.post(`http://localhost:8080/create-customer?username=${result.sub}`, value);
            Swal.fire("Cập nhật thông tin cá nhân thành công!");
        }
        window.location.reload()

    }

    useEffect(() => {
        document.title = "KNT-movie";
    }, []);

    useEffect(() => {
        getCustomerByAccount();
    }, [])

    if (customer == undefined) {
        return null;
    }
    return (
        <>
            <Header />
            <Formik
                initialValues={{
                    id: customer?.id,
                    name: customer?.name,
                    email: customer?.email,
                    phone: customer?.phone,
                    dob: customer?.dob,
                    address: customer?.address
                }}
                onSubmit={(value) => {
                    createCustomer(value);
                }}
            >
                <Form>
                    <section style={{ backgroundColor: '#2d2e37', marginTop: "5rem" }}>
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card mb-4">
                                        <div className="card-body text-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                            <h5 className="my-3" style={{ color: "black" }}>{customer?.name}</h5>
                                            <div className="d-flex justify-content-center mb-2">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-8">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-12 text-center">
                                                    <h5 style={{ color: "black" }} type="text">Thông tin cá nhân</h5>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0" style={{ color: "black" }}>Họ tên : </p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <Field className="input" type="search" name="name" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0" style={{ color: "black" }}>Email :</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <Field className="input" type="input" name="email" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0" style={{ color: "black" }}>Số điện thoại :</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <Field className="input" type="input" name="phone" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0" style={{ color: "black" }}>Ngày sinh : </p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <Field className="input" type="date" name="dob" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0" style={{ color: "black" }}>Địa chỉ :</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <Field className="input" type="input" name="address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 text" style={{ marginLeft: "27rem" }} >
                                                <button type="submit" className="btn btn-outline-primary" >Cập nhật </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 text" style={{ marginLeft: "27rem" }} >
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                

                            </div>
                            
                        </div>

                    </section >
                </Form>
            </Formik>
            
            <Footer />

        </>
    )
}
export default Customer;