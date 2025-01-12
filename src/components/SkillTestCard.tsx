

export default function SkillTestCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl">
      <h2 className="text-xl font-bold mb-4">Hyper Text Markup Language</h2>
      <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-gray-600">Quick Statistics</h3>
          <p>Your Rank: 1</p>
          <p>Percentile: 30%</p>
          <p>Correct Answers: 10/15</p>
        </div>
        <div>
          <h3 className="text-gray-600">Syllabus Analysis</h3>
          <p>HTML Tools: 80%</p>
          <p>Tags: 60%</p>
        </div>
      </div>
    </div>
  )
}

