import styles from '../components/styles/App.module.css'

import unite from '../components/assets/About/unite.png'
import jayyam from '../components/assets/About/jayym.png'
import outs from '../components/assets/About/outs.png'
import arassa from '../components/assets/About/arassa.png'
import lotta from '../components/assets/About/lotta.png'
import useLangChange from '../pages/LangChange'
import { Link } from 'react-router-dom'


const AboutParters = () => {
  	const partners = [
			`${unite}`,
			`${jayyam}`,
			`${outs}`,
			`${arassa}`,
			`${lotta}`,
			`${unite}`,
			`${jayyam}`,
			`${outs}`,
			`${arassa}`,
			`${lotta}`,
			`${unite}`,
			`${jayyam}`,
			`${outs}`,
			`${arassa}`,
			`${lotta}`,
			`${unite}`,
			`${jayyam}`,
			`${outs}`,
			`${arassa}`,
			`${lotta}`,
		]
  return (
		<>
			<section className={styles.aboutParters}>
				<div className={styles.container}>
					<div className={styles.aboutPartersInner}>
						<h6 className={styles.aboutPartersInnerTitle}>
							{useLangChange('aboutPartersInnerTitle')}
						</h6>

						<ul className={styles.aboutPartersInnerList}>
							{partners.map((item, index) => (
								<li className={styles.aboutPartersInnerItem} key={index}>
									<img
										className={styles.aboutPartersInnerItemImg}
										src={item}
										alt=''
									/>
								</li>
							))}
						</ul>
						<Link className={styles.aboutPartersInnerLink}>
							{useLangChange('aboutPartersInnerLink')}
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutParters;