import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const RecruiterAdminDashboard = () => {
  const [job, setJob] = useState({ title: "", description: "", type: "Full Time", level: "Fresher" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [admin, setAdmin] = useState<any>(null);

  useEffect(() => {
    const adminDetails = localStorage.getItem("hirex_admin_details");
    if (adminDetails) setAdmin(JSON.parse(adminDetails));
    const fetchJobs = async () => {
      const q = query(collection(db, "recruiter_jobs"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchJobs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "recruiter_jobs"), {
        ...job,
        adminName: admin?.name,
        adminEmail: admin?.email,
        adminCompany: admin?.company,
        adminRole: admin?.role,
        adminPhone: admin?.phone,
        createdAt: new Date()
      });
      setSuccess("Job posted!");
      setJob({ title: "", description: "", type: "Full Time", level: "Fresher" });
      // Refresh jobs
      const q = query(collection(db, "recruiter_jobs"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch {
      setSuccess("Error posting job");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-slate-800/80 p-8 rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-700">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Recruiter Admin Panel</h2>
        <p className="text-slate-400 text-center mb-6">Post a job requirement for candidates to see.</p>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input type="text" name="title" value={job.title} onChange={handleChange} placeholder="Job Title (e.g. Java Developer)" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <textarea name="description" value={job.description} onChange={handleChange} placeholder="Job Description" rows={3} required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" />
          <div className="flex gap-4">
            <select name="type" value={job.type} onChange={handleChange} className="w-1/2 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500">
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            <select name="level" value={job.level} onChange={handleChange} className="w-1/2 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500">
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25">
            {loading ? "Posting..." : "Post Job"}
          </button>
        </form>
        {success && <div className="mb-4 text-center text-cyan-400">{success}</div>}
        <div className="bg-slate-900/60 rounded-xl p-6 mt-4 text-center text-slate-300">
          <h3 className="text-xl font-bold mb-4">Posted Jobs</h3>
          {jobs.length === 0 ? <p>No jobs posted yet.</p> : (
            <ul className="space-y-8">
              {jobs.map(j => (
                <li key={j.id} className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-left">
                  <div className="font-semibold text-cyan-400 text-lg">{j.title}</div>
                  <div className="text-slate-300 mt-1">{j.description}</div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="bg-cyan-900/40 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{j.type}</span>
                    <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">{j.level}</span>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">
                    <span className="font-semibold">Posted by:</span> {j.adminName} ({j.adminRole}, {j.adminCompany})
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterAdminDashboard;
