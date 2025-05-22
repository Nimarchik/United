import { Link } from 'react-router-dom'
import styles from '../../components/styles/App.module.css'
import { useLocation } from 'react-router-dom'
import useLangChange from '../LangChange'
import { useEffect, useState } from 'react'
import VoiceChat from '../../shared/VoiceChat'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'

const ServicesGamePreview = () => {
	const location = useLocation()
	const [items, setItems] = useState(location.state?.items || [])

	useEffect(() => {
		if (location.state && location.state.items) {
			setItems(location.state.items)
		}
		localStorage.getItem('value')
	}, [location.state])

	return (
		<>
			<main className={styles.main}>
				<section className={styles.sectionPriview}>
					<div className={styles.previewBlock}>
						<img
							className={styles.imgPreview}
							src={useLangChange(items.img)}
							alt=''
						/>
						<div className={styles.container}>
							<p className={styles.servSubPreview}>
								{useLangChange(items.subGenre)}</p>
							<h1 className={styles.previewTitle}>{items.title}</h1>
							<ul className={styles.previewListBtn}>
								<li className={styles.previewListItem}>
									<Link className={styles.previewLink} to={items.downloadLink}>
										{useLangChange('previewLinkDown')}
									</Link>
								</li>
								<li className={styles.previewListItem}>
									<Link className={styles.previewLink} to={items.instruction}>
										{useLangChange('previewLinkInst')}
									</Link>
								</li>
								<li className={styles.previewListItem}>
									<Link className={styles.previewLink}>
										{useLangChange('previewLinkTeame')}
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className={styles.systemsReq}>
						<div className={styles.container}>
							<ul className={styles.systemsReqList}>
								<li className={styles.systemsReqListItem}>
									<p className={styles.playres}>
										{useLangChange(items.players)}
									</p>
									<p className={styles.playresText}>
										{useLangChange('playersName')}
									</p>
								</li>
								{/* <li className={styles.systemsReqListItem}></li> */}
								<li className={styles.systemsReqListItem}>
									<p className={styles.item}>{useLangChange(items.item)}</p>
									<p className={styles.itemText}>{useLangChange('size')}</p>
								</li>
								<li className={styles.systemsReqListItem}>
									<p className={styles.feedback}>{items.feedback}</p>
									<p className={styles.feedbackText}>{useLangChange('komm')}</p>
								</li>
							</ul>
						</div>
					</div>

					<div className={styles.trailer}>
						<div className={styles.container}>
							<div className={styles.trailerCont}>
								<div className={styles.trailerContText}>
									<h1 className={styles.trailerContTitle}>
										{useLangChange(items.title)}
									</h1>
									<p className={styles.trailerContSub}>{useLangChange(items.descriptionKey)}</p>
								</div>
								<iframe
									width='756'
									height='425'
									className={styles.iframe}
									src={items.videos}
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</section>
				<VoiceChat />
				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default ServicesGamePreview
