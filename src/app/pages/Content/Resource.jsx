import { Link } from 'react-router-dom'
import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'

// Pictures
import Logo from '../../components/assets/Resource/Logo.png'
import bg from '../../components/assets/Resource/background.png'
import laptop from '../../components/assets/Resource/laptop.png'
import smartfon from '../../components/assets/Resource/smartfone.png'
import graphics from '../../components/assets/Resource/graf.png'
import ads from '../../components/assets/Resource/ads.png'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'

const Resource = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.resource}>
					<div className={styles.container}>
						<div className={styles.resourceInner}>
							<h1 className={styles.resourceInnerTitle}>
								{useLangChange('resourceInnerTitle')}
							</h1>
							<p className={styles.resourceInnerSub}>
								{useLangChange('resourceInnerSub')}
							</p>
						</div>
					</div>
				</section>

				<section className={styles.resourceBlocks}>
					<div className={styles.container}>
						<a
							href='Unite/Resources/Logo.png'
							download='Logo.png'
							className={styles.resourceBlocksLink}
						>
							<div className={styles.resourceBlocksLinkCont}>
								<h1 className={styles.resourceBlocksLinkContTitle}>
									{useLangChange('resourceBlocksLinkContTitle')}
								</h1>
								<p className={styles.resourceBlocksLinkContSub}>
									{useLangChange('resourceBlocksLinkContSub')}
								</p>
								<p className={styles.resourceBlocksLinkContLink}>
									{useLangChange('resourceBlocksLinkContLink')}
									{'>'}
								</p>
							</div>
							<img className={styles.resourceBlocksLinkImg} src={Logo} alt='' />
						</a>
						<a
							href='Unite/Resources/Background.rar'
							download='BackgroundUnite.rar'
							className={styles.resourceBlocksLinkRev}
						>
							<img
								className={styles.resourceBlocksLinkRevImg}
								src={bg}
								alt=''
							/>
							<div className={styles.resourceBlocksLinkRevCont}>
								<h2 className={styles.resourceBlocksLinkRevContTitle}>
									{useLangChange('resourceBlocksLinkRevContTitle')}
								</h2>
								<p className={styles.resourceBlocksLinkRevContSub}>
									{useLangChange('resourceBlocksLinkRevContSub')}
								</p>
								<p className={styles.resourceBlocksLinkRevContLink}>
									{useLangChange('resourceBlocksLinkContLink')} {'>'}
								</p>
							</div>
						</a>
						<a
							className={styles.resourceBlocksLinkSplash}
							href='Unite/Resources/Wallpaper.rar'
							download='Wallpaper.rar'
						>
							<div className={styles.resourceBlocksLinkSplashCont}>
								<h3 className={styles.resourceBlocksLinkSplashContTitle}>
									{useLangChange('resourceBlocksLinkSplashContTitle')}
								</h3>
								<p className={styles.resourceBlocksLinkSplashContSub}>
									{useLangChange('resourceBlocksLinkSplashContSub')}
								</p>
								<p className={styles.resourceBlocksLinkSplashContLink}>
									{useLangChange('resourceBlocksLinkContLink')} {'>'}
								</p>
							</div>
							<div className={styles.resourceBlocksLinkSplashBlockImg}>
								<img
									className={styles.resourceBlocksLinkSplashImg}
									src={laptop}
									alt='splashScreen'
								/>
								<img
									className={styles.resourceBlocksLinkSplashImgSmart}
									src={smartfon}
									alt='splashScreen'
								/>
							</div>
						</a>
						<a
							className={styles.resourceBlocksLinkGraphic}
							href='Unite/Resources/Graphic_elements.rar'
							download='Graphic_elements.rar'
						>
							<img
								className={styles.resourceBlocksLinkGraphicImg}
								src={graphics}
								alt='graphics'
							/>
							<div className={styles.resourceBlocksLinkGraphicCont}>
								<h4 className={styles.resourceBlocksLinkGraphicContTitle}>
									{useLangChange('resourceBlocksLinkGraphicContTitle')}
								</h4>
								<p className={styles.resourceBlocksLinkGraphicContSub}>
									{useLangChange('resourceBlocksLinkGraphicContSub')}
								</p>
								<p className={styles.resourceBlocksLinkGraphicContLink}>
									{useLangChange('resourceBlocksLinkContLink')} {'>'}
								</p>
							</div>
						</a>
						<a
							className={styles.resourceBlocksLinkAds}
							href='Unite/Resources/Ads_materials.rar'
							download='Ads_materials.rar'
						>
							<div className={styles.resourceBlocksLinkAdsCont}>
								<h5 className={styles.resourceBlocksLinkAdsContTitle}>
									{useLangChange('resourceBlocksLinkAdsContTitle')}
								</h5>
								<p className={styles.resourceBlocksLinkAdsContSub}>
									{useLangChange('resourceBlocksLinkAdsContSub')}
								</p>
								<p className={styles.resourceBlocksLinkAdsContLink}>
									{useLangChange('resourceBlocksLinkContLink')} {'>'}
								</p>
							</div>
							<img
								className={styles.resourceBlocksLinkAdsImg}
								src={ads}
								alt=''
							/>
						</a>
					</div>
				</section>

				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default Resource
