import { Field, Formik, Form } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
function Login() {
    const navigate = useNavigate();

    const createAccount = async (value) => {
        try {
            // const jwt = await loginUsername(value);
            // console.log(jwt);
            // localStorage.setItem("JWT",jwt.data.token);
            navigate("/")
          
        } catch (e) {
            Swal.fire("Tài khoản hoặc mật khẩu không đúng!")
        }
    }
    useEffect(() => {
        document.title = "KNT-shop";
    }, []);
    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}

                onSubmit={(values) => {
                 
                    // createAccount(values);
                }}
            >
                <Form>
                    <Header />
                    <div className="vh-100 d-flex justify-content-center align-items-center">
                        <div className="col-md-4 p-5 shadow-sm border rounded-3">
                            <h2 className="text-center mb-4 text-primary">Đăng Nhập</h2>
                            {/* Input userName */}
                            <div className="mb-1">
                                <label htmlFor="userName" className="form-label">
                                    Tài khoản <span className="text-danger">*</span>
                                </label>
                                <Field type="text" className="form-control border border-primary" name="username" />
                                <div style={{ height: '15px' }}>
                                </div>
                            </div>

                            {/* Input password */}
                            <div className="mb-1">
                                <label htmlFor="password" className="form-label">
                                    Mật khẩu <span className="text-danger">*</span>
                                </label>
                                <Field type="password" className="form-control border border-primary" name="password" />
                                <div style={{ height: '15px' }}>
                                </div>
                            </div>

                            {/* Button Login */}
                            <div className="d-grid mt-4">
                                <button className="btn btn-primary" type="submit">
                                    Đăng nhập
                                </button>
                            </div>
                            {/* Login in by social */}
                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                <div className="mb-0">
                                    Bạn chưa có tài khoản?&nbsp;
                                    <Link to={`/register`} className="text-primary fw-bold">
                                        Đăng ký
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            <Footer/>
        </>
    )
}
export default Login;