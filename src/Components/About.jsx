import React from "react";

import image from "../images/about-background.jpg";

const imageAltText = "laptop with tea cup and plant";

const description =
  "I'm a Web Developer student studying at P.P SAVANI University,dedicated to buidling dynamic web application.I enjoy creating unique and simplistic user-friendly website in creative ways.";

const skillsList = [
  "Web development",
  "User experience",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git & GitHub",
  "JAVA",
  "C",
  "Upwork Freelancer",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Web experience I continually look for new and better ways to make tech accessible by all. I am always looking for new opportunities to learn and grow. I am a quick learner and a team player who is always ready to take on new challenges. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "lightgray",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
