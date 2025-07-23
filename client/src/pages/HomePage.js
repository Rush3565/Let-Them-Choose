import React from "react";
import { FaChild, FaHandsHelping, FaLightbulb } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-yellow-400 drop-shadow-lg">
          Let Them Choose: Empowering Children Through Freedom
        </h1>
        <p className="text-2xl mb-10 text-center text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Every child deserves the right to explore, learn, and grow at their own pace. Forcing children to follow a path they don't choose can harm their confidence, creativity, and happiness.
        </p>

        <section className="mb-12 px-8 py-8 bg-gray-700 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400 border-b-4 border-yellow-400 pb-3 drop-shadow-md flex items-center space-x-4">
            <FaChild />
            <span>Why You Shouldn't Force Your Child</span>
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4 text-xl">
            <li>Forcing can damage the parent-child relationship and trust.</li>
            <li>Children develop better when they follow their own interests and passions.</li>
            <li>Allowing choice fosters independence, responsibility, and self-esteem.</li>
            <li>Pressure can lead to stress, anxiety, and rebellion.</li>
          </ul>
        </section>

        <section className="mb-12 px-8 py-8 bg-gray-700 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400 border-b-4 border-yellow-400 pb-3 drop-shadow-md flex items-center space-x-4">
            <FaHandsHelping />
            <span>How You Can Support Your Child</span>
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4 text-xl">
            <li>Listen actively to your child's thoughts and feelings.</li>
            <li>Encourage exploration and curiosity without judgment.</li>
            <li>Provide guidance, but respect their choices.</li>
            <li>Celebrate their unique talents and achievements.</li>
          </ul>
        </section>

        <section className="mb-12 px-8 py-8 bg-yellow-400 rounded-2xl shadow-lg text-gray-900">
          <h2 className="text-4xl font-semibold mb-6 flex items-center space-x-4">
            <FaLightbulb />
            <span>Join the Movement</span>
          </h2>
          <p className="text-lg leading-relaxed">
            Become part of a community that believes in empowering children to make their own choices. Together, we can create a future where every child thrives by following their passion.
          </p>
          <div className="mt-6 text-center">
            <a
              href="/getinvolved"
              className="inline-block bg-gray-900 text-yellow-400 px-10 py-5 rounded-3xl font-bold hover:bg-gray-800 transition shadow-xl"
            >
              Get Involved & Make a Difference
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
