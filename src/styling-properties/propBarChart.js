import { rgba } from "polished";

const colorTitle = rgba("white", 0.57);
const colorContent = rgba("white", 0.96);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Setting an id to this theme
  id: "dark",

  // Font Family
  fontFamily: "Poppins",

  // Properties of a Card
  cardHeight: "30rem",
  cardWidth: "26.6rem",
  borderRadius: "1rem",
  colorCardBackground: "#1B1B1B",

  // Properties of Card Title
  cardTitleFontSize: "2rem",
  cardTitlePaddingTop: "2rem",
  cardTitlePaddingRight: "2rem",
  cardTitlePaddingBottom: "2rem",
  cardTitlePaddingLeft: "2rem",
  colorTitle: colorTitle,

  // Properties of Card Content (Text other than title)
  cardContentFontSize: "2em",
  colorContent: colorContent,
};