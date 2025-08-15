import React from 'react';

const Upcoming = ({ 
  title = "Upcoming Lessons", 
  lessons = [],
  showViewAll = true,
  maxItems = 7,
  onViewAll 
}) => {
  const defaultLessons = [
    { date: '21 July', time: '2:00 - 3:00 Pm', course: 'Introduction to Piano', student: 'Eunice Robot & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 Pm', course: 'Finger Warmups', student: 'Eunice Robot & Arnold Hayes' },
    { date: '23 July', time: '3:00 - 4:00 Pm', course: 'Simple Chords', student: 'Eunice Robot & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 Pm', course: 'Rhythm Basics', student: 'Eunice Robot & Arnold Hayes' },
    { date: '25 July', time: '2:00 - 3:00 Pm', course: 'Simple Melodies', student: 'Eunice Robot & Arnold Hayes' },
    { date: '26 July', time: '7:00 - 8:00 Pm', course: 'Treble & Bass Clef', student: 'Eunice Robot & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 Pm', course: 'Rhythm Basics', student: 'Eunice Robot & Arnold Hayes' }
  ];

  const displayLessons = lessons.length > 0 ? lessons : defaultLessons;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        {showViewAll && (
          <button 
            className="text-purple-600 hover:text-purple-700"
            onClick={onViewAll}
          >
            View All
          </button>
        )}
      </div>

      {/* Table */}
      <div className="space-y-1">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 pb-2 border-b">
          <div>Date</div>
          <div>Time</div>
          <div>Course</div>
          <div>Student Name</div>
        </div>

        {/* Table Rows */}
        {displayLessons.slice(0, maxItems).map((lesson, index) => (
          <div 
            key={index} 
            className="grid grid-cols-4 gap-4 py-3 text-sm border-b border-gray-50 hover:bg-gray-50 transition-colors"
          >
            <div className="text-gray-900 font-medium">{lesson.date}</div>
            <div className="text-gray-600">{lesson.time}</div>
            <div className="text-gray-900">{lesson.course}</div>
            <div className="text-gray-600 truncate" title={lesson.student}>{lesson.student}</div>
          </div>
        ))}

        {/* Empty State */}
        {displayLessons.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            <p>No upcoming lessons scheduled</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upcoming;