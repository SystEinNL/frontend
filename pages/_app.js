import React, { useEffect } from "react";
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
import ComingSoon from './comingSoon';

import 'react-perfect-scrollbar/dist/css/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";
import 'metismenujs/dist/metismenujs.css';

function MyApp({ Component, pageProps }) {

    // return <ComingSoon />;

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const WOW = require("wow.js");

            // Now use the correct method to initialize WOW
            const wow = new WOW();
            wow.init();

            // Initialize Masonry layout
            const hasGridClass = document.querySelector('.grid-sizer');
            if (hasGridClass != null) {
                const masonry = require("masonry-layout");
                new masonry(".grid", {
                    itemSelector: ".grid-item",
                    columnWidth: ".grid-sizer"
                });
            }
        }

        // Clean up on route change
        const handleRouteChangeError = () => { };
        router.events.on('routeChangeError', handleRouteChangeError);
        return () => {
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, [router.events]); // Run the effect only when router events change

    return <Component {...pageProps} />;
}

export default MyApp;