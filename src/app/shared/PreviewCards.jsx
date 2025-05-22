import styles from '../components/styles/App.module.css'
import { Link,  } from 'react-router-dom'


export const PreviewCards = ({ props }) => {

	return (
		<>
			<div className={styles.servicesGamesListGame}>
				{props.map(items => (
					<Link
						to={`/game-preview/${items.id}`}
						id={items.id}
						key={items.id}
						state={{ items }}
						className={styles.servicesGamesListGameItem}
					>
						<img
							className={styles.servicesGamesListGameItemImg}
							src={items.imgCard}
							alt=''
						/>

						<h1 className={styles.servicesGamesListGameItemTitle}>
							{items.title}
						</h1>
					</Link>
				))}
			</div>
		</>
	)
}
