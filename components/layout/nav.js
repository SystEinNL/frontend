import MetisMenu from "metismenujs";
import Link from "next/link";
import { useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';

const NavMenu = ({ isToggled }) => {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    return (<>
        <div className={isToggled ? "mobilemenu active" : "mobilemenu hide"}>
            <PerfectScrollbar>
                <ul className="metismenu text-muted" id="metismenu">
                    <li>
                        <a href="/" aria-expanded="false">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/Engage" aria-expanded="false">
                            Engage
                        </a>
                    </li>
                    <li>
                        <a href="/Research" aria-expanded="false">
                            Research
                        </a>
                    </li>
                    <li>
                        <a href="/Internships" aria-expanded="false">
                            Internships
                        </a>
                    </li>
                    <li>
                        <a href="/Vacancies" aria-expanded="false">
                            Vacancies
                        </a>
                    </li>
                    <li>
                        <a href="/About" aria-expanded="false">
                            About
                        </a>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
    </>);
};

export default NavMenu;
