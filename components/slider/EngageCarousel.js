import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const EngageCarousel = () => {
    const [carouselPosts, setCarouselPosts] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        async function fetchCarouselPosts() {
            try {
                const res = await fetch("/api/engage/carousel"); // <-- we make a small API for this
                if (!res.ok) {
                    console.error("Failed to fetch carousel posts");
                    return;
                }
                const data = await res.json();
                setCarouselPosts(data);
            } catch (error) {
                console.error("Error fetching carousel posts:", error);
            }
        }

        fetchCarouselPosts();
    }, []);

    return (
        <div>
            <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                <div className="arrow-cover"></div>
                <Slider {...settings} className="slide-fade">
                    {carouselPosts.map((item, i) => (
                        <div key={i} className="position-relative post-thumb">
                            <div
                                className="thumb-overlay img-hover-slide position-relative"
                                style={{
                                    backgroundImage: `url(/assets/imgs/news/${item.img})`
                                }}
                            >
                                <span className="top-left-icon bg-warning">
                                    <i className="elegant-icon icon_star_alt"></i>
                                </span>
                                <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                    <div className="entry-meta meta-0 font-small mb-20">
                                        <Link href={`/category/${item.category}`}>
                                            <span className="post-cat text-info">
                                                {item.tags[0]}
                                            </span>
                                        </Link>
                                    </div>
                                    <h3 className="post-title font-weight-900 mb-20">
                                        <Link href={`/Engage/${item._id}`}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                        <span className="post-on">
                                            {item.date}
                                        </span>
                                        <span className="hit-count has-dot">
                                            {item.readTime} MINS READ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default EngageCarousel;