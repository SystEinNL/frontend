import Link from "next/link";
import Layout from "./../components/layout/layout";
import EngageCarousel from "../components/slider/EngageCarousel";
import { useEffect, useState } from "react";

function Home() {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        async function fetchFeaturedPosts() {
            try {
                const res = await fetch("/api/featured"); // 🛠 API you built
                if (!res.ok) {
                    console.error("Failed to fetch featured posts");
                    return;
                }
                const data = await res.json();
                // 🎯 Filter out posts where collection/category is 'engage'
                const filtered = data.filter((item) => item.category?.toLowerCase() !== "engage");
                setFeaturedPosts(filtered);
            } catch (error) {
                console.error("Error fetching featured posts:", error);
            }
        }

        fetchFeaturedPosts();
    }, []);

    return (
        <>
            <Layout>
                <main>
                    {/* Featured Section Top */}
                    <div className="featured-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <p className="text-muted">
                                        <span
                                            className="typewrite d-inline"
                                            data-period="2000"
                                            data-type='[ " Travel Blogger. ", "Content Writer. ", "Food Guides " ]'
                                        ></span>
                                    </p>
                                    <h2 className="mb-10">
                                        Welcome to <span>SystEin</span>
                                    </h2>
                                    <h5 className="text-muted">
                                        Don't miss out on the latest news about
                                        our activities, research, and opportunities. Subscribe to our
                                        newsletter...
                                    </h5>
                                    <form
                                        action="https://systein.us8.list-manage.com/subscribe/post?u=baf337729933d829352a55c67&amp;id=7a733e1520&amp;f_id=00df10e1f0"
                                        method="POST"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="input-group form-subcriber mt-30 d-flex"
                                    >
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            placeholder="Enter your email"
                                            className="form-control bg-grey font-small"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="btn bg-primary text-white"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>

                                <div className="col-lg-6 text-right d-none d-lg-block">
                                    <img
                                        src="/assets/imgs/authors/featured.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Posts */}
                    <div className="container">
                        <div className="hot-tags pt-30 pb-30 font-small align-self-center">
                            <div className="widget-header-3">
                                <div className="row align-self-center">
                                    <div className="col-md-4 align-self-center">
                                        <h5 className="widget-title">
                                            Featured posts
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="loop-grid mb-30">
                            <div className="row">
                                {/* Left side carousel */}
                                <div className="col-lg-8 mb-30">
                                    <EngageCarousel />
                                </div>

                                {/* Featured posts (exclude Engage ones) */}
                                {featuredPosts.slice(0, 4).map((item, i) => (
                                    <article key={item._id} className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                                        <div className="post-card-1 border-radius-10 hover-up">
                                            <div
                                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                            >
                                                <Link href={`/${item.category}/${item._id}`} className="img-link"></Link>
                                                <span className="top-right-icon bg-success">
                                                    <i className="elegant-icon icon_camera_alt"></i>
                                                </span>
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
                                                        <Link href={`/${item.category}/${item._id}`}>
                                                            {item.title}
                                                        </Link>
                                                    </h5>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">{item.date}</span>
                                                        <span className="time-reading has-dot">{item.readTime || 0} mins read</span>
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

export default Home;