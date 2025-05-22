import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import styles from './app/components/styles/App.module.css'
import Header from './app/shared/Header'
import Footer from './app/shared/Footer'
import useLangChange from './app/pages/LangChange'
import { useEffect } from 'react'
import i18n from 'i18next'

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



	const AppWrapper = ({ children }) => {
		const navigate = useNavigate();
		const location = useLocation();

		useEffect(() => {
			const storedLang = localStorage.getItem('value') || 'uk';
			const pathParts = location.pathname.split('/').filter(Boolean);

			if (!['uk', 'en'].includes(pathParts[0])) {
				navigate(`/${storedLang}${location.pathname}`, { replace: true });
			}
			if (i18n.language !== storedLang) {
				i18n.changeLanguage(storedLang);
			}
		}, [location.pathname, navigate]);

		return children;
	};

	return (
		<>
			<div className={styles.wrapper}>
				<AppWrapper>
					<Header />
					{transitions((style, location) => (
						<animated.div className={styles.animated} style={style}>
							<Outlet location={location} />
						</animated.div>
					))}
					<Footer t={useLangChange} />
				</AppWrapper>
			</div>
		</>
	)
}

export default App
