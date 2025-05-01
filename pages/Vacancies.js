import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";

function CaregoryBig() {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        async function fetchVacancies() {
            try {
                const res = await fetch("/api/vacancies/all");
                if (!res.ok) {
                    console.error("Failed to fetch vacancies");
                    return;
                }
                const data = await res.json();
                setVacancies(data);
            } catch (error) {
                console.error("Error fetching vacancies:", error);
            }
        }

        fetchVacancies();
    }, []);

    return (
        <>
            <Layout>
                <main>
                    <div className="archive-header pt-50 text-center">
                        <div className="container">
                            <h2 className="font-weight-900">Vacancies</h2>
                            <div className="breadcrumb">
                                <Link href="/">Home</Link>
                                <span></span> Vacancies
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="loop-list loop-list-style-1">
                            <div className="row">
                                {vacancies.map((item, i) => (
                                    <article
                                        key={i}
                                        className="col-md-6 mb-30 wow fadeInUp animated"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="post-card-1 border-radius-10 hover-up">
                                            <div
                                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                style={{
                                                    backgroundImage: `url(/assets/imgs/news/${item.img || "placeholder.jpg"})`
                                                }}
                                            >
                                                <Link href={`/Vacancies/${item._id}`} className="img-link"></Link>
                                                <span className="top-right-icon bg-success">
                                                    <i className="elegant-icon icon_document_alt"></i>
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
                                                    <span className="post-cat text-info">{item.status}</span>
                                                </div>
                                                <div className="d-flex post-card-content" style={{ minHeight: "0" }}>
                                                    <h5 className="post-title mb-20 font-weight-900">
                                                        <Link href={`/Vacancies/${item._id}`}>
                                                            {item.title}
                                                        </Link>
                                                    </h5>
                                                </div>

                                                {/* 🚀 Direct GitHub link button */}
                                                <div style={{ display: "flex" }}>
                                                    <a 
                                                        href={item.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="btn btn-sm btn-primary mr-30"
                                                        style={{ backgroundColor: "#007bff", color: "#fff", borderRadius: "8px", padding: "6px 12px" }}
                                                    >
                                                        View on GitHub
                                                    </a>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <h6 className="post-on">{item.date}</h6>
                                                    <h6 className="time-reading has-dot">{item.readTime} mins of work</h6>
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

export default CaregoryBig;