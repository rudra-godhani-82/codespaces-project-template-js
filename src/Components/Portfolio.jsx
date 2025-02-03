import React from "react";

import image from "../images/mac.jpg";

const imageAltText = "laptop with chair";

const projectList = [
  {
    title:"Tip-Tap Editor",
    description:"a simple text editor with basic functionalities like bold, italic, underline, and strikethrough.all the functionalities are implemented using logic.",
    url:"https://tiptap-project.netlify.app/",
  },
  {
    title: "Ecommerce Website",
    description:
      "A simple e-commerce website with basic functionalities like add to cart, remove from cart, and clear cart. The website is built using JS and styled using  CSS.",
    url: "https://github.com/rudra-godhani-82/E_com-Web.git",
  },
  {
    title: "My Resume",
    description:
      " Created TDS Resume pdf file.Includes my experience and design abilities. ",
    url: "https://drive.google.com/file/d/1DFRVa_g_DZuK-4_uXWvVyz2Ubg-JkDXc/view?usp=sharing",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
