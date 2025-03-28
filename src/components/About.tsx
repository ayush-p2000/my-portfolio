import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6">
      <h2 className="text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
            <Image
              src="/images/next.svg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h3 className="mb-4">Who I Am</h3>
          <p className="mb-4">
            I'm a passionate frontend developer with 5 years of experience
            building responsive and user-friendly web applications. I specialize
            in React, Next.js, and modern JavaScript frameworks.
          </p>
          <p className="mb-6">
            My goal is to create digital experiences that are not only visually
            appealing but also performant and accessible to all users.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-secondary px-4 py-2 rounded-full">
              React
            </span>
            <span className="bg-secondary px-4 py-2 rounded-full">
              Next.js
            </span>
            <span className="bg-secondary px-4 py-2 rounded-full">
              TypeScript
            </span>
            <span className="bg-secondary px-4 py-2 rounded-full">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;