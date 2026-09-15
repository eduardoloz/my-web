import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg md:text-xl">
          I am a Computer Science major and aspiring researcher.
        </p>
        {/* Contact Section */}
        <div id="contact" className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg md:text-xl">
            <a href="mailto:eduardolozanoacademics@gmail.com" className="text-blue-500 underline">
              eduardolozanoacademics@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
