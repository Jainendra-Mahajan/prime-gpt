import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, should, test } from "vitest";
import Login from "../Login"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Browse from "../Browse";

it("Should load the login / Signup form", () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Login />
            </Provider>
        </BrowserRouter>)

    const getFormElement = screen.getByTestId("login-form");

    //Assertion
    expect(getFormElement).toBeInTheDocument();

})

it("should load the Test Login Button", () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Login />
            </Provider>
        </BrowserRouter>

    )

    const testButton = screen.getByRole("button", { name: "Login with Test Credentials" });

    expect(testButton).toBeInTheDocument();
})

it("Should Load the test credentials form input fields", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Login />
            </Provider>
        </BrowserRouter>
    )

    const testCredentialButton = screen.getByRole("button", { name: "Login with Test Credentials" });
    fireEvent.click(testCredentialButton)

    const emailInput = await screen.findByTestId("email-input");
    console.log(emailInput.value);

    expect(emailInput.value).toBe("prime@prime.com")
})


it("Should show Browse page after login", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Login />
                <Browse />
            </Provider>
        </BrowserRouter>
    )

    //clicked the test credentials button
    const testCredentialButton = screen.getByRole("button", { name: "Login with Test Credentials" });
    fireEvent.click(testCredentialButton)

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const videoContainer = await screen.findByTestId("video-container")

    expect(videoContainer).toBeInTheDocument();
})