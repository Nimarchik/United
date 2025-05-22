import styles from '../components/styles/App.module.css'

import React, { useEffect, useRef } from 'react'
import Flickity from 'flickity'
import './../components/styles/_Flickyti.scss'
import { Link, useParams } from 'react-router-dom'

const YourComponentWithFlickity = ({ partners }) => {

	const { l: lang } = useParams()

	const flickityRef = useRef(null)

	let flkty // Объявляем экземпляр Flickity снаружи useEffect

	useEffect(() => {
		if (flickityRef.current) {
			// Убедитесь, что реф не пустой
			flkty = new Flickity(flickityRef.current, {
				cellAlign: 'left',
				contain: true,
				pageDots: true,
				wrapAround: false, // Опция для бесконечной прокрутки
			})
		}

		// Функция очистки для корректного уничтожения инстанса Flickity
		return () => {
			if (flkty && typeof flkty.destroy === 'function') {
				flkty.destroy()
			}
		}
	}, [])

	return (
		<div className={styles.sliderContainer} ref={flickityRef}>
			{partners.map(items => (
				<Link
					to={`/game-preview/${items.id}`}
					id={items.id}
					key={items.id}
					state={{ items }}
					className={styles.carouselCell}
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
	)
}

export default YourComponentWithFlickity
