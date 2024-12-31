import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import Layout from "../../components/layout/layout";

function Author() {
    let Router = useRouter();
    const { id } = Router.query;

    const [mongoUser, setMongoUser] = useState(null); // User data from MongoDB
    const [jwtUser, setJwtUser] = useState(null); // User data from JWT
    const [isEditable, setIsEditable] = useState(false);
    const [newInfo, setNewInfo] = useState({ title: "", desc: "" });

    // Decode JWT token from localStorage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setJwtUser(decoded);
            } catch (error) {
                console.error("Error decoding JWT:", error);
            }
        }
    }, []);

    // Fetch user data from MongoDB
    useEffect(() => {
        if (id) {
            fetch(`/api/users/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setMongoUser(data);
                    }
                })
                .catch((error) => console.error("Error fetching user data:", error));
        }
    }, [id]);

    console.log(jwtUser);

    // Determine if editing is allowed
    useEffect(() => {
        if (jwtUser && mongoUser && jwtUser.userId === mongoUser._id) {
            setIsEditable(true); // Allow editing if JWT user matches MongoDB user
        } else {
            setIsEditable(false); // Disallow editing otherwise
        }
    }, [jwtUser, mongoUser]);

    const handleSave = async () => {
        const response = await fetch("/api/saveAuthor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: jwtUser._id, // Use the ID from JWT
                title: newInfo.title,
                desc: newInfo.desc,
            }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert("Failed to save changes.");
        }
    };

    return (
        <Layout>
            <main className="bg-grey pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {mongoUser && (
                                <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                                    <div className="author-image mb-30">
                                        <img
                                            src={`/assets/imgs/authors/${mongoUser.img}`}
                                            alt=""
                                            className="avatar"
                                        />
                                    </div>
                                    <div className="author-info">
                                        <h3 className="font-weight-900">
                                            {isEditable ? (
                                                <input
                                                    type="text"
                                                    value={newInfo.title || mongoUser.title}
                                                    onChange={(e) =>
                                                        setNewInfo({ ...newInfo, title: e.target.value })
                                                    }
                                                    className="form-control"
                                                />
                                            ) : (
                                                mongoUser.title
                                            )}
                                        </h3>
                                        <h5 className="text-muted">About author</h5>
                                        <div className="author-description text-muted">
                                            {isEditable ? (
                                                <textarea
                                                    value={newInfo.desc || mongoUser.desc}
                                                    onChange={(e) =>
                                                        setNewInfo({ ...newInfo, desc: e.target.value })
                                                    }
                                                    className="form-control"
                                                />
                                            ) : (
                                                mongoUser.desc
                                            )}
                                        </div>
                                        {isEditable && (
                                            <button onClick={handleSave} className="btn btn-primary mt-3">
                                                Save Changes
                                            </button>
                                        )}
                                        <strong className="text-muted">Follow: </strong>
                                        <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                            <li className="list-inline-item">
                                                <a className="fb" href="#" target="_blank" title="Facebook">
                                                    <i className="elegant-icon social_facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="tw" href="#" target="_blank" title="Tweet now">
                                                    <i className="elegant-icon social_twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="pt" href="#" target="_blank" title="Pin it">
                                                    <i className="elegant-icon social_pinterest"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Author;