import styles from '../../components/styles/App.module.css'
import windows from '../../components/assets/LauncherForPc/picWin.svg'
import android from '../../components/assets/LauncherForAnd/iconAndroid.svg'
import teamsSpeak from '../../components/assets/TeamSpeack/teamspeak.png'
import instruction from '../../components/assets/TeamSpeack/instruct.png'
import serverGroup from '../../components/assets/TeamSpeack/serverGroup.png'
import googlePlay from '../../components/assets/TeamSpeack/googlePlay.svg'
import appStore from '../../components/assets/TeamSpeack/appStore.svg'
import useLangChange from '../LangChange'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'
import { Link } from 'react-router-dom'

const TeamSpeak = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.teamsSpeak}>
					<div className={styles.container}>
						<div className={styles.TeamSpeakTop}>
							<h1 className={styles.TeamSpeakTopTitle}>
								{useLangChange('TeamSpeakTopTitle')}
							</h1>
							<p className={styles.TeamSpeakTopSub}>
								{useLangChange('TeamSpeakTopSub')}
							</p>
							<div className={styles.TeamSpeakTopBtnBlock}>
								<button className={styles.TeamSpeakTopBtnWin}>
									<img
										className={styles.TeamSpeakTopBtnBlockImg}
										src={windows}
										alt=''
									/>
									{useLangChange('TeamSpeakTopBtnWin')}
								</button>
								<button className={styles.TeamSpeakTopBtnAnd}>
									<img
										className={styles.TeamSpeakTopBtnBlockImg}
										src={android}
										alt=''
									/>
									{useLangChange('TeamSpeakTopBtnAn')}
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.teamsSpeakContent}>
					<div className={styles.container}>
						<div className={styles.teamsSpeakContentBlock}>
							<Link className={styles.teamsSpeakContentBlockLink}>
								<img
									className={styles.teamsSpeakContentBlockLinkImg}
									src={teamsSpeak}
									alt=''
								/>
								<div className={styles.teamsSpeakContentBlockInner}>
									<h2 className={styles.teamsSpeakContentBlockInnerTitle}>
										{useLangChange('teamsSpeakContentBlockInnerTitle')}
									</h2>
									<p className={styles.teamsSpeakContentBlockInnerSub}>
										{useLangChange('teamsSpeakContentBlockInnerSub')}
									</p>
									<p className={styles.teamsSpeakContentBlockText}>
										{useLangChange('teamsSpeakContentBlockText')} {'>'}
									</p>
								</div>
							</Link>
						</div>
						<div className={styles.teamsSpeakContentBlock1}>
							<Link className={styles.teamsSpeakContentBlockLink1}>
								<img
									className={styles.teamsSpeakContentBlockLinkImg1}
									src={instruction}
									alt=''
								/>
								<div className={styles.teamsSpeakContentBlockInner1}>
									<h2 className={styles.teamsSpeakContentBlockInnerTitl1}>
										{useLangChange('teamsSpeakContentBlockInnerTitle1')}
									</h2>
									<p className={styles.teamsSpeakContentBlockInnerSub1}>
										{useLangChange('teamsSpeakContentBlockInnerSub1')}
									</p>
									<p className={styles.teamsSpeakContentBlockText1}>
										{useLangChange('teamsSpeakContentBlockText1')} {'>'}
									</p>
								</div>
							</Link>
						</div>
						<div className={styles.teamsSpeakContentBlock}>
							<Link className={styles.teamsSpeakContentBlockLink}>
								<img
									className={styles.teamsSpeakContentBlockLinkImg2}
									src={serverGroup}
									alt=''
								/>
								<div className={styles.teamsSpeakContentBlockInner}>
									<h2 className={styles.teamsSpeakContentBlockInnerTitle2}>
										{useLangChange('teamsSpeakContentBlockInnerTitle2')}
									</h2>
									<p className={styles.teamsSpeakContentBlockInnerSub2}>
										<h3 className={styles.teamsSpeakContentBlockInnerSub2Title}>
											{useLangChange('teamsSpeakContentBlockInnerSub2')}
										</h3>
										<ul className={styles.teamsSpeakContentBlockInnerSub2List}>
											<li
												className={styles.teamsSpeakContentBlockInnerSub2Item}
											>
												Unite Gaming 1: 95.85.126.226
											</li>
											<li
												className={styles.teamsSpeakContentBlockInnerSub2Item}
											>
												Unite Gaming 2: 95.85.126.176
											</li>
											<li
												className={styles.teamsSpeakContentBlockInnerSub2Item}
											>
												Unite Gaming 3: 95.85.126.225
											</li>
										</ul>
									</p>
									{/* <p className={styles.teamsSpeakContentBlockText2}>
										{useLangChange('teamsSpeakContentBlockText3')} {'>'}
									</p> */}
								</div>
							</Link>
						</div>
						<div className={styles.teamsSpeakContentBlock1}>
							<Link className={styles.teamsSpeakContentBlockLink3}>
								<img
									className={styles.teamsSpeakContentBlockLinkImg3}
									src={teamsSpeak}
									alt=''
								/>
								<div className={styles.teamsSpeakContentBlockLinkInnerImg}>
									<img
										className={styles.teamsSpeakContentBlockLinkInnerImgSvg}
										src={googlePlay}
										alt=''
									/>
									<img
										className={styles.teamsSpeakContentBlockLinkInnerImgSvg}
										src={appStore}
										alt=''
									/>
								</div>
								<div className={styles.teamsSpeakContentBlockInner3}>
									<h2 className={styles.teamsSpeakContentBlockInnerTitle3}>
										{useLangChange('teamsSpeakContentBlockInnerTitle3')}
									</h2>
									<p className={styles.teamsSpeakContentBlockInnerSub3}>
										{useLangChange('teamsSpeakContentBlockInnerSub3')}
									</p>
									<p className={styles.teamsSpeakContentBlockText3}>
										{useLangChange('teamsSpeakContentBlockText3')} {'>'}
									</p>
								</div>
							</Link>
						</div>
					</div>
				</section>
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default TeamSpeak
