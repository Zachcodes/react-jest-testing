import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/todos')
            console.log('response', response)
            setTodos(response.data)
        })()
        
    }, [])

    return (
        <>
        {
            todos.map( t => {
                return <Todo key={t.id} {...t}/>
            })
        }
        </>
    )
    
}

export default Todos