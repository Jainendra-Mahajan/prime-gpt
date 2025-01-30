import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Header from "../Header";
import { Provider } from "react-redux";
import React from "react";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

it("Should load the Website Logo on Header", () => {
    //render the element
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //find the image element
    const imageElement = screen.getByRole("img");

    //assertion
    expect(imageElement).toBeInTheDocument();

})