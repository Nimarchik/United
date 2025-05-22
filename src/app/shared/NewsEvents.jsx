import { NewsBD } from '../../../public/NewsPictures/NewsBD'
import styles from '../components/styles/App.module.css'
import useLangChange from '../pages/LangChange'
import { Link } from 'react-router-dom'


const NewsEvents = () => {
	const value = localStorage.getItem('value') || 'uk'


	return (
		<>
			<section className={styles.news}>
				<div className={styles.container}>
					<div className={styles.newsInner}>
						<h6 className={styles.newsInnerTitle}>
							{useLangChange('newsInnerTitle')}
						</h6>
						<ul className={styles.newsInnerList}>
							{NewsBD.map((items, index) => (
								<li className={styles.newsInnerListItem} key={index}>
									<Link
										to={`/${value}/NewsPreview/${items.id}`}
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
												<span className={styles.newsInnerListFooterHover}>
													{'>'}
												</span>
											</div>
										</div>
									</Link>
								</li>
							))}
						</ul>
						<Link to={`/${value}/News`} className={styles.newsLink}>
							{useLangChange('newsLink')}
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default NewsEvents
