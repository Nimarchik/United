import styles from '../../components/styles/App.module.css'

import windows from '../../components/assets/LauncherForPc/picWin.svg'
import android from '../../components/assets/LauncherForAnd/iconAndroid.svg'
import { Link } from 'react-router-dom';

import useLangChange from '../LangChange';
import Helps from '../../shared/Helps';
import StartGame from '../UI/StartGame';


import mumbleRules from '../../components/assets/Mumble/mumbleWar.png'
import instruction from '../../components/assets/TeamSpeack/instruct.png'
import mumbleServ from '../../components/assets/Mumble/mumbleServer.png'

const Mumble = () => {
  return (
		<>
			<main className={styles.main}>
				<section className={styles.mumbleTop}>
					<div className={styles.container}>
						<div className={styles.mumbleTopInner}>
							<h1 className={styles.mumbleTopInnerTitle}>Mumble</h1>
							<p className={styles.mumbleTopInnerSub}>
								{useLangChange('mumbleTopInnerSub')}
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

				<section className={styles.mumbleContent}>
					<div className={styles.container}>
						<div className={styles.teamsSpeakContentBlock}>
							<Link className={styles.teamsSpeakContentBlockLink}>
								<img
									className={styles.teamsSpeakContentBlockLinkImg}
									src={mumbleRules}
									alt=''
								/>
								<div className={styles.teamsSpeakContentBlockInner}>
									<h2 className={styles.teamsSpeakContentBlockInnerTitle}>
										{useLangChange('teamsSpeakContentBlockInnerTitle')}
									</h2>
									<p className={styles.teamsSpeakContentBlockInnerSub}>
										{useLangChange('mumbleContentBlockInnerSub')}
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
										{useLangChange('mumbleContentBlockInnerSub1')}
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
									src={mumbleServ}
									alt=''
								/>
								<div className={styles.teamsSpeakContentBlockInner}>
									<h2 className={styles.teamsSpeakContentBlockInnerTitle2}>
										{useLangChange('teamsSpeakContentBlockInnerTitle2')}
									</h2>
									<p className={styles.teamsSpeakContentBlockInnerSub2}>
										<h3 className={styles.teamsSpeakContentBlockInnerSub2Title}>
											{useLangChange('mumbleContentBlockInnerSub2')}
										</h3>
										<ul className={styles.teamsSpeakContentBlockInnerSub2List}>
											<li
												className={styles.teamsSpeakContentBlockInnerSub2Item}
											>
												Unite Gaming 1: 95.85.126.226
											</li>
										</ul>
									</p>
									{/* <p className={styles.teamsSpeakContentBlockText2}>
										{useLangChange('teamsSpeakContentBlockText3')} {'>'}
									</p> */}
								</div>
							</Link>
						</div>
					</div>
				</section>
        <Helps/>
        <StartGame/>
			</main>
		</>
	)
}

export default Mumble;