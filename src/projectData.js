import react from "react";
import { GiMonsteraLeaf } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

export const projectData = [
  {
    title: "The Thymely Cook",
    img: <GiMonsteraLeaf style={{ color: "green" }} />,
    content:
      "Android and iOS mobile app that allows users to scan their groceries into a virtual fridge and then to search for recipes based on those ingredients.",
    github: "https://github.com/capstoneTeamPudding/pudding",
    youtube: "https://www.youtube.com/watch?v=HmM-4zlFmo4",
    color: "#625693",
  },
  {
    title: "The Green House",
    img: <GiMonsteraLeaf style={{ color: "green" }} />,
    content:
      "E-commerce website that helps shoppers discover more thant 100 indoor plants for the small-space Gardener.",
    github: "https://github.com/2111-pellow/2111-grace-shopper",
    color: "#d55c64",
  },
  {
    title: "Your Yoga",
    img: <GrYoga style={{ color: "blue" }} />,
    content:
      "Web app that teaches users the basics of yoga. This project is currently in development!",
    github: "https://github.com/annmarecki/youryoga",
    color: "#e39128",
  },
];
