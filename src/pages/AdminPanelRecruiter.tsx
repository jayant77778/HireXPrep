import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanelRecruiter = () => {
  const [step, setStep] = useState(1);
  const [adminDetails, setAdminDetails] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: ""
  });
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAdminChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Allow any admin details, but require email and password
    if (form.email && form.password === "admin") {
      // Save admin details to localStorage or context if needed
      localStorage.setItem("hirex_admin_details", JSON.stringify(adminDetails));
      navigate("/recruiter-admin-dashboard");
      setLoading(false);
      return;
    }
    setError("Invalid email or password");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4 py-12">
      <div className="bg-slate-800/80 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-slate-700">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Recruiter Admin Login</h2>
        {step === 1 ? (
          <form onSubmit={handleAdminSubmit} className="space-y-4">
            <input type="text" name="name" value={adminDetails.name} onChange={handleAdminChange} placeholder="Full Name" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <input type="text" name="email" value={adminDetails.email} onChange={handleAdminChange} placeholder="Email" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <input type="text" name="company" value={adminDetails.company} onChange={handleAdminChange} placeholder="Company Name" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <input type="text" name="role" value={adminDetails.role} onChange={handleAdminChange} placeholder="Your Role (e.g. HR, Recruiter)" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <input type="text" name="phone" value={adminDetails.phone} onChange={handleAdminChange} placeholder="Phone Number" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25">Next</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="email" value={form.email} onChange={handleLoginChange} placeholder="Admin Email" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <input type="password" name="password" value={form.password} onChange={handleLoginChange} placeholder="Password (admin)" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25">{loading ? "Logging in..." : "Login"}</button>
          </form>
        )}
        {error && <div className="mt-4 text-center text-red-400">{error}</div>}
      </div>
    </div>
  );
};

export default AdminPanelRecruiter;
