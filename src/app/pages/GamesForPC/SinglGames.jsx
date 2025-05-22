import { Link, useParams } from 'react-router-dom';
import { SinglGamesBD } from '../../../../public/SinglGame/SinglGameBD';
import styles from '../../components/styles/App.module.css'
import { SinglGamePreviewCard } from '../../shared/SInglGamePreviewCard';
import useLangChange from '../LangChange';

// PICTURES
import comm from '../../components/assets/SinglGame/comm.png'
import NewsEvents from '../../shared/NewsEvents';
import Helps from '../../shared/Helps';
import StartGame from '../UI/StartGame';





const SinglGames = () => {
	const value = localStorage.getItem('value') || 'uk'


	return (
		<>
			<main className={styles.main}>
				<section className={styles.singlGames}>
					<div className={styles.container}>
						<div className={styles.singlGamesInner}>
							<h1 className={styles.singlGamesInnerTitle}>
								{useLangChange('singlGamesInnerTitle')}
							</h1>
							<p className={styles.singlGamesInnerSub}>
								{useLangChange('singlGamesInnerSub')}
							</p>

							<SinglGamePreviewCard props={SinglGamesBD} lang={value} />
						</div>
					</div>
				</section>

				<section className={styles.SinglGamesBlock}>
					<Link className={styles.SinglGamesBlockLink}>
						<div className={styles.container}>
							<div className={styles.SinglGamesBlockLinkBLocks}>
								<img src={comm} alt="" className={styles.SinglGamesBlockLinkImg} />
								<div className={styles.SinglGamesBlockLinkBLocksCont}>
									<h2 className={styles.SinglGamesBlockLinkBLocksTitle}>
										{useLangChange('SinglGamesBlockLinkBLocksTitle')}
									</h2>
									<p className={styles.SinglGamesBlockLinkBLocksSub}>
										{useLangChange('SinglGamesBlockLinkBLocksSub')}
									</p>
									<p className={styles.SinglGamesBlockLinkBLocksLink}>
										{useLangChange('SinglGamesBlockLinkBLocksLink')} {'>'}
									</p>
								</div>
							</div>
						</div>
					</Link>
				</section>

				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default SinglGames;