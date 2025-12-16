import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FreeGameZone = ({ freeGames }: { freeGames: { name: string; number: string; boldNumbers: string; smallNumbers: string }[] }) => {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">🎮 FREE GAME ZONE - OPEN TO CLOSE</CardTitle>
        <p className="text-center text-xs mt-1">Date: 07/12/2025</p>
      </CardHeader>

      <CardContent className="p-3 space-y-3">
        {freeGames.map((game) => (
          <div key={game.name} className="bg-white p-3 rounded-lg border-2 border-green-300">
            <p className="text-xs font-black text-green-800 mb-2">↪ {game.name}</p>
            <p className="text-lg font-black text-rose-700 mb-1">{game.number}</p>
            <p className="text-xs font-bold text-orange-600 mb-1">{game.boldNumbers}</p>
            <p className="text-xs font-semibold text-gray-700">{game.smallNumbers}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FreeGameZone;


// import React from 'react';

// type MarketData = {
//   day: string;
//   numbers: string[];
//   ank: string[];
// };

// type Market = {
//   name: string;
//   data: MarketData[];
// };

// const weeklyData: Market[] = [
//   {
//     name: 'Kalyan',
//     data: [
//       { day: 'Mon', numbers: ['1','248','1','880','1','890','1','469'], ank: ['46','64','79','97'] },
//       { day: 'Tue', numbers: ['4','248','6','880','7','890','9','461'], ank: ['46','64','79','77'] },
//       { day: 'Wed', numbers: ['4','248','6','880','7','890','9','469'], ank: ['46','64','79','97'] },
//       { day: 'Thu', numbers: ['4','248','6','880','7','890','9','111'], ank: ['46','64','79','97'] },
//       { day: 'Fri', numbers: ['4','248','6','880','7','890','9','987'], ank: ['46','64','79','97'] },
//       { day: 'Sat', numbers: ['4','000','6','111','7','000','9','222'], ank: ['46','64','79','97'] },
//     ],
//   },
//   {
//     name: 'Main Bazaar',
//     data: [
//       { day: 'Mon', numbers: ['0','248','0','880','0','890','0','469'], ank: ['46','64','79','97'] },
//       { day: 'Tue', numbers: ['4','248','6','880','7','890','9','469'], ank: ['46','64','79','97'] },
//       { day: 'Wed', numbers: ['4','248','6','880','7','890','9','469'], ank: ['46','64','79','97'] },
//       { day: 'Thu', numbers: ['4','248','6','880','7','890','9','469'], ank: ['46','64','79','97'] },
//       { day: 'Fri', numbers: ['5','248','5','880','5','890','5','469'], ank: ['46','64','79','97'] },
//     ],
//   },
// ];

// const DailyGameChart = () => {
//   return (
//     <div className="w-full max-w-4xl mx-auto p-2">
//       <h1 className="text-center text-lg font-bold text-purple-700 mb-4">
//         FREE FIX GAME DAILY ✔ <br />
//         DATE: 17/12/2025 <br />
//         FREE GUESSING DAILY | OPEN TO CLOSE FIX ANK
//       </h1>

//       {weeklyData.map((market) => (
//         <div key={market.name} className="mb-6">
//           <h2 className="text-center font-bold text-xl text-teal-700 mb-2">{market.name}</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-300 text-center text-sm">
//               <thead className="bg-teal-100">
//                 <tr>
//                   <th className="border px-2 py-1">Day</th>
//                   <th className="border px-2 py-1" colSpan={8}>Numbers</th>
//                   <th className="border px-2 py-1" colSpan={4}>Ank</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {market.data.map((dayData) => (
//                   <tr key={dayData.day} className="hover:bg-gray-50">
//                     <td className="border px-2 py-1 font-semibold">{dayData.day}</td>
//                     {dayData.numbers.map((num, idx) => (
//                       <td key={idx} className="border px-1 py-1">{num}</td>
//                     ))}
//                     {dayData.ank.map((ank, idx) => (
//                       <td key={idx} className="border px-1 py-1 text-purple-700 font-bold">{ank}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DailyGameChart;
