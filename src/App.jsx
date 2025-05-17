import { useCallback, useMemo, useState } from 'react'
import CounterView from './components/CounterView'
import Title from './components/Title'
import delayedDouble from './utils/delayedDouble'

function App() {
	const [count, setCount] = useState(0)
	const [firstHook] = useState('useCallback')
	const [secondHook] = useState('useMemo')
	const [dark, setDark] = useState(false)

	const themeStyle = {
		backgroundColor: dark ? '#000' : '#242424',
	}
	const incrementCount = () => {
		setCount(count => count + 1)
	}

	const switchTheme = () => {
		setDark(dark => !dark)
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

	const doubleCount = useMemo(() => delayedDouble(count), [count])

	return (
		<div className='app' style={{ ...themeStyle }}>
			{/* <Title firstHook={firstHook} secondHook={secondHook} /> <-- No rerender! Value equals because they is primitive */}
			{/* <Title hooks={} /> <-- Rerender! Objects are compared by reference */}
			{/* <Title hooks={hooks} /> <-- Fix!) */}
			<Title hooks={hooks} resetCounter={resetCounter} />
			<CounterView count={doubleCount} />
			<button onClick={incrementCount}>Click</button>
			<br />
			<button style={{ margin: '20px 0 0' }} onClick={switchTheme}>
				Switch theme
			</button>
		</div>
	)
}

export default App
