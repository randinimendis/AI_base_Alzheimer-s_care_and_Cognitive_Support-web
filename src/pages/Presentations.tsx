import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Presentation,
  Calendar,
  Download,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";

const presentationsData = [
  {
    id: "proposal",
    title: "Project Proposal Presentation",
    date: "2024-08-16",
    presenter: "Full Team",
    status: "completed",
    slides: 18,
    duration: "40 minutes",
    file: "/assets/presentation/Prepared by group 1.pptx",
    thumbnails: [
      // "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    ],
    description:
      "Initial presentation outlining the research problem, objectives, methodology, and expected outcomes of our AI-based Alzheimer care project.",
  },
  {
    id: "progress1",
    title: "Progress Presentation-1",
    date: "2024-12-04",
    presenter: "Research Team",
    status: "completed",
    slides: 60,
    duration: "1 Hour",
    thumbnails: [
      // "https://images.pexels.com/photos/8941887/pexels-photo-8941887.jpeg",
      // "https://images.pexels.com/photos/8941891/pexels-photo-8941891.jpeg",
      // "https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg",
    ],
    description:
      "First progress update presenting the literature survey findings, refined research questions, and preliminary system architecture for our cognitive support system.",
  },
  {
    id: "progress2",
    title: "Progress Presentation-2",
    date: "2025-02-18",
    presenter: "Development Team",
    status: "completed",
    slides: "50",
    duration: "2 Hours",
    thumbnails: [],
    description:
      "Second progress update focusing on prototype development, preliminary testing results, and updated project timeline for the AI cognitive support system.",
  },
  {
    id: "final",
    title: "Final Presentation",
    date: "2025-05-27",
    presenter: "Full Team",
    status: "completed",
    slides: "50",
    duration: "2 Hours",
    thumbnails: [],
    description:
      "Comprehensive presentation of the complete project including final system implementation, evaluation results, and conclusions for our Alzheimer care solution.",
  },
];

const Presentations = () => {
  const [selectedPresentation, setSelectedPresentation] = useState(
    presentationsData[0]
  );

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
            Project Presentations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access slides and materials from our research presentations on
            AI-based Alzheimer care and cognitive support.
          </p>
        </motion.div>

        {/* Presentation Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentationsData.map((presentation) => (
              <motion.div
                key={presentation.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer ${
                  selectedPresentation.id === presentation.id
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedPresentation(presentation)}
              >
                <div className="h-32 bg-blue-600 flex items-center justify-center">
                  {presentation.thumbnails.length > 0 ? (
                    <img
                      src={presentation.thumbnails[0]}
                      alt={presentation.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Presentation className="h-12 w-12 text-white" />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        presentation.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {presentation.status === "completed" ? (
                        <span className="flex items-center">
                          <Check className="h-3 w-3 mr-1" /> Completed
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                    {presentation.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(presentation.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Presentation Details */}
        <motion.div
          key={selectedPresentation.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <Presentation className="h-5 w-5 mr-2" />
              {selectedPresentation.title}
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600">
                    {selectedPresentation.description}
                  </p>
                </div>

                {selectedPresentation.thumbnails.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Preview Slides
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedPresentation.thumbnails.map(
                        (thumbnail, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 rounded-lg overflow-hidden aspect-video"
                          >
                            <img
                              src={thumbnail}
                              alt={`Slide ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {selectedPresentation.status === "completed" && (
                  <div className="flex space-x-4">
                    <a
                      href="/assets/presentation/Prepared by group 1.pptx"
                      download
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Slides
                    </a>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center">
                      View Full Presentation
                    </button>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Presentation Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Date</div>
                    <div className="font-medium text-gray-900 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      {new Date(selectedPresentation.date).toLocaleDateString(
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

                  <div>
                    <div className="text-sm text-gray-500 mb-1">Status</div>
                    <div
                      className={`font-medium ${
                        selectedPresentation.status === "completed"
                          ? "text-green-600"
                          : "text-amber-600"
                      } flex items-center`}
                    >
                      {selectedPresentation.status === "completed" ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Clock className="h-4 w-4 mr-2" />
                          Upcoming
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-1">Presenter</div>
                    <div className="font-medium text-gray-900">
                      {selectedPresentation.presenter}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-medium text-gray-900">
                      {selectedPresentation.duration}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Number of Slides
                    </div>
                    <div className="font-medium text-gray-900">
                      {selectedPresentation.slides}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Navigate Presentations
                  </h4>
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        const currentIndex = presentationsData.findIndex(
                          (p) => p.id === selectedPresentation.id
                        );
                        if (currentIndex > 0) {
                          setSelectedPresentation(
                            presentationsData[currentIndex - 1]
                          );
                        }
                      }}
                      disabled={
                        presentationsData.findIndex(
                          (p) => p.id === selectedPresentation.id
                        ) === 0
                      }
                      className={`flex items-center ${
                        presentationsData.findIndex(
                          (p) => p.id === selectedPresentation.id
                        ) === 0
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        const currentIndex = presentationsData.findIndex(
                          (p) => p.id === selectedPresentation.id
                        );
                        if (currentIndex < presentationsData.length - 1) {
                          setSelectedPresentation(
                            presentationsData[currentIndex + 1]
                          );
                        }
                      }}
                      disabled={
                        presentationsData.findIndex(
                          (p) => p.id === selectedPresentation.id
                        ) ===
                        presentationsData.length - 1
                      }
                      className={`flex items-center ${
                        presentationsData.findIndex(
                          (p) => p.id === selectedPresentation.id
                        ) ===
                        presentationsData.length - 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentations;
