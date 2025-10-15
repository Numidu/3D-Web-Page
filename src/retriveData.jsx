import { useEffect, useState } from "react";
import axios from "axios";

function RetrieveData({ rel }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/user/getUser")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Fetching error:", err));
  }, [rel]); // ✅ array is inside useEffect()

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f8fafc",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2563eb",
          fontFamily: "Poppins, sans-serif",
          marginBottom: "20px",
        }}
      >
        👥 User List
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((u) => (
          <li
            key={u.id}
            style={{
              backgroundColor: "white",
              marginBottom: "10px",
              padding: "15px 20px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1.0)")
            }
          >
            <span style={{ fontWeight: "600", color: "#1f2937" }}>
              {u.name}
            </span>
            <span style={{ color: "#6b7280" }}>🆔 {u.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RetrieveData;
