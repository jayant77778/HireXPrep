import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  UserCheck, 
  Play, 
  Mic, 
  MessageSquare, 
  Clock,
  Target,
  Star,
  Calendar,
  ArrowRight
} from 'lucide-react';

const MockInterviews = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const interviewTypes = [
    {
      id: 'ai',
      title: 'AI-Powered Interviews',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      description: 'Practice with advanced AI that provides real-time feedback and adapts to your skill level',
      features: [
        'GPT-4 powered conversations',
        'Voice and text interactions',
        'Real-time feedback',
        'Adaptive difficulty',
        'Unlimited practice sessions'
      ],
      duration: '30-60 minutes',
      price: 'Free',
      rating: 4.9
    },
    {
      id: 'peer',
      title: 'Peer Practice',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      description: 'Connect with other candidates for mutual practice and learning',
      features: [
        'Community matching',
        'Skill-based pairing',
        'Mutual feedback',
        'Discussion forums',
        'Study groups'
      ],
      duration: '45-90 minutes',
      price: 'Free',
      rating: 4.7
    },
    {
      id: 'mentor',
      title: 'Expert Mentors',
      icon: UserCheck,
      color: 'from-purple-500 to-pink-500',
      description: 'Book sessions with industry professionals for personalized guidance',
      features: [
        'Industry experts',
        'Personalized feedback',
        'Career guidance',
        'Mock interviews',
        'Resume review'
      ],
      duration: '60 minutes',
      price: '$50-150',
      rating: 4.8
    }
  ];

  const mockFeatures = [
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'Advanced speech analysis for natural conversation flow'
    },
    {
      icon: MessageSquare,
      title: 'Text Chat Option',
      description: 'Choose between voice or text-based interview practice'
    },
    {
      icon: Target,
      title: 'Targeted Questions',
      description: 'Domain-specific questions tailored to your career path'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Practice anytime with AI mentors always available'
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
              Your AI-Powered
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Interview Room
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Practice with AI, peers, or expert mentors. Get real-time feedback and boost your confidence before the actual interview.
            </p>
            
            {/* Readiness Score Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl px-6 py-4 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">85%</div>
                <div className="text-sm text-slate-400">Readiness Score</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">127</div>
                <div className="text-sm text-slate-400">Completed Mocks</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">4.8</div>
                <div className="text-sm text-slate-400">Avg Performance</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interview Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Interview Style
            </h2>
            <p className="text-slate-400 text-lg">
              Different practice modes for different learning preferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {interviewTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedType(type.id)}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {type.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-slate-300">{type.rating}</span>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${type.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div>
                    <div className="text-sm text-slate-400">Duration</div>
                    <div className="text-white font-semibold">{type.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Price</div>
                    <div className="text-white font-semibold">{type.price}</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${type.color} text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg flex items-center justify-center space-x-2`}
                >
                  <Play className="h-5 w-5" />
                  <span>Start Interview</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Interview Features
            </h2>
            <p className="text-slate-400 text-lg">
              Cutting-edge technology for the most realistic interview experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mockFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-2xl mb-4 group-hover:bg-slate-600 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience AI Interview Demo
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Try our GPT-4 powered interview simulation with voice recognition and real-time feedback.
            </p>
            
            {/* Demo Interface Preview */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-slate-400">AI Interview - Software Engineer</div>
              </div>
              <div className="text-left space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-cyan-400 text-sm mb-2">AI Interviewer</div>
                  <div className="text-white">
                    "Tell me about a challenging technical problem you've solved recently. 
                    Walk me through your approach and the technologies you used."
                  </div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 ml-8">
                  <div className="text-blue-400 text-sm mb-2">You</div>
                  <div className="text-white flex items-center space-x-2">
                    <Mic className="h-4 w-4 text-cyan-400 animate-pulse" />
                    <span>Speaking...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Try Demo Interview</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-slate-800/50 flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Mentor Session</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MockInterviews;