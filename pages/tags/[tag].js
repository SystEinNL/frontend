import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";

function CaregoryList() {
    const router = useRouter();    
    const { tag } = router.query;
    const [catList, setCatList] = useState([]);
    console.log(tag);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!tag) return; // Important: wait until router.query.tag is available
        fetchProducts();
    }, [tag]);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`/api/tag/${encodeURIComponent(tag)}`);
            if (!res.ok) {
                console.error("Failed to fetch posts for tag:", tag);
                return;
            }
            const data = await res.json();
            setCatList(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <main>
                {/* Archive header */}
                <div className="archive-header pt-50">
                    <div className="container">
                        <h2 className="font-weight-900">{tag}</h2>
                        <div className="breadcrumb">
                            <Link href="/" rel="nofollow">
                                Home
                            </Link>
                            <span></span> {tag}
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
                                        {loading ? (
                                            <p className="text-center">Loading...</p>
                                        ) : catList.length === 0 ? (
                                            <p className="text-center text-muted">No posts found for {tag}</p>
                                        ) : (
                                            catList.map((item, i) => (
                                                <article key={item._id} className="hover-up-2 transition-normal wow fadeInUp animated">
                                                    <div className="row mb-40 list-style-2">
                                                        <div className="col-md-4">
                                                            <div className="post-thumb position-relative border-radius-5">
                                                                <div
                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                    style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                                                >
                                                                    <Link href={`/${item.category}/${item._id}`} className="img-link"></Link>
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
                                                                    <Link href={`/tag/${item.tag}`}>
                                                                        <span className="post-cat text-primary">{item.tag}</span>
                                                                    </Link>
                                                                </div>
                                                                <h5 className="post-title font-weight-900 mb-20">
                                                                    <Link href={`/${item.category}/${item._id}`}>{item.title}</Link>
                                                                </h5>
                                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                    <span className="post-on">{item.date}</span>
                                                                    <span className="time-reading has-dot">{item.readTime} mins read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default CaregoryList;