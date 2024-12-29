import Link from "next/link";
import Menu from "./menu";

const Header = ({ addClass, openSearch }) => {
    return (<>
        <header className="main-header header-style-1 font-heading">
            <div className="header-top">
                <div className="container">
                    <div className="row pt-20 pb-20">
                        <div className="col-md-3 col-xs-6">
                            <Link href="/">
                                
                                    <img
                                        className="logo"
                                        src="/assets/imgs/theme/logo.png"
                                        alt=""
                                    />
                                
                            </Link>
                        </div>
                        <div className="col-md-9 col-xs-6 text-right header-top-right ">
                            <ul className="list-inline nav-topbar d-none d-md-inline">
                                <li className="list-inline-item menu-item-has-children">
                                    <Link href="/#">Layouts</Link>
                                    <ul className="sub-menu font-small">
                                        <li className="menu-item-has-children">
                                            <Link href="/#">Pages</Link>
                                            <ul className="sub-menu font-small">
                                                <li>
                                                    <Link href="/page-about">About</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-contact">Contact</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-typography">Typography</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-register">Register</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login">Login</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-search">Search</Link>
                                                </li>
                                                <li>
                                                    <Link href="/author/1">Author</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-404">404 page</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/#">Category</Link>
                                            <ul className="sub-menu font-small">
                                                <li>
                                                    <Link href="/category-list">List layout</Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">Grid layout</Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-masonry">Masonry layout
                                                                                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-big">Big layout</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/#">Single post</Link>
                                            <ul className="sub-menu font-small">
                                                <li>
                                                    <Link href="/blog/1">Default</Link>
                                                </li>
                                                <li>
                                                    <Link href="/single/1">Big image</Link>
                                                </li>
                                                <li>
                                                    <Link href="/single3/1">Left image</Link>
                                                </li>
                                                <li>
                                                    <Link href="/single4/1">With sidebar</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="http://demos.alithemes.com/html/stories/docs/">
                                        <i className="elegant-icon icon_document_alt mr-5"></i>
                                        Document
                                    </Link>
                                </li>
                            </ul>
                            <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                            <button className="search-icon d-none d-md-inline" onClick={openSearch}>
                                <span className="mr-15 text-muted font-small">
                                    <i className="elegant-icon icon_search mr-5"></i>
                                    Search
                                </span>
                            </button>
                            <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Menu addClass={addClass} />
        </header>
    </>);
};

export default Header;
