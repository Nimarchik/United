import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'
import { Link } from 'react-router-dom'
import StartGame from '../UI/StartGame'

import leftImg1 from '../../components/assets/Donate/leftImg1.png'
import leftImg2 from '../../components/assets/Donate/leftImg2.png'
import leftImg3 from '../../components/assets/Donate/leftImg3.png'
import rightImg1 from '../../components/assets/Donate/rightImg1.png'
import rightImg2 from '../../components/assets/Donate/rightImg2.png'
import rightImg3 from '../../components/assets/Donate/rightImg3.png'
import donateCont from '../../components/assets/Donate/donateContante.png'
import wowp from '../../components/assets/Donate/wowp.png'
import wowk from '../../components/assets/Donate/wowk.png'
import samp from '../../components/assets/Donate/samp.png'
import rust from '../../components/assets/Donate/rust.png'
import mine from '../../components/assets/Donate/mine.png'
import gta5 from '../../components/assets/Donate/gta5.png'
import battleNet from '../../components/assets/Donate/battleNet.png'
import steam from '../../components/assets/Donate/steam.png'
import epicGame from '../../components/assets/Donate/epicGame.png'

const Donate = () => {
	return (
		<>
			<main className={styles.donate}>
				<div className={styles.donateWrapper}>
					<div className={styles.donateImgPackLeft}>
						<img
							className={styles.donateImgPackPicLeft1}
							src={leftImg1}
							alt=''
						/>
						<img
							className={styles.donateImgPackPicLeft2}
							src={leftImg2}
							alt=''
						/>
						<img
							className={styles.donateImgPackPicLeft3}
							src={leftImg3}
							alt=''
						/>
					</div>
					<div className={styles.donateTopInner}>
						<h1 className={styles.donateTopInnerTitle}>
							{useLangChange('donateTopInnerTitle')}
						</h1>
						<p className={styles.donateTopInnerSub}>
							{useLangChange('donateTopInnerSub')}
						</p>
						<button className={styles.donateTopInnerBtn}>
							{useLangChange('donateTopInnerBtn')}
						</button>
					</div>
					<div className={styles.donateImgPackRight}>
						<img
							className={styles.donateImgPackPicRight1}
							src={rightImg1}
							alt=''
						/>
						<img
							className={styles.donateImgPackPicRight2}
							src={rightImg2}
							alt=''
						/>
						<img
							className={styles.donateImgPackPicRight3}
							src={rightImg3}
							alt=''
						/>
					</div>
				</div>
				<section className={styles.donateContent}>
					<div className={styles.container}>
						<div className={styles.donateContentInner}>
							<Link className={styles.donateContentInnerLink}>
								<img
									className={styles.donateContentInnerLinkImg}
									src={donateCont}
									alt=''
								/>
								<div className={styles.donateContentInnerBlock}>
									<h2 className={styles.donateContentInnerBlockTitle}>
										{useLangChange('donateContentInnerBlockTitle')}
									</h2>
									<p className={styles.donateContentInnerBlockSub}>
										<ul className={styles.donateContentInnerBlockSubList}>
											<li className={styles.donateContentInnerBlockSubItem}>
												{useLangChange('donateContentInnerBlockSubItem1')}
											</li>
											<li className={styles.donateContentInnerBlockSubItem}>
												{useLangChange('donateContentInnerBlockSubItem2')}
											</li>
											<li className={styles.donateContentInnerBlockSubItem}>
												{useLangChange('donateContentInnerBlockSubItem3')}
											</li>
											<li className={styles.donateContentInnerBlockSubItem}>
												{useLangChange('donateContentInnerBlockSubItem4')}
											</li>
										</ul>
									</p>
									<p className={styles.donateContentInnerBlockText}>
										{useLangChange('donateTopInnerBtn')} {'>'}
									</p>
								</div>
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.donateGameBonus}>
					<div className={styles.container}>
						<h3 className={styles.donateGameBonusTitle}>
							{useLangChange('donateGameBonusTitle')}
						</h3>
						<p className={styles.donateGameBonusSub}>
							{useLangChange('donateGameBonusSub')}
						</p>
						<ul className={styles.donateGameBonusList}>
							<li className={styles.donateGameBonusItem}>
								<img src={wowp} alt='' />
								<div className={styles.donateGameBonusItemInner}>
									<h4 className={styles.donateGameBonusItemInnerTitle}>
										World of Warcraft: Mists of Pandaria
									</h4>
									<div className={styles.donateGameBonusItemInnerBlock}>
										<p className={styles.donateGameBonusItemInnerSub}>
											{useLangChange('donateGameBonusItemInnerSub')}
										</p>
										<p className={styles.donateGameBonusItemInnerArrow1}>
											{'>'}
										</p>
									</div>
								</div>
							</li>
							<li className={styles.donateGameBonusItem1}>
								<img src={wowk} alt='' />
								<div className={styles.donateGameBonusItemInner}>
									<h4 className={styles.donateGameBonusItemInnerTitle}>
										World of Warcraft: Wrath of the Lich King
									</h4>
									<div className={styles.donateGameBonusItemInnerBlock}>
										<p className={styles.donateGameBonusItemInnerSub}>
											{useLangChange('donateGameBonusItemInnerSub')}
										</p>
										<p className={styles.donateGameBonusItemInnerArrow2}>
											{'>'}
										</p>
									</div>
								</div>
							</li>
							<li className={styles.donateGameBonusItem2}>
								<img src={samp} alt='' />
								<div className={styles.donateGameBonusItemInner}>
									<h4 className={styles.donateGameBonusItemInnerTitle}>SAMP</h4>
									<div className={styles.donateGameBonusItemInnerBlock}>
										<p className={styles.donateGameBonusItemInnerSub}>
											{useLangChange('donateGameBonusItemInnerSub')}
										</p>
										<p className={styles.donateGameBonusItemInnerArrow3}>
											{'>'}
										</p>
									</div>
								</div>
							</li>
							<li className={styles.donateGameBonusItem3}>
								<img src={rust} alt='' />
								<div className={styles.donateGameBonusItemInner}>
									<h4 className={styles.donateGameBonusItemInnerTitle}>RUST</h4>
									<div className={styles.donateGameBonusItemInnerBlock}>
										<p className={styles.donateGameBonusItemInnerSub}>
											{useLangChange('donateGameBonusItemInnerSub')}
										</p>
										<p className={styles.donateGameBonusItemInnerArrow4}>
											{'>'}
										</p>
									</div>
								</div>
							</li>
							<li className={styles.donateGameBonusItem4}>
								<img src={mine} alt='' />
								<div className={styles.donateGameBonusItemInner}>
									<h4 className={styles.donateGameBonusItemInnerTitle}>
										Minecraft
									</h4>
									<div className={styles.donateGameBonusItemInnerBlock}>
										<p className={styles.donateGameBonusItemInnerSub}>
											{useLangChange('donateGameBonusItemInnerSub')}
										</p>
										<p className={styles.donateGameBonusItemInnerArrow5}>
											{'>'}
										</p>
									</div>
								</div>
							</li>
							<li className={styles.donateGameBonusItem5}>
								<img src={gta5} alt='' />
								<div className={styles.donateGameBonusItemInner}>
									<h4 className={styles.donateGameBonusItemInnerTitle}>
										GTA 5
									</h4>
									<div className={styles.donateGameBonusItemInnerBlock}>
										<p className={styles.donateGameBonusItemInnerSub}>
											{useLangChange('donateGameBonusItemInnerSub')}
										</p>
										<p className={styles.donateGameBonusItemInnerArrow6}>
											{'>'}
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section className={styles.donateProject}>
					<div className={styles.container}>
						<div className={styles.donateProjectInner}>
							<h5 className={styles.donateProjectInnerTitle}>
								{useLangChange('donateProjectInnerTitle')}
							</h5>
							<p className={styles.donateProjectInnerSub}>
								{useLangChange('donateProjectInnerSub')}
							</p>
							<Link className={styles.donateProjectInnerBtn}>
								{useLangChange('donateProjectInnerBtn')}
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.platform}>
					<div className={styles.container}>
						<div className={styles.platformInner}>
							<div className={styles.platformInnerImg}>
								<img
									className={styles.platformInnerImgPic1}
									src={battleNet}
									alt=''
								/>
								<img
									className={styles.platformInnerImgPic2}
									src={epicGame}
									alt=''
								/>
								<img
									className={styles.platformInnerImgPic3}
									src={steam}
									alt=''
								/>
							</div>
							<div className={styles.platformInnerContent}>
								<h6 className={styles.platformInnerContentTitle}>
									<p>Steam,</p>
									<p>Epic Games,</p>
									<p>Battle.net</p>
								</h6>
								<p className={styles.platformInnerContentSub}>
									{useLangChange('platformInnerContentSub')}
								</p>
								<div className={styles.platformInnerContentLinkBlock}>
									<Link className={styles.platformInnerContentLink}>
										{useLangChange('platformInnerContentLinkAll')}
									</Link>
									<Link className={styles.platformInnerContentLink1}>
										{useLangChange('platformInnerContentLinkBuy')}
									</Link>
								</div>
                <div className={styles.platformInnerContentBg}></div>
							</div>
						</div>
					</div>
				</section>
        <StartGame/>
			</main>
		</>
	)
}

export default Donate
