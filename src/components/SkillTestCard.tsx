"use client";

import { useState } from "react";
import Image from "next/image";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight } from "lucide-react";
import Syllabus from "./Syllabus";


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
    <section className="flex flex-wrap md:flex-nowrap justify-between items-start gap-2 w-full">
      {/* First article */}
      <article className="flex flex-col flex-1 min-w-[200px] p-4">
        <p className="text-lg text-left">Skill Test</p>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full md:w-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <Image
            src="/assets/images/html5_logo.png"
            alt="HTML"
            width={70}
            height={70}
            className="rounded-lg mb-4 md:mb-0"
          />
          <div className="flex flex-col items-start justify-center h-fit">
            <h2 className="text-lg md:text-xl font-bold">Hyper Text Markup Language</h2>
            <p className="text-gray-500 text-sm">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
          <div className="flex items-center justify-center h-fit mt-4 md:mt-0">
            <button
              className="px-4 py-2 bg-btnBg text-mainClr border-none rounded-md capitalize"
              onClick={toggleModal}
            >
              update
            </button>
          </div>
        </div>


       
{/* Container for Quick Statistics and Comparison Graph */}
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full gap-4 mt-4 overflow-x-auto md:overflow-hidden">
  <div className="flex md:block space-x-4 md:space-x-0 w-full min-w-[600px] md:min-w-0 gap-4">

{/* Quick Statistics Section */}
<div className="flex-shrink-0 bg-white shadow-sm p-6 rounded-lg min-w-[300px] w-fit md:w-auto h-fit">
  <h3 className="text-black font-bold mb-4 text-left md:text-left">Quick Statistics</h3>

  <div className="bg-white p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center w-fit">

    {/* Rank Section */}
    <div className="flex flex-col items-center justify-center md:items-start text-center md:text-left gap-2 md:border-r md:pr-2 md:border-gray-200">
      <div className="bg-gray-200 rounded-full p-1 px-3">
        <Image
          src="/assets/images/__Trophy_Emoji-removebg-preview.png"
          alt="Rank Icon"
          width={25}
          height={25}
          className="rounded-lg"
        />
      </div>
      <span className="text-sm uppercase">
        <b>{rank}</b>
        <br />
        Your Rank
      </span>
    </div>

    {/* Percentile Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 md:border-r md:border-gray-200">
      <div className="bg-gray-200 rounded-full p-1 px-3">
        <Image
          src="/assets/images/__Clipboard_Emoji-removebg-preview.png"
          alt="Percentile Icon"
          width={25}
          height={25}
          className="rounded-lg"
        />
      </div>
      <span className="text-sm uppercase">
        <b>{percentile}%</b> Percentile
      </span>
    </div>

    {/* Correct Answers Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
      <div className="bg-gray-200 rounded-full p-1 px-3">
        <Image
          src="/assets/images/__Check_Mark_Button_Emoji-removebg-preview.png"
          alt="Correct Answers Icon"
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


    {/* Comparison Graph Section */}
    <div className="flex-shrink-0 bg-white p-6 rounded-lg border border-gray-100 min-w-[300px] w-full md:w-auto h-fit md:mt-4">
      <h1 className="capitalize font-bold text-lg">Comparison Graph</h1>
      <div>
        <p className="text-gray-600 text-md">
          <b>You scored {percentile}% percentile</b> which is lower than the average percentile 72% of all the engineers who took this assessment.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={updatedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={true} horizontal={false} stroke="#ccc" strokeWidth={1} />
          <XAxis dataKey="percentile" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="numberOfStudent" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

</article>

      {/* Syllabus - second article */}
    <article className="flex-1 min-w-[200px] p-4">
      {/* Syllabus and Question Analysis */}
      <div className="">
          <Syllabus correctAnswers={correctAnswers} scoreData={baseData} />
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
