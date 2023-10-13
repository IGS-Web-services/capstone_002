import React from "react";
import { EducationCard } from "../components"; // Import the EducationCard component

const Education = () => {
  return (
    <section id="education" className="w-full bg-none py-12 rounded-b-lg b">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-designColor">Education</h2>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example Education Cards */}
            <EducationCard
              title="Bachelor's Degree in Computer Science"
              institution="University of XYZ"
              date="2016 - 2020"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <EducationCard
              title="Master's Degree in Web Development"
              institution="Tech Institute"
              date="2020 - 2022"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
            />
            {/* Add more EducationCard components as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
