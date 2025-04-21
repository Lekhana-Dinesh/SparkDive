import React, { useEffect, useState } from "react";

function Result() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("quizAnswers"));
    if (!answers) return;

    const score = {
      creative: 0,
      analytical: 0,
      helper: 0,
      adventurous: 0,
    };

    Object.values(answers).forEach((ans) => {
      if (ans === "a") score.analytical ++;
      else if (ans === "b") score.creative ++;
      else if (ans === "c") score.helper ++;
      else if (ans === "d") score.adventurous ++;
    });

    let topCategory = "creative";
    let max = 0;

    for (const [key, value] of Object.entries(score)) {
      if (value > max) {
        max = value;
        topCategory = key;
      }
    }


    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setResult(data[topCategory]));
  }, []);

  if (!result){
    return <p className="text-center mt-20 text-lg">Loading suggestions...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Personality Match</h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Careers</h3>
        <ul className="list-disc list-inside">
          {result.careers.map((career) => (
            <li key={career}>{career}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Hobbies</h3>
        <ul className="list-disc list-inside">
          {result.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-yellow-700">Resources</h3>
        <ul className="list-disc list-inside">
          {result.resources.map((res) => (
            <li key={res.url}>
              <a href={res.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                {res.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Result;
