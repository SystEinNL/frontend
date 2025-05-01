import Link from "next/link";
import Layout from "../components/layout/layout";
import ResearchCarousel from "./../components/slider/ResearchCarousel";
import { useEffect, useState } from "react";

function Home2() {
    const [posts, setPosts] = useState([]);
    const [authorInfo, setAuthorInfo] = useState(null);

    useEffect(() => {
        async function fetchPostsAndAuthor() {
            try {
                // 1. Fetch posts from research collection
                const res = await fetch("/api/research/non-carousel");
                if (!res.ok) {
                    console.error("Failed to fetch posts");
                    return;
                }
                const postsData = await res.json();
                setPosts(postsData);

                if (postsData.length > 0) {
                    const firstAuthor = postsData[0].author;
                    const authorRes = await fetch(`/api/authors/${firstAuthor}`);
                    if (!authorRes.ok) {
                        console.error("Failed to fetch author info");
                        return;
                    }
                    const authorData = await authorRes.json();
                    setAuthorInfo(authorData);
                }
            } catch (error) {
                console.error("Error loading posts or author:", error);
            }
        }

        fetchPostsAndAuthor();
    }, []);

    return (
        <>
            <Layout>
                <main>
                <ResearchCarousel />
                    {/* End feature */}

                    <div className="bg-grey pt-50 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="post-module-3">
                                        <div className="widget-header-1 position-relative mb-30">
                                            <h5 className="mt-5 mb-30">Latest posts</h5>
                                        </div>

                                        <div className="loop-list loop-list-style-1">
                                            {posts.slice(0, 4).map((item, i) => (
                                                <article key={i} className="hover-up-2 transition-normal wow fadeInUp animated">
                                                    <div className="row mb-40 list-style-2">
                                                        <div className="col-md-4">
                                                            <div className="post-thumb position-relative border-radius-5">
                                                                <div
                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                    style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                                                >
                                                                    <Link href={`/research/${item._id}`} className="img-link"></Link>
                                                                </div>
                                                                <ul className="social-share">
                                                                    <li><Link href="#"><i className="elegant-icon social_share"></i></Link></li>
                                                                    <li><Link href="#" className="fb"><i className="elegant-icon social_facebook"></i></Link></li>
                                                                    <li><Link href="#" className="tw"><i className="elegant-icon social_twitter"></i></Link></li>
                                                                    <li><Link href="#" className="pt"><i className="elegant-icon social_pinterest"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8 align-self-center">
                                                            <div className="post-content">
                                                                <div className="entry-meta meta-0 font-small mb-10">
                                                                    <Link href={`/tags/${item.tags[0]}`}>
                                                                        <span className="post-cat text-primary">{item.tags[0]}</span>
                                                                    </Link>
                                                                </div>
                                                                <h5 className="post-title font-weight-900 mb-20">
                                                                    <Link href={`/Research/${item._id}`}>
                                                                        {item.title}
                                                                    </Link>
                                                                </h5>
                                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                    <span className="post-on">{item.date}</span>
                                                                    <span className="time-reading has-dot">{item.readTime} mins read</span>
                                                                    <span className="post-by has-dot">{item.views || 0} views</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar with author info */}
                                <div className="col-lg-4">
                                    <div className="widget-area">
                                        {authorInfo && (
                                            <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-grey border-radius-5 has-border wow fadeInUp animated">
                                                <img
                                                    className="about-author-img mb-25"
                                                    src={`/assets/imgs/authors/${authorInfo.img}`}
                                                    alt={authorInfo.name}
                                                />
                                                <h5 className="mb-20">{authorInfo.name}</h5>
                                                <p className="font-medium text-muted">
                                                    {authorInfo.desc}
                                                </p>
                                                <strong>Contact: </strong>
                                                <p className="font-medium text-muted">
                                                    {authorInfo.email}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default Home2;