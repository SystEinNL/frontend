import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";

const SingleVendor = () => {

    let Router = useRouter()

    const [singleData, setSingleData] = useState(null);


    const { id } = Router.query;

    useEffect(() => {
        setSingleData(data.find((data) => data.id == id));
    }, [id]);


    return (<>
        {/* {singleData && (
            <>

                <img src={`/images/blog/${singleData.img}`} className="w-100 rounded" alt="" />
                <h3>{singleData.title}</h3>
            </>
        )} */}
        <Layout>
            {singleData && ( 
                <>
                    <main className="bg-grey pb-30">
                        <div className="container single-content">

                            <div className="entry-header entry-header-style-1 mb-50 pt-50">
                                <h1 className="entry-title mb-50 font-weight-900">
                                    {singleData.title}
                                </h1>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                            <p className="mb-5">
                                                <Link href="/author" className="author-avatar">
                                                    <img
                                                        className="img-circle"
                                                        src="/assets/imgs/authors/author-3.jpg"
                                                        alt=""
                                                    />
                                                </Link>
                                                By
                                                <Link href="/author">
                                                    <span className="author-name font-weight-bold ml-5">
                                                        {singleData.author}
                                                    </span>
                                                </Link>
                                            </p>
                                            <span className="mr-10">

                                                {singleData.date} {new Date().getFullYear()}
                                            </span>
                                            <span className="has-dot">

                                                {singleData.readTime} mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--end single header--> */}
                            <figure className="image mb-30 m-auto text-center border-radius-10">
                                <img
                                    className="border-radius-10"
                                    src={`/assets/imgs/news/${singleData.img}`}
                                    alt="post-title"
                                />
                            </figure>
                            {/* <!--figure--> */}
                            <article className="entry-wraper mb-50">
                                <div className="entry-main-content dropcap wow fadeIn animated">
                                    {/* <!--begin content--> */}
                                {/* <!--end content--> */}
                                </div>
                                {/* <!--tags--> */}
                                <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                                    <div className="tags">
                                        <span>Tags: </span>

                                        <Link href="/category">{singleData.tags[0]}</Link>
                                        <Link href="/category">{singleData.tags[1]}</Link>
                                        <Link href="/category">{singleData.tags[2]}</Link>
                                    </div>
                                </div>
                                {/* <!--author box--> */}
                                <div className="author-bio p-30 mt-50 border-radius-10 bg-dark wow fadeIn animated">
                                    <div className="author-image mb-30">
                                        <Link href="/author">
                                            <img
                                                src="/assets/imgs/authors/author-3.jpg"
                                                alt=""
                                                className="avatar"
                                            />
                                        </Link>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="font-weight-bold mb-20">
                                            <span className="vcard author">
                                                <span className="fn">
                                                    <Link href="/author">
                                                        {singleData.author}
                                                    </Link>
                                                </span>
                                            </span>
                                        </h4>
                                        <h5 className="text-muted">
                                            About author
                                        </h5>
                                        <div className="author-description text-muted">
                                            You should write because
                                            you love the shape of
                                            stories and sentences
                                            and the creation of
                                            different words on a
                                            page.
                                        </div>
                                        <Link href="/author" className="author-bio-link mb-md-0 mb-3">
                                            View all posts ({singleData.totalPost})
                                        </Link>
                                        <div className="author-social">
                                            <ul className="author-social-icons">
                                                <li className="author-social-link-facebook">
                                                    <Link href="/#">
                                                        <i className="ti-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className="author-social-link-twitter">
                                                    <Link href="/#">
                                                        <i className="ti-twitter-alt"></i>
                                                    </Link>
                                                </li>
                                                <li className="author-social-link-pinterest">
                                                    <Link href="/#">
                                                        <i className="ti-pinterest"></i>
                                                    </Link>
                                                </li>
                                                <li className="author-social-link-instagram">
                                                    <Link href="/#">
                                                        <i className="ti-instagram"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--More posts--> */}
                                <div className="single-more-articles border-radius-5">
                                    <div className="widget-header-2 position-relative mb-30">
                                        <h5 className="mt-5 mb-30">
                                            You might be interested
                                            in
                                        </h5>
                                        <button className="single-more-articles-close">
                                            <i className="elegant-icon icon_close"></i>
                                        </button>
                                    </div>
                                    <div className="post-block-list post-module-1 post-module-5">
                                        <ul className="list-post">
                                            <li className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href="/single" className="color-white">
                                                            <img
                                                                src="/assets/imgs/news/thumb-1.jpg"
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href="/single">The
                                                                                                                                        Best
                                                                                                                                        Time
                                                                                                                                        to
                                                                                                                                        Travel
                                                                                                                                        to
                                                                                                                                        Cambodia
                                                                                                                                    </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                27
                                                                Jan
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                13k
                                                                views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-10">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href="/single" className="color-white">
                                                            <img
                                                                src="/assets/imgs/news/thumb-2.jpg"
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href="/single">20
                                                                                                                                        Photos
                                                                                                                                        to
                                                                                                                                        Inspire
                                                                                                                                        You
                                                                                                                                        to
                                                                                                                                        Visit
                                                                                                                                        Cambodia
                                                                                                                                    </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                27
                                                                August
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                14k
                                                                views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* <!--container--> */}
                    </main>
                </>
            )}
        </Layout>
    </>);
};



export default SingleVendor;