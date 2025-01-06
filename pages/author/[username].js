import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";

function Author() {
    const Router = useRouter();
    const [isEditable, setIsEditable] = useState(false);
    const [fields, setFields] = useState([]);
    const [username, setUsername] = useState("");
    const [image, setImage] = useState(null); // State to hold the uploaded image

    // Fetch user info from the API
    useEffect(() => {
        if (!Router.isReady) return;
        const { username } = Router.query;
        setUsername(username);

        const fetchUserInfo = async () => {
            try {
                const response = await fetch("/api/userInfo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ fields: ["username", "name", "email", "img", "bio", "rewards"] }),
                });

                const data = await response.json();

                if (response.ok && data.username === username) {
                    setIsEditable(true);
                    setFields([
                        { name: "Name", value: data.name || "" },
                        { name: "Email", value: data.email || "" },
                        { name: "About", value: data.bio || "" },
                    ]);
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, [Router.isReady, Router.query]);

    // Handle changes to dynamic fields
    const handleFieldChange = (index, newValue, isName = false) => {
        const updatedFields = [...fields];
        if (isName) {
            updatedFields[index].name = newValue;
        } else {
            updatedFields[index].value = newValue;
        }
        setFields(updatedFields);
    };

    // Handle adding a new field
    const handleAddField = () => {
        setFields([...fields, { name: "New Field", value: "" }]);
    };

    // Handle removing a field
    const handleRemoveField = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        // Validate file size and type
        if (file) {
            if (file.size > 1024 * 1024) { // 1MB limit
                alert("File size should be less than 1MB.");
                return;
            }
            if (!["image/jpeg", "image/png"].includes(file.type)) {
                alert("Please upload a valid image (PNG or JPEG).");
                return;
            }

            // If valid, update the image state
            setImage(file);
        }
    };

    // Handle save (includes image upload and other field data)
    const handleSave = async () => {
        try {
            const fieldData = fields.reduce((acc, field) => {
                acc[field.name.toLowerCase()] = field.value;
                return acc;
            }, {});

            const formData = new FormData();
            formData.append("username", username);
            formData.append("fields", JSON.stringify(fieldData));

            // If an image was selected, append it to the form data
            if (image) {
                formData.append("image", image, `${username}.jpg`);
            }

            const response = await fetch("/api/saveAuthor", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert("Failed to save changes: " + result.error);
            }
        } catch (error) {
            console.error("Error saving data:", error);
            alert("An unexpected error occurred.");
        }
    };

    return (
        <Layout>
            <main className="bg-grey pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                                <div className="author-image mb-30">
                                    <img
                                        src={`/assets/imgs/authors/${username}.jpg`}
                                        alt="Author"
                                        className="avatar"
                                    />
                                    {isEditable && (
                                        <div className="mb-30">
                                            <input
                                                type="file"
                                                accept="image/png, image/jpeg"
                                                onChange={handleImageUpload}
                                                className="form-control-file"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="author-info">
                                    {fields.map((field, index) => (
                                        <div key={index} className="mb-4">
                                            <h5 className="text-muted">
                                                {isEditable ? (
                                                    <input
                                                        type="text"
                                                        value={field.name}
                                                        onChange={(e) =>
                                                            handleFieldChange(index, e.target.value, true)
                                                        }
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    field.name
                                                )}
                                            </h5>
                                            <div className="text-muted">
                                                {isEditable ? (
                                                    <textarea
                                                        value={field.value}
                                                        onChange={(e) =>
                                                            handleFieldChange(index, e.target.value)
                                                        }
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <p>{field.value || "No description available"}</p>
                                                )}
                                            </div>
                                            {isEditable && (
                                                <button
                                                    onClick={() => handleRemoveField(index)}
                                                    className="btn btn-danger btn-sm mt-2"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    {isEditable && (
                                        <button
                                            onClick={handleAddField}
                                            className="btn btn-secondary mt-3"
                                        >
                                            + Add Field
                                        </button>
                                    )}
                                    <button onClick={handleSave} className="btn btn-primary mt-3">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Author;