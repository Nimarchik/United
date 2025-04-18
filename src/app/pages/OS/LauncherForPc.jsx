import useLangChange from '../LangChange'

import styles from '../../components/styles/App.module.css'
import Flickity from 'react-flickity-component'
import Helps from '../../shared/Helps'
import { servicesGamesCards } from './../../../../public/ServicesGames/ServicesGamesBD'
import { PreviewCards } from '../../shared/PreviewCards'
import { Link } from 'react-router-dom'

// Pictures
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
import picWin from '../../components/assets/LauncherForPc/picWin.svg'
import howItWork from '../../components/assets/LauncherForPc/howWorkPic.png'
import hamachiImg from '../../components/assets/LauncherForPc/hamachiImg.png'
import servUniteImg from '../../components/assets/LauncherForPc/servImg.png'
import phone from '../../components/assets/LauncherForPc/phone.png'
import gameDayImg from '../../components/assets/LauncherForPc/gameDay.png'
import instruction from '../../components/assets/LauncherForPc/instrucn.png'
// import cardMine from '../../components/assets/LauncherForPc/cardMine.png'
// import cardKing from '../../components/assets/LauncherForPc/cardKing.png'
// import cardRust from '../../components/assets/LauncherForPc/cardRust.png'
// import cardgta from '../../components/assets/LauncherForPc/cardgta.png'
import COD4 from '../../components/assets/LauncherForPc/COD4.png'
import bigFoot from '../../components/assets/LauncherForPc/BF.png'
import csgo from '../../components/assets/LauncherForPc/CSGO.png'
import general from '../../components/assets/LauncherForPc/General.png'
import cs16 from '../../components/assets/LauncherForPc/CS16.png'
import forest from '../../components/assets/LauncherForPc/forest.png'
import VoiceChat from '../../shared/VoiceChat'
import NewsEvents from '../../shared/NewsEvents'
import StartGame from '../UI/StartGame'
import YourComponentWithFlickity from '../../shared/YourComponentWithFlickity'

const LauncherForPc = () => {
	// const flickityOptins = {
	// 	initialIndex: 0,
	// }

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
							<img className={styles.imgWindow} src={picWin} alt='' />
							<p className={styles.launchPcName}>LAUNCHER FOR PC</p>
							<h1 className={styles.launchPcTitle}>Unite Gaming Launcher</h1>
							<p className={styles.launchPcSub}>
								{useLangChange('launchPcSub')}
							</p>
							<div className={styles.launchPcBlock}>
								<button className={styles.launchPcBlockBtn1}>
									{useLangChange('launchPcBlockBtn1')}
								</button>
								<button className={styles.launchPcBlockBtn2}>
									{useLangChange('launchPcBlockBtn2')}
								</button>
								<button className={styles.launchPcBlockBtn3}>
									{useLangChange('launchPcBlockBtn3')}
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

				<section className={styles.sectionBlock}>
					<div className={styles.container}>
						<Link className={styles.sectionInner}>
							<div className={styles.sectionHowItWorkInner}>
								<h2 className={styles.sectionHowItWorkTitle}>
									{useLangChange('sectionHowItWorkTitle')}
								</h2>
								<p className={styles.sectionHowItWorkSub}>
									{useLangChange('sectionHowItWorkSub')}
								</p>
							</div>
							<img className={styles.HowItWorkImg} src={howItWork} alt='' />
						</Link>
						<Link className={styles.sectionInnerHamachi}>
							<div className={styles.hamachi}>
								<h3 className={styles.hamachiTitle}>
									{useLangChange('hamachiTitle')}
								</h3>
								<p className={styles.hamachiSub}>
									{useLangChange('hamachiSub')}
								</p>
								<p className={styles.hamachiLink}>
									{useLangChange('hamachiLink')}
									{'>'}
								</p>
							</div>
							<img className={styles.hamachiImg} src={hamachiImg} alt='' />
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
							<img className={styles.servUniteImg} src={servUniteImg} alt='' />
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
						<Link className={styles.sectionInnerGameDay}>
							<div className={styles.gameDay}>
								<h6 className={styles.gameDayTitle}>
									{useLangChange('gameDayTitle')}
								</h6>
								<p className={styles.gameDaySub}>
									{useLangChange('gameDaySub')}
								</p>
								<p className={styles.gameDayLink}>
									{useLangChange('gameDayLink')}
									{'>'}
								</p>
							</div>
							<img className={styles.gameDayImg} src={gameDayImg} alt='' />
						</Link>
						<Link className={styles.sectionInnerInstall}>
							<div className={styles.instruction}>
								<h6 className={styles.instructionTitle}>
									{useLangChange('instructionTitle')}
								</h6>
								<p className={styles.instructionSub}>
									{useLangChange('instructionSub')}
								</p>
								<p className={styles.instructionLink}>
									{useLangChange('instructionLink')}
									{'>'}
								</p>
							</div>
							<img className={styles.instructionImg} src={instruction} alt='' />
						</Link>
					</div>
				</section>

				<section className={styles.servicesGameSection}>
					<div className={styles.container}>
						<h1 className={styles.servicesGameTitle}>
							{useLangChange('servicesGameTitle')}
						</h1>
						<p className={styles.servicesGameSub}>
							{useLangChange('servicesGameSub')}
						</p>
					</div>
						<YourComponentWithFlickity partners={servicesGamesCards} />
				</section>

				<section className={styles.popularGame}>
					<div className={styles.container}>
						<h1 className={styles.popularGameTitle}>
							{useLangChange('popularGameTitle')}
						</h1>
						<p className={styles.popularGameSub}>
							{useLangChange('popularGameSub')}
						</p>

						<ul className={styles.popularGameList}>
							<li className={styles.popularGameListItem}>
								<img className={styles.popularGameItemImg} src={COD4} alt='' />
								<div className={styles.popularGameItemBlock}>
									<p className={styles.popularGameItemSub}>
										{useLangChange('popularGameItemSubShut')}
									</p>
									<h1 className={styles.popularGameItemTitle}>
										Call of Duty 4
									</h1>
								</div>
							</li>
							<li className={styles.popularGameListItem}>
								<img
									className={styles.popularGameItemImg}
									src={bigFoot}
									alt=''
								/>
								<div className={styles.popularGameItemBlock}>
									<p className={styles.popularGameItemSub}>
										{useLangChange('popularGameItemSubHor')}
									</p>
									<h1 className={styles.popularGameItemTitle}>Big Foot</h1>
								</div>
							</li>
							<li className={styles.popularGameListItem}>
								<img className={styles.popularGameItemImg} src={csgo} alt='' />
								<div className={styles.popularGameItemBlock}>
									<p className={styles.popularGameItemSub}>
										{useLangChange('popularGameItemSubShut')}
									</p>
									<h1 className={styles.popularGameItemTitle}>CS:GO</h1>
								</div>
							</li>
							<li className={styles.popularGameListItem}>
								<img
									className={styles.popularGameItemImg}
									src={general}
									alt=''
								/>
								<div className={styles.popularGameItemBlock}>
									<p className={styles.popularGameItemSub}>
										{useLangChange('popularGameItemSubStr')}
									</p>
									<h1 className={styles.popularGameItemTitle}>
										Generals Zero Hour
									</h1>
								</div>
							</li>
							<li className={styles.popularGameListItem}>
								<img className={styles.popularGameItemImg} src={cs16} alt='' />
								<div className={styles.popularGameItemBlock}>
									<p className={styles.popularGameItemSub}>
										{useLangChange('popularGameItemSubShut')}
									</p>
									<h1 className={styles.popularGameItemTitle}>CS 1.6</h1>
								</div>
							</li>
							<li className={styles.popularGameListItem}>
								<img
									className={styles.popularGameItemImg}
									src={forest}
									alt=''
								/>
								<div className={styles.popularGameItemBlock}>
									<p className={styles.popularGameItemSub}>
										{useLangChange('popularGameItemSubHor')}
									</p>
									<h1 className={styles.popularGameItemTitle}>The Forest</h1>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<VoiceChat />
				<NewsEvents />
				<Helps />
				<StartGame useLangChange={useLangChange} />
			</main>
		</>
	)
}

export default LauncherForPc
