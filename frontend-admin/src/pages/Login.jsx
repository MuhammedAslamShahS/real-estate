import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/admin/login", form);
      localStorage.setItem("token", res.data.token);
      alert("login success");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleLogin}
        autoComplete="off"
        className="p-5 border rounded w-[400px]"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          Admin Login
        </h2>

        <input
          type="text"
          name="fake_username"
          autoComplete="username"
          className="hidden"
          tabIndex={-1}
        />

        <input
          type="password"
          name="fake_password"
          autoComplete="current-password"
          className="hidden"
          tabIndex={-1}
        />

        <input
          type="text"
          name="admin_entry_name_873"
          placeholder="Name"
          autoComplete="off"
          readOnly
          onFocus={(e) => e.target.removeAttribute("readOnly")}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="admin_entry_id_214"
          placeholder="ID"
          autoComplete="off"
          readOnly
          onFocus={(e) => e.target.removeAttribute("readOnly")}
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          name="admin_entry_pass_991"
          placeholder="Password"
          autoComplete="new-password"
          readOnly
          onFocus={(e) => e.target.removeAttribute("readOnly")}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;