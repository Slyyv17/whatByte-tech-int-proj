import React from "react";
import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface SyllabusProps {
  correctAnswers: number;
  scoreData: Array<{ percentile: number; numberOfStudent: number }>;
}

export default function Syllabus({ correctAnswers, scoreData }: SyllabusProps) {
  // for the pie chart
  // Add user's percentile dynamically and sort
  const percentile = 50; // Example value, replace with actual logic
  const userPieData = { percentile, numberOfStudent: 0 };
  const updatedPieData = [...scoreData, userPieData].sort((a, b) => a.percentile - b.percentile);

  // Chart Colors
  const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#ffc658", "#ff7f50", "#4CAF50"];

  return (
    <main className="">
      {/* Syllabus Analysis */}
      <div className="bg-white p-6 rounded-lg flex flex-col gap-4 justify-center items-start border border-gray-100 shadow-sm">
        <h1 className="text-left font-bold text-lg capitalize">Syllabus Wise Analysis</h1>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold">HTML Tools, Forms, History</h2>
            <span className="text-md font-semibold text-[#2196F3]">80%</span>
          </div>
          <div className="w-full rounded-full h-2 mb-4">
            <div className="bg-[#2196F3] h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold">Tags & References in HTML</h2>
            <span className="text-md font-semibold text-[#FF9800]">60%</span>
          </div>
          <div className="w-full rounded-full h-2 mb-4">
            <div className="bg-[#FF9800] h-2 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold">Tables & References in HTML</h2>
            <span className="text-md font-semibold text-[#F44336]">24%</span>
          </div>
          <div className="w-full rounded-full h-2 mb-4">
            <div className="bg-[#F44336] h-2 rounded-full" style={{ width: "24%" }}></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold">Tables & CSS Basics</h2>
            <span className="text-md font-semibold text-[#4CAF50]">96%</span>
          </div>
          <div className="w-full rounded-full h-2 mb-4">
            <div className="bg-[#4CAF50] h-2 rounded-full" style={{ width: "96%" }}></div>
          </div>
        </div>
      </div>

      {/* Question Analysis */}
      <div className="bg-white p-6 rounded-lg w-full mt-4 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold mb-2">Question Analysis</h2>
          <p>{correctAnswers}/15</p>
        </div>

        <p className="mb-4 text-gray-600">
          <b>You scored {correctAnswers} out of 15 questions correctly.</b> However, it still needs some improvements.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-lg p-4">
            <h2 className="text-center font-bold text-lg mb-4">Student Percentile Distribution</h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={updatedPieData}
                  dataKey="numberOfStudent"
                  nameKey="percentile"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {updatedPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>

            <div className="text-center mt-4">
              <span className="text-xl font-bold text-gray-700">
                Correct Answers: {correctAnswers}/15
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}