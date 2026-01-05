import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();
export const TodoProvider = ({children}) =>{
    const [todos,setTodos] =useState([
        { id: '1', text: 'Học React Navigation', completed: false },
        { id: '2', text: 'Làm Todo App đẹp', completed: false },
        { id: '3', text: 'Ngủ sớm hôm nay', completed: true },
    ]);

    const addTodo = (text) =>{
        if(!text.trim()) return ;
        const newTodo = {
            id: uuidv4,
            text: text.trim(),
            completed: false,
        };
        setTodos(prev=> [...prev,newTodo]);
    }

    const toggleTodo = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value ={{todos,addTodo,toggleTodo,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export const useTodo = () => useContext(TodoContext);