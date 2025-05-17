import { useCallback, useMemo, useState } from 'react'
import './App.css'
import CounterView from './components/CounterView'
import Title from './components/Title'

function App() {
	const [count, setCount] = useState(0)
	const [firstHook] = useState('useCallback')
	const [secondHook] = useState('useMemo')

	const incrementCount = () => {
		setCount(count => count + 1)
	}

	// Rerender! Function resetCounter is recreating
	// const resetCounter = () => {
	// 	setCount(0)
	// }
	const resetCounter = useCallback(() => {
		setCount(0)
	}, [])

	// const hooks = { firstHook, secondHook }

	// Fix!)
	const hooks = useMemo(
		() => ({ firstHook, secondHook }),
		[firstHook, secondHook]
	)

	return (
		<>
			{/* <Title firstHook={firstHook} secondHook={secondHook} /> <-- No rerender! Value equals because they is primitive */}
			{/* <Title hooks={} /> <-- Rerender! Objects are compared by reference */}
			{/* <Title hooks={hooks} /> <-- Fix!) */}
			<Title hooks={hooks} resetCounter={resetCounter} />
			<CounterView count={count} />
			<button onClick={incrementCount}>Click</button>
		</>
	)
}

export default App
