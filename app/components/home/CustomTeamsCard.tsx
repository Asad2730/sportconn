import { teams } from "@/app/temp/data";

export const CustomTeamCards = () => (
  <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
    {/* Card Header */}
    <div className="text-black font-bold text-xl mb-4 border-b-2 border-gray-200 pb-2 flex-shrink">
      Team
    </div>
    
    {/* Cards */}
    <div className="flex flex-wrap gap-4">
      {teams.map((team) => (
        <div key={team.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 ">
          <div className="bg-gray-200 p-4 rounded-lg text-center shadow-sm flex-shrink">
            <img
              src={team.url}
              alt={team.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="pt-2 text-sm font-bold text-black flex-shrink">{team.name}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
