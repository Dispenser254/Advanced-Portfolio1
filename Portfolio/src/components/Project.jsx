// import React from 'react'
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
import { Card } from "flowbite-react";

const ProjectPage = () => {

  return (
    <section id="projects" className="py-10 text-white mb-5">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="grid grid-cols-4 max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={project1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Notes App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              sint debitis quo explicabo ipsum in eos odio quis ratione tenetur
              velit ullam excepturi voluptas, laboriosam fugit veritatis magnam
              enim dolor?
            </p>
          </Card>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={project2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Notes App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              sint debitis quo explicabo ipsum in eos odio quis ratione tenetur
              velit ullam excepturi voluptas, laboriosam fugit veritatis magnam
              enim dolor?
            </p>
          </Card>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={project3}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Notes App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              sint debitis quo explicabo ipsum in eos odio quis ratione tenetur
              velit ullam excepturi voluptas, laboriosam fugit veritatis magnam
              enim dolor?
            </p>
          </Card>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={project4}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Notes App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              sint debitis quo explicabo ipsum in eos odio quis ratione tenetur
              velit ullam excepturi voluptas, laboriosam fugit veritatis magnam
              enim dolor?
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
