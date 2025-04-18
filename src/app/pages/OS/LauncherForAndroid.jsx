import styles from '../../components/styles/App.module.css'
import { Link } from 'react-router-dom'
import useLangChange from '../LangChange'

// PICTURES
import img1 from '../../components/assets/LauncherForPc/img1.png'
import img2 from '../../components/assets/LauncherForPc/img2.png'
import img3 from '../../components/assets/LauncherForPc/img3.png'
import img4 from '../../components/assets/LauncherForPc/img4.png'
import img5 from '../../components/assets/LauncherForPc/img5.png'
import img6 from '../../components/assets/LauncherForPc/img6.png'
import img7 from '../../components/assets/LauncherForPc/img7.png'
import img8 from '../../components/assets/LauncherForPc/img8.png'
import imgRight1 from '../../components/assets/LauncherForPc/imgRight1.png'
import imgRight2 from '../../components/assets/LauncherForPc/imgRight2.png'
import imgRight3 from '../../components/assets/LauncherForPc/imgRight3.png'
import imgRight4 from '../../components/assets/LauncherForPc/imgRight4.png'
import imgRight5 from '../../components/assets/LauncherForPc/imgRight5.png'
import imgRight6 from '../../components/assets/LauncherForPc/imgRight6.png'
import imgRight7 from '../../components/assets/LauncherForPc/imgRight7.png'
import imgRight8 from '../../components/assets/LauncherForPc/imgRight8.png'
import imgRight9 from '../../components/assets/LauncherForPc/imgRight9.png'
import picAnd from '../../components/assets/LauncherForAnd/iconAndroid.svg'
import imgAndroid from '../../components/assets/LauncherForAnd/groupImg.png'
import bigColect from '../../components/assets/LauncherForAnd/bigColect.svg'
import phone from '../../components/assets/LauncherForPc/phone.png'
import servGameAnd from '../../components/assets/LauncherForAnd/servGameAnd.svg'

import mineAnd from '../../components/assets/LauncherForAnd/mine.png'
import sampMobile from '../../components/assets/LauncherForAnd/samp.png'
import losAngees from '../../components/assets/LauncherForAnd/losAngeles.png'
import specForce from '../../components/assets/LauncherForAnd/skill.png'

import bombSquad from '../../components/assets/LauncherForAnd/bomb.png'

import polifyilde from '../../components/assets/LauncherForAnd/polifyilde.png'
import VoiceChat from '../../shared/VoiceChat'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'

const LauncherForAndroid = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.launchPC}>
					<div className={styles.lanchPcImgPakLeft}>
						<img className={styles.img1} src={img1} alt='' />
						<img className={styles.img2} src={img2} alt='' />
						<img className={styles.img3} src={img3} alt='' />
						<img className={styles.img4} src={img4} alt='' />
						<img className={styles.img5} src={img5} alt='' />
						<img className={styles.img6} src={img6} alt='' />
						<img className={styles.img7} src={img7} alt='' />
						<img className={styles.img8} src={img8} alt='' />
					</div>
					<div className={styles.container}>
						<div className={styles.launchPcInner}>
							<img className={styles.imgWindow} src={picAnd} alt='' />
							<p className={styles.launchPcName}>LAUNCHER FOR ANDROID</p>
							<h1 className={styles.launchPcTitle}>Unite Gaming Launcher</h1>
							<p className={styles.launchPcSub}>
								{useLangChange('launchAndSub')}
							</p>
							<div className={styles.launchPcBlock}>
								<button className={styles.launchPcBlockBtn1}>
									{useLangChange('launchAndBlockBtn1')}
								</button>
								<button className={styles.launchPcBlockBtn2}>
									{useLangChange('launchAndBlockBtn2')}
								</button>
								<button className={styles.launchPcBlockBtn3}>
									{useLangChange('launchAndBlockBtn3')}
								</button>
							</div>
						</div>
					</div>
					<div className={styles.lanchPcImgPakRight}>
						<img className={styles.imgRight1} src={imgRight1} alt='' />
						<img className={styles.imgRight2} src={imgRight2} alt='' />
						<img className={styles.imgRight3} src={imgRight3} alt='' />
						<img className={styles.imgRight4} src={imgRight4} alt='' />
						<img className={styles.imgRight5} src={imgRight5} alt='' />
						<img className={styles.imgRight6} src={imgRight6} alt='' />
						<img className={styles.imgRight7} src={imgRight7} alt='' />
						<img className={styles.imgRight8} src={imgRight8} alt='' />
						<img className={styles.imgRight9} src={imgRight9} alt='' />
					</div>
				</section>

				<section className={styles.sectionItems}>
					<div className={styles.container}>
						<Link className={styles.sectionInner}>
							<div className={styles.sectionAndBlock}>
								<h1 className={styles.sectionAndTitle}>
									{useLangChange('sectionAndTitle')}
								</h1>
								<p className={styles.sectionAndSub}>
									{useLangChange('sectionAndSub')}
								</p>
							</div>
							<img className={styles.sectionAndImg} src={imgAndroid} alt='' />
						</Link>
						<Link className={styles.bigColectionsContent}>
							<img className={styles.bigColectionsImg} src={bigColect} alt='' />
							<div className={styles.bigColectionsBlock}>
								<h1 className={styles.bigColectionsTitle}>
									{useLangChange('bigColectionsTitle')}
								</h1>
								<p className={styles.bigColectionsSub}>
									{useLangChange('bigColectionsSub')}
								</p>
								<p className={styles.bigColectionsLink}>
									{useLangChange('bigColectionsLink')} {'>'}
								</p>
							</div>
						</Link>
						<Link className={styles.sectionInnerServ}>
							<div className={styles.servUnite}>
								<h4 className={styles.servUniteTitle}>
									{useLangChange('servUniteTitle')}
								</h4>
								<p className={styles.servUniteSub}>
									{useLangChange('servUniteSub')}
								</p>
								<p className={styles.servUniteLink}>
									{useLangChange('hamachiLink')}
									{'>'}
								</p>
							</div>
							<img className={styles.servUniteImg1} src={servGameAnd} alt='' />
						</Link>
						<Link className={styles.sectionInnerEvents}>
							<div className={styles.events}>
								<h5 className={styles.eventsTitle}>
									{useLangChange('eventsTitle')}
								</h5>
								<p className={styles.eventsSub}>{useLangChange('eventsSub')}</p>
								<p className={styles.eventsLink}>
									{useLangChange('eventsLink')}
									{'>'}
								</p>
							</div>
							<img className={styles.eventsImg} src={phone} alt='' />
						</Link>
					</div>
				</section>

				<section className={styles.popularGameAnd}>
					<div className={styles.container}>
						<h1 className={styles.popularGameAndTitle}>
							{useLangChange('popularGameAndTitle')}
						</h1>
						<p className={styles.popularGameAndSub}>
							{useLangChange('popularGameAndSub')}
						</p>
						<ul className={styles.popularGameAndList}>
							<li className={styles.popularGameAndListItem}>
								<Link>
									<img
										className={styles.popularGameAndListImg}
										src={mineAnd}
										alt=''
									/>
									<div className={styles.popularGameAndBlock}>
										<p className={styles.popularGameAndListSub}>
											{useLangChange('popularGameItemSubShut')}
										</p>
										<h2 className={styles.popularGameAndListTitle}>
											Minecraft PE
										</h2>
									</div>
								</Link>
							</li>
							<li className={styles.popularGameAndListItem}>
								<Link>
									<img
										className={styles.popularGameAndListImg}
										src={sampMobile}
										alt=''
									/>
									<div className={styles.popularGameAndBlock}>
										<p className={styles.popularGameAndListSub}>
											{useLangChange('popularGameItemSubHor')}
										</p>
										<h2 className={styles.popularGameAndListTitle}>
											SAMP mobile
										</h2>
									</div>
								</Link>
							</li>
							<li className={styles.popularGameAndListItem}>
								<Link>
									<img
										className={styles.popularGameAndListImg}
										src={losAngees}
										alt=''
									/>
									<div className={styles.popularGameAndBlock}>
										<p className={styles.popularGameAndListSub}>
											{useLangChange('popularGameItemSubShut')}
										</p>
										<h2 className={styles.popularGameAndListTitle}>
											Los Angeles Crime
										</h2>
									</div>
								</Link>
							</li>
							<li className={styles.popularGameAndListItem}>
								<Link>
									<img
										className={styles.popularGameAndListImg}
										src={specForce}
										alt=''
									/>
									<div className={styles.popularGameAndBlock}>
										<p className={styles.popularGameAndListSub}>
											{useLangChange('popularGameItemSubStr')}
										</p>
										<h2 className={styles.popularGameAndListTitle}>
											Special force 2
										</h2>
									</div>
								</Link>
							</li>
							<li className={styles.popularGameAndListItem}>
								<Link>
									<img
										className={styles.popularGameAndListImgBomb}
										src={bombSquad}
										alt='{bombSquad}'
									/>
									<div className={styles.popularGameAndBlock}>
										<p className={styles.popularGameAndListSub}>
											{useLangChange('popularGameItemSubShut')}
										</p>
										<h2 className={styles.popularGameAndListTitle}>
											Bomb squad
										</h2>
									</div>
								</Link>
							</li>
							<li className={styles.popularGameAndListItem}>
								<Link>
									<img
										className={styles.popularGameAndListImg}
										src={polifyilde}
										alt='{polifyilde}'
									/>
									<div className={styles.popularGameAndBlock}>
										<p className={styles.popularGameAndListSub}>
											{useLangChange('popularGameItemSubHor')}
										</p>
										<h2 className={styles.popularGameAndListTitle}>
											Polifyeld
										</h2>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</section>

				<VoiceChat />
				<NewsEvents/>
				<Helps/>
			</main>
		</>
	)
}

export default LauncherForAndroid
