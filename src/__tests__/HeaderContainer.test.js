import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from "../components/HeaderContainer";
import {render,screen} from "@testing-library/react";

it('renders without crashing',()=>{
    render(<HeaderContainer></HeaderContainer>);
})

it('renders the title',()=>{
    render(<HeaderContainer></HeaderContainer>);
    const HeaderContent = screen.getByTestId('header');
    expect(HeaderContent).toBeInTheDocument();
    expect(HeaderContent).toHaveTextContent("Giphy App");
})