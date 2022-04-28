import React from "react";
import { render, screen } from "@testing-library/react";
import { data } from "../__mock__/mock";
import ResultsContainer from "../components/ResultContainer";

jest.mock("../Services/results.js");

it("api test", () => {
  render(
    <ResultsContainer
      handleItemClick={() => {}}
      currentItems={data.data}
    ></ResultsContainer>
  );

  const inputFeild = screen.getByTestId("listholder");
  expect(inputFeild).toBeInTheDocument();
});
