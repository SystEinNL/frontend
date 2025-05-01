import { useEffect, useState } from "react";
import Link from "next/link";

function PartnersWidget() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        async function fetchPartners() {
            try {
                const res = await fetch("/api/partners/all");
                if (!res.ok) {
                    console.error("Failed to fetch partners");
                    return;
                }
                const data = await res.json();
                setPartners(data);
            } catch (error) {
                console.error("Error loading partners:", error);
            }
        }

        fetchPartners();
    }, []);

    return (
        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
            <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">Partners</h5>
            </div>
            <div className="post-block-list post-module-1">
                <ul className="list-post">
                    {partners.map((partner, i) => (
                        <li key={i} className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                <div className="post-content media-body">
                                    <h6 className="post-title mb-15 text-primary text-limit-2-row font-medium">
                                        <Link href={partner.website} target="_blank">
                                            {partner.company}
                                        </Link>
                                    </h6>
                                    <h6 className="post-title mb-15 text-limit-2-row font-small">
                                        {partner.desc}
                                    </h6>
                                </div>
                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                    <Link href={partner.website} className="color-white" target="_blank">
                                        <img
                                            src={`/assets/imgs/partners/${partner.logo}`}
                                            alt={partner.company}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PartnersWidget;