import styles from '../components/styles/App.module.css'
import { Link } from 'react-router-dom';
import useLangChange from '../pages/LangChange';

import helpPic from '../components/assets/helpPic.png'

const Helps = () => {
  return (
		<>
			<section className={styles.helps}>
				<div className={styles.container}>
					<Link className={styles.helpsContainer}>
						<div className={styles.helpsContainerBlock}>
							<h1 className={styles.helpsContainerTitle}>
								{useLangChange('helpsContainerTitle')}
							</h1>
							<p className={styles.helpsContainerSub}>
								{useLangChange('helpsContainerSub')}
							</p>
							<p className={styles.helpsContainerLink}>
								{useLangChange('helpsContainerLink')}
								<span className={styles.voiceArrow}>{'>'}</span>
							</p>
						</div>
						<img className={styles.helpsImg} src={helpPic} alt='' />
					</Link>
				</div>
			</section>
		</>
	)
}

export default Helps;