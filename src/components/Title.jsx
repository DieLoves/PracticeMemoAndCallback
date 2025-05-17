import { memo } from 'react'

export default memo(({ hooks, resetCounter }) => {
	console.log('Title render')
	const { firstHook, secondHook } = hooks

	return (
		<>
			<h1>
				React.memo | {firstHook} | {secondHook}
			</h1>
			{/* Bad practice? */}
			<button onClick={resetCounter}>Reset!</button>
		</>
	)
})

// export default memo(({ firstHook, secondHook }) => {
// 	console.log('Title render')

// 	return (
// 		<>
// 			<h1>
// 				React.memo | {firstHook} | {secondHook}
// 			</h1>
// 		</>
// 	)
// })
