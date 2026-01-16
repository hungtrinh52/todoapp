import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();
export const TodoProvider = ({children}) =>{
    const [todos,setTodos] =useState([
        { id: '1', title: 'Học React Navigation',category:"Work",completed:false,start:"8:00",end:"10:00"},
        { id: '2', title: 'Làm Todo App', category:"Project", completed: false },
        { id: '3', title: 'Ngủ sớm hôm nay', completed: true },
    ]);

    const addTodo = ({title, category,date, start, end,priority,description}) =>{
        if(!title.trim()) return ;
        const newTodo = {
            id: uuidv4(),
            title: title.trim(),
            category,
            completed: false,
            date,
            start,
            end,
            priority,
            description
        };
        navigation.goBack();
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