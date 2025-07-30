import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const ForRecruiters = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const q = query(collection(db, 'recruiter_jobs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-8 flex flex-col items-center justify-center">
      <section className="py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Hire Smarter,
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Faster
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
              Connect with pre-screened, interview-ready candidates from our talent pool.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 mb-12">
              <Link to="/recruiter-callback" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-200 text-lg">
                Request a Call Back
              </Link>
              <Link to="/recruiter-admin-login" className="bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg">
                Recruiter Admin Login
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="bg-slate-800/80 rounded-2xl p-8 mt-8 text-left max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Open Recruiter Job Posts</h2>
        {loading ? <p className="text-slate-400">Loading jobs...</p> : jobs.length === 0 ? <p className="text-slate-400">No jobs posted yet.</p> : (
          <ul className="space-y-8">
            {jobs.map(j => (
              <li key={j.id} className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-left">
                <div className="font-semibold text-cyan-300 text-lg">{j.title}</div>
                <div className="text-slate-300 mt-2">{j.description}</div>
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
  );
};

export default ForRecruiters;