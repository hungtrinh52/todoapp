import React, { createContext, useContext, useState } from 'react';


const TodoContext = createContext();
const generateId = () =>
    Date.now().toString() + Math.random().toString(36).substring(2);
export const TodoProvider = ({children}) =>{
    const [todos,setTodos] =useState([
        { id: '1', title: 'Học React Navigation',category:"Work",completed:false,startTime:"8:00",endTime:"10:00"},
        { id: '2', title: 'Làm Todo App', category:"Project", completed: false },
        { id: '3', title: 'Ngủ sớm hôm nay', completed: true },
    ]);

    const addTodo = ({title, category,date, startTime, endTime,priority,description}) =>{
        if(!title.trim()) return ;
        const newTodo = {
            id: generateId(),
            title: title.trim(),
            category,
            date,
            startTime,
            endTime,
            priority,
            description,
            completed: false
        };
       setTodos(prev =>[...prev,newTodo])
    }
    const updateTodo =(updateTodo)=>{
        setTodos(prev=>
        prev.map(todo=> todo.id===updateTodo.id?updateTodo:todo))
    }
    const getTodoById = (id) =>{
        return todos.find(t=> String(t.id) === String(id));
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
        <TodoContext.Provider value ={{todos,addTodo,toggleTodo,deleteTodo,updateTodo,getTodoById}}>
            {children}
        </TodoContext.Provider>
    )
}
export const useTodo = () => useContext(TodoContext);