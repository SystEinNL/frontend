import Link from "next/link";
import { useState, useEffect } from "react";
import BottomCarousel from "../slider/BottomCarousel";

export default function Bottom() {
    const [tag1Posts, setTag1Posts] = useState([]);
    const [tag2Posts, setTag2Posts] = useState([]);
    const [tag3Posts, setTag3Posts] = useState([]);

    const tag1 = "Internships";
    const tag2 = "Systems Engineering";
    const tag3 = "Health";

    useEffect(() => {
        async function fetchData(tag, setState) {
            try {
                const res = await fetch(`/api/tag/${encodeURIComponent(tag)}`);
                if (!res.ok) {
                    console.error(`Failed to fetch posts for tag: ${tag}`);
                    return;
                }
                const data = await res.json();
                setState(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData(tag1, setTag1Posts);
        fetchData(tag2, setTag2Posts);
        fetchData(tag3, setTag3Posts);
    }, []);

    function renderPosts(posts) {
        if (!posts.length) {
            return <p className="text-muted">No posts found</p>;
        }
        return (
            <ul className="list-post">
                {posts.map((item) => (
                    <li key={item._id} className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href={`/${item.category}/${item._id}`} className="color-white">
                                    <img
                                        src={`/assets/imgs/news/${item.img}`}
                                        alt={item.title}
                                        className="border-radius-5"
                                    />
                                </Link>
                            </div>
                            <div className="post-content media-body">
                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                    <Link href={`/${item.category}/${item._id}`}>
                                        {item.title}
                                    </Link>
                                </h6>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                    <span className="post-on">{item.date}</span>
                                    <span className="post-by has-dot">{item.readTime || 0} MINS READ</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="site-bottom pt-50 pb-50">
            <div className="container">
                <div className="row">
                    {/* First Tag Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">{`${tag1}`}</h5>
                            </div>
                            <div className="post-block-list post-module-1">
                                {renderPosts(tag1Posts)}
                            </div>
                        </div>
                    </div>

                    {/* Second Tag Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">{`${tag2}`}</h5>
                            </div>
                            <div className="post-block-list post-module-1">
                                {renderPosts(tag2Posts)}
                            </div>
                        </div>
                    </div>

                    {/* Third Tag Section */}
                    <div className="col-lg-4">
                        <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated" data-wow-delay="0.4s">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">{`${tag3}`}</h5>
                            </div>
                            <div className="post-block-list post-module-1">
                                {renderPosts(tag3Posts)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}