import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="box-border flex items-center justify-center h-screen">
      <main className="font-IBMfont m-[40] w-[450px] h-auto border-[4px] rounded-[5px] border-black App">
        <Avatar />
        <div>
          <Intro />
          <SkillList />
        </div>
      </main>
    </div>
  );
}

function Avatar() {
  return <img src="/watsap.jpeg" alt="pp" className="w-full block" />;
}

function Intro() {
  return (
    <div className="">
      <h1 className="font-bold text-3xl mt-5 mx-5">Haluk Tutuncu</h1>
      <p className="px-[20px] py-3 text-l">
        Front-End Developer and part-time lawyer. When not coding, I like to
        travel and spend time with my friends.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className=" list-none flex flex-wrap gap-[8px] mt-5 mb-4 mx-3">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div
      className={`py-[2px] px-[12px] rounded-[5px] flex items-center gap-[8px] font-medium `}
      style={{ backgroundColor: color }}
    >
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
