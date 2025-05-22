import { useParams } from 'react-router'
import { GamesForAndroid } from '../../../../public/GamesForAndroid/GamesForAndroid'
import styles from '../../components/styles/App.module.css'
import Helps from '../../shared/Helps'
import NewsEvents from '../../shared/NewsEvents'
import { PreviewCards } from '../../shared/PreviewCards'
import useLangChange from '../LangChange'
import StartGame from '../UI/StartGame'

const GamesforAndroid = () => {
	const value = localStorage.getItem('value') || 'uk'

	
	return (
		<>
			<main className={styles.main}>
				<section className={styles.gamesForAnd}>
					<div className={styles.container}>
						<div className={styles.gamesForAndInner}>
							<h1 className={styles.gamesForAndInnerTitle}>
								{useLangChange('gamesForAndInnerTitle')}
							</h1>
							<p className={styles.gamesForAndInnerSub}>
								{useLangChange('gamesForAndInnerSub')}
							</p>
							<PreviewCards props={GamesForAndroid} lang={value}/>
						</div>
					</div>
				</section>
				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default GamesforAndroid
