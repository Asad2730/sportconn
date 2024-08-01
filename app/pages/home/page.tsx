"use client";

import { CustomProfileCard } from "@/app/components/home/CustomProfileCard";
import { CustomTeamCards } from "@/app/components/home/CustomTeamsCard";
import { SuggestedUsersCard } from "@/app/components/home/SuggestedUsersCard";
import UserHeader from "@/app/components/home/UserHeadder";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <UserHeader />

      {/* Main Content */}
      <main className="pt-16">
        {" "}
        {/* Adjust padding-top to match the header height */}
        <div className="flex h-full">
          {/* First Column */}
          <div className="flex-none w-1/5 p-4 h-full">
            <div className="flex flex-col w-full">
              <CustomProfileCard />
              <SuggestedUsersCard />
               <CustomTeamCards/>
              
            </div>
          </div>

          {/* Second Column */}
          <div className="flex-grow bg-black p-4 h-full">
            <p className="text-white">Second Column</p>
          </div>

          {/* Third Column */}
          <div className="flex-none w-1/5 bg-green-500 p-4 h-full">
            <p className="text-white">Third Column</p>
          </div>
        </div>
      </main>
    </div>
  );
}
