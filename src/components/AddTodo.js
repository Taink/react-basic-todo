import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action'

function AddTodo({ ...actions }) {
    const [newTodo, updateNewTodo] = useState('');
    const handleAdd = () => {
        actions.addTodo(newTodo)
        updateNewTodo('')
    }
    const submitOnEnter = (e) => {
        if (e.keyCode !== 13) return

        e.preventDefault()
        document.querySelector('.add-todo').click()
    }

    return (
        <>
            <input
                type="text"
                onChange={e => updateNewTodo(e.target.value)}
                onKeyUpCapture={submitOnEnter}
                value={newTodo}
            />
            <button
                className="add-todo"
                onClick={handleAdd}
            >
                Add Todo
            </button>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo)
