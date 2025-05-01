import Link from "next/link";
import Layout from "../components/layout/layout";
function PageSearch() {
    return (<>
        <Layout>
            <main>
                {/* <!--archive header--> */}
                <div className="archive-header pt-50">
                    <div className="container">
                        <h2 className="font-weight-900">Search results</h2>
                        <div className="breadcrumb">
                            We found 22 articles for{" "}
                            <strong>"Media" </strong> key word
                        </div>
                        <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                    </div>
                </div>
                <div className="pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="post-module-3">
                                    <div className="loop-list loop-list-style-1">
                                        <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                            <div className="row mb-40 list-style-2">
                                                <div className="col-md-4">
                                                    <div className="post-thumb position-relative border-radius-5">
                                                        <div
                                                            className="img-hover-slide border-radius-5 position-relative"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(assets/imgs/news/news-13.jpg)",
                                                            }}
                                                        >
                                                            <Link href="/single" className="img-link"></Link>
                                                        </div>
                                                        <ul className="social-share">
                                                            <li>
                                                                <Link href="/#">
                                                                    <i className="elegant-icon social_share"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/#" className="fb">
                                                                    <i className="elegant-icon social_facebook"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/#" className="tw">
                                                                    <i className="elegant-icon social_twitter"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/#" className="pt">
                                                                    <i className="elegant-icon social_pinterest"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 align-self-center">
                                                    <div className="post-content">
                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                            <Link href="/category">
                                                                <span className="post-cat text-primary">
                                                                    Food
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <h5 className="post-title font-weight-900 mb-20">
                                                            <Link href="/single">Helpful
                                                                                                                                        Tips for
                                                                                                                                        Working
                                                                                                                                        from
                                                                                                                                        Home as
                                                                                                                                        a
                                                                                                                                        Freelancer
                                                                                                                                    </Link>
                                                            <span className="post-format-icon">
                                                                <i className="elegant-icon icon_star_alt"></i>
                                                            </span>
                                                        </h5>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                7 August
                                                            </span>
                                                            <span className="time-reading has-dot">
                                                                11 mins read
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                3k views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                            <div className="row mb-40 list-style-2">
                                                <div className="col-md-4">
                                                    <div className="post-thumb position-relative border-radius-5">
                                                        <div
                                                            className="img-hover-slide border-radius-5 position-relative"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(assets/imgs/news/news-4.jpg)",
                                                            }}
                                                        >
                                                            <Link href="/single" className="img-link"></Link>
                                                        </div>
                                                        <ul className="social-share">
                                                            <li>
                                                                <Link href="/#">
                                                                    <i className="elegant-icon social_share"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/#" className="fb">
                                                                    <i className="elegant-icon social_facebook"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/#" className="tw">
                                                                    <i className="elegant-icon social_twitter"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/#" className="pt">
                                                                    <i className="elegant-icon social_pinterest"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 align-self-center">
                                                    <div className="post-content">
                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                            <Link href="/category">
                                                                <span className="post-cat text-success">
                                                                    Cooking
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <h5 className="post-title font-weight-900 mb-20">
                                                            <Link href="/single">10 Easy
                                                                                                                                        Ways to
                                                                                                                                        Be
                                                                                                                                        Environmentally
                                                                                                                                        Conscious
                                                                                                                                        At Home
                                                                                                                                    </Link>
                                                        </h5>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                27 Sep
                                                            </span>
                                                            <span className="time-reading has-dot">
                                                                10 mins read
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                22k views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>);
}
export default PageSearch;
