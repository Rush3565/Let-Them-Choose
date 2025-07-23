import React from "react";

const stories = [
  {
    title: "The Pressure to Choose Science",
    content: (
      <>
        <p><strong>Parent:</strong> "You must take the science stream. It's the best for your future. Everyone in the family has done it, and it's a proven path to success."</p>
        <p><strong>Child:</strong> "But I love arts and want to pursue it. Science doesn't interest me, and I feel lost in those subjects."</p>
        <p><strong>Parent:</strong> "Arts won't get you a good job. You need a stable career to support yourself and the family."</p>
        <p><strong>Child:</strong> "I want to be happy and follow my passion. Success means more to me than just money."</p>
        <p><strong>Parent:</strong> "Passion doesn't pay the bills. You need to be practical."</p>
        <p><strong>Child:</strong> "But if I don't follow my passion, I might fail and be miserable."</p>
        <p><strong>Parent:</strong> "We just want what's best for you. Science is the safest choice."</p>
        <p><strong>Child:</strong> "I wish you could understand how important this is to me."</p>
      </>
    ),
  },
  {
    title: "Choosing Engineering Over My Dreams",
    content: (
      <>
        <p><strong>Parent:</strong> "Engineering is a respected profession. You should become an engineer like your cousins."</p>
        <p><strong>Child:</strong> "I want to study music and become a musician. It's my dream."</p>
        <p><strong>Parent:</strong> "Music won't pay the bills. Engineering is safer and more reliable."</p>
        <p><strong>Child:</strong> "I need to follow my heart to be successful and happy."</p>
        <p><strong>Parent:</strong> "You can do music as a hobby, but your career should be stable."</p>
        <p><strong>Child:</strong> "I don't want to live a life full of regrets."</p>
        <p><strong>Parent:</strong> "We just want you to have a secure future."</p>
        <p><strong>Child:</strong> "Please trust me to make my own choices."</p>
      </>
    ),
  },
  {
    title: "Denied a PC for Learning",
    content: (
      <>
        <p><strong>Child:</strong> "I need a good PC to learn coding and develop my skills. It's essential for my education."</p>
        <p><strong>Parent:</strong> "No, it will ruin your studies. You spend too much time on the computer playing games."</p>
        <p><strong>Child:</strong> "Coding is my future career. I use the PC for learning and projects."</p>
        <p><strong>Parent:</strong> "I worry it will distract you from schoolwork and social life."</p>
        <p><strong>Child:</strong> "I promise to balance my time and focus on studies."</p>
        <p><strong>Parent:</strong> "We will see. For now, no PC."</p>
        <p><strong>Child:</strong> "It's hard to grow without the right tools."</p>
      </>
    ),
  },
  {
    title: "Mobile Phone Restrictions",
    content: (
      <>
        <p><strong>Child:</strong> "I need a smartphone to access online resources and connect with mentors for my studies."</p>
        <p><strong>Parent:</strong> "Phones are distractions. You won't focus on studies and will waste time."</p>
        <p><strong>Child:</strong> "I promise to use it responsibly for learning and communication."</p>
        <p><strong>Parent:</strong> "We will see. For now, no phone."</p>
        <p><strong>Child:</strong> "It's frustrating not to have the tools I need."</p>
      </>
    ),
  },
];

export default function Stories() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">
          Real Stories: The Impact of Forced Choices
        </h1>
        <div className="space-y-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-8 rounded-3xl shadow-lg text-gray-900 hover:shadow-2xl transition"
            >
              <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
              <p className="text-lg leading-relaxed">{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
