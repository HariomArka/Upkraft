import React, { useState } from 'react';
import { Search, Bell, Settings, Calendar, BookOpen, Users, Music, Award, DollarSign, LogOut, Home, User, Send, Menu, X } from 'lucide-react';

// Import your components
import Profilecard from './Profilecard';
import Datacard from './Datacard';
import Earn from './Earn';
import Upcoming from './Upcoming';
import Dial from './Dial';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: 'Home', icon: Home },
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
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[14%] bg-purple-600 text-white fixed top-0 left-0 h-screen">
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
                className={`w-[90%] text-xs flex items-center rounded-lg px-6 py-2 text-left hover:bg-purple-700 transition-colors ${activeTab === item.name ? 'bg-white border-r-4 border-white text-purple-600' : ''
                  }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}

          <button className="w-[90%] text-xs flex items-center rounded-lg px-6 py-2 text-left hover:bg-purple-700 transition-colors absolute bottom-0">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-purple-600 text-white z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">UPKRAFT</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 hover:bg-purple-700 rounded"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 px-4">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(item.name);
                  setSidebarOpen(false);
                }}
                className={`w-full text-sm flex items-center rounded-lg px-4 py-3 text-left hover:bg-purple-700 transition-colors mb-1 ${activeTab === item.name ? 'bg-white text-purple-600' : ''
                  }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}

          <button className="w-full text-sm flex items-center rounded-lg px-4 py-3 text-left hover:bg-purple-700 transition-colors mt-8">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="md:ml-[14%] flex-1 flex flex-col overflow-y-auto">
        {/* Mobile Header - Company Name and Hamburger */}
        <div className="md:hidden bg-purple-600 text-white px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-purple-700 rounded"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold">UPKRAFT</h1>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Header - Search and Profile */}
        <header className="mb-3 bg-white md:bg-transparent">
          <div className="flex items-center justify-around px-6 py-1 space-y-0 w-full gap-3">
            {/* Search Bar */}
            <div className="w-[75%]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-[100%] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700">
                <Send className="h-6 w-6" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-800 hidden md:block">
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
        <div className="px-4 md:ml-4 flex-1">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-around mb-6">
            <Profilecard />

            <div className="flex">
              <div className="flex flex-col">
                <Datacard value={30} description={"Total Active Students"} />
                <Datacard value={15} description={"Courses Created"} />
                <Datacard value={120} description={"Hours Taught"} />
              </div>

              <div className="flex flex-col">
                <Datacard value={25} description={"This Month Students"} />
                <Datacard value={8} description={"Pending Assignments"} />
                <Datacard value={95} description={"Satisfaction Rate %"} />
              </div>
            </div>

            <Earn />
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4 mb-6">
            {/* Profile Card - Full Width */}
            <div className="w-full">
              <Profilecard />
            </div>

            {/* Stats Cards - Two Columns */}
            <div className="grid grid-cols-2 gap-2">
              <Datacard value={30} description={"Total Active Students"} />
              <Datacard value={15} description={"Courses Created"} />
              <Datacard value={120} description={"Hours Taught"} />
              <Datacard value={25} description={"This Month Students"} />
              <Datacard value={8} description={"Pending Assignments"} />
              <Datacard value={95} description={"Satisfaction Rate %"} />
            </div>

            {/* Earn Card */}
            <div className="w-full">
              <Earn />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Desktop Layout - Side by Side */}
            <div className="hidden md:flex gap-3 w-full">
              <div className="w-[70%]">
                <Upcoming lessons={upcomingLessons} />
              </div>

              <div className="flex  gap-3 items-center h-max p-4">
                <div className="flex w-full bg-white flex-col rounded-lg">
                  <div className="w-[70%] mb-2 mx-auto">
                    <Dial
                      pathcolor="#9333ea"
                      textcolor="#9333ea"
                      value={7.6}
                      maxValue={10}
                      degrees={180}
                      label="Overall Course Performance"
                    />
                  </div>
                  <div className="w-[70%]  mx-auto">
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

                <div className="rounded-xl w-full bg-white h-max p-4">
                  <div className="w-[70%] items-center align-middle mx-auto mb-4">
                    <Dial
                      pathcolor="red"
                      textcolor="#9333ea"
                      value={12}
                      maxValue={20}
                      degrees={360}
                      label="Feedback Pending"
                    />
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm w-full hover:bg-purple-500">
                    Give Feedback →
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-4">

              <Upcoming lessons={upcomingLessons} />

              <div className="p-4 flex flex-col gap-3">
                <div className="bg-white rounded-xl  flex gap-4 mb-2">
                  <Dial
                    pathcolor="#9333ea"
                    textcolor="#9333ea"
                    value={7.6}
                    maxValue={10}
                    degrees={180}
                    label="Overall Course Performance"
                  />
                  <Dial
                    pathcolor="#FF8400"
                    textcolor="#9333ea"
                    value={6.6}
                    maxValue={10}
                    degrees={180}
                    label="Overall Student Performance"
                  />
                </div>

                <div className='bg-white rounded-xl flex items-center justify-around w-full'>
                  <div className='w-[70%]'>
                    <Dial
                      pathcolor="red"
                      textcolor="#9333ea"
                      value={12}
                      maxValue={20}
                      degrees={360}
                      label="Feedback Pending"
                    />

                    <button className="bg-purple-600 text-white px-4 py-2 rounded-xl w-full text-sm mt-4 hover:bg-purple-500">
                      Give Feedback →
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;