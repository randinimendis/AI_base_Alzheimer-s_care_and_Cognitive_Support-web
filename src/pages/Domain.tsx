import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Target, Lightbulb, Code } from "lucide-react";

const Domain = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Project Domain
          </h1>
          <p className="text-gray-600 mb-6">
            Our project is focused on developing AI-based solutions to support
            Alzheimer’s care through natural language processing, cognitive
            monitoring, and personalized therapy. The goal is to build
            intelligent systems that aid in early detection, emotional
            well-being, and daily routine management, improving quality of life
            for patients while easing the burden on caregivers.
          </p>
        </motion.div>

        {/* Literature Survey */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Literature Survey
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                Monitoring Alzheimer’s Symptoms Using Cognitive Activities
              </h3>
              <p className="text-gray-600">
                Family photo puzzles and drawing activities are effective tools
                for monitoring cognitive decline in Alzheimer’s patients.
                Personalized puzzles using familiar images enhance memory recall
                through emotional connection, while drawing activities like
                sketching and tracing assess visuospatial and motor skills.
                These interactive tasks help detect early signs of decline and
                track progression over time. When supported by AI, they offer
                real-time feedback and personalized insights, making them
                valuable for both assessment and cognitive engagement [1].
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                NLP-Based AI Assistant
              </h3>
              <p className="text-gray-600">
                NLP-based AI assistants use advanced language models (e.g.,
                BERT, GPT-3) to engage Alzheimer’s patients in natural
                conversation, analyzing speech patterns like hesitation and word
                use. Studies by Vasquez-Correa and Fraser highlight these as key
                markers of cognitive decline. These assistants support early
                detection, track changes over time, and offer real-time,
                adaptive interaction for continuous monitoring and therapy [2].
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                NLP-Based Daily Routine Tracker and Reminder System
              </h3>
              <p className="text-gray-600">
                Routine adherence is vital for Alzheimer’s patients to reduce
                confusion. NLP-based systems use voice prompts, medication
                alerts, and adaptive reminders to support daily tasks. Features
                like medicine photo recognition and audio-visual cues improve
                accuracy and reduce caregiver load. Studies confirm these tools
                enhance independence and lower anxiety [3].
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                Emotional Well-being Support
              </h3>
              <p className="text-gray-600">
                Emotional instability is common in Alzheimer’s patients. AI
                systems can detect emotions through facial cues, voice tone, and
                text, then suggest personalized therapies like music or yoga.
                Studies show these tools improve emotional regulation and reduce
                isolation, especially with features like AI-driven group chats
                that support social connection [4].
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900 mb-2">References</h3>
              <p className="text-gray-600">
                [1] S. R. Khan et al., “A cognitive-based game framework for
                early detection of Alzheimer's disease using image processing,”
                Multimedia Tools and Applications, vol. 81, pp. 22323–22341,
                2022.
                <br />
                [2] J. Vasquez-Correa, F. Rudzicz, and J. Schuller, “Detecting
                cognitive decline using speech: A review of the state of the
                art,” IEEE Journal of Biomedical and Health Informatics, vol.
                25, no. 4, pp. 1153–1169, Apr. 2021.
                <br />
                [3] S. N. Ahmad et al., “An NLP-based smart assistant for
                elderly care: Reminder and routine tracking system,” in Proc.
                2020 IEEE Int. Conf. on Smart Computing (SMARTCOMP), Bologna,
                Italy, pp. 195–200.
                <br />
                [4] M. A. Al-Ghaili, L. Cao, and Y. Hu, “Emotion-aware
                healthcare support systems using AI: A review,” Healthcare
                Analytics, vol. 2, pp. 100017, 2022.
                <br />
              </p>
            </div>
          </div>
        </motion.section>

        {/* Research Gap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Research Gap</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Despite progress in AI-driven Alzheimer’s care, several key gaps
            remain in the current research landscape:
          </p>

          <ul className="list-disc list-outside ml-6 space-y-3 text-gray-600">
            <li>
              <span className="font-medium">Stage-Specific Monitoring:</span>{" "}
              Most existing systems focus on early detection but lack
              multi-stage tracking for early, moderate, and severe Alzheimer’s
              progression.
            </li>
            <li>
              <span className="font-medium">
                Context-Aware Emotional Support:
              </span>{" "}
              AI systems rarely personalize emotional therapy based on real-time
              mood, behavior history, or environmental factors.
            </li>
            <li>
              <span className="font-medium">
                Limited Engagement in Cognitive Activities:
              </span>{" "}
              Many urrent cognitive monitoring tools are not sufficiently
              adaptive or personalized, reducing long-term engagement and
              effectiveness.
            </li>
            <li>
              <span className="font-medium">
                Real-World Integration Challenges:{" "}
              </span>{" "}
              There NLP-based assistants and routine trackers often lack
              integration with caregivers’ tools and wearable tech, limiting
              their practical impact.
            </li>
            <li>
              <span className="font-medium">
                Underexplored Non-English NLP Models:{" "}
              </span>{" "}
              There is limited research on multilingual AI assistants,
              restricting global accessibility for diverse linguistic
              populations.
            </li>
          </ul>
        </motion.section>

        {/* Research Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Research Problem
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            How can we design an AI-powered mobile system that leverages NLP and
            personalized cognitive tools to detect, monitor, and support
            Alzheimer’s patients across all stages—while promoting emotional
            well-being, maintaining daily routines, and easing caregiver
            responsibilities in a secure and accessible manner?
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              Key Challenges:
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600">
              <li>
                Building NLP models that accurately detect cognitive decline
                across different stages of Alzheimer’s
              </li>
              <li>
                Integrating real-time mood analysis to personalize therapy
                recommendations
              </li>
              <li>
                Supporting routine adherence through smart reminders and
                medication tracking
              </li>
              <li>
                Addressing multilingual accessibility and culturally sensitive
                interactions
              </li>
              <li>
                Maintaining data privacy, user trust, and ethical AI practices
                in vulnerable populations
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Research Objectives */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Lightbulb className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Research Objectives
            </h2>
          </div>

          <ol className="list-decimal list-outside ml-6 space-y-4 text-gray-600">
            <li>
              <span className="font-medium text-gray-900">
                Develop an NLP-based AI assistant
              </span>{" "}
              capable of analyzing speech patterns and language usage to detect
              early signs of cognitive decline across different stages of
              Alzheimer’s.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Design interactive cognitive activities
              </span>{" "}
              such as personalized family photo puzzles and drawing tasks to
              support memory recall and monitor cognitive function dynamically.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Implement AI-driven emotional support tools
              </span>{" "}
              that analyze mood through speech and behavior, delivering
              personalized interventions like music, yoga, and relaxation
              prompts.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Create a smart daily routine and reminder system
              </span>{" "}
              using NLP and visual tools to assist with medication tracking,
              task scheduling, and caregiver alerts.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Assess system usability and clinical effectiveness
              </span>{" "}
              in improving emotional well-being, patient independence, and
              caregiver satisfaction.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Ensure ethical implementation and accessibility
              </span>{" "}
              including data privacy, multilingual support, and culturally
              sensitive AI design for diverse populations.
            </li>
          </ol>
        </motion.section>

        {/* Methodology */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Methodology</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Phase 1: User-Centered Research and Requirement Gathering
              </h3>
              <p className="text-gray-600">
                Engaging patients, caregivers, and healthcare professionals
                through interviews and focus groups to identify needs for
                cognitive monitoring, emotional support, and daily routine
                assistance using AI-based technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Phase 2: System Architecture and Development
              </h3>
              <p className="text-gray-600">
                Designing a modular AI system integrating NLP-based speech
                analysis, mood detection, personalized reminders, and cognitive
                activity tools, developed using frameworks like Flutter
                (frontend) and Flask (backend) with cloud storage.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Phase 3: Functional Prototyping and Usability Testing
              </h3>
              <p className="text-gray-600">
                Developing a working prototype and conducting usability testing
                with stakeholders to refine cognitive tasks, therapy
                recommendations, and interface design based on feedback and user
                experience metrics.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Phase 4: Real-World Evaluation and Effectiveness Study
              </h3>
              <p className="text-gray-600">
                Running pilot studies to evaluate system impact on cognitive
                assessment accuracy, emotional well-being, routine adherence,
                and caregiver satisfaction across different Alzheimer’s stages.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Technologies Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technologies Used
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                AI & Machine Learning
              </h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600">
                <li>
                  Natural Language Processing (NLP) for speech and mood analysis
                </li>
                <li>
                  Deep Learning models (CNN-LSTM, BERT) for Alzheimer’s stage
                  classification
                </li>
                <li>Sentiment analysis for emotional well-being detection</li>
                <li>
                  Federated Learning for privacy-preserving model training
                </li>
                <li>Personalized therapy recommendation engines</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Hardware & Sensors
              </h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600">
                <li>
                  Smartphone microphone and camera inputs for speech and facial
                  recognition
                </li>
                <li>Wearables for health tracking and routine monitoring</li>
                <li>Visual reminders and voice prompts through smart devic</li>
                <li>Device integration for caregiver notifications</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Software Development
              </h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600">
                <li>
                  Flutter framework for cross-platform mobile app development
                </li>
                <li>
                  Flask backend with RESTful APIs for AI model integration
                </li>
                <li>Firebase or MongoDB for secure cloud-based storage</li>
                <li>Real-time feedback and user analytics dashboards</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Evaluation Methods
              </h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600">
                <li>
                  Accuracy measurement of Alzheimer’s stage classification
                </li>
                <li>
                  Usability testing with Alzheimer’s patients and caregivers
                </li>
                <li>Emotional state improvement metrics after intervention</li>
                <li>
                  Routine adherence tracking and caregiver feedback analysis
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Domain;
