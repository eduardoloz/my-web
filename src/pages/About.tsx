import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg md:text-xl">
          I am a rising sophomore at Stony Brook University studying Computer Science and Applied Mathematics and Statistics. I'm a Simons STEM Scholar and aspiring scientist. I plan on doing a BS/MS.
          <br /><br />
          I have a current interest in machine learning and formal methods, and I'm looking forward to being a part of an undergraduate lab. I am an avid hackathon attendee as well as a key member of the undergraduate Computer Science community with my contributions to clubs and workshops. However, I am 0-4 in my hackathons. :(
          <br /><br />
          Over the summer, I joined CMU's REUSE program to do robust systems programming, where I will be working alongside Ian Dardik to use Java to run model checking in parallel and work on recomp-verify. Currently, I have scratched all previous work and did the parallelization with Python.
          <br /><br />
          I am not just a member of the CS community, but trust me, I am human after all! I have a love for singing, as I have joined the High C's, a TTBB a cappella group, at Stony Brook.
          <br /><br />
          I am an avid gambler with my recreational hobby of opening booster packs in Pokémon and my investing in ETFs. I also play poker, but I’m currently on a downswing (I blame variance).
        </p>
        {/* Contact Section */}
        <div id="contact" className="mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me!</h1>
          <p className="text-lg md:text-xl">
            Discord: @eduardoloz
            <br />
            Email: eduardolozanoacademics@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
