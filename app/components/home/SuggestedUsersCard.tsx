"use client";

import { peopleToFollow } from "@/app/temp/data";
import React, { useState } from "react";

export const SuggestedUsersCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isProfileVerified = (isVerified: boolean) =>
    isVerified ? (
      <svg
        className="w-5 h-5 inline text-green-600 ml-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <svg
        className="w-5 h-5 inline text-green-600 ml-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      />
    );

  return (
    <div className="divide-y divide-gradivy-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        <div className="text-black font-bold text-xl mb-4 border-b-2 border-gray-200 pb-2">
          You Should Follow
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {peopleToFollow
          .slice(0, isExpanded ? peopleToFollow.length : 3)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-row bg-gray-100 rounded-lg shadow-sm items-center mb-5"
            >
              {/* Profile Picture */}
              <img
                src={item.profileUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* User Info */}
              <div className="mr-4">
                <div className="flex items-center text-sm font-bold text-black">
                  {item.name} {isProfileVerified(item.isVerified)}
                </div>
                <div className="text-xs text-gray-700">
                  {item.email.split("@")[0]}@
                </div>
              </div>

              {/* Follow Button */}
              <button className="max-w-sm bg-black text-white px-2 py-1 rounded hover:bg-gray-800">
                Follow
              </button>
            </div>
          ))}
      </div>
      {/* See All / See Less Button */}
      <div className="px-4 py-3 text-right">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline"
        >
          {isExpanded ? "See Less" : "See All"}
        </button>
      </div>
    </div>
  );
};
