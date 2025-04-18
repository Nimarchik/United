import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'

// PICTURES
import asset from '../../components/assets/Parners/assets.png'
import pazl from '../../components/assets/Parners/pazl.png'
import arassa from '../../components/assets/Parners/arrasa.png'
import unite from '../../components/assets/Parners/unite.png'
import outs from '../../components/assets/Parners/outs.png'
import { useState } from 'react'
import All from '../../shared/Sections/All'
import SectionPreviewParters from '../../shared/SectionPreviewParters'
import { GameTekBD } from '../../../../public/ParnersProduct/GameTek/GameTekBD'
import { ProcatBD } from '../../../../public/ParnersProduct/Procats/ProcatBD'
import { ShopBD } from '../../../../public/ParnersProduct/Shop/ShopBD'
import { PreeBD } from '../../../../public/ParnersProduct/Pree/PreeBD'

const Parterres = () => {
	const [links, setLinks] = useState('all')

	const [props, api] = useSpring(() => ({
		from: { opacity: 1, transform: 'scale(1)' },
	}))

	const handleClick = link => {
		api.start({
			from: {
				opacity: 0,
				transform: 'scale(1.2)',
			},
			to: { opacity: 1, transform: 'scale(1)' },
		})
		setLinks(link)
	}

	return (
		<>
			<main className={styles.main}>
				<section className={styles.parters}>
					<div className={styles.container}>
						<div className={styles.partersInner}>
							<h1 className={styles.partersInnerTitle}>
								{useLangChange('partersInnerTitle')}
							</h1>
							<p className={styles.partersInnerSub}>
								{useLangChange('partersInnerSub')}
							</p>
						</div>
					</div>
				</section>
				<section className={styles.partersBlocks}>
					<div className={styles.container}>
						<div className={styles.partersBlocksPartners}>
							<img
								className={styles.partersBlocksPartnersImg}
								src={asset}
								alt=''
							/>
							<div className={styles.partersBlocksPartnersCont}>
								<h2 className={styles.partersBlocksPartnersContTitle}>
									{useLangChange('partersBlocksPartnersContTitle')}
								</h2>
								<p className={styles.partersBlocksPartnersContSub}>
									{useLangChange('partersBlocksPartnersContSub')}
								</p>
							</div>
						</div>
						<Link className={styles.partersBlocksNeParner}>
							<div className={styles.partersBlocksNeParnerCont}>
								<h3 className={styles.partersBlocksNeParnerContTitle}>
									{useLangChange('partersBlocksNeParnerContTitle')}
								</h3>
								<p className={styles.partersBlocksNeParnerContSub}>
									{useLangChange('partersBlocksNeParnerContSub')}
								</p>
								<p className={styles.partersBlocksNeParnerContLink}>
									{useLangChange('partersBlocksNeParnerContLink')} {'>'}
								</p>
							</div>
							<img
								className={styles.partersBlocksNeParnerImg}
								src={pazl}
								alt=''
							/>
						</Link>
					</div>
				</section>
				<section className={styles.favorits}>
					<div className={styles.container}>
						<div className={styles.favoritsInner}>
							<h1 className={styles.favoritsInnerTitle}>
								{useLangChange('favoritsInnerTitle')}
							</h1>
							<ul className={styles.favoritsInnerList}>
								<li className={styles.favoritsInnerItem}>
									<img
										className={styles.favoritsInnerItemImg}
										src={arassa}
										alt=''
									/>
									<p className={styles.favoritsInnerItemSub}>
										{useLangChange('favoritsInnerItemSubArassa')}
									</p>
								</li>
								<li className={styles.favoritsInnerItem}>
									<img
										className={styles.favoritsInnerItemImg}
										src={unite}
										alt=''
									/>
									<p className={styles.favoritsInnerItemSub}>
										{useLangChange('favoritsInnerItemSubUnite')}
									</p>
								</li>
								<li className={styles.favoritsInnerItem}>
									<img
										className={styles.favoritsInnerItemImg}
										src={outs}
										alt=''
									/>
									<p className={styles.favoritsInnerItemSub}>
										{useLangChange('favoritsInnerItemSubUniteOuts')}
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={styles.allParters}>
					<div className={styles.container}>
						<div className={styles.allPartersInner}>
							<h2 className={styles.allPartersInnerTitle}>
								{useLangChange('allPartersInnerTitle')}
							</h2>
							<ul className={styles.allPartersInnerList}>
								<li
									className={
										links !== 'all'
											? styles.allPartersInnerItem
											: styles.allPartersInnerItemActive
									}
								>
									<button
										onClick={() => handleClick('all')}
										className={styles.allPartersInnerItemLink}
									>
										{useLangChange('allPartersInnerItemLinkAll')}
									</button>
								</li>
								<li
									className={
										links !== 'gameTek'
											? styles.allPartersInnerItem
											: styles.allPartersInnerItemActive
									}
								>
									<button
										onClick={() => handleClick('gameTek')}
										className={styles.allPartersInnerItemLink}
									>
										{useLangChange('allPartersInnerItemLinkGameTek')}
									</button>
								</li>
								<li
									className={
										links !== 'procats'
											? styles.allPartersInnerItem
											: styles.allPartersInnerItemActive
									}
								>
									<button
										onClick={() => handleClick('procats')}
										className={styles.allPartersInnerItemLink}
									>
										{useLangChange('allPartersInnerItemLinkProcats')}
									</button>
								</li>
								<li
									className={
										links !== 'shop'
											? styles.allPartersInnerItem
											: styles.allPartersInnerItemActive
									}
								>
									<button
										onClick={() => handleClick('shop')}
										className={styles.allPartersInnerItemLink}
									>
										{useLangChange('allPartersInnerItemLinkShop')}
									</button>
								</li>
								<li
									className={
										links !== 'pree'
											? styles.allPartersInnerItem
											: styles.allPartersInnerItemActive
									}
								>
									<button
										onClick={() => handleClick('pree')}
										className={styles.allPartersInnerItemLink}
									>
										{useLangChange('allPartersInnerItemLinkPree')}
									</button>
								</li>
							</ul>
							<div className={styles.allPartersInnerPeview}>
								<animated.div className={styles.animated} style={props}>
									<ul className={styles.allPartersInnerPeviewList}>
										{links === 'all' && <All />}
										{links === 'gameTek' && (
											<SectionPreviewParters cards={GameTekBD} />
										)}
										{links === 'procats' && (
											<SectionPreviewParters cards={ProcatBD} />
										)}
										{links === 'shop' && (
											<SectionPreviewParters cards={ShopBD} />
										)}
										{links === 'pree' && (
											<SectionPreviewParters cards={PreeBD} />
										)}
									</ul>
								</animated.div>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.newPartners}>
					<div className={styles.container}>
						<div className={styles.newPartnersInner}>
							<h3 className={styles.newPartnersInnerTitle}>
								{useLangChange('newPartnersInnerTitle')}
							</h3>
							<p className={styles.newPartnersInnerSub}>
								{useLangChange('newPartnersInnerSub')}
							</p>
							<iframe
								className={styles.newPartnersInnerMaps}
								src='https://www.google.com/maps/d/embed?mid=1dkBWXQkZhzXGMxQpw0aDBJUZ7_BHGEQ&ehbc=2E312F'
							></iframe>
						</div>
					</div>
				</section>
				<section className={styles.newPartners}>
					<div className={styles.container}>
						<div className={styles.newPartnersInner}>
							<h1 className={styles.newPartnersTitle}>
								{useLangChange('newPartnersTitle')}
							</h1>
							<p className={styles.newPartnersSub}>
								{useLangChange('newPartnersSub')}
							</p>
							<button className={styles.newPartnersBtn}>
								{useLangChange('newPartnersBtn')}
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Parterres
