import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import PartnersWidget from "../components/widgets/PartnersWidget";

function CaregoryList() {
    const [internships, setInternships] = useState([]);
    const [authorInfo, setAuthorInfo] = useState(null);

    useEffect(() => {
        async function fetchInternshipsAndAuthor() {
            try {
                // 1. Fetch internship posts
                const res = await fetch("/api/internships/all");
                if (!res.ok) {
                    console.error("Failed to fetch internships");
                    return;
                }
                const internshipsData = await res.json();
                setInternships(internshipsData);

                // 2. Fetch author info (from the first internship author)
                if (internshipsData.length > 0) {
                    const firstAuthorUsername = internshipsData[0].author;
                    const authorRes = await fetch(`/api/authors/${firstAuthorUsername}`);
                    if (!authorRes.ok) {
                        console.error("Failed to fetch author info");
                        return;
                    }
                    const authorData = await authorRes.json();
                    setAuthorInfo(authorData);
                }
            } catch (error) {
                console.error("Error fetching internships or author:", error);
            }
        }

        fetchInternshipsAndAuthor();
    }, []);

    return (
        <>
            <Layout>
                <main>
                    {/* Archive header */}
                    <div className="archive-header pt-50">
                        <div className="container">
                            <h2 className="font-weight-900">Internship Positions</h2>
                            <div className="breadcrumb">
                                <Link href="/" rel="nofollow">Home</Link>
                                <span></span> Internships
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="pb-50">
                        <div className="container">
                            <div className="row">
                                {/* Internships posts */}
                                <div className="col-lg-8">
                                    <div className="post-module-3">
                                        <div className="loop-list loop-list-style-1">
                                            {internships.map((item, i) => (
                                                <article key={i} className="hover-up-2 transition-normal wow fadeInUp animated">
                                                    <div className="row mb-40 list-style-2">
                                                        <div className="col-md-4">
                                                            <div className="post-thumb position-relative border-radius-5">
                                                                <div
                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                    style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                                                >
                                                                    <Link href={`/Internships/${item._id}`} className="img-link"></Link>
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
                                                                    <Link href={`/category/${item.category}`}>
                                                                        <span className="post-cat text-primary">{item.category}</span>
                                                                    </Link>
                                                                </div>
                                                                <h5 className="post-title font-weight-900 mb-20">
                                                                    <Link href={`/Internships/${item._id}`}>
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

                                {/* Sidebar */}
                                <div className="col-lg-4">
                                    <div className="widget-area">
                                        {/* Author profile */}
                                        {authorInfo && (
                                            <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 border-radius-5 has-border wow fadeInUp animated">
                                                <img className="about-author-img mb-25" src={`/assets/imgs/authors/${authorInfo.img}`} alt={authorInfo.name} />
                                                <h5 className="mb-20">{authorInfo.name}</h5>
                                                <p className="font-medium text-muted">{authorInfo.desc}</p>
                                                <strong>Contact: </strong>
                                                <p className="font-medium text-muted">{authorInfo.email}</p>

                                                <strong>Follow me: </strong>
                                                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                                    <li className="list-inline-item">
                                                        <Link href="/#" className="fb"><i className="elegant-icon social_facebook"></i></Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="/#" className="tw"><i className="elegant-icon social_twitter"></i></Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="/#" className="pt"><i className="elegant-icon social_pinterest"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <PartnersWidget />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default CaregoryList;