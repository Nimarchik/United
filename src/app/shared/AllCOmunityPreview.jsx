import styles from '../components/styles/App.module.css'
import { Link } from 'react-router-dom'
import useLangChange from '../pages/LangChange'

export const AllCOmunityPreview = ({ props }) => {
	return (
		<>
			<div className={styles.servicesGamesListGame}>
				{props.map(items => (
					<Link
						to={`/:l/Error`}
						id={items.id}
						key={items.id}
						state={{ items }}
						className={styles.newsInnerListItem}
					>
						<img
							className={styles.newsInnerListItemImg}
							src={items.imgCard}
							alt=''
						/>
						<div className={styles.newsInnerListItemContent}>
							<p className={styles.newsInnerListSubG}>
								{useLangChange(items.subGenre)}
							</p>
							<h6 className={styles.newsInnerListTitleG}>
								{useLangChange(items.title)}
							</h6>
							<div className={styles.newsInnerListFooter}>
								<p className={styles.newsInnerListFooterTime}>
									{useLangChange(items.data)}
								</p>
								<span className={styles.newsInnerListFooterHover}> {'>'}</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}
