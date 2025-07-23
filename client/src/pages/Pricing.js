
import React from "react";

export default function Pricing() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl text-gray-200">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">
          Pricing Options
        </h1>
        <div className="space-y-10 text-gray-300 text-lg">
          <section className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">1. Message</h2>
            <p className="text-yellow-400 font-semibold cursor-pointer hover:underline">
              <a
                href="upi://pay?pa=9510343565@upi&am=50"
                target="_blank"
                rel="noopener noreferrer"
              >
                50 Rs
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              I will talk to your parent through messages and try to convince them.
            </p>
          </section>
          <section className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">2. Call</h2>
            <p className="text-yellow-400 font-semibold cursor-pointer hover:underline">
              <a
                href="upi://pay?pa=9510343565@upi&am=100"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 Rs
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              I will call your parent directly and discuss to help them understand your perspective.
            </p>
          </section>
          <section className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">3. Personal Meet</h2>
            <p className="text-yellow-400 font-semibold cursor-pointer hover:underline">
              <a
                href="upi://pay?pa=9510343565@upi&am=500"
                target="_blank"
                rel="noopener noreferrer"
              >
                500 Rs + Expense of Transporting
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              I will meet your parent personally to convince them. Travel expenses must be paid.
            </p>
          </section>
          <section className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Payment Options</h2>
            <p className="text-yellow-400 font-semibold cursor-pointer hover:underline">
              <a
                href="upi://pay?pa=9510343565@upi"
                target="_blank"
                rel="noopener noreferrer"
              >
                UPI: 9510343565@upi
              </a>
            </p>
          </section>
          <div className="mt-8 p-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold space-y-2">
            <p>Note: If the parent is not convinced, then there is no need to pay. However, for the personal meet, travel expenses must be paid.</p>
            <p>Crypto payments are also allowed. Other payment options will be available soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
