import React from "react";
import PopularLanguageCart from "./PopularLanguageCart";

const PopularCourses = () => {
  return (
    <div>
      <div className="mt-20 mb-10 text-center w-9/12 md:w-1/2 mx-auto">
        <h3 className="text-3xl font-semibold mb-5">Popular Courses</h3>
        <p>
          Take courses from the world's best instructors and universities.
          Courses include recorded auto-graded and peer-reviewed assignments,
          video lectures, and community discussion forums.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
      <PopularLanguageCart 
        name="French"
        learners={57}
        language="French"
        img="https://i.ibb.co/tLQNdCz/Eiffel-Tower-Day-1200x834.jpg"
        ></PopularLanguageCart>

        <PopularLanguageCart 
        name="French"
        learners={57}
        language="French"
        img="https://i.ibb.co/ynmFkJY/germanfood.jpg"
        ></PopularLanguageCart>

        <PopularLanguageCart 
        name="French"
        learners={57}
        language="French"
        img="https://i.ibb.co/nnwLnM3/london-england-credit-tomas-marek-istock.jpg"
        ></PopularLanguageCart>

      <PopularLanguageCart 
        name="French"
        learners={57}
        language="French"
        img="https://i.ibb.co/vhY7G1V/bullfighting-in-spain.jpg"
        ></PopularLanguageCart>

        <PopularLanguageCart 
        name="French"
        learners={57}
        language="French"
        img="https://i.ibb.co/ZWgMyx4/arab-Desert.jpg"
        ></PopularLanguageCart>

        <PopularLanguageCart 
        name="French"
        learners={57}
        language="French"
        img="https://i.ibb.co/w4R8X28/Great-Wall-Of-China.jpg"
        ></PopularLanguageCart>
      </div>
    </div>
  );
};

export default PopularCourses;
