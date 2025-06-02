import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, FileText, Clock } from "lucide-react";

const milestoneData = [
  {
    id: "proposal",
    title: "Project Proposal",
    date: "2024-08-16",
    status: "completed",
    marks: "N/A",

    details:
      "Initial project proposal outlining the research problem, objectives, methodology, and expected outcomes.",
    deliverables: [
      "Project charter document",
      "Research problem statement",
      "Literature review summary",
      "Project timeline",
    ],
  },
  {
    id: "progress1",
    title: "Progress Presentation-1",
    date: "2024-12-04",
    status: "completed",
    marks: "N/A",
    details:
      "First progress update presenting the literature survey findings, refined research questions, and preliminary system architecture.",
    deliverables: [
      "Literature review document",
      "System requirements specification",
      "Initial architecture design",
      "Progress report",
    ],
  },
  {
    id: "progress2",
    title: "Progress Presentation-2",
    date: "2025-03-18",
    status: "completed",
    marks: "N/A",
    details:
      "Second progress update focusing on prototype development, preliminary testing results, and updated project timeline.",
    deliverables: [
      "Prototype demonstration",
      "Testing methodology document",
      "User feedback summary",
      "Updated timeline",
    ],
  },
  {
    id: "final",
    title: "Final Assessment",
    date: "2025-05-27",
    status: "completed",
    marks: "N/A",
    details:
      "Comprehensive presentation of the complete project including final system implementation, evaluation results, and conclusions.",
    deliverables: [
      "Final project report",
      "System documentation",
      "Evaluation results",
      "Demonstration video",
    ],
  },
  {
    id: "viva",
    title: "Viva",
    date: "2025-05-27",
    status: "completed",
    marks: "N/A",
    details:
      "Oral examination to assess understanding of the project, research methodology, and technical implementation.",
    deliverables: ["Presentation slides", "Project defense preparation"],
  },
];

const Milestones = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(milestoneData[0]);

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
            Project Milestones
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track our research progress through key milestones and deliverables
            as we develop AI-based solutions for Alzheimer's care.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="md:w-1/3 bg-gray-50 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Milestone Timeline
                </h2>

                <div className="space-y-3">
                  {milestoneData.map((milestone) => (
                    <motion.button
                      key={milestone.id}
                      onClick={() => setSelectedMilestone(milestone)}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedMilestone.id === milestone.id
                          ? "bg-blue-50 border-l-4 border-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">
                          {milestone.title}
                        </span>
                        {milestone.status === "completed" && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {milestone.status === "upcoming" && (
                          <Clock className="h-5 w-5 text-amber-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {new Date(milestone.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="md:w-2/3 p-8">
                <motion.div
                  key={selectedMilestone.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedMilestone.title}
                    </h2>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedMilestone.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {selectedMilestone.status === "completed"
                        ? "Completed"
                        : "Upcoming"}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Date</div>
                      <div className="font-medium">
                        {new Date(selectedMilestone.date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Assessment Score
                      </div>
                      <div
                        className={`font-medium ${
                          selectedMilestone.status === "completed"
                            ? "text-green-600"
                            : "text-gray-400"
                        }`}
                      >
                        {selectedMilestone.marks}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Description
                    </h3>
                    <p className="text-gray-600">{selectedMilestone.details}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      Deliverables
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedMilestone.deliverables.map(
                        (deliverable, index) => (
                          <li key={index}>{deliverable}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {selectedMilestone.status === "completed" && (
                    <div className="mt-8">
                      {/* <a
                        href="/assets/presentation/Prepared by group 1.pptx"
                        download
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
                      ></a> */}
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center">
                        View Presentation Materials
                        <svg
                          className="ml-2 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
