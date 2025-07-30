import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  FileText, 
  FolderOpen, 
  Target, 
  Users, 
  Zap, 
  BarChart3, 
  MessageSquare,
  Mic,
  Code,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Voice Interview Simulation',
      description: 'Practice with GPT-4 powered interviews that provide real-time feedback and adapt to your skill level.',
      benefits: ['Natural voice interactions', 'Real-time feedback', 'Adaptive difficulty'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FileText,
      title: 'Smart Resume Analyzer',
      description: 'AI-powered analysis that identifies gaps and suggests improvements for better ATS compatibility.',
      benefits: ['ATS optimization', 'Keyword suggestions', 'Industry-specific tips'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FolderOpen,
      title: 'Portfolio Builder',
      description: 'Import from LinkedIn & GitHub, showcase projects, and create a professional portfolio automatically.',
      benefits: ['Auto-import from platforms', 'Professional templates', 'Public sharing links'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Domain-Based Preparation',
      description: 'Specialized preparation tracks for different career paths including SDE, DevOps, Data Science, and more.',
      benefits: ['Role-specific questions', 'Industry insights', 'Skill roadmaps'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Mock Interview Marketplace',
      description: 'Connect with peers for practice sessions or book expert mentors for professional guidance.',
      benefits: ['Peer-to-peer practice', 'Expert mentors', 'Flexible scheduling'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Job Connect & Recruiter View',
      description: 'Get discovered by recruiters and connect directly with hiring managers from top companies.',
      benefits: ['Recruiter visibility', 'Direct connections', 'Job recommendations'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Progress Tracking',
      description: 'Comprehensive analytics dashboard showing your improvement trajectory and readiness score.',
      benefits: ['Detailed analytics', 'Progress visualization', 'Performance trends'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Career Coach',
      description: '24/7 AI assistant providing personalized career advice and interview preparation strategies.',
      benefits: ['Personalized guidance', '24/7 availability', 'Strategic insights'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const additionalFeatures = [
    { icon: Mic, title: 'Voice Recognition', description: 'Advanced speech analysis' },
    { icon: Code, title: 'Coding Challenges', description: 'Technical interview prep' },
    { icon: Shield, title: 'Privacy First', description: 'Secure data handling' },
    { icon: Clock, title: '24/7 Access', description: 'Practice anytime' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-8">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Career Success
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to prepare for interviews, build your portfolio, and land your dream job.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              And much more...
            </h2>
            <p className="text-slate-400 text-lg">
              Additional features that make HireXPrep the complete career preparation platform
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-xl mb-4 group-hover:bg-slate-600 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to experience all features?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who prepared smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/mock-interviews"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  <span>Try Mock Interview</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/domains"
                  className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-slate-800/50"
                >
                  <span>Explore Domains</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;