import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project-1.png"
          title="Ongc Training Portal"
          description="The ONGC Training Project, built with Next.js, offers a fast, responsive, and interactive platform for learning"
        />
        <ProjectCard
          src="/project-2.png"
          title="Interactive Ecommerce "
          description="The eCommerce platform, built with React and MongoDB, offers fast, scalable, and interactive online shopping experiences."
        />
      
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Portfolio built with Framer Motion, Three.js, and TypeScript, showcasing interactive, dynamic, and visually stunning projects."
        />
      </div>
    </div>
  );
};

export default Projects;