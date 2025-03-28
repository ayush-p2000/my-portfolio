const Hero = ({ id }: { id?: string }) => {
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="mb-4">
          Hi, I'm <span className="text-accent">John Doe</span>
        </h1>
        <h2 className="mb-6">Frontend Developer</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          I build exceptional digital experiences with modern technologies.
        </p>
        <button className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;