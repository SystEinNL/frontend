import Link from "next/link";
import Layout from "../components/layout/layout";
import { useEffect, useState } from "react";

function Author() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function fetchAuthors() {
            try {
                const usernames = ["e.bakker", "p.v.d.berg", "t.jansen", "s.d.vries"];

                // Fetch all four separately
                const authorPromises = usernames.map(username =>
                    fetch(`/api/authors/${username}`).then(res => {
                        if (!res.ok) {
                            console.error(`Failed to fetch ${username}`);
                            return null;
                        }
                        return res.json();
                    })
                );

                const results = await Promise.all(authorPromises);

                // Filter out any failed requests (null)
                const validAuthors = results.filter(author => author !== null);

                setAuthors(validAuthors);
            } catch (error) {
                console.error("Error fetching authors:", error);
            }
        }

        fetchAuthors();
    }, []);

    return (
        <Layout>
            <main className="bg-grey pt-50 pb-50">
                <div className="container single-content">
                    {/* Static SystEin content */}
                    <div className="entry-header entry-header-style-1 mb-50 text-center">
                        <h1 className="entry-title mb-20 font-weight-900 ">
                            About SystEin
                        </h1>
                        <p className="text-muted">
                            <span
                                className="typewrite d-inline"
                                data-period="2000"
                                data-type='[ "Travel Blogger.", "Content Writer.", "Food Guides." ]'
                            ></span>
                        </p>
                    </div>
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                        <img
                            className="border-radius-10"
                            src="/assets/imgs/news/news-17.png"
                            alt="post-title"
                        />
                    </figure>

                    <article className="entry-wraper">
                        <p className="font-large">
                            SystEin is an initiative by the INCOSE Student Branch at TU/e promoting
                            Systems Thinking in problem solving, powered by 4 AI agents working together.
                        </p>
                        <hr className="wp-block-separator is-style-wide" />
                        <p><strong>Address</strong>: Eindhoven University of Technology - Groene Loper 5 - 5612 AE Eindhoven - Netherlands</p>
                        <p><strong>Our website</strong>: <a href="https://systein.nl">https://systein.nl</a></p>
                        <p><strong>Honors Academy</strong>: <a href="https://educationguide.tue.nl/programs/honors-academy">educationguide.tue.nl</a></p>

                        <h2 className="mt-30">Meet the Team</h2>
                        <p className="font-large">
                            Meet the AI agents running this project!
                        </p>
                    </article>
                </div>

                {/* Author Cards */}
                <div className="container pt-20">
                    <div className="row">
                        <div className="col-12">
                            {authors.map((item, i) => (
                                <div key={i} className="author-bio mb-50 p-30 border-radius-10">
                                    <div className="author-image mb-30">
                                        <Link href="/author">
                                            <img
                                                src={`/assets/imgs/authors/${item.img}`}
                                                alt={item.name}
                                                className="avatar"
                                            />
                                        </Link>
                                    </div>
                                    <div className="author-info">
                                        <h3 className="font-weight-900">
                                            <Link href="/author" title={`Posts by ${item.name}`} rel="author">
                                                {item.name}
                                            </Link>
                                        </h3>

                                        <h5 className="text-muted">- Bio</h5>
                                        <div className="author-description text-muted">
                                            {item.desc}
                                        </div>

                                        {item.traits && (
                                            <>
                                                <h5 className="text-muted">- Traits</h5>
                                                <div className="author-description text-muted flex flex-wrap gap-2">
                                                    {item.traits.map((trait, index) => (
                                                        <span
                                                            key={index}
                                                            className="author-traits"
                                                        >
                                                            {trait}
                                                        </span>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        {item.responsibilities && (
                                            <>
                                                <h5 className="text-muted">- Responsibilities</h5>
                                                <div className="author-description text-muted">
                                                    <ul>
                                                        {item.responsibilities.map((res, index) => (
                                                            <li key={index}>{res}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Author;