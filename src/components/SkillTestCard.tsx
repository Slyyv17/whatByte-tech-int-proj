"use client";

import { useState } from "react";
import Image from "next/image";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight } from "lucide-react";


export default function SkillTestCard() {
  // State to store user input
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Update state with new values
    setRank(Number(formData.get("rank")));
    setPercentile(Number(formData.get("percentile")));
    setCorrectAnswers(Number(formData.get("correctAnswers")));

    // Close the modal
    setModalOpen(false);
    
    // Reset the form
    (e.target as HTMLFormElement).reset();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // If the user clicks outside of the modal content, close the modal
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  // Original data array
  const baseData = [
    { percentile: 0, numberOfStudent: 1 },
    { percentile: 25, numberOfStudent: 2 },
    { percentile: 50, numberOfStudent: 3 },
    { percentile: 75, numberOfStudent: 4 },
    { percentile: 100, numberOfStudent: 5 },
  ];

  // Add user's percentile to the data array dynamically and sort
  const userData = { percentile, numberOfStudent: 0 }; // Your data point
  const updatedData = [...baseData, userData].sort((a, b) => a.percentile - b.percentile);

  // Custom Tooltip with typing
  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; payload: { percentile: number } }[]; label?: string }) => {
    if (active && payload?.length) {
      if (payload[0].payload.percentile === percentile) {
        return (
          <div className="custom-tooltip bg-white p-2 rounded shadow-sm">
            <p className="label">Your percentile: {label}</p>
          </div>
        );
      }
      return (
        <div className="custom-tooltip bg-white p-2 rounded shadow">
          <p className="label">{`Percentile: ${label}`}</p>
          <p className="intro">{`Number of Students: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="flex justify-between items-start gap-2">
      {/* First article */}
      <article className="flex flex-col">
        <p className="text-lg text-left">Skill Test</p>
        <div className="bg-white p-6 rounded-lg shadow-sm w-auto flex items-center justify-between gap-2">
          <Image
            src="/assets/images/html5_logo.png"
            alt="HTML"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="flex flex-col items-start justify-center h-fit">
            <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
            <p className="text-gray-500">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
          <div className="flex items-center justify-center h-fit">
            <button
              className="px-4 py-2 bg-btnBg text-mainClr border-none rounded-md capitalize"
              onClick={toggleModal}
            >
              update
            </button>
          </div>
        </div>

        {/* Quick Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl gap-4 mt-4">
          <h3 className="text-black font-bold">Quick Statistics</h3>
          <div className="bg-white p-2 max-w-3xl grid grid-cols-3 gap-4 place-items-center">
            <div className="border-r border-gray-200 py-4 flex justify-center items-center gap-2 pr-2">
              <div className="bg-gray-200 rounded-full p-0 px-2.5">
                <Image
                  src="/assets/images/__Trophy_Emoji-removebg-preview.png"
                  alt="HTML"
                  width={25}
                  height={25}
                  className="rounded-lg"
                />
              </div>
              <span className="text-sm uppercase">
                <b>{rank}</b> <br /> Your Rank
               </span>
            </div>

            <div className="border-r border-gray-200 py-4 flex justify-center items-center gap-2 pr-2">
              <div className="bg-gray-200 rounded-full p-1.5 px-2.5">
                <Image
                  src="/assets/images/__Clipboard_Emoji-removebg-preview.png"
                  alt="HTML"
                  width={25}
                  height={25}
                  className="rounded-lg"
                />
              </div>
              <span className="text-sm uppercase">
                <b>{percentile}%</b> Percentile
              </span>
            </div>

            <div className="py-4 flex justify-center items-center gap-2">
              <div className="bg-gray-200 rounded-full p-0.5 px-1.5">
                <Image
                  src="/assets/images/__Check_Mark_Button_Emoji-removebg-preview.png"
                  alt="HTML"
                  width={25}
                  height={25}
                  className="rounded-lg"
                />
              </div>
              <span className="text-sm uppercase">
                <b>{correctAnswers}/15</b>
                <br />
                Correct Answers
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Graph */}
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl gap-4 mt-4">
          <h1 className="capitalize font-bold text-lg">comparison graph</h1>
          <div>
            <p className="text-gray-600 text-md">
              <b>You scored {percentile}% percentile</b> which is lower than the average percentile 72% of all the engineers who took this assessment.
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={updatedData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid vertical={true} horizontal={false} stroke="#ccc" strokeWidth={1} />
              <XAxis dataKey="percentile" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="numberOfStudent" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>

      {/* Syllabus - second article */}
      <article>
        {/* Syllabus Analysis */}
      
        <div className="bg-white p-6 rounded-lg  flex flex-col gap-4 justify-center items-start border border-gray-100 shadow-sm">
            <h1 className="text-left font-bold text-lg capitalize">syllabus wise analysis</h1>
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
            <p> {correctAnswers}/15 </p>
        </div>
              
        <p className="mb-4 text-gray-600"><b>You scored 10 out of 15 questions correctly.</b> However, it still needs some improvements.</p>
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center w-32 h-32">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="10" fill="none"/>
              <circle cx="50" cy="50" r="45" stroke="#4CAF50" strokeWidth="10" fill="none" strokeDasharray="282.743, 282.743" strokeDashoffset="56.5486"/>
            </svg>
              <span className="absolute text-2xl font-bold text-gray-700">{correctAnswers}/15</span>
          </div>
        </div>
      </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleModalClick} // Close modal when clicking outside
        >
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-6">Update scores</h2>
              <Image src="/assets/images/html5_logo.png"
                alt="HTML"
                width={40}
                height={40}
                className="rounded-lg mb-5"/>
            </div>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="flex items-center gap-3">
                <span className="bg-btnBg text-mainClr py-1 px-3 rounded-full text-sm">1</span>
                <label className="block font-medium text-sm w-1/3" htmlFor="rank">
                  Update your Rank
                </label>
                <input
                  type="number"
                  id="rank"
                  name="rank"
                  className="px-4 py-2 border rounded-md flex-1"
                  defaultValue={rank}
                  style={{ appearance: "none", MozAppearance: "textfield", WebkitAppearance: "none" }}
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-btnBg text-mainClr py-1 px-3 rounded-full text-sm">2</span>
                <label className="block font-medium text-sm w-1/3" htmlFor="percentile">
                  Update your Percentile
                </label>
                <input
                  type="number"
                  id="percentile"
                  name="percentile"
                  className="px-4 py-2 border rounded-md flex-1"
                  defaultValue={percentile}
                  style={{ appearance: "none", MozAppearance: "textfield", WebkitAppearance: "none" }}
                  min={0}
                  max={100}
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-btnBg text-mainClr py-1 px-3 rounded-full text-sm">3</span>
                <label className="block font-medium text-sm w-1/3" htmlFor="correctAnswers">
                  Update Correct Answers (out of 15)
                </label>
                <input
                  type="number"
                  id="correctAnswers"
                  name="correctAnswers"
                  className="px-4 py-2 border rounded-md flex-1"
                  defaultValue={correctAnswers}
                  style={{ appearance: "none", MozAppearance: "textfield", WebkitAppearance: "none" }}
                  min={0}
                  max={15}
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-btnBg rounded-md text-btnBg"
                  onClick={toggleModal}
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 flex justify-center items-center gap-2 bg-btnBg text-mainClr rounded-md"
                >
                  save <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
