import physicianWhite from "../../files/Images/doc-white.png";
import physicianBlue from "../../files/Images/doc-blue.png";
import hospitalWhite from "../../files/Images/hos-white.png";
import hospitalBlue from "../../files/Images/hos-blue.png";
import pathLabWhite from "../../files/Images/path-lab-white.png";
import pathLabBlue from "../../files/Images/path-lab-blue.png";
import opdWhite from "../../files/Images/opd-white.png";
import opdBlue from "../../files/Images/opd-blue.png";

export const cardsList = [
  {
    key: "physician",
    value: "physician",
    title: "Looking for a Doctor",
    image: physicianBlue,
    hoverImage: physicianWhite,
    background: "white",
    hoverBackground: "#4200FF",
    color: "black",
    hoverColor: "white",
  },
  {
    key: "opd",
    value: "opd",
    title: "Test from OPD",
    image: opdBlue,
    hoverImage: opdWhite,
    background: "white",
    hoverBackground: "#4200FF",
    color: "black",
    hoverColor: "white",
  },
  {
    key: "pathLabs",
    value: "pathLab",
    title: "Test from Path Lab",
    image: pathLabBlue,
    hoverImage: pathLabWhite,
    background: "white",
    hoverBackground: "#4200FF",
    color: "black",
    hoverColor: "white",
  },
  {
    key: "hospital",
    value: "hospital",
    title: "Book Hospital",
    image: hospitalBlue,
    hoverImage: hospitalWhite,
    background: "white",
    hoverBackground: "#4200FF",
    color: "black",
    hoverColor: "white",
  },
];

export const alertType = {
  success: "success",
  warning: "warning",
  error: "error",
  info: "info"
}