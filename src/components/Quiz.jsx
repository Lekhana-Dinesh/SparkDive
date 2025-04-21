import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const questions = [ //options[a-analytical,b-creative,c-helper,d-adventurous]
    {
      id: 1,
      question: "What do you enjoy most?",
      options: {
        a: "Solving problems", 
        b: "Creating things", 
        c: "Helping others",
        d: "Exploring new places"
      }
    },
    {
        id: 2,
        question: "In a group project, which role do you naturally take?",
        options: {
          a: "The planner who organizes everything", 
          b: "The idea generator who brainstorms possibilities",
          c: "The mediator who keeps everyone working together",
          d: "The explorer who finds new approaches"
        }
      },
      {
        id: 3,
        question: "On weekends, what's your ideal activity?",
        options: {
          a: "Learning something new through research or reading",
          b: "Creating art, music, or other projects",
          c: "Volunteering or spending time with loved ones", 
          d: "Going on spontaneous trips or outdoor adventures"
        }
      },
      {
        id: 4,
        question: "What type of books or media content do you prefer?",
        options: {
          a: "Non-fiction, documentaries, or educational content", 
          b: "Fantasy, art books, or creative inspirational content", 
          c: "Self-improvement, relationship advice, or social stories", 
          d: "Travel journals, adventure stories, or new experiences" 
        }
      },
      {
        id: 5,
        question: "What aspect of a job matters most to you?",
        options: {
          a: "Intellectual challenges and solving complex problems",
          b: "Freedom to innovate and express original ideas", 
          c: "Making meaningful connections and helping others", 
          d: "Variety of experiences and opportunities for adventure" 
        }
      }
  ];

  const handleSelect = (qid, value) => {
    setAnswers(prev => ({
      ...prev,
      [qid]: value
    }));
    setError("");
  };
 

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      setError("Please answer all questions.");
      return;
    }

    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    navigate("/result");
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Personality Quiz</h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border rounded-lg bg-red-50">
          <p className="font-medium mb-2">{q.question}</p>
          {Object.entries(q.options).map(([key, label]) => (
            <label key={key} className="block mb-1">
              <input
                type="radio"
                name={`q${q.id}`}
                value={key}
                onChange={() => handleSelect(q.id, key)}
                className="mr-2"
              />
              {label}
            </label>
          ))}
        </div>
      ))}
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
