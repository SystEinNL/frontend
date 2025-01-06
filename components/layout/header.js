import Link from "next/link";
import Menu from "./menu";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = ({ addClass, openSearch }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(""); // Store the username
    const router = useRouter();

    // Fetch user information from the server
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch("/api/userInfo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include", // Include cookies with the request
                    body: JSON.stringify({ fields: ["username"] }), // Request only the username
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(true);
                    setUsername(data.username); // Assume the server returns { username: "user123" }
                } else {
                    console.error("Failed to fetch user info");
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
                setIsLoggedIn(false);
            }
        };

        fetchUserInfo();
    }, []);

    const handleSignOut = async () => {
        try {
            const response = await fetch("/api/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            if (response.ok) {
                setIsLoggedIn(false);
                setUsername("");
                router.push("/");
            }
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    };

    const currentUrl = router.asPath;

    return (
        <>
            <header className="main-header header-style-1 font-heading">
                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">
                            <div className="col-md-3 col-xs-6">
                                <Link href="/">
                                    <img
                                        className="logo"
                                        src="/assets/imgs/theme/logo.png"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                            <div className="col-md-9 col-xs-6 text-right header-top-right">
                                <button className="search-icon d-none d-md-inline" onClick={openSearch}>
                                    <span className="mr-15 text-muted font-small">
                                        <i className="elegant-icon icon_search mr-5"></i>
                                        Search
                                    </span>
                                </button>
                                {isLoggedIn ? (
                                    <>
                                        <span className="mr-15 text-muted font-small">
                                            Welcome, {username}
                                        </span>
                                        <button
                                            className="btn btn-radius bg-danger text-white ml-15 font-small box-shadow"
                                            onClick={handleSignOut}
                                        >
                                            Sign Out
                                        </button>
                                    </>
                                ) : (
                                    <Link href={`/page-login?redirect=${encodeURIComponent(currentUrl)}`}>
                                        <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                                            Login / Sign Up
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Menu addClass={addClass} />
            </header>
        </>
    );
};

export default Header;