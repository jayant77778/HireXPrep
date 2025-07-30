import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const RecruiterCallbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "recruiter_callbacks"), form);
      setSuccess("Thank you! We will contact you soon.");
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4 py-12">
      <div className="bg-slate-800/80 p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-slate-700">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Recruiter Call Back</h2>
        <p className="text-slate-400 text-center mb-6">Fill the form and our team will reach out to you.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company Name" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" rows={3} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25">
            {loading ? "Submitting..." : "Request Call Back"}
          </button>
        </form>
        {success && <div className="mt-4 text-center text-cyan-400">{success}</div>}
      </div>
    </div>
  );
};

export default RecruiterCallbackForm;
