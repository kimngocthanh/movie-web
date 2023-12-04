import { Link } from "react-router-dom";

function Page404() {
    return (
        <>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center" style={{color: "black"}}>404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2" style={{color: "black"}}>
                                        Lỗi
                                    </h3>
                                    <p style={{color: "black"}}>Bạn không có quyền truy cập trang này</p>
                                    <Link to={`/`}  className="link_404">Quay lại home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Page404;