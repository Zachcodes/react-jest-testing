import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Todos from "./components/Todos";
import axios from 'axios'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders a list of Todos", async () => {
  const todos = [{
    id: 1,
    title: 'Todo 1'
  },
  {
      id: 2,
      title: 'Todo 2'
  }
];

  jest.spyOn(axios, "get").mockImplementation(() =>
    Promise.resolve({
      data: todos
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Todos />, container);
  });

  expect(container.textContent).toContain(todos[0].title);

});