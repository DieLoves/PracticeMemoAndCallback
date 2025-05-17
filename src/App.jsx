import { useState } from 'react'
import './App.css'
import CounterView from './components/CounterView'
import Title from './components/Title'

function App() {
	const [count, setCount] = useState(0)

	const incrementCount = () => {
		setCount(count => count + 1)
	}

	return (
		<>
			<Title />
			<CounterView count={count} />
			<button onClick={incrementCount}>Click</button>
		</>
	)
}

export default App
