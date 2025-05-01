import Link from "next/link";
import PerfectScrollbar from 'react-perfect-scrollbar';
import PartnerWidget from "../widgets/PartnersWidget";
const Sidebar = ({ removeClass }) => {
    return (<>
        <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
            <PerfectScrollbar>
                <button className="off-canvas-close" onClick={removeClass}>
                    <i className="elegant-icon icon_close text-danger"></i>
                </button>
                <div className="sidebar-inner">
                    {/* <!--Partners--> */}
                    <div className="sidebar-widget widget-latest-posts mb-50">
                        <PartnerWidget />
                    </div>
                    {/* <!--Ads--> */}
                    <div className="sidebar-widget widget-ads">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Identity</h5>
                        </div>

                        <Link href="https://tue.nl">
                            <img className="advertise-img border-radius-5" src="/assets/imgs/ads/ads-1.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </PerfectScrollbar>
        </aside>
    </>);
};

export default Sidebar;
