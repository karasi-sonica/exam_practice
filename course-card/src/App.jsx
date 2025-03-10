import React from 'react';
import CourseCard from './components/courseCard';

function App() {
  return(
    <div className='flex flex-wrap gap-4 p-4 bg-gray-100 min-h-screen justify-center'>
      <CourseCard />
    </div>
  );
};

export default App;