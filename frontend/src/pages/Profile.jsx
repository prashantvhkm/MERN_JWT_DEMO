import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first!");
      window.location.href = "/";
      return;
    }

    axios
      .get("http://localhost:5000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        window.location.href = "/";
      });
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <h2 className="text-center text-primary mb-4">User Profile</h2>

        {!user ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Fetching your details...</p>
          </div>
        ) : (
          <div>
            <div className="mb-3">
              <strong>Name:</strong>
              <p className="form-control-plaintext">{user.name}</p>
            </div>
            <div className="mb-3">
              <strong>Email:</strong>
              <p className="form-control-plaintext">{user.email}</p>
            </div>
            <div className="mb-3">
              <strong>User ID:</strong>
              <p className="form-control-plaintext">{user._id}</p>
            </div>

            <button
              className="btn btn-danger w-100 mt-3"
              onClick={() => {
                localStorage.removeItem("token");
                alert("Logged out successfully!");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
