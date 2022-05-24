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
    status: "completed",
  },
  {
    title: "The GreenHouse",
    img: <GiMonsteraLeaf style={{ color: "green" }} />,
    content:
      "E-commerce website that helps shoppers discover more thant 100 indoor plants for the small-space Gardener.",
    github: "https://github.com/2111-pellow/2111-grace-shopper",
    youtube: null,
    status: "completed",
  },
  {
    title: "Your Yoga",
    img: <GrYoga style={{ color: "blue" }} />,
    content: "Web app that teaches users the basics of yoga",
    github: "https://github.com/annmarecki/youryoga",
    youtube: null,
    status: "Currently in development",
  },
];
