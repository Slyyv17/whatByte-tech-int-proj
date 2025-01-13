// import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const ComparisonGraph = ({ rank, percentile, correctAnswers }) => {
//   const baseData = [
//     { percentile: 20, numberOfStudent: 5 },
//     { percentile: 40, numberOfStudent: 10 },
//     { percentile: 60, numberOfStudent: 15 },
//     { percentile: 80, numberOfStudent: 20 },
//   ];

//   const userData = { percentile, numberOfStudent: correctAnswers }; // Representing correctAnswers in the chart
//   const updatedData = [...baseData, userData].sort((a, b) => a.percentile - b.percentile);

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload?.length) {
//       if (payload[0].payload.percentile === percentile) {
//         return (
//           <div className="custom-tooltip bg-white p-2 rounded shadow-sm">
//             <p className="label">Your percentile: {label}</p>
//           </div>
//         );
//       }
//       return (
//         <div className="custom-tooltip bg-white p-2 rounded shadow">
//           <p className="label">{`Percentile: ${label}`}</p>
//           <p className="intro">{`Number of Students: ${payload[0].value}`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart
//           data={updatedData}
//           margin={{
//             top: 5, right: 30, left: 20, bottom: 5,
//           }}
//         >
//           <CartesianGrid vertical={true} horizontal={false} stroke="#ccc" strokeWidth={1} />
//           <XAxis dataKey="percentile" />
//           <Tooltip content={<CustomTooltip />} />
//           <Legend />
//           <Line type="monotone" dataKey="numberOfStudent" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ComparisonGraph;
