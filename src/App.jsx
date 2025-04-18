import { Outlet, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import styles from './app/components/styles/App.module.css'
import Header from './app/shared/Header'
import Footer from './app/shared/Footer'
import useLangChange from './app/pages/LangChange'
import { useEffect } from 'react'


function App() {
	let location = useLocation()

	const transitions = useTransition(location, {
		from: {
			opacity: 0,
			transform: 'scale(0)',
			position: 'relative',
		},
		enter: {
			opacity: 1,
			transform: 'scale(1)',
		},
	})

	useEffect(() => {
		window.scroll(0, 0)
	})

	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				{transitions((style, location) => (
					<animated.div className={styles.animated} style={style}>
						<Outlet location={location} />
					</animated.div>
				))}
				<Footer t={useLangChange} />
			</div>
		</>
	)
}

export default App
