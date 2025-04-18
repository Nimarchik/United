import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'

// PICTURES
import icq from '../../components/assets/Contact/ICQ.png'
import tel from '../../components/assets/Contact/tel.png'

const Contact = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.contact}>
					<div className={styles.container}>
						<div className={styles.contactInner}>
							<p className={styles.contactInnerSub}>
								{useLangChange('contactInnerSub')}
							</p>
							<h2 className={styles.contactInnerTitle}>
								{useLangChange('contactInnerTitle')}
							</h2>

							<div className={styles.contactInnerBlock}>
								<div className={styles.contactInnerBlockICQ}>
									<img
										className={styles.contactInnerBlockICQImg}
										src={icq}
										alt=''
									/>
									<div className={styles.contactInnerBlockICQCont}>
										<h2 className={styles.contactInnerBlockICQTitle}>
											{useLangChange('contactInnerBlockICQTitle')}
										</h2>
										<p className={styles.contactInnerBlockICQSub}>
											{useLangChange('contactInnerBlockICQSub')}
										</p>
										<p className={styles.contactInnerBlockICQSubGen}>
											{useLangChange('contactInnerBlockICQSubGen')}
										</p>
										<p className={styles.contactInnerBlockICQSubDate}>
											{useLangChange('contactInnerBlockICQSubDate')}
										</p>
									</div>
								</div>
								<div className={styles.contactInnerBlockMob}>
									<img
										className={styles.contactInnerBlockMobImg}
										src={tel}
										alt=''
									/>
									<div className={styles.contactInnerBlockMobCont}>
										<h3 className={styles.contactInnerBlockMobTitle}>
											{useLangChange('contactInnerBlockMobTitle')}
										</h3>
										<p className={styles.contactInnerBlockMobSub}>
											{useLangChange('contactInnerBlockMobSub')}
										</p>
										<a
											className={styles.contactInnerBlockMobTel}
											href='+993812514'
										>
											+993 (65) 81-25-14
										</a>
										<p className={styles.contactInnerBlockMobPost}>
											{useLangChange('contactInnerBlockMobPost')}
										</p>
										<a
											className={styles.contactInnerBlockMobPostLink}
											href='unite.gaming@lotta-tm.com'
										>
											unite.gaming@lotta-tm.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Contact
