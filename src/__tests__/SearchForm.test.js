import React from "react";
import { render,screen,fireEvent} from "@testing-library/react";
import * as ApiService from "../Services/results";
import {data} from "../__mock__/mock";
import AppContainer from "../components/AppContainer";

jest.mock("../Services/results.js");


it("display search results",async ()=>{

    /*Mocking API with response */
    ApiService.getResults.mockResolvedValueOnce({data:data});

    /*Rendering Component */
    render(<AppContainer></AppContainer>);

    /*Triggering input and click event */
    const inputFeild = screen.getByTestId("searchkeyword");
    expect(inputFeild).toBeInTheDocument();
    fireEvent.change(inputFeild,{'target':{'value':'dogs'}});

    const submitBtn = screen.getByTestId('go');
    fireEvent.click(submitBtn);

    /* Spying API Call and its parameter */
    expect(ApiService.getResults).toHaveBeenCalledTimes(1);
    expect(ApiService.getResults).toHaveBeenCalledWith('dogs');


    /* Checking response */
    const listholder = await screen.findByTestId("listholder");
    expect(listholder).toBeInTheDocument();
    const listitem = await screen.findAllByTestId("listitem");
    expect(listitem.length).toBeGreaterThan(1);
})

it("display error message",async ()=>{

    /*Mocking API with empty response */
    ApiService.getResults.mockResolvedValueOnce({data:{data:[]}});

    /*Rendering Component */
    render(<AppContainer></AppContainer>);

    /*Triggering input and click event */
    const inputFeild = screen.getByTestId("searchkeyword");
    expect(inputFeild).toBeInTheDocument();
    fireEvent.change(inputFeild,{'target':{'value':'dogs'}});
    const submitBtn = screen.getByTestId('go');
    fireEvent.click(submitBtn);

     /* Checking error response */
    expect(ApiService.getResults).toHaveBeenCalledTimes(1);
    expect(ApiService.getResults).toHaveBeenCalledWith('dogs');
    const errorsMsg = await screen.findByTestId("errormsg");
    expect(errorsMsg).toBeInTheDocument();
})