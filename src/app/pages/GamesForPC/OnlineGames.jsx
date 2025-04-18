import { Link } from 'react-router-dom'
import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'
import { PreviewCards } from '../../shared/PreviewCards'
import { OnlineGamesBD } from '../../../../public/OnlineGamesPictures/OnlineGamesBD'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'
import ServPicture from '../../components/assets/Home/groupGamePictures.png'

const OnlineGames = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.servicesGames}>
					<div className={styles.container}>
						<h1 className={styles.servicesGamesTitles}>
							{useLangChange('olineGameInnerTitle')}
						</h1>
						<p className={styles.servicesGamesSubs}>
							{useLangChange('olineGameInnerSub')}
						</p>
						
            <PreviewCards props={OnlineGamesBD} />
					</div>
				</section>

				<section className={styles.communityGames}>
					<div className={styles.container}>
						<div className={styles.innerServicesGame}>
							<Link to={`/:l/services-game`}>
								<div className={styles.groupContentServices}>
									<div className={styles.servBlockTitle}>
										<h4 className={styles.servTitle}>
											{useLangChange('servTitle')}
										</h4>
										<p className={styles.servSubtitle}>
											{useLangChange('servSubtitle')}
										</p>
									</div>
									<div className={styles.servContent}>
										<img
											className={styles.servPictures}
											src={ServPicture}
											alt=''
										/>
									</div>
								</div>

								<p className={styles.servLink}>
									{useLangChange('servLink')}{' '}
									<span className={styles.servArrow}>{'>'}</span>
								</p>
							</Link>
						</div>
					</div>
				</section>

				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default OnlineGames
