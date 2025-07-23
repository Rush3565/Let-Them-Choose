
import React, { useState, useEffect } from "react";

export default function SpeakOut() {
  const [stories, setStories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/speakout")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setStories(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setStories([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch stories:", err);
        setStories([]);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      fetch("http://localhost:5000/api/speakout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((newStory) => {
          setStories([newStory, ...stories]);
          setFormData({ name: "", message: "" });
        })
        .catch((err) => console.error("Failed to submit story:", err));
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-yellow-400 drop-shadow-lg">
          Speak Out
        </h1>
        <p className="mb-8 text-center text-yellow-300">
          Share your story or opinion about the importance of letting children choose their own path.
        </p>
        <form onSubmit={handleSubmit} className="mb-10 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-yellow-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-yellow-400 rounded-md bg-gray-900 text-yellow-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-yellow-300">
              Your Story / Opinion
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 border border-yellow-400 rounded-md bg-gray-900 text-yellow-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Shared Stories</h2>
          <div className="space-y-8">
          {stories.map((story) => (
            <div
              key={story._id}
              className="p-6 border border-yellow-400 rounded-3xl bg-gray-900 text-yellow-300"
            >
              <p className="italic mb-4">"{story.message}"</p>
              <p className="font-semibold text-right">- {story.name}</p>
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  );
}
