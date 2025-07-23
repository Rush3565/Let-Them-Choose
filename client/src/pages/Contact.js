import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl text-gray-200">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">
          Is your parent strict and you want to convince them? Then contact us!
        </h1>
        <div className="space-y-8 text-gray-300 text-lg max-w-3xl mx-auto">
          <p>
            We are here to support you in your journey to communicate with your parents and help them understand your perspective.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 w-8 h-8" />
              <a href="https://wa.me/919510343565" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">
                +91 9510343565
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-400 w-8 h-8" />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rushanabbasi01@gmail.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">
                rushanabbasi01@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <FaPhone className="text-blue-400 w-8 h-8" />
              <a href="tel:+919510343565" className="text-yellow-400 hover:underline">
                +91 9510343565
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
