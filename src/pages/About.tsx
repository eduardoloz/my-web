import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg md:text-xl">
          I am a rising sophomore at Stony Brook University studying Computer Science and Applied Mathematics and Statistics. I'm a Simons Stem Scholar and aspiring scientist.
          <br /><br />
          I have a current interest in machine learning and systems, and I'm looking forward to being a part of an undergraduate lab. I am an avid Hackathon attendee as well as a key member of the undergraduate Computer Science community with my contributions to clubs and workshops.
          <br /><br />
          Over the summer I will be joining CMU's REUSE program to do robust systems programming where I will be working alongside Dr. Eunsuk Kang on advancing modeling techniques with TLA+/Alloy programming and Java threading.
          <br /><br />
          I am not just a member of the cs Community, but trust me I am human after all! I have a love for singing, having joined the High C's TTBB acapella group at Stony Brook I have joined an awesome singing group where I can just have fun and wind down after my classes. Additionally, 
          my friends and I also have fun playing poker with each other, and I have been known to be a bit of a card shark (jk).
        </p>
      </div>
    </div>
  );
};

export default About;
