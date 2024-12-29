import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import NavMenu from "./nav";

const Menu = ({ addClass }) => {
    const [scroll, setScroll] = useState(0);
    const [isToggled, setToggled] = useState(false);
    const [size, setSize] = useState(0);

    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
    }, []);

    return (<>
        <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
            <div className="container align-self-center position-relative">
                <div className="main-nav float-left ">
                    <nav>
                        <ul className="main-menu d-none d-lg-inline font-small">
                            <li className="menu-item-has-children">
                                <Link href="/">
                                    
                                        <i className="elegant-icon icon_house_alt mr-5"></i>
                                        Home
                                    
                                </Link>
                                <ul className="sub-menu text-muted font-small">
                                    <li>
                                        <Link href="/">
                                            Home default
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home-2">Homepage 2</Link>
                                    </li>
                                    <li>
                                        <Link href="/home-3">Homepage 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/category/travel">Travel</Link>
                            </li>
                            <li className="current-item has-mega-menu">
                                <Link href="#">Mega Menu</Link>
                                <ul className="mega-menu">
                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                        <Link href="#">Travel Blog</Link>
                                        <ul>
                                            <li>
                                                <Link href="/category-grid">Destinations</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Tour Guides</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Travel Food</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Hotels Booking</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Transport Review</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Travel Healthy</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                        <Link href="#">Fruit & Vegetables</Link>
                                        <ul>
                                            <li>
                                                <Link href="/category-grid">Meat & Poultry</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Fresh Vegetables</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Herbs & Seasonings</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Cuts & Sprouts</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Exotic Fruits & Veggies</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Packaged Produce</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                        <Link href="#">Breakfast & Dairy</Link>
                                        <ul>
                                            <li>
                                                <Link href="/category-grid">Milk & Flavoured Milk</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Butter and Margarine</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Eggs Substitutes</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Marmalades</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Sour Cream</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Cheese</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                        <Link href="#">Meat & Seafood</Link>
                                        <ul>
                                            <li>
                                                <Link href="/category-grid">Breakfast Sausage</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Dinner Sausage</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Chicken</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Sliced Deli Meat</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Wild Caught Fillets</Link>
                                            </li>
                                            <li>
                                                <Link href="/category-grid">Crab and Shellfish</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/category-grid">Guides</Link>
                            </li>
                            <li>
                                <Link href="/category-masonry">Food</Link>
                            </li>
                            <li>
                                <Link href="/category/hotels">Hotels</Link>
                            </li>
                            <li>
                                <Link href="/category">Review</Link>
                            </li>
                            <li>
                                <Link href="/category">Healthy </Link>
                            </li>
                            <li>
                                <Link href="/category">Lifestyle</Link>
                            </li>
                            <li>
                                <Link href="/category">Blog</Link>
                            </li>
                        </ul>

                        <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                            <button onClick={toggleTrueFalse}>
                                <span className="menu-icon mr-10">
                                    <span className="menu-icon-inner"></span>
                                </span>
                                Main Menu
                            </button>
                            <NavMenu isToggled={isToggled} />
                        </div>
                    </nav>
                </div>
                <div className="float-right header-tools text-muted font-small">
                    <ul className="header-social-network d-inline-block list-inline mr-15">
                        <li className="list-inline-item">
                            <Link href="/#" className="social-icon fb text-xs-center">
                                <i className="elegant-icon social_facebook"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link href="/#" className="social-icon tw text-xs-center">
                                <i className="elegant-icon social_twitter "></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link href="/#" className="social-icon pt text-xs-center">
                                <i className="elegant-icon social_pinterest "></i>
                            </Link>
                        </li>
                    </ul>
                    <div className="off-canvas-toggle-cover d-inline-block">
                        <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={addClass}>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </>);
};

export default Menu;
