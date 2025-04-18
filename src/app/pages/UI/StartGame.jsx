import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'

const StartGame = () => {
	return (
		<>
			<section className={styles.startGame}>
				<div className={styles.container}>
					<div className={styles.startGameInner}>
						<h1 className={styles.startGameTitle}>
							{useLangChange('startGameTitle')}
						</h1>
						<p className={styles.startGameSubtitle}>
							{useLangChange('startGameSubtitle')}
						</p>
						<button className={styles.startGameBtn}>
							{useLangChange('innerContentBtn')}
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default StartGame
