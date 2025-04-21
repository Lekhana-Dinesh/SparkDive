import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-3xl mx-auto my-20 p-8 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold text-red-300 mb-4">Welcome to SparkDive</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover careers and hobbies that match your personality.
      </p>
      <Link
        to="/quiz"
        className="bg-red-200 text-white px-6 py-2 rounded hover:bg-red-200 transition"
      >
        Start Quiz
      </Link>
    </div>
  );
}

export default Home;
