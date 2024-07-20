import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

import IndieIgnite from "../assets/images/IndieIgnite.png";
import BeforeTheStorm from "../assets/images/BeforeTheStorm.png";
import DebateCafe from "../assets/images/DebateCafe.png";
import MyTime from "../assets/images/MyTime.png";
import QuizBoi from "../assets/images/QuizBoi.png";
import AniName from "../assets/images/AniName.png";
// array of my projects utilizing the map function on the projects component
const Portfolio = () => {
  const projectsData = [
    {
      title: "Debate Cafe",
      image: DebateCafe,
      link: "https://github.com/CCUE96/Debate-Cafe",
    },
    {
      title: "Indie Ignite",
      image: IndieIgnite,
      link: "https://github.com/SpencerKlink/Indie-Ignite",
    },
    {
      title: "AniName",
      image: AniName,
      link: "https://github.com/mikef13x/project-1-null",
    },
    {
      title: "Before The Storm",
      image: BeforeTheStorm,
      link: "https://github.com/CCUE96/Before-The-Storm",
    },
    {
      title: "My Time",
      image: MyTime,
      link: "https://github.com/CCUE96/My-Day",
    },
    {
      title: "Quiz Boi 2.0",
      image: QuizBoi,
      link: "https://github.com/CCUE96/Quiz-Boi-2.0",
    },
  ];

  return (
    <>
      <Header />
      <Projects projectsData={projectsData} />
      <Footer />
    </>
  );
};

export default Portfolio;
