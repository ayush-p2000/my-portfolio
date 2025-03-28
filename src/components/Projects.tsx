import { projects } from "../constants";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ id }: { id?: string }) => {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.demoUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.codeUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;