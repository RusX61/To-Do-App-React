import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'

const data = [
	{
		id: '1level',
		title: 'Делаем ToDo List приложение',
		isCompleted: true,
	},
	{
		id: '2level',
		title: 'Добавляем новые фичи',
		isCompleted: true,
	},
	{
		id: '3level',
		title: 'Добавляем Backend',
		isCompleted: false,
	},
	{
		id: '4level',
		title: 'Добавляем БД',
		isCompleted: false,
	},
	{
		id: '5level',
		title: 'Инфраструктура',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>To-Do List</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}

export default Home
