function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">
                {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                </section> */}
                <section style={{backgroundColor: "#2d2e37" }}>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />KNT-Movie: Web phim chất lượng 
                                </h6>
                                <p>
                                Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Phim mới
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Phim Chiếu Rạp</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Phim Hành Động</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Phim hay
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Phim Mỹ</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Phim Nhật</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Phim Hàn</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Phim Việt</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Thông tin</h6>
                                <p><i className="fas fa-home me-3" /> Giới thiệu</p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    Liên hệ chúng tôi
                                </p>
                                <p><i className="fas fa-phone me-3" />Điều khoản sử dụng</p>
                                <p><i className="fas fa-print me-3" />Chính sách riêng tư</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: '#1e1e2a' }}>
                    <p className="text-reset fw-bold" >KNT-Movie: Xem phim mới chất lượng cao</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;