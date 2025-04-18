import styles from './../../components/styles/App.module.css'
import useLangChange from '../LangChange'
import { Link } from 'react-router-dom'

// Pictures
import nextKey from '../../components/assets/KeySteam/nextKey.png'
import dotaPing from '../../components/assets/KeySteam/dotaPing.png'
import game from '../../components/assets/KeySteam/game.png'
import warning from '../../components/assets/KeySteam/warning.png'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'

const KeySteam = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.keySteam}>
					<div className={styles.container}>
						<div className={styles.KeySteamInner}>
							<p className={styles.KeySteamInnerSubs}>
								{useLangChange('KeySteamInnerSubs')}
							</p>
							<h1 className={styles.KeySteamInnerTitle}>
								{useLangChange('KeySteamInnerTitle')}
							</h1>
							<p className={styles.KeySteamInnerSub}>
								{useLangChange('KeySteamInnerSub')}
							</p>
							<Link className={styles.KeySteamInnerLink}>
								{useLangChange('KeySteamInnerLink')}
							</Link>
						</div>
					</div>
				</section>

				<section className={styles.KeySteamBlocks}>
					<div className={styles.container}>
						<Link className={styles.KeySteamBlocksGeneral}>
							<div className={styles.KeySteamBlocksGeneralCont}>
								<h1 className={styles.KeySteamBlocksGeneralContTitle}>
									{useLangChange('KeySteamBlocksGeneralContTitle')}
								</h1>
								<p className={styles.KeySteamBlocksGeneralContSub}>
									{useLangChange('KeySteamBlocksGeneralContSub')}
								</p>
							</div>
							<img
								className={styles.KeySteamBlocksGeneralImg}
								src={nextKey}
								alt=''
							/>
						</Link>
					</div>
				</section>

				<section className={styles.KeySteamBlocks}>
					<div className={styles.container}>
						<Link className={styles.KeySteamBlocksKeys}>
							<img
								className={styles.KeySteamBlocksKeysImg}
								src={dotaPing}
								alt=''
							/>
							<div className={styles.KeySteamBlocksKeysCont}>
								<h1 className={styles.KeySteamBlocksKeysContTitle}>
									{useLangChange('KeySteamBlocksKeysContTitle')}
								</h1>
								<p className={styles.KeySteamBlocksKeysContSub}>
									{useLangChange('KeySteamBlocksKeysContSub')}
									<ul className={styles.KeySteamBlocksKeysContSubList}>
										<li className={styles.KeySteamBlocksKeysContSubItem}>
											{useLangChange('KeySteamBlocksKeysContSubItem1')}
										</li>
										<li className={styles.KeySteamBlocksKeysContSubItem}>
											{useLangChange('KeySteamBlocksKeysContSubItem2')}
										</li>
										<li className={styles.KeySteamBlocksKeysContSubItem}>
											{useLangChange('KeySteamBlocksKeysContSubItem3')}
										</li>
									</ul>
								</p>
								<p className={styles.KeySteamBlocksKeysContLink}>
									{useLangChange('KeySteamBlocksKeysContLink')} {'>'}
								</p>
							</div>
						</Link>
						<Link className={styles.KeySteamBlocksGame}>
							<div className={styles.KeySteamBlocksGameCont}>
								<h2 className={styles.KeySteamBlocksGameContTitle}>
									{useLangChange('KeySteamBlocksGameContTitle')}
								</h2>
								<p className={styles.KeySteamBlocksGameContSub}>
									{useLangChange('KeySteamBlocksGameContSub')}
									<p className={styles.KeySteamBlocksGameContSubTitle}>
										{useLangChange('KeySteamBlocksGameContSubTitle')}
									</p>
									<ul className={styles.KeySteamBlocksGameContSubList}>
										<li className={styles.KeySteamBlocksGameContSubItem}>
											DOTA 2
										</li>
										<li className={styles.KeySteamBlocksGameContSubItem}>
											CS:GO
										</li>
									</ul>
								</p>
							</div>
							<img className={styles.KeySteamBlocksGameImg} src={game} alt='' />
						</Link>
						<Link className={styles.KeySteamBlocksWarning}>
							<img
								src={warning}
								alt=''
								className={styles.KeySteamBlocksWarningImg}
							/>
							<div className={styles.KeySteamBlocksWarningCont}>
								<h3 className={styles.KeySteamBlocksWarningContTitle}>
									{useLangChange('KeySteamBlocksWarningContTitle')}
								</h3>
								<p className={styles.KeySteamBlocksWarningContSub}>
									{useLangChange('KeySteamBlocksWarningContSub')}
								</p>
							</div>
						</Link>
					</div>
				</section>
				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default KeySteam
