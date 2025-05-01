import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";

const SingleVendor = () => {
    const Router = useRouter();
    const { id } = Router.query;

    const [singleData, setSingleData] = useState(null);
    const [authorInfo, setAuthorInfo] = useState(null);

    useEffect(() => {
        if (!id) return;

        async function fetchPost() {
            try {
                const res = await fetch(`/api/vacancies/${id}`);
                if (!res.ok) {
                    console.error("Failed to fetch post");
                    return;
                }
                const data = await res.json();
                setSingleData(data);

                // Fetch the author info based on the author's username
                if (data.author) {
                    const authorRes = await fetch(`/api/authors/${encodeURIComponent(data.author)}`);
                    if (authorRes.ok) {
                        const authorData = await authorRes.json();
                        setAuthorInfo(authorData);
                    } else {
                        console.error("Failed to fetch author info");
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchPost();
    }, [id]);

    if (!singleData) {
        return (
            <Layout>
                <div className="text-center p-5">Loading...</div>
            </Layout>
        );
    }

    return (
        <Layout>
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
                                                    src={authorInfo ? `/assets/imgs/authors/${authorInfo.img}` : "/assets/imgs/authors/author-3.jpg"}
                                                    alt="${authorInfo.name}"
                                                />
                                            </Link>
                                            By
                                            <Link href="/author">
                                                <span className="author-name font-weight-bold ml-5">
                                                    {authorInfo ? authorInfo.name : singleData.author}
                                                </span>
                                            </Link>
                                        </p>
                                        <span className="mr-10">
                                            {singleData.date}
                                        </span>
                                        <span className="has-dot">
                                            {singleData.readTime} mins read
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog image */}
                        <figure className="image mb-30 m-auto text-center border-radius-10">
                            <img
                                className="border-radius-10"
                                src={`/assets/imgs/news/${singleData.img}`}
                                alt={singleData.title}
                            />
                        </figure>

                        {/* Blog content */}
                        <article className="entry-wraper mb-50">
                            <div className="entry-main-content dropcap wow fadeIn animated">
                                <p>{singleData.body}</p>
                            </div>

                            {/* Tags */}
                            <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                                <div className="tags">
                                    <span>Tags: </span>
                                    {singleData.tags.map((tag, index) => (
                                        <Link href={`/tags/${tag}`} key={index}>{tag}</Link>
                                    ))}
                                </div>
                            </div>

                            {/* Author bio */}
                            {authorInfo && (
                                <div className="author-bio p-30 mt-50 border-radius-10 bg-dark wow fadeIn animated">
                                    <div className="author-image mb-30">
                                        <Link href="/author">
                                            <img
                                                src={`/assets/imgs/authors/${authorInfo.img}`}
                                                alt={authorInfo.name}
                                                className="avatar"
                                            />
                                        </Link>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="font-weight-bold mb-20">
                                            <Link href="/author">{authorInfo.name}</Link>
                                        </h4>
                                        <h5 className="text-muted">{`Email : ${authorInfo.email}`}</h5>
                                        <div className="author-description text-muted">
                                            {authorInfo.desc}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </article>
                    </div>
                </main>
            </>
        </Layout>
    );
};

export default SingleVendor;