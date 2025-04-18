import styles from '../components/styles/App.module.css'
import useLangChange from '../pages/LangChange'

const SectionPreviewParters = ({ cards }) => {
	return (
		<>
				{cards.map(card => (
					<>
						<li className={styles.allPartersInnerPeviewItem} key={card.id}>
							<img
								src={card.logo}
								alt=''
								className={styles.allPartersInnerPeviewItemImg}
							/>
							<h1 className={styles.allPartersInnerPeviewItemTitle}>
								{useLangChange(card.title)}
							</h1>
							<ul className={styles.allPartersInnerPeviewItemList}>
								<li className={styles.allPartersInnerPeviewListItemListItem}>
									<img
										className={styles.allPartersInnerPeviewListItemListImg}
										src={card.gpsLogo}
										alt=''
									/>
									<p className={styles.allPartersInnerPeviewListItemListSub}>
										{useLangChange(card.gpsName)}
									</p>
								</li>
								<li className={styles.allPartersInnerPeviewListItemListItem}>
									<img
										className={styles.allPartersInnerPeviewListItemListImg}
										src={card.telLogo}
										alt=''
									/>
									<p className={styles.allPartersInnerPeviewListItemListSub}>
										{useLangChange(card.telName)}
									</p>
								</li>
								<li className={styles.allPartersInnerPeviewListItemListItem}>
									<img
										className={styles.allPartersInnerPeviewListItemListImg}
										src={card.todoLogo}
										alt=''
									/>
									<p className={styles.allPartersInnerPeviewListItemListSub}>
										{useLangChange(card.todoName)}
									</p>
								</li>
							</ul>
						</li>
					</>
				))}
		</>
	)
}

export default SectionPreviewParters
