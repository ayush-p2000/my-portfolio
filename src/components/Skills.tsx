import { skills } from "../constants";

const Skills = ({ id }: { id?: string }) => {
  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;