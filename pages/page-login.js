import { useState } from "react";
import Link from "next/link";
import Layout from "./../components/layout/layout";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous error
    setError("");

    // Check if the inputs are empty
    if (!email || !password) {
      setError("Both email and password are required");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the JWT token (here we just log it, but you should store it in localStorage or cookie)
        localStorage.setItem("token", data.token);
        
        // Get the redirect URL from the query string or default to "/"
        const redirectUrl = router.query.redirect || "/"; 
        
        // Redirect the user after successful login
        router.push(redirectUrl);
      } else {
        setError(data.message); // Display error message
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1 text-center">
                    <h3 className="mb-30 font-weight-900">Login</h3>
                  </div>
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="form-group">
                      <button
                        type="submit"
                        className="button button-contactForm btn-block"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                  <div className="divider-text-center mt-15 mb-15">
                    <span>or</span>
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
                    Don't Have an Account?{" "}
                    <Link href="/page-register">Sign up now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Login;