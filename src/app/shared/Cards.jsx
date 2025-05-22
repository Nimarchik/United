import styles from '../components/styles/App.module.css'
import { Link } from 'react-router-dom'
import useLangChange from '../pages/LangChange'

export const Cards = ({ cards }) => {

	return (
		<>
			<div className={styles.servicesGamesListGame}>
				{cards.map(items => (
					<Link
						to={`${items.downloadLink}`}
						id={items.id}
						key={items.id}
						state={{ items }}
						className={styles.programsForGameListItem}
					>
						<img
							className={styles.programsForGameListItemImg}
							src={items.imgCard}
							alt=''
						/>

						<div className={styles.programsForGameListItemBLock}>
							<h1 className={styles.programsForGameListItemTitle}>
								{items.title}
							</h1>
							<div className={styles.programsForGameListItemBLockGroup}>
								<p className={styles.programsForGameListItemBLockSub}>
									{useLangChange(items.subGenre)}
								</p>
								<p className={styles.programsForGameListItemBLockSubAr}>
									<span
										className={styles.programsForGameListItemBLockSubArSpan}
									>
										{'>'}
									</span>
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}
