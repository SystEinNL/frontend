import Link from "next/link";
import Layout from "./../components/layout/layout";
import data from "../data/post.json";
function CaregoryBig() {
    return (<>
        <Layout>
            <main>
                <div className="archive-header pt-50 text-center">
                    <div className="container">
                        <h2 className="font-weight-900">Hotels Review</h2>
                        <div className="breadcrumb">
                            <Link href="/">
                                Home
                            </Link>
                            <span></span> Hotels Review
                        </div>
                        <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="loop-list loop-list-style-1">
                        <div className="row">
                        {data.slice(1, 7).map((item, i) => (
                                <article
                                    className="col-md-6 mb-30 wow fadeInUp animated"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage: `url(assets/imgs/news/${item.img})`
                                            }}
                                        >
                                            <Link href={`/blog/${item.id}`} className="img-link"></Link>
                                            <span className="top-right-icon bg-success">
                                                <i className="elegant-icon icon_camera_alt"></i>
                                            </span>
                                            <ul className="social-share">
                                                <li>
                                                    <Link href="#">
                                                        <i className="elegant-icon social_share"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="fb">
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="tw">
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="pt">
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="post-content p-30">
                                            <div className="entry-meta meta-0 font-small mb-10">
                                                <Link href={`/category/${item.category}`}>
                                                    <span className="post-cat text-info">
                                                        {item.category}
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="d-flex post-card-content">
                                                <h5 className="post-title mb-20 font-weight-900">
                                                    <Link href={`/blog/${item.id}`}>
                                                        {item.title}
                                                    </Link>
                                                </h5>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                    {item.date}
                                                    </span>
                                                    <span className="time-reading has-dot">
                                                    {item.readTime} mins read
                                                    </span>
                                                    <span className="post-by has-dot">
                                                    {item.views} views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-12">
                            <div className="pagination-area mb-30 wow fadeInUp animated">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item">
                                           <Link href="#" passHref={true} className="page-link">
                                               <i className="elegant-icon arrow_left"></i>
                                           </Link>
                                        </li>
                                        <li className="page-item active">
                                           <Link href="#" passHref={true} className="page-link">01
                                                                                                   </Link>
                                        </li>
                                        <li className="page-item">
                                           <Link href="#" passHref={true} className="page-link">02
                                                                                                   </Link>
                                        </li>
                                        <li className="page-item">
                                           <Link href="#" passHref={true} className="page-link">03
                                                                                                   </Link>
                                        </li>
                                        <li className="page-item">
                                           <Link href="#" passHref={true} className="page-link">04
                                                                                                   </Link>
                                        </li>
                                        <li className="page-item">
                                           <Link href="#" passHref={true} className="page-link">
                                               <i className="elegant-icon arrow_right"></i>
                                           </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>);
}
export default CaregoryBig;
