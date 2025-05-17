import { memo } from 'react'

export default memo(() => {
	console.log('Title render')

	return (
		<>
			<h1>React.memo | useCallback | useMemo</h1>
		</>
	)
})
