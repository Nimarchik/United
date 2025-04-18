import styles from '../../components/styles/App.module.css'
import { servicesGamesCards } from '../../../../public/ServicesGames/ServicesGamesBD'
import { Link } from 'react-router-dom'
import useLangChange from '../LangChange'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'
import commGames from '../../components/assets/ServicesGame/commGames.png'
import { PreviewCards } from '../../shared/PreviewCards'

const SecvicesGames = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.servicesGames}>
					<div className={styles.container}>
						<h1 className={styles.servicesGamesTitles}>
							{useLangChange('servicesGamesTitles')}
						</h1>
						<p className={styles.servicesGamesSubs}>
							{useLangChange('servicesGamesSubs')}
						</p>
						<PreviewCards props={servicesGamesCards} />
					</div>
				</section>

				<section className={styles.communityGames}>
					<div className={styles.container}>
						<Link className={styles.communityGamesBlock}>
							<img
								className={styles.communityGamesBlockImg}
								src={commGames}
								alt=''
							/>
							<div className={styles.communityGamesBlockInner}>
								<h1 className={styles.communityGamesBlockTitle}>
									{useLangChange('communityGamesBlockTitle')}
								</h1>
								<p className={styles.communityGamesBlockText}>
									{useLangChange('communityGamesBlockText')}
								</p>
								<p className={styles.communityGamesBlockLink}>
									{useLangChange('communityGamesBlockLink')} {'>'}
								</p>
							</div>
						</Link>
					</div>
				</section>

				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default SecvicesGames
