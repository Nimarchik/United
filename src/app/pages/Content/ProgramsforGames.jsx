import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'
import { Cards } from '../../shared/Cards'
import { ProgramForGameBD } from '../../../../public/Cards/ProgramForGame/ProgramForGameBD'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'

const ProgramsforGames = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.programsForGame}>
					<div className={styles.container}>
						<div className={styles.programsForGameInner}>
							<h1 className={styles.programsForGameInnerTitle}>
								{useLangChange('programsForGameInnerTitle')}
							</h1>
							<p className={styles.programsForGameInnerSub}>
								{useLangChange('programsForGameInnerSub')}
							</p>

							<Cards cards={ProgramForGameBD} />
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

export default ProgramsforGames
