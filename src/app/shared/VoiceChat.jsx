import { Link } from 'react-router-dom'
import useLangChange from '../pages/LangChange'
import styles from '../components/styles/App.module.css'

// PICTURES
import teamSpeack from '../components/assets/VoiceChat/teamSpeack.png'
import mumble from '../components/assets/Mumble/mumble.png'
import stoune from '../components/assets/VoiceChat/stoune.png'

const VoiceChat = () => {
  return (
		<>
			<section className={styles.voice}>
				<div className={styles.container}>
					<h1 className={styles.voiceTitle}>{useLangChange('voiceTitle')}</h1>
					<p className={styles.voiceSub}>{useLangChange('voiceSub')}</p>
					<div className={styles.voiceItems}>
						<Link to={`/:l/teamspeak`} className={styles.voiceTs}>
							<h1 className={styles.voiceTsTitle}>Teamspeak</h1>
							<img className={styles.voiceTsImg} src={teamSpeack} alt='' />
							<p className={styles.voiceLink}>
								{useLangChange('blocksLink1')}
								<span className={styles.voiceArrow}>{'>'}</span>
							</p>
						</Link>
						<Link to={`/:l/mumble`} className={styles.voiceMumble}>
							<h1 className={styles.voiceMumbleTitle}>Mumble</h1>
							<img className={styles.voiceMumbleImg} src={mumble} alt='' />
							<p className={styles.voiceLink}>
								{useLangChange('blocksLink1')}
								<span className={styles.voiceArrow}>{'>'}</span>
							</p>
						</Link>
					</div>
					<Link to={''} className={styles.voiceSearchPlayer}>
						<div className={styles.voiceSearchPlayerBLock}>
							<h2 className={styles.voiceSearchPlayerTitle}>
								{useLangChange('voiceSearchPlayerTitle')}
							</h2>
							<p className={styles.voiceSearchPlayerSub}>
								{useLangChange('voiceSearchPlayerSub')}
							</p>
							<p className={styles.voiceSearchPlayerLink}>
								{useLangChange('voiceSearchPlayerLink')}
								<span className={styles.voiceArrow}>{'>'}</span>
							</p>
						</div>
						<img className={styles.voiceSearchPlayerImg} src={stoune} alt='' />
					</Link>
				</div>
			</section>
		</>
	)
}

export default VoiceChat;