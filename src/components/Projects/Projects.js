import React from "react";
import TitleSection from "../utils/TitleSection/TitleSection";
import ProjectItem from "./ProjectItem/ProjectItem";
import projects from "../../data/ProjectData/ProjectsData";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id='projects' className='py-20'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <TitleSection
          title={"Projects"}
          description={"Some Things I’ve Built"}
        />
        <div className='grid gap-5 sm:grid-cols-2 mt-5'>
          {projects !== null
            ? projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  git_link={project.git_link}
                  source_link={project.source_link}
                  image={project.image}
                />
              ))
            : "Loading!"}
        </div>
        <div className='text-center mt-10'>
          <h4 className='text-gray_dark_light sm:text-lg font-poppins leading-relaxed'>
            You can see my other projects at Github.
          </h4>
        </div>
        <div className='flex justify-center mt-2'>
          <a
            href='https://github.com/zisispa'
            target='_blank'
            rel='noreferrer'
            className='text-light_gray transition-colors duration-300 hover:text-light_green'
          >
            <FiGithub size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
