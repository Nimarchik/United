import styles from '../../components/styles/App.module.css'
import useLangChange from '../../pages/LangChange'
import { Link } from 'react-router-dom'
import aboutInfo1 from '../../components/assets/About/aboutInfo1.png'
import aboutInfo2 from '../../components/assets/About/Asssasin .png'
import sekiro from '../../components/assets/About/sekiro.png'
import NewsEvents from '../../shared/NewsEvents'
import StartGame from '../UI/StartGame'
import AboutParters from '../../shared/AboutParters'

const About = () => {




	return (
		<>
			<main className={styles.main}>
				<section className={styles.about}>
					<div className={styles.container}>
						<div className={styles.aboutInner}>
							<h1 className={styles.aboutInnerTitle}>
								{useLangChange('aboutInnerTitle')}
							</h1>
							<p className={styles.aboutInnerSub}>
								{useLangChange('aboutInnerSub')}
							</p>
							<ul className={styles.aboutInnerList}>
								<li className={styles.aboutInnerListItem}>
									<h2 className={styles.aboutInnerListItemTitle}>2700+</h2>
									<p className={styles.aboutInnerListItemSub}>
										{useLangChange('aboutInnerListItemSub1')}
									</p>
								</li>
								<li className={styles.aboutInnerListItem}>
									<h2 className={styles.aboutInnerListItemTitle}>400+</h2>
									<p className={styles.aboutInnerListItemSub}>
										{useLangChange('aboutInnerListItemSub2')}
									</p>
								</li>
								<li className={styles.aboutInnerListItem}>
									<h2 className={styles.aboutInnerListItemTitle}>45+</h2>
									<p className={styles.aboutInnerListItemSub}>
										{useLangChange('aboutInnerListItemSub3')}
									</p>
								</li>
								<li className={styles.aboutInnerListItem}>
									<h2 className={styles.aboutInnerListItemTitle}>199</h2>
									<p className={styles.aboutInnerListItemSub}>
										{useLangChange('aboutInnerListItemSub4')}
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.aboutInfo}>
					<div className={styles.container}>
						<div className={styles.aboutInfoInner}>
							<div className={styles.aboutInfoInnerContent}>
								<h3 className={styles.aboutInfoInnerContentTitle}>
									{useLangChange('aboutInfoInnerContentTitle')}
								</h3>
								<p className={styles.aboutInfoInnerContentSub}>
									{useLangChange('aboutInfoInnerContentSub')}
								</p>
							</div>
							<img
								className={styles.aboutInfoInnerContentImg}
								src={aboutInfo1}
								alt=''
							/>
						</div>
						<Link to={`/:l/TeamsUnite`} className={styles.aboutInfoAim}>
							<img className={styles.aboutInfoAimImg} src={aboutInfo2} alt='' />
							<div className={styles.aboutInfoAimContent}>
								<h3 className={styles.aboutInfoAimContentTitle}>
									{useLangChange('aboutInfoAimContentTitle')}
								</h3>
								<p className={styles.aboutInfoAimContentSub}>
									{useLangChange('aboutInfoAimContentSub')}
								</p>
								<p className={styles.aboutInfoAimContentLink}>
									{useLangChange('aboutInfoAimContentLink')} {'>'}
								</p>
							</div>
						</Link>
					</div>
				</section>
				<section className={styles.aboutCulture} id='culture'>
					<div className={styles.container}>
						<div className={styles.aboutCultureInner}>
							<h4 className={styles.aboutCultureInnerTitle}>
								{useLangChange('aboutCultureInnerTitle')}
							</h4>
							<p className={styles.aboutCultureInnerSub}>
								{useLangChange('aboutCultureInnerSub')}
							</p>
							<div className={styles.aboutCultureInnerBlock}>
								<div className={styles.aboutCultureInnerBlockCont}>
									<h4 className={styles.aboutCultureInnerBlockContTitle}>
										{useLangChange('aboutCultureInnerBlockContTitle')}, <br />
										{useLangChange('aboutCultureInnerBlockContTitle1')}
									</h4>
									<p className={styles.aboutCultureInnerBlockContSub}>
										{useLangChange('aboutCultureInnerBlockContSub')}
									</p>
								</div>
								<img
									className={styles.aboutCultureInnerBlockImg}
									src={sekiro}
									alt=''
								/>
							</div>
							<ul className={styles.aboutCultureInnerList}>
								<li className={styles.aboutCultureInnerItem}>
									<h4 className={styles.aboutCultureInnerItemTitle}>
										{useLangChange('aboutCultureInnerItemTitle1')}
									</h4>
									<p className={styles.aboutCultureInnerItemSub}>
										{useLangChange('aboutCultureInnerItemSub1')}
									</p>
								</li>
								<li className={styles.aboutCultureInnerItem}>
									<h4 className={styles.aboutCultureInnerItemTitle}>
										{useLangChange('aboutCultureInnerItemTitle2')}
									</h4>
									<p className={styles.aboutCultureInnerItemSub}>
										{useLangChange('aboutCultureInnerItemSub2')}
									</p>
								</li>
								<li className={styles.aboutCultureInnerItem}>
									<h4 className={styles.aboutCultureInnerItemTitle}>
										{useLangChange('aboutCultureInnerItemTitle3')}
									</h4>
									<p className={styles.aboutCultureInnerItemSub}>
										{useLangChange('aboutCultureInnerItemSub3')}
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.aboutValuables}>
					<div className={styles.container}>
						<div className={styles.aboutValuablesInner}>
							<h5 className={styles.aboutValuablesInnerTitle}>
								{useLangChange('aboutValuablesTitle')}
							</h5>
							<p className={styles.aboutValuablesInnerSub}>
								{useLangChange('aboutValuablesSub')}
							</p>

							<ul className={styles.aboutValuablesInnerList}>
								<li className={styles.aboutValuablesInnerItem}>
									<h5 className={styles.aboutValuablesInnerItemTitle}>
										{useLangChange('aboutValuablesItemTitle1')}
									</h5>
									<p className={styles.aboutValuablesInnerItemSub}>
										{useLangChange('aboutValuablesItemSub1')}
									</p>
								</li>
								<li className={styles.aboutValuablesInnerItem}>
									<h5 className={styles.aboutValuablesInnerItemTitle}>
										{useLangChange('aboutValuablesItemTitle2')}
									</h5>
									<p className={styles.aboutValuablesInnerItemSub}>
										{useLangChange('aboutValuablesItemSub2')}
									</p>
								</li>
								<li className={styles.aboutValuablesInnerItem}>
									<h5 className={styles.aboutValuablesInnerItemTitle}>
										{useLangChange('aboutValuablesItemTitle3')}
									</h5>
									<p className={styles.aboutValuablesInnerItemSub}>
										{useLangChange('aboutValuablesItemSub3')}
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<AboutParters/>
				<NewsEvents />
				<StartGame />
			</main>
		</>
	)
}

export default About
