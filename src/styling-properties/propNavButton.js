import { rgba } from "polished";

const colorTitle = rgba("white", 0.57);
const colorContent = rgba("white", 0.96);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Setting an id to this theme
  id: "dark",

  // Font Family
  fontFamily: "Poppins",

  // Properties of a button
  buttonHeight: "2.5rem",
  buttonWidth: "10rem",
  borderRadius: "1rem",
  colorCardBackground: "#1B1B1B",

  // Properties of Button Title
  buttonLabelFontSize: "1.1rem",
  colorTitle: colorTitle,

  // Properties of Card Content (Text other than title)
  cardContentFontSize: "2em",
  colorContent: colorContent,
};