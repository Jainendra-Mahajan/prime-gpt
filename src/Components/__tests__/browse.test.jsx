import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";
import appStore from "../../utils/appStore";
import Browse from "../Browse";

it("Should load the Movie Catogory Type", async () => {
    render(

        <BrowserRouter >
            <Provider store={appStore}>
                <Browse />
            </Provider>
        </BrowserRouter>
    )
    const categoryHeading = await screen.findByRole("heading", { name: /Trending In India/i })

    expect(categoryHeading).toBeInTheDocument();
})