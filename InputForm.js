import React from 'react'

function InputForm(props) {
    return (
        <div className='wrapper'>
            <form onSubmit={props.editSUbmitHandler}>
                <input
                    placeholder='Edit Task'
                    onChange={(e) => props.dummyInputHandler(props.edit)}
                    defaultValue={props.edit.taskName}
                />
                <button type='submit'>Update</button>
            </form>

        </div>
    )
}

export default InputForm
