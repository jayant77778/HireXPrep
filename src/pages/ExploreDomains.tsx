import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Server, 
  BarChart3, 
  Briefcase, 
  Palette, 
  Shield,
  X,
  Play,
  BookOpen,
  Target,
  ArrowRight
} from 'lucide-react';

const ExploreDomains = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const domains = [
    {
      id: 'sde',
      title: 'Software Development Engineer',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Master coding interviews and system design for top tech companies',
      interviewPattern: [
        'Coding Problems (Data Structures & Algorithms)',
        'System Design (Scalability & Architecture)',
        'Behavioral Questions',
        'Technical Deep Dive'
      ],
      topSkills: [
        'Python/Java/C++',
        'Data Structures & Algorithms',
        'System Design',
        'Database Management',
        'API Development'
      ],
      resources: [
        'LeetCode Premium',
        'System Design Primer',
        'Cracking the Coding Interview',
        'High Scalability Blog'
      ],
      demoQuestions: [
        'Implement a LRU Cache',
        'Design a URL Shortener',
        'Find the median of two sorted arrays',
        'Design a chat application'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      description: 'Build expertise in infrastructure, automation, and cloud technologies',
      interviewPattern: [
        'Infrastructure as Code',
        'CI/CD Pipeline Design',
        'Cloud Architecture',
        'Monitoring & Troubleshooting'
      ],
      topSkills: [
        'AWS/Azure/GCP',
        'Docker & Kubernetes',
        'Terraform/Ansible',
        'Jenkins/GitLab CI',
        'Monitoring Tools'
      ],
      resources: [
        'AWS Solutions Architect',
        'Kubernetes Documentation',
        'Terraform Tutorials',
        'DevOps Roadmap'
      ],
      demoQuestions: [
        'Design a CI/CD pipeline',
        'Explain container orchestration',
        'How to handle high availability?',
        'Troubleshoot deployment issues'
      ]
    },
    {
      id: 'datascience',
      title: 'Data Science',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      description: 'Excel in machine learning, statistics, and data analysis interviews',
      interviewPattern: [
        'Statistics & Probability',
        'Machine Learning Algorithms',
        'Data Analysis Case Studies',
        'Coding in Python/R/SQL'
      ],
      topSkills: [
        'Python/R/SQL',
        'Machine Learning',
        'Statistics',
        'Data Visualization',
        'Big Data Tools'
      ],
      resources: [
        'Kaggle Competitions',
        'Elements of Statistical Learning',
        'Python for Data Analysis',
        'Machine Learning Yearning'
      ],
      demoQuestions: [
        'Explain bias-variance tradeoff',
        'Design A/B test framework',
        'Optimize a ML model',
        'Handle missing data'
      ]
    },
    {
      id: 'pm',
      title: 'Product Manager',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
      description: 'Develop product strategy, prioritization, and stakeholder management skills',
      interviewPattern: [
        'Product Strategy & Vision',
        'Prioritization Frameworks',
        'Data-Driven Decisions',
        'Stakeholder Management'
      ],
      topSkills: [
        'Product Strategy',
        'User Research',
        'Data Analysis',
        'Agile/Scrum',
        'Stakeholder Management'
      ],
      resources: [
        'Cracking the PM Interview',
        'Inspired by Marty Cagan',
        'Product Management Case Studies',
        'Lean Startup Methodology'
      ],
      demoQuestions: [
        'How would you prioritize features?',
        'Design a product for elderly',
        'Analyze declining user metrics',
        'Launch strategy for new market'
      ]
    },
    {
      id: 'uiux',
      title: 'UI/UX Designer',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Master design thinking, user research, and interface design principles',
      interviewPattern: [
        'Portfolio Review',
        'Design Challenge',
        'User Research Methods',
        'Design Process Discussion'
      ],
      topSkills: [
        'Design Thinking',
        'User Research',
        'Prototyping',
        'Design Systems',
        'Figma/Sketch'
      ],
      resources: [
        'Design of Everyday Things',
        'UX Research Methods',
        'Atomic Design',
        'Material Design Guidelines'
      ],
      demoQuestions: [
        'Redesign the checkout flow',
        'How to test design usability?',
        'Create a design system',
        'Improve mobile accessibility'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-yellow-500',
      description: 'Build expertise in security frameworks, threat analysis, and risk management',
      interviewPattern: [
        'Security Frameworks',
        'Threat Assessment',
        'Incident Response',
        'Risk Management'
      ],
      topSkills: [
        'Network Security',
        'Penetration Testing',
        'Risk Assessment',
        'Compliance Frameworks',
        'Security Tools'
      ],
      resources: [
        'CISSP Study Guide',
        'OWASP Top 10',
        'Security+ Certification',
        'Cybersecurity Framework'
      ],
      demoQuestions: [
        'How to secure API endpoints?',
        'Respond to data breach',
        'Design security architecture',
        'Assess vulnerability risks'
      ]
    }
  ];

  const selectedDomainData = domains.find(d => d.id === selectedDomain);

  return (
    <div className="min-h-screen bg-slate-900 pt-8">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Explore Career
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Domains
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose your specialization and get tailored interview preparation, resources, and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedDomain(domain.id)}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${domain.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <domain.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {domain.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {domain.description}
                </p>

                <div className="flex items-center space-x-2 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  <span>Explore Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Detail Modal */}
      <AnimatePresence>
        {selectedDomain && selectedDomainData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDomain(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${selectedDomainData.color} rounded-2xl`}>
                    <selectedDomainData.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedDomainData.title}
                    </h2>
                    <p className="text-slate-400">
                      {selectedDomainData.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="p-2 hover:bg-slate-700 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6 text-slate-400" />
                </button>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Interview Pattern */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Target className="h-5 w-5 text-cyan-400" />
                    <span>Interview Pattern</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedDomainData.interviewPattern.map((pattern, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-slate-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedDomainData.color}`} />
                        <span>{pattern}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Skills */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Code className="h-5 w-5 text-cyan-400" />
                    <span>Top Skills</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDomainData.topSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                    <span>Recommended Resources</span>
                  </h3>
                  <div className="space-y-2">
                    {selectedDomainData.resources.map((resource, idx) => (
                      <div key={idx} className="text-slate-300">
                        • {resource}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Questions */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Play className="h-5 w-5 text-cyan-400" />
                    <span>Sample Questions</span>
                  </h3>
                  <div className="space-y-2">
                    {selectedDomainData.demoQuestions.map((question, idx) => (
                      <div key={idx} className="text-slate-300">
                        {idx + 1}. {question}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-700">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 bg-gradient-to-r ${selectedDomainData.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg`}
                >
                  Start Mock Interview
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-slate-700/50"
                >
                  View All Resources
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreDomains;