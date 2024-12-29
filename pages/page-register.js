import React, { useState } from "react";
import Link from "next/link";
import Layout from "./../components/layout/layout";

function Register() {
    // Step 1: Create state for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Step 2: Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!agree) {
            setError("You must agree to the terms and conditions.");
            return;
        }

        setError(""); // Clear any previous errors
        setLoading(true);

        try {
            // Step 3: Call your backend API to register the user
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // On success, redirect to login page or show success message
                alert("Registration successful! Please log in.");
                window.location.href = "/page-login";
            } else {
                setError(data.message || "Registration failed.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }

        setLoading(false);
    };

    return (
        <>
            <Layout>
                <main className="bg-grey pt-80 pb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-md-10">
                                <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1 text-center">
                                            <h3 className="mb-30 font-weight-900">Create an account</h3>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            {error && <div className="alert alert-danger">{error}</div>}
                                            
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="confirmPassword"
                                                    placeholder="Confirm password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="login_footer form-group">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="checkbox"
                                                            id="exampleCheckbox1"
                                                            value={agree}
                                                            onChange={() => setAgree(!agree)}
                                                        />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox1">
                                                            <span>I agree to terms &amp; Policy.</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <button type="submit" className="button button-contactForm btn-block" disabled={loading}>
                                                    {loading ? "Registering..." : "Submit & Register"}
                                                </button>
                                            </div>
                                        </form>
                                        
                                        <div className="divider-text-center mt-15 mb-15">
                                            <span> or</span>
                                        </div>
                                        
                                        <ul className="btn-login list_none text-center mb-15">
                                            <li>
                                                <a href="#" className="btn btn-facebook">
                                                    <i className="elegant-icon social_facebook mr-5"></i> Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="btn btn-google">
                                                    <i className="elegant-icon social_googleplus mr-5"></i> Google
                                                </a>
                                            </li>
                                        </ul>
                                        
                                        <div className="text-muted text-center">
                                            Already have an account? <Link href="/page-login">Sign in now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default Register;