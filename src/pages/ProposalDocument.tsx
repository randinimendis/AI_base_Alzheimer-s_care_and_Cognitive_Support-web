import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Target, Lightbulb, Users, Calendar, Download } from 'lucide-react';

const ProposalDocument = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Research Proposal
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-based Alzheimer Care and Cognitive Support System
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Document Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Project Proposal</h2>
                  <p className="text-gray-500">Version 1.0 - January 2025</p>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Submission Date</div>
                <div className="font-medium text-gray-900 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  January 15, 2025
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Project Duration</div>
                <div className="font-medium text-gray-900">8 Months</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Team Size</div>
                <div className="font-medium text-gray-900 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                  4 Members
                </div>
              </div>
            </div>
          </motion.div>

          {/* Executive Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <p className="text-gray-600 mb-4">
              This research proposal outlines an innovative approach to addressing the growing challenges
              of Alzheimer's care through artificial intelligence and cognitive support technologies.
              Our project aims to develop an integrated system that combines real-time monitoring,
              personalized assistance, and caregiver support tools to enhance the quality of life for
              individuals affected by Alzheimer's disease.
            </p>
            <p className="text-gray-600">
              The proposed solution leverages advanced machine learning algorithms, natural language
              processing, and adaptive interfaces to create a comprehensive care ecosystem that evolves
              with the progression of the condition while maintaining user dignity and privacy.
            </p>
          </motion.section>

          {/* Project Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
          >
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Background</h3>
                <p className="text-gray-600">
                  With the increasing prevalence of Alzheimer's disease globally, there is a critical
                  need for innovative solutions that can support both patients and caregivers. Current
                  care approaches often lack the integration of modern technology and fail to address
                  the dynamic nature of cognitive decline.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Problem Statement</h3>
                <p className="text-gray-600">
                  Existing Alzheimer's care solutions are often fragmented, lacking personalization
                  and real-time adaptation to changing patient needs. This creates significant
                  challenges for both patients and caregivers in managing daily activities and
                  maintaining quality of life.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Research Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
          >
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Research Objectives</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mt-1 mr-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cognitive Assessment System</h3>
                  <p className="text-gray-600">
                    Develop an AI-powered system for continuous monitoring and assessment of cognitive
                    function through non-invasive methods.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mt-1 mr-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adaptive Support Platform</h3>
                  <p className="text-gray-600">
                    Create a personalized assistance system that adapts to individual needs and
                    disease progression patterns.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mt-1 mr-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Caregiver Integration</h3>
                  <p className="text-gray-600">
                    Implement a comprehensive dashboard for caregivers to monitor patient status
                    and receive actionable insights.
                  </p>
                </div>
              </li>
            </ul>
          </motion.section>

          {/* Methodology */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
          >
            <div className="flex items-center mb-6">
              <Lightbulb className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Methodology</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Design</h3>
                <p className="text-gray-600">
                  Our approach combines qualitative and quantitative methods, including user research,
                  system development, and clinical validation studies. The project will follow an
                  iterative development cycle with continuous stakeholder feedback.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">AI Components</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Machine Learning Models</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision Systems</li>
                      <li>Adaptive Algorithms</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Interface Design</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Accessible UI/UX</li>
                      <li>Mobile Applications</li>
                      <li>Web Dashboard</li>
                      <li>IoT Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Timeline and Deliverables */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline and Deliverables</h2>
            <div className="space-y-6">
              <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Initial Research (2 Months)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Literature review completion</li>
                  <li>User needs assessment</li>
                  <li>System requirements specification</li>
                </ul>
              </div>
              <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Phase 2: Development (3 Months)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>AI model development</li>
                  <li>Interface prototyping</li>
                  <li>Initial system integration</li>
                </ul>
              </div>
              <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Phase 3: Testing (2 Months)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>User testing sessions</li>
                  <li>System optimization</li>
                  <li>Performance evaluation</li>
                </ul>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Phase 4: Documentation (1 Month)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Final report preparation</li>
                  <li>Documentation completion</li>
                  <li>Results presentation</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProposalDocument;