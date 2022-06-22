import {useState} from 'react'
function ToDoForm ({ addTask }) {
    const [userInput, setUserInput] = useState('')
    const handleSubmit = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChange = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
        console.log(userInput)
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
            value={userInput}
            type="text"
            onChange={event => setUserInput(event.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Введите новое дело..."
            className='input'
            />
            <button
            onClick={handleChange}
            className='btn-submit'
            >Добавить</button>
        </form>
    )
}
export default ToDoForm