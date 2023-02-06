import React from "react";
import Project from "../components/project/Project";

import { projects } from "../helpers/projectsList";

const Progects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((projects, index) => (
            <Project
              key={index}
              title={projects.title}
              img={projects.img}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Progects;

// свойство key не самое лучшее решение, так как index в массиве может поменяться, что рпиведёт к лишней перерисовке.
// лучше всего применять в массиве id и уже его применять в качестве ключа.
