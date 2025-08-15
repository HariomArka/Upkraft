import React, { useState } from 'react';
import { Search, Bell, Settings, Calendar, BookOpen, Users, Music, Award, DollarSign, LogOut, Home, User, Send } from 'lucide-react';
import Profilecard from './Profilecard';
import Datacard from './Datacard';
import Earn from './Earn';
import Upcoming from './Upcoming';
import DialChart from './Dialchart';
import Dial from './Dial'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const sidebarItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'My Students', icon: Users },
    { name: 'My Courses', icon: BookOpen },
    { name: 'Calendar', icon: Calendar },
    { name: 'Assignment', icon: Award },
    { name: 'Music Library', icon: Music },
    { name: 'Practice Studio', icon: User },
    { name: 'Payment Summary', icon: DollarSign },
    { name: 'Refer & Earn', icon: Award },
    { name: 'Settings', icon: Settings },
  ];

  const upcomingLessons = [
    { date: '21 July', time: '2:00 - 3:00 Pm', course: 'Introduction to Piano', student: 'Eunice Robot & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 Pm', course: 'Finger Warmups', student: 'Eunice Robot & Arnold Hayes' },
    { date: '23 July', time: '3:00 - 4:00 Pm', course: 'Simple Chords', student: 'Eunice Robot & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 Pm', course: 'Rhythm Basics', student: 'Eunice Robot & Arnold Hayes' },
    { date: '25 July', time: '2:00 - 3:00 Pm', course: 'Simple Melodies', student: 'Eunice Robot & Arnold Hayes' },
    { date: '26 July', time: '7:00 - 8:00 Pm', course: 'Treble & Bass Clef', student: 'Eunice Robot & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 Pm', course: 'Rhythm Basics', student: 'Eunice Robot & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 Pm', course: 'Finger Warmups', student: 'Eunice Robot & Arnold Hayes' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <div className="w-[14%] bg-purple-600 text-white fixed top-0 left-0 h-screen">
        <div className="p-2">
          <h1 className="text-2xl font-bold">UPKRAFT</h1>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(item.name)}
                className={`w-[90%] text-xs flex items-center rounded-lg px-6 py-3 text-left hover:bg-purple-700 transition-colors ${activeTab === item.name ? 'bg-white border-r-4 border-white text-purple-600' : ''
                  }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-[14%] flex-1 flex flex-col overflow-y-auto">

        {/* Header */}
        <header className="mb-3">
          <div className="flex items-center justify-between px-6 py-1">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 bg-purple-600 rounded-full text-white hover:text-gray-800">
                <Send className="h-6 w-6" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-purple-600 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-2">
                <img
                  src="./kiera.jpg"
                  alt="Sherry Wolf"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Sherry Wolf</div>
                  <div className="text-gray-500">Tutor</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="ml-4">
          <div className="flex justify-around">
            <Profilecard />

            <div className="flex">
              <div className="flex flex-col">
                <Datacard value={30} description={"Total Active Students"} />
                <Datacard value={30} description={"Total Active Students"} />
                <Datacard value={30} description={"Total Active Students"} />
              </div>

              <div className="flex flex-col">
                <Datacard value={30} description={"Total Active Students"} />
                <Datacard value={30} description={"Total Active Students"} />
                <Datacard value={30} description={"Total Active Students"} />
              </div>
            </div>

            <Earn />
          </div>

          {/* Upcoming Lessons */}
          <div className="flex gap-3">
            <Upcoming />

            <div className="flex flex-col bg-white rounded-xl items-center h-max">
              <div className='w-[70%]'>
                <Dial
                  pathcolor="#9333ea"
                  textcolor="#9333ea"
                  value={7.6}
                  maxValue={10}
                  degrees={180}
                  label="Overall Course Performance"
                />
              </div>
              <div className='w-[70%]'>
                <Dial
                pathcolor="#FF8400"
                textcolor="#9333ea"
                value={6.6}
                maxValue={10}
                degrees={180}
                label="Overall Student Performance"
              />
              </div>
              
            </div>
            <div className='rounded-xl bg-white h-max p-2'>
              <div className='w-[70%] items-center align-middle mx-auto'>
                <Dial
                pathcolor="red"
                textcolor="#9333ea"
                value={12}
                maxValue={20}
                degrees={360}
                label="Feedback Pending"
              />
              </div>
              <button className='bg-purple-600 text-white px-7 rounded-xl text-lg w-max py-2  ml-5 mt-10 hover:bg-purple-500'>
                Give Feedback →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;