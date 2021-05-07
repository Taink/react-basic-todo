import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actionTypes'

const initialState = {
    allIds: [],
    allTodos: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload
            return {
                ...state,
                allIds: [...state.allIds, id],
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        content,
                        done: false,
                    },
                },
            }
        }
        case TOGGLE_TODO: {
            const { id } = action.payload
            return {
                ...state,
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        ...state.allTodos[id],
                        done: !state.allTodos[id].done,
                    },
                },
            }
        }
        case REMOVE_TODO: {
            const { id } = action.payload
            const allIds = state.allIds.filter((i) => i !== id)
            const { [id]: foo, ...allTodos } = state.allTodos
            return {
                ...state,
                allIds,
                allTodos,
            }
        }
    }
}
