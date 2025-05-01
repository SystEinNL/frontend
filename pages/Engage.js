import Link from "next/link";
import Layout from "../components/layout/layout";
import EngageCarousel from '../components/slider/EngageCarousel';
import { useEffect, useState } from "react";

function CaregoryGrid() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("/api/engage/non-carousel");
                if (!res.ok) {
                    console.error("Failed to fetch posts");
                    return;
                }
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <>
            <Layout>
                <main>
                    <div className="archive-header pt-50 text-center">
                        <div className="container">
                            <h2 className="font-weight-900">Systems Thinking ARG</h2>
                            <div className="breadcrumb">
                                <Link href="/" rel="nofollow">Home</Link>
                                <span></span> Engage
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="loop-grid mb-30">
                            <div className="row">
                                <div className="col-lg-8 mb-30">
                                    <EngageCarousel />
                                </div>
                                {posts.map((item, i) => (
                                    <article
                                        key={i}
                                        className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="post-card-1 border-radius-10 hover-up">
                                            <div
                                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                style={{
                                                    backgroundImage: `url(/assets/imgs/news/${item.img})`
                                                }}
                                            >
                                                <Link href={`/Engage/${item._id}`} className="img-link"></Link>
                                                <span className="top-right-icon bg-success">
                                                    <i className="elegant-icon icon_camera_alt"></i>
                                                </span>
                                                <ul className="social-share">
                                                    <li><Link href="#"><i className="elegant-icon social_share"></i></Link></li>
                                                    <li><Link href="#" className="fb"><i className="elegant-icon social_facebook"></i></Link></li>
                                                    <li><Link href="#" className="tw"><i className="elegant-icon social_twitter"></i></Link></li>
                                                    <li><Link href="#" className="pt"><i className="elegant-icon social_pinterest"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="post-content p-30">
                                                <div className="entry-meta meta-0 font-small mb-10">
                                                    <Link href={`/tags/${item.tags[0]}`}>
                                                        <span className="post-cat text-info">{item.tags[0]}</span>
                                                    </Link>
                                                </div>
                                                <div className="d-flex post-card-content">
                                                    <h5 className="post-title mb-20 font-weight-900">
                                                        <Link href={`/Engage/${item._id}`}>
                                                            {item.title}
                                                        </Link>
                                                    </h5>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">{item.date}</span>
                                                        <span className="time-reading has-dot">{item.readTime} mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default CaregoryGrid;
