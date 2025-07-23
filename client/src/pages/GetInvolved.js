import React from "react";

export default function GetInvolved() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">
          Get Involved: Join Our Mission
        </h1>
        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold mb-4">Spread the Word</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Share our website and articles on social media.</li>
              <li>Talk to other parents and caregivers about the importance of letting children choose.</li>
              <li>Organize or participate in community events and discussions.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Contribute Content</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Write articles or blog posts sharing your experiences and insights.</li>
              <li>Submit stories to our Speak Out page to inspire others.</li>
              <li>Help us curate resources and tools for parents and children.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Volunteer your time or skills to help with website maintenance and outreach.</li>
              <li>Donate to support our mission and initiatives.</li>
              <li>Partner with us to expand our reach and impact.</li>
            </ul>
          </section>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-3xl font-semibold hover:bg-yellow-300 transition"
            >
              Contact Us to Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
