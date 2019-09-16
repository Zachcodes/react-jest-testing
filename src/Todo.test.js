import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Todo from './components/Todo'

let container = null;
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null;
})

it('Renders todos', async () => {
    const todo = 
        {
        id: 1,
        title: 'Testing'
    }

    await act(async () => {
        render(<Todo {...todo}/>, container)
    })

    expect( container.textContent).toContain(todo.title)
}) 