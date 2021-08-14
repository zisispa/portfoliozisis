import React from "react";
import TitleSection from "../utils/TitleSection/TitleSection";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import experiences from "../../data/ExperienceData/ExperienceData";

const Experience = () => {
  return (
    <section name='experience' className='py-28'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <TitleSection title={"Experience"} description={"Where I’ve Worked"} />

        <div className='flex flex-col sm:flex-row md:justify-around mt-5'>
          {experiences !== null
            ? experiences.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  title={experience.title}
                  subtitle={experience.subtitle}
                  description={experience.description}
                  svg={experience.svg}
                  details={experience.details}
                />
              ))
            : "Loading!"}
        </div>
      </div>
    </section>
  );
};

export default Experience;
