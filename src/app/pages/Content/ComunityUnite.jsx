import { Link } from 'react-router-dom'
import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'
import { AllComunityBD } from '../../../../public/AllComunity/AllComunityBD'
import { AllCOmunityPreview } from '../../shared/AllCOmunityPreview'

// PICTURES
import body from '../../components/assets/ComunityUnite/body.png'
import img1 from '../../components/assets/ComunityUnite/img1.png'
import gaming from '../../components/assets/ComunityUnite/gaming.png'
import chatImg from '../../components/assets/ComunityUnite/chatImg.png'
import NewsEvents from '../../shared/NewsEvents'
import Helps from '../../shared/Helps'
import StartGame from '../UI/StartGame'

chatImg

const ComunityUnite = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.comunity}>
					<div className={styles.comunityInner}>
						<div className={styles.container}>
							<p className={styles.comunityInnerSubGen}>
								{useLangChange('comunityInnerSubGen')}
							</p>
							<h1 className={styles.comunityInnerTitle}>
								{useLangChange('comunityInnerTitle')}
							</h1>
							<p className={styles.comunityInnerSub}>
								{useLangChange('comunityInnerSub')}
							</p>
						</div>
					</div>
				</section>
				<section className={styles.comunityInnerBlocks}>
					<div className={styles.container}>
						<Link className={styles.comunityInnerBlocksPrav}>
							<img
								className={styles.comunityInnerBlocksPravImg}
								src={body}
								alt=''
							/>
							<div className={styles.comunityInnerBlocksPravCont}>
								<h1 className={styles.comunityInnerBlocksPravContTitle}>
									{useLangChange('comunityInnerBlocksPravContTitle')}
								</h1>
								<p className={styles.comunityInnerBlocksPravContSub}>
									{useLangChange('comunityInnerBlocksPravContSub')}
								</p>
								<p className={styles.comunityInnerBlocksPravContLink}>
									{useLangChange('comunityInnerBlocksPravContLink')} {'>'}
								</p>
							</div>
						</Link>
						<Link className={styles.comunityInnerBlocksHelps}>
							<div className={styles.comunityInnerBlocksHelpsContHelps}>
								<h1 className={styles.comunityInnerBlocksHelpsContHelpsTitle}>
									{useLangChange('comunityInnerBlocksPravContHelpsTitle')}
								</h1>
								<p className={styles.comunityInnerBlocksHelpsContHelpsSub}>
									{useLangChange('comunityInnerBlocksPravContHelpsSub')}
								</p>
								<p className={styles.comunityInnerBlocksHelpsContHelpsLink}>
									{useLangChange('comunityInnerBlocksPravContHelpsLink')} {'>'}
								</p>
							</div>
							<img
								className={styles.comunityInnerBlocksHelpsImg}
								src={img1}
								alt=''
							/>
						</Link>
						<Link className={styles.comunityInnerBlocksUniteChannel}>
							<img
								className={styles.comunityInnerBlocksUniteChannelImg}
								src={gaming}
								alt=''
							/>
							<div className={styles.comunityInnerBlocksUniteChannelCont}>
								<h1 className={styles.comunityInnerBlocksUniteChannelContTitle}>
									{useLangChange('comunityInnerBlocksUniteChannelContTitle')}
								</h1>
								<p className={styles.comunityInnerBlocksUniteChannelContSub}>
									{useLangChange('comunityInnerBlocksUniteChannelContSub')}
								</p>
								<p className={styles.comunityInnerBlocksUniteChannelContLink}>
									{useLangChange('comunityInnerBlocksUniteChannelContLink')}{' '}
									{'>'}
								</p>
							</div>
						</Link>
						<Link className={styles.comunityInnerBlocksChats}>
							<div className={styles.comunityInnerBlocksChatsCont}>
								<h1 className={styles.comunityInnerBlocksChatsContTitle}>
									{useLangChange('comunityInnerBlocksChatsContTitle')}
								</h1>
								<p className={styles.comunityInnerBlocksChatsContSub}>
									{useLangChange('comunityInnerBlocksChatsContSub')}
								</p>
								<p className={styles.comunityInnerBlocksChatsContLink}>
									{useLangChange('comunityInnerBlocksChatsContLink')} {'>'}
								</p>
							</div>
							<img
								className={styles.comunityInnerBlocksChatsImg}
								src={chatImg}
								alt=''
							/>
						</Link>
					</div>
				</section>
				<section className={styles.AllComunity}>
					<div className={styles.container}>
						<div className={styles.AllComunityInner}>
							<h3 className={styles.AllComunityInnerTitle}>
								{useLangChange('AllComunityInnerTitle')}
							</h3>
							<AllCOmunityPreview props={AllComunityBD} />
						</div>
					</div>
				</section>
				<NewsEvents />
				<Helps />
				<StartGame />
			</main>
		</>
	)
}

export default ComunityUnite
