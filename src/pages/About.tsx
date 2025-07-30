import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-slate-800/80 p-8 rounded-3xl shadow-2xl max-w-3xl w-full border border-slate-700">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          About HireXPrep
        </h1>
        <p className="text-lg text-slate-300 mb-8 text-center">
          <span className="text-cyan-400 font-semibold">HireXPrep</span> is an
          AI-powered career platform dedicated to bridging the gap between top
          talent and leading employers. We empower job seekers to prepare,
          practice, and get hired faster, while enabling recruiters to connect
          with pre-screened, interview-ready candidates.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>
              Provide AI-driven mock interviews and feedback to help candidates
              excel.
            </li>
            <li>
              Offer domain-specific preparation resources and progress tracking.
            </li>
            <li>
              Connect recruiters with a curated pool of skilled, job-ready
              candidates.
            </li>
            <li>
              Enable recruiters to post jobs and requirements directly to our
              talent pool.
            </li>
            <li>
              Foster a transparent, efficient, and modern hiring ecosystem for
              all.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            Our Vision
          </h2>
          <p className="text-slate-300">
            To revolutionize the hiring process by making it smarter, faster,
            and more accessible for everyone. We envision a world where every
            candidate is empowered to reach their dream job and every recruiter
            finds the perfect fit effortlessly.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            Our Mission
          </h2>
          <p className="text-slate-300">
            To provide cutting-edge tools, resources, and connections that help
            candidates prepare with confidence and enable recruiters to hire with
            precision. We are committed to building a supportive, innovative, and
            inclusive career platform for the future workforce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;