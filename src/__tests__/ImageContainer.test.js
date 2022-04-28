import React from "react";
import ReactDOM from "react-dom";
import ImageContainer from "../components/ImageContainer";
import { render, screen } from "@testing-library/react";
const data = {
    id: "toz7qXlLyHy9n8KfKO",
    images: {
      original_still: {
        url: "https://media2.giphy.com/media/toz7qXlLyHy9n8KfKO/giphy_s.gif",
        hash: "12312",
      },
    },
  };

it("renders without crashing", () => {
  render(
    <ImageContainer item={data} clickHandler={() => {}}></ImageContainer>
  );
});

it("renders the image", () => {
  render(<ImageContainer item={data} clickHandler={() => {}}></ImageContainer>);
  const ImageContent = screen.getByTestId("image");
  expect(ImageContent).toBeInTheDocument();
});
