import Link from "next/link";
const Search = () => {
    return (
        <>
            <div className="main-search-form">
                <div className="container">
                    <div className=" pt-50 pb-50 ">
                        <div className="row mb-20">
                            <div className="col-12 align-self-center main-search-form-cover m-auto">
                                <p className="text-center">
                                    <span className="search-text-bg">Search</span>
                                </p>
                                <form action="#" className="search-header">
                                    <div className="input-group w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search research topics, vacancies and more..."
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-search"
                                                type="submit"
                                            >
                                                <i className="elegant-icon icon_search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-80 text-center">
                            <div className="col-12 font-small suggested-area">
                                <h5 className="suggested font-heading mb-20 text-muted">
                                    {" "}
                                    <strong>Suggested keywords:</strong>
                                </h5>
                                <ul className="list-inline d-inline-block">
                                    <li className="list-inline-item">
                                        <Link href="/category">Research</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Puzzle</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Research</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Tech</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Science</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Books</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Travel</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="/category">Business</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Search;