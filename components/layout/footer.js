import Link from "next/link";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const Footer = ({ removeClass }) => {
    return (<>
        <footer className="pt-50 pb-20 bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-9">
                        <div className="sidebar-widget wow fadeInUp animated mb-30">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">About</h5>
                            </div>
                            <div style={{ display: "flex" }}>
                                <Link href="https://tue.nl">
                                <img className="footer-img border-radius-5 mr-20" src="/assets/imgs/ads/ads-1.jpg" alt="" />
                                </Link>
                                <div className="textwidget">
                                <p>
                                    <span className="text-primary">SystEin</span> is on a mission to promote Systems Science and foster a community of <span className="text-primary">Systems Thinkers</span> at Eindhoven University of Technology and in the North Brabant region.
                                </p>
                                <p>
                                    <strong className="color-black">
                                    51.44863203671382 5.496459687846299
                                    </strong>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div
                            className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                            data-wow-delay="0.1s"
                        >
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Quick link</h5>
                            </div>
                            <ul className="font-small">
                                <li className="cat-item cat-item-2">
                                    <Link href="/About">About</Link>
                                </li>
                                <li className="cat-item cat-item-5">
                                    <Link href="/#">​​Licensing Policy</Link>
                                </li>
                                <li className="cat-item cat-item-6">
                                    <Link href="/#">Refund Policy</Link>
                                </li>
                                <li className="cat-item cat-item-7">
                                    <Link href="/#">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                            data-wow-delay="0.3s"
                        >
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Newsletter</h5>
                            </div>
                            <div className="newsletter">
                                <p className="font-medium">
                                    Subscribe to our newsletter and get our
                                    newest updates right on your inbox.
                                </p>
                                <form
                                    action="https://systein.us8.list-manage.com/subscribe/post?u=baf337729933d829352a55c67&amp;id=7a733e1520&amp;f_id=00df10e1f0"
                                    method="POST"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="input-group form-subcriber mt-30 d-flex"
                                >
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        placeholder="Enter your email"
                                        className="form-control bg-grey font-small"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn bg-primary text-white">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                    <p className="float-md-left font-small text-muted">
                        © 2025, SystEin. Systems Science Think Tank{" "}
                    </p>
                    <p className="float-md-right font-small text-muted">
                        Design by{" "}
                        <Link href="https://incose.org">TU/e INCOSE Branch
                        </Link>{" "}
                        | All rights reserved
                    </p>
                </div>
            </div>
        </footer>
        <div className="dark-mark" onClick={removeClass}></div>
    </>);
};

export default Footer;
