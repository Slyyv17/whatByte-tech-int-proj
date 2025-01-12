export default function Syllabus() {
  return (
    <main className="bg-white p-6 rounded-lg shadow-md w-auto">

      
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
        <div>
            <h2 className="text-md font-semibold mb-2">Question Analysis</h2>
            <p> 10/15 </p>
        </div>
              
        <p className="mb-4 text-gray-600"><b>You scored 10 out of 15 questions correctly.</b> However, it still needs some improvements.</p>
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center w-32 h-32">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="10" fill="none"/>
              <circle cx="50" cy="50" r="45" stroke="#4CAF50" strokeWidth="10" fill="none" strokeDasharray="282.743, 282.743" strokeDashoffset="56.5486"/>
            </svg>
            <span className="absolute text-2xl font-bold text-gray-700">10/15</span>
          </div>
        </div>
      </div>
    </main>
  );
}
