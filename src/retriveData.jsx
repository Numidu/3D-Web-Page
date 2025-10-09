import { useEffect, useState } from "react";
import axios from "axios";

function RetrieveData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/user/getUser")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Fetching error:", err));
  }, []); // ✅ array is inside useEffect()

  return (
    <>
      <h2>Retrieve Data</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}

export default RetrieveData;
