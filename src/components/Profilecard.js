import React from 'react';
import { Users, BookOpen, Clock } from 'lucide-react';

const ProfileCard = ({ 
  name = "Sherry Wolf", 
  title = "Piano Tutor", 
  avatar = "./kiera.jpg",
  isOnline = true,
  stats = {
    students: 30,
    courses: 6,
    recent: 3
  }
}) => {
  return (
    <div className="bg-white rounded-xl p-6 py-9 shadow-sm border-2 border-blue-400 h-max md:w-[30%] w-[100%]">
        
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium text-gray-700">Profile</h4>
      </div>

      <div className="flex items-start justify-between gap-5">
        {/* Left side - Avatar and name */}
        <div className="flex flex-col items-center">
          {/* Avatar with online status */}
          <div className="relative mb-3">
            <img
              src={avatar}
              alt={name}
              className="w-26 h-26 rounded-full border-4 border-orange-200 object-cover"
            />
            {isOnline && (
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            )}
          </div>
          {/* Name and title */}
          <h3 className="text-lg font-semibold text-gray-900 text-center">{name}</h3>
          <p className="text-gray-600 text-sm text-center">{title}</p>
        </div>
        
        {/* Right side - Stats */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between bg-purple-100 text-purple-800 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-sm text-gray-400">Students</span>
            </div>
            <span className=" px-2 py-1 rounded-full text-sm font-medium">{stats.students}</span>
          </div>

          <div className="flex items-center justify-between bg-purple-100 text-purple-800 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-pink-600" />
              </div>
              <span className="text-sm text-gray-400">Course</span>
            </div>
            <span className=" px-2 py-1 rounded-full text-sm font-medium">{stats.courses}</span>
          </div>

          <div className="flex items-center justify-between bg-purple-100 text-purple-800 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm text-gray-400">Recent</span>
            </div>
            <span className=" px-2 py-1 rounded-full text-sm font-medium">{stats.recent}</span>
          </div>
          

        </div>

      </div>
    </div>
  );
};

export default ProfileCard;