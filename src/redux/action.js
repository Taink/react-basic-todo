import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

let nextTodo = 0

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodo,
        content,
    },
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    },
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {
        id,
    },
})
