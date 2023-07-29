import "./ProjectCarousel.css";
import { useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";

const projects = [
  {
    srcPath: "./assets/projects/members-only.png",
    description: `This project was created to showcase my acquired knowledge of Node, Express, Mongo and Pug. The goal of this project was to create a simple message board where people can sign up and enter passcodes to gain special priviledges.`,
    title: "Members Only",
    link: "https://github.com/JohnJohnCode/members-only",
    alt: "Screenshot of my project",
  },
  {
    srcPath: "./assets/projects/battleship.png",
    description: `This project is my remake of the classic game Battleship where the user plays against an AI. Players take turns in guessing the location of opponent's ships with the goal of sinking all of the ships. This project is written in React.`,
    title: "Battleship",
    link: "https://github.com/JohnJohnCode/battleship",
    alt: "Screenshot of my project",
  },
  {
    srcPath: "./assets/projects/TNW.jpg",
    description: `In this project I attempted to clone 'The Next Web' site and it's responsiveness. This project was written in plain HTML + CSS with the goal of practicing these and also to further my skills in making stuff responsive.`,
    title: "TNW clone",
    link: "https://github.com/JohnJohnCode/TNW-clone",
    alt: "Screenshot of my project",
  },
  {
    srcPath: "./assets/projects/weather-app.png",
    description: `In this project I have a go at making a website that displays weather information on the city of your choice. The goal of this project was to further my skills in working with APIs and React.`,
    title: "Weather App",
    link: "https://github.com/JohnJohnCode/weather-app",
    alt: "Screenshot of my project",
  },
  {
    srcPath: "./assets/projects/KBstore.png",
    description: `Keyboard Store is a Node, Express, Mongo and Pug app. The goal of this project was to create a library / store of sorts and the theme I have decided to go with, as a true gamer, was keyboards. A user is able to CRUD a keyboard, manufacturers of keyboards and keyboard categories.`,
    title: "Keyboard Store",
    link: "https://github.com/JohnJohnCode/keyboard-store",
    alt: "Screenshot of my project",
  },
  {
    srcPath: "./assets/projects/portfolio.png",
    description: `This project is the very site you're on! The goal was to present myself, my projects and tech stack. This portfolio was initialised with Vite and written in React.`,
    title: "Portfolio",
    link: "https://github.com/JohnJohnCode/portfolio",
    alt: "Screenshot of my project",
  },
];

const buttonStyles = {
  fontSize: '1.5rem',
  color: '#000000'
}

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    } else if (newIndex >= projects.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, key) => {
          return (
            <CarouselItem
              srcPath={project.srcPath}
              description={project.description}
              key={key}
              title={project.title}
              shadow={key === activeIndex ? true : false}
              link={project.link}
              alt={project.alt}
            />
          );
        })}
      </div>
      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined" style={buttonStyles}>arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {projects.map((_item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                  style={buttonStyles}
                >
                  {index === activeIndex
                    ? "radio_button_checked"
                    : "radio_button_unchecked"}
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined" style={buttonStyles}>arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
}

export default ProjectCarousel;
