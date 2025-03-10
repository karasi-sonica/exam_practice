import React from "react";

const CourseCard = () => {
    const course = {
        image: "https://i.pinimg.com/474x/07/7b/4a/077b4aeb49f58740d618ed0dff42a9b2.jpg",
        title: "Graphic design",
        instructorName: "abc",
        duration: "40 days",
        courseFee: "Rs.1500"
    }
  return (
    <div className="border rounded-lg shadow-md p-4 w-64 bg-white">
        <img
        src = {course.image}
        alt= {course.title}
        className="w-full h-45 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
        <h4 className="text-black-900 font-bold">{course.instructorName}</h4>
        <p className="text-green-700">{course.duration}</p>
        <p className="font-bold">{course.courseFee}</p>
    </div>
  );
};

export default CourseCard;
