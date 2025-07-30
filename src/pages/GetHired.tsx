import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  User, 
  Target, 
  Eye, 
  FileText, 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';

const GetHired = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Resume',
      description: 'Upload your resume and let our AI analyze strengths and gaps',
      color: 'from-cyan-500 to-blue-500',
      features: ['ATS optimization', 'Keyword analysis', 'Industry benchmarking']
    },
    {
      icon: User,
      title: 'Build Profile',
      description: 'Create a comprehensive profile showcasing your skills and projects',
      color: 'from-green-500 to-teal-500',
      features: ['Portfolio integration', 'Skill verification', 'Achievement tracking']
    },
    {
      icon: Target,
      title: 'Score Ready',
      description: 'Practice interviews and improve your readiness score',
      color: 'from-purple-500 to-pink-500',
      features: ['Mock interviews', 'Feedback analysis', 'Progress tracking']
    },
    {
      icon: Eye,
      title: 'Get Discovered',
      description: 'Get noticed by recruiters actively searching for talent',
      color: 'from-orange-500 to-red-500',
      features: ['Recruiter visibility', 'Job matching', 'Direct connections']
    }
  ];

  const stats = [
    { value: '2.5x', label: 'Higher Interview Success Rate', icon: TrendingUp },
    { value: '85%', label: 'Average Readiness Score', icon: Target },
    { value: '500+', label: 'Successful Placements', icon: Users },
    { value: '4.8/5', label: 'Candidate Satisfaction', icon: Star }
  ];

  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'HireXPrep helped me identify my weak areas and practice until I was confident. Landed my dream job in 3 months!',
      improvement: '+40% readiness score'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Scientist at Netflix',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The AI feedback was incredibly detailed. It felt like having a personal interview coach available 24/7.',
      improvement: '12 interviews → 5 offers'
    },
    {
      name: 'Emily Johnson',
      role: 'Product Manager at Amazon',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The portfolio builder and recruiter connections made all the difference in standing out from other candidates.',
      improvement: '300% profile views'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-8">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              From Preparation to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Placement
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Follow our proven 4-step process to transform your career prospects and land your dream job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Resume & Start</span>
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50 flex items-center space-x-2"
                >
                  <span>View Portfolio Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Path to Success
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A systematic approach that has helped thousands of candidates land their dream jobs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-gradient-to-r from-slate-600 to-transparent z-0" />
                )}

                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-600">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Analyzer Demo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                AI-Powered Resume Analysis
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Get instant feedback on your resume with our advanced AI analyzer that checks for ATS compatibility, keyword optimization, and industry standards.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-slate-300">ATS compatibility score</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-slate-300">Keyword optimization suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-slate-300">Industry-specific improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full" />
                  <span className="text-slate-300">Format and structure recommendations</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Analyze My Resume</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Resume Analysis</h3>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400">AI Powered</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">ATS Compatibility</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
                    </div>
                    <span className="text-white font-semibold">85%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Keyword Match</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
                    </div>
                    <span className="text-white font-semibold">72%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Format Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
                    </div>
                    <span className="text-white font-semibold">95%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <h4 className="text-cyan-400 font-medium mb-2">Top Recommendations</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Add "Python" and "Machine Learning" keywords</li>
                  <li>• Include quantified achievements</li>
                  <li>• Optimize for Software Engineer roles</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-slate-400 text-lg">
              Our platform delivers measurable improvements in interview success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-slate-400 text-lg">
              Real candidates, real results, real career transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{story.name}</div>
                    <div className="text-sm text-slate-400">{story.role}</div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  "{story.quote}"
                </p>
                
                <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>{story.improvement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who've used our platform to land their dream jobs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Resume & Start</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-slate-800/50 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetHired;