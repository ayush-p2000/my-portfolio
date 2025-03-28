const Contact = ({ id }: { id?: string }) => {
    return (
      <section id="contact" className="bg-secondary">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;