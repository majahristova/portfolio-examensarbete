import React, { useState } from "react";
import "./Competence.css";

const words = [
  "React",
  "JavaScript",
  "HTML",
  "Google Analytics",
  "Node.js",
  "Firebase",
  "Anime.js",
  "Accessibility",
  "Storyblok",
  "Next.js",
  "TypeScript",
  "Breakdance",
  "Sass",
  "Figma",
  "Wordpress",
  "CSS",
  "UX",
  "Turborepo",
  "MailChimp",
  "Storybook",
  "GIT",
];

const WordCloud = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleMouseEnter = (word) => {
    setHoveredWord(word);
  };

  const handleMouseLeave = () => {
    setHoveredWord(null);
  };

  return (
    <div className="competence-container">
      <h1>Competence</h1>
      <div className="word-cloud">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word ${
              hoveredWord ? (hoveredWord === word ? "hovered" : "faded") : ""
            }`}
            onMouseEnter={() => handleMouseEnter(word)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCloud;
