import React from "react";
import { ArrowRight, Brain, Mic, CalendarClock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Based Alzheimer Care &amp; Cognitive Support
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Pioneering technology solutions to enhance the quality of life for
              Alzheimer's patients and their caregivers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/domain"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach to Alzheimer's Care
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use AI technologies and empathetic care practices to deliver
              personalized support for Alzheimer’s patients, addressing
              cognitive and emotional needs while assisting caregivers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-600" />,
                title:
                  "Monitoring Alzheimer’s Symptoms Using Cognitive Activities",
                description:
                  "This method uses fun and engaging tasks like drawing, puzzles, and memory games to observe changes in cognitive abilities over time. By tracking how patients perform in these activities, caregivers and doctors can detect early signs of decline and adjust care plans accordingly. It’s a gentle, interactive way to monitor brain health while keeping patients mentally active.",
              },
              {
                icon: <Mic className="h-12 w-12 text-blue-600" />,
                title: "NLP-Based AI Assistant",
                description:
                  "This AI assistant uses Natural Language Processing (NLP) to have simple conversations with Alzheimer’s patients. It analyzes speech patterns—such as pauses, repeated words, or confusion—to detect signs of cognitive decline. The assistant offers personalized responses and encourages daily interaction, helping to monitor mental health and provide emotional support in a friendly, non-intrusive way.",
              },
              {
                icon: <CalendarClock className="h-12 w-12 text-blue-600" />,
                title: "NLP-Based Daily Routine Tracker and Reminder System",
                description:
                  "Speech data, mood indicators, and activity logs are continuously monitored to track disease progression and adjust care plans accordingly.",
              },
              {
                icon: <Heart className="h-12 w-12 text-blue-600" />,
                title: "Emotional Well-being Support",
                description:
                  "This feature focuses on improving the mental and emotional health of Alzheimer’s patients. It uses mood recognition to suggest personalized activities such as relaxing music, meditation, breathing exercises, or uplifting messages. By tracking emotional patterns over time, it helps caregivers provide better support and promotes a more positive, calming experience for the patient.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 p-3 rounded-full w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Learn More About Our Research
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore our comprehensive research on AI-based solutions for
                  Alzheimer's care and cognitive support.
                </p>
                <Link
                  to="/domain"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                >
                  View Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div
                className="md:w-1/2 bg-cover bg-center h-64 md:h-auto"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg')",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
