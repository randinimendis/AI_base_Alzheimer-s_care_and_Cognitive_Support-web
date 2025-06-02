import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Check, Clock, FileQuestion } from "lucide-react";

type DocumentFile = {
  name: string;
  date: string;
  status: string;
  fileType: string;
  fileSize: string;
  downloadUrl?: string;
};

type DocumentCategory = {
  category: string;
  files: DocumentFile[];
};

const documentsData: DocumentCategory[] = [
  {
    category: "Topic Assessment Form (TAF) Document",
    files: [
      {
        name: "Topic Assessment Form (TAF)  Document",
        date: "2024-06-24",
        status: "completed",
        fileType: "pdf",
        fileSize: "364 KB",
        downloadUrl: new URL("../document/TAF_24-25J-304.pdf", import.meta.url)
          .href,
      },
    ],
  },
  {
    category: "Proposal Document",
    files: [
      {
        name: "Research Proposal Mendis A.R.P.",
        date: "2024-08-23",
        status: "completed",
        fileType: "pdf",
        fileSize: "480 KB",
        downloadUrl: new URL(
          "../document/IT21228094_Mendis A.R.P..pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Research Proposal Bhagya P.S.pdf.",
        date: "2024-08-23",
        status: "completed",
        fileType: "pdf",
        fileSize: "663 KB",
        downloadUrl: new URL(
          "../document/IT21225024_Bhagya P.S.pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Research Proposal Madhusanka J.A.A.",
        date: "2024-08-23",
        status: "completed",
        fileType: "pdf",
        fileSize: "669 KB",
        downloadUrl: new URL(
          "../document/IT21215292_Madhusanka J.A.A..pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Research Proposal W.M.I.M. Sandaruwan.",
        date: "2024-08-23",
        status: "completed",
        fileType: "pdf",
        fileSize: "726 KB",
        downloadUrl: new URL(
          "../document/IT21231100_W.M.I.M. Sandaruwan.pdf",
          import.meta.url
        ).href,
      },
    ],
  },
  // {
  //   category: "Check List Documents",
  //   files: [
  //     {
  //       name: "Literature Review Checklist",
  //       date: "2025-02-05",
  //       status: "completed",
  //       fileType: "pdf",
  //       fileSize: "845 KB",
  //     },
  //     {
  //       name: "Methodology Verification Checklist",
  //       date: "2025-03-15",
  //       status: "completed",
  //       fileType: "pdf",
  //       fileSize: "980 KB",
  //     },
  //     {
  //       name: "Testing Protocol Checklist",
  //       date: "2025-06-20",
  //       status: "pending",
  //       fileType: "pdf",
  //       fileSize: "TBD",
  //     },
  //   ],
  // },
  {
    category: "Final Document",
    files: [
      {
        name: "Group Project Report 24-25J-304",
        date: "2025-04-11",
        status: "completed",
        fileType: "pdf",
        fileSize: "1.62 MB",
        downloadUrl: new URL(
          "../document/Group Project Report- 24-25J-304.pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Final Document IT21228094 Mendis A.R.P.",
        date: "2025-04-11",
        status: "completed",
        fileType: "pdf",
        fileSize: "1.85 MB",
        downloadUrl: new URL(
          "../document/Final Document -IT21228094_Mendis A.R.P..pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Final Document IT21225024 Bhagya P.S.",
        date: "2025-04-11",
        status: "completed",
        fileType: "pdf",
        fileSize: "1.56 MB ",
        downloadUrl: new URL(
          "../document/Final DocumentIT21225024.pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Final Document IT21215292 Madhusanka J.A.A.",
        date: "2025-04-11",
        status: "completed",
        fileType: "pdf",
        fileSize: "3.01 MB",
        downloadUrl: new URL(
          "../document/Final Document IT21215292.pdf",
          import.meta.url
        ).href,
      },
      {
        name: "Final Document IT21231100 W.M.I.M. Sandaruwan",
        date: "2025-04-11",
        status: "completed",
        fileType: "pdf",
        fileSize: "5.07 MB",
        downloadUrl: new URL(
          "../document/Final Document IT21231100.pdf",
          import.meta.url
        ).href,
      },
    ],
  },
  {
    category: "IEEE Conference Documents",
    files: [
      {
        name: "IEEE Conference Paper",
        date: "2025-06-01",
        status: "completed",
        fileType: "pdf",
        fileSize: "373 KB",
        downloadUrl: new URL(
          "../document/IEEE_Conference_Paper.pdf",
          import.meta.url
        ).href,
      },
    ],
  },
];

const Documents = () => {
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
            Project Documents
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all project documentation, including reports, checklists, and
            final deliverables.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {documentsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  {category.category}
                </h2>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Document Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {category.files.map((file) => (
                        <tr key={file.name} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <div className="flex items-center">
                              {file.status === "completed" ? (
                                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                              ) : (
                                <FileQuestion className="h-5 w-5 text-gray-400 mr-2" />
                              )}
                              {file.name}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(file.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm">
                            {file.status === "completed" ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <Check className="h-3 w-3 mr-1" />
                                Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                <Clock className="h-3 w-3 mr-1" />
                                Pending
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {file.fileType}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {file.fileSize}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                            {/* {file.status === "completed" ? (
                              <button className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </button>
                            ) : (
                              <button
                                disabled
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-300 cursor-not-allowed"
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Unavailable
                              </button>
                            )} */}
                            {file.status === "completed" ? (
                              <a
                                href={file.downloadUrl ?? "#"}
                                download
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </a>
                            ) : (
                              <button
                                disabled
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-300 cursor-not-allowed"
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Unavailable
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
