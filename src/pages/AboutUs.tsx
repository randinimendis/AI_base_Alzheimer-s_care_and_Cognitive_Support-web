import React from "react";
import { motion } from "framer-motion";
import ashenImg from "../asset/ashen1.jpeg";
import randiniImg from "../asset/randini.jpeg";
import bhagayaImg from "../asset/BH1.jpg";
import menukaImg from "../asset/menuka.jpg";
import { Mail, Linkedin, Twitter, Globe, Award, Github } from "lucide-react";

const teamMembers = [
  // {
  //   name: "Ms. Uthpala Samarakoon",
  //   role: "Senior Lecturer | Supervisor  ",
  //   photo: "src/asset/uthpala samarakon.png",
  //   email: "uthpala.s@sliit.lk",
  //   linkedin: "linkedin.com/in/uthpala-samarakoon-76a51439",
  //   // Github: "github.com/randinimendis",
  //   // website: "sarahjohnson.research.com",
  //   bio: "Ms. Uthpala Samarakoon is a senior lecturer with over 10 years of experience in cognitive neuroscience and human-computer interaction. Her research focuses on developing AI-driven support systems for Alzheimer’s care, integrating advanced speech recognition and cognitive assessment techniques to enhance patient well-being and caregiver support.",
  //   achievements: [
  //     // "PhD in Cognitive Neuroscience, Stanford University",
  //     // "Author of 35+ peer-reviewed publications",
  //     // "Principal investigator on 4 major research grants",
  //     // "IEEE Outstanding Researcher Award, 2023",
  //   ],
  // },
  // {
  //   name: "Ms. Poorna Panduwawala",
  //   role: "Assistant Lecturer | Co-Supervisor ",
  //   photo: "src/asset/purna paduwawela.png",
  //   email: "poorna.p@sliit.lk",
  //   linkedin: "linkedin.com/in/poorna-panduwawala-386a73189",
  //   // Github: "github.com/randinimendis",
  //   // website: "sarahjohnson.research.com",
  //   bio: "Miss Poorna Panduwawala is an assistant lecturer specializing in AI applications for healthcare. She collaborates on projects that develop innovative speech recognition systems to support Alzheimer’s patients, focusing on enhancing cognitive assessment and care delivery through advanced technology.",
  //   achievements: [
  //     // "PhD in Cognitive Neuroscience, Stanford University",
  //     // "Author of 35+ peer-reviewed publications",
  //     // "Principal investigator on 4 major research grants",
  //     // "IEEE Outstanding Researcher Award, 2023",
  //   ],
  // },
  {
    name: "Randini Mendis",
    role: "Team Lead ",
    photo: randiniImg,
    email: "randiniemail@gmail.com",
    linkedin: "linkedin.com/in/randini-mendis-375673215",
    // Github: "github.com/randinimendis",
    // website: "sarahjohnson.research.com",
    bio: "Miss Randini Mendis is a seasoned project coordinator with a strong background in healthcare technology and team management. She leads our initiative focused on innovations in speech recognition and AI-based support systems for Alzheimer’s care. Her leadership ensures the seamless integration of medical insight, advanced speech analytics, and user-centered design to enhance cognitive assessment and patient support.",
    achievements: [
      // "PhD in Cognitive Neuroscience, Stanford University",
      // "Author of 35+ peer-reviewed publications",
      // "Principal investigator on 4 major research grants",
      // "IEEE Outstanding Researcher Award, 2023",
    ],
  },
  {
    name: "Ashen Madusanka",
    role: "Group Member",
    photo: ashenImg,
    email: "madhuashen2001@gmail.com",
    linkedin: "linkedin.com/in/ashenmadhu",
    // twitter: "twitter.com/michaelchenai",
    website: null,
    bio: "Mr. Ashen Madusanka focuses on designing visual and auditory reminder systems to support daily routine adherence in individuals with Alzheimer’s disease. His work explores how multimodal cues such as voice prompts and visual alerts can improve memory recall, reduce confusion, and promote independence among patients in early to moderate stages of cognitive decline.",
    achievements: [
      // "MSc in Machine Learning, MIT",
      // "Lead developer of PatternRecognition.ai",
      // "Best Paper Award, NeurIPS 2024",
      // "Former AI researcher at Google Health",
    ],
  },
  {
    name: "Bhagya P.S",
    role: "Group Member",
    photo: bhagayaImg,
    email: "sachinibhagya44@gmail.com",
    linkedin: "linkedin.com/in/sachini-bhagya-a11760215",
    twitter: null,
    website: null,
    bio: "Miss. Bhagya P.S explores innovations in speech recognition technology to enhance Alzheimer’s care. Her work focuses on developing AI-based support systems that analyze patient speech for cognitive assessment and deliver responsive care solutions.",
    achievements: [
      // "MD with specialization in Geriatrics, Johns Hopkins University",
      // "10+ years clinical experience with dementia patients",
      // 'Co-author of "Digital Interventions in Dementia Care"',
      // "Certified in Healthcare Quality and Management",
    ],
  },
  {
    name: "Imal Menuka",
    role: "Group Member",
    photo: menukaImg,
    email: "imalmenukas210@gmail.com",
    linkedin: "linkedin.com/in/imalmenuka210",
    // twitter: "twitter.com/jwilsontech",
    // website: "jameswilson.dev",
    bio: "Mr. Imal Menuka works on improving emotional well-being in Alzheimer’s patients using AI to deliver personalized music, relaxation techniques, and social prompts that foster connection and reduce anxiety.",
    achievements: [
      // "MSc in Computer Science, University of Washington",
      // "Lead developer for 3 healthcare technology startups",
      // 'Patent holder for "Adaptive Interface for Cognitive Support"',
      // "Senior contributor to open-source healthcare projects",
    ],
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the interdisciplinary group of researchers and developer
            dedicated to advancing AI-driven support systems for Alzheimer’s
            care.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h2>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>

                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

                    <div className="space-y-2 mb-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                        >
                          <Mail className="h-4 w-4 mr-2 text-gray-400" />
                          {member.email}
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={`https://${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin className="h-4 w-4 mr-2 text-gray-400" />
                          {member.linkedin}
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={`https://${member.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                        >
                          <Twitter className="h-4 w-4 mr-2 text-gray-400" />
                          {member.twitter}
                        </a>
                      )}
                      {member.website && (
                        <a
                          href={`https://${member.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                        >
                          <Globe className="h-4 w-4 mr-2 text-gray-400" />
                          {member.website}
                        </a>
                      )}
                    </div>

                    <div>
                      <button
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                        onClick={(e) => {
                          const target = e.currentTarget.nextElementSibling;
                          if (target) {
                            target.classList.toggle("hidden");
                          }
                        }}
                      >
                        <Award className="h-4 w-4 mr-1" />
                        View Achievements
                      </button>
                      <div className="hidden mt-3 bg-blue-50 p-3 rounded-lg">
                        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                          {member.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About Our Research Group
            </h2>

            <div className="space-y-6 text-gray-600">
              <p>
                We are a passionate team of undergraduate students from the Sri
                Lanka Institute of Information Technology (SLIIT), working
                together to develop innovative solutions for healthcare
                challenges using technology. Our research focuses on improving
                the lives of Alzheimer’s patients through AI-powered interactive
                tools.
              </p>

              <p>
                Each member of our group brings a unique set of skills in areas
                such as software development, machine learning, user interface
                design, and healthcare technology. Together, we aim to create
                engaging, personalized, and effective therapy tools that support
                both patients and caregivers.
              </p>

              <p>Our work is guided by three core principles:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    User-Centered Design
                  </h3>
                  <p className="text-sm">
                    We prioritize the needs of Alzheimer’s patients and
                    caregivers by creating tools that are easy to use,
                    emotionally supportive, and accessible to all age groups and
                    cognitive levels.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology for Good
                  </h3>
                  <p className="text-sm">
                    We harness the power of AI, machine learning, and
                    interactive design not just for innovation, but to improve
                    real lives. Our solutions are built to be meaningful,
                    ethical, and impactful.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Continuous Improvement
                  </h3>
                  <p className="text-sm">
                    We believe in learning from feedback and real-world testing.
                    Our system is designed to adapt and evolve based on user
                    interaction, performance data, and expert guidance.
                  </p>
                </div>
              </div>

              {/* <p>
                Our research is supported by grants from the National Institutes
                of Health, the Alzheimer's Association, and the Foundation for
                Cognitive Technologies, enabling us to pursue ambitious,
                long-term research goals while developing practical applications
                for immediate impact.
              </p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
