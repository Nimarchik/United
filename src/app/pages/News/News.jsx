import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange';
import { NewsBD } from '../../../../public/NewsPictures/NewsBD';
import { PreviewNews } from '../../shared/PreviewNews';
import StartGame from '../UI/StartGame';


const News = () => {
  return (
		<>
			<main className={styles.main}>
				<section className={styles.newsMain}>
					<div className={styles.container}>
						<div className={styles.newsInnerMain}>
							<p className={styles.newsInnerMainSub}>
								{useLangChange('newsInnerSub')}
							</p>
							<h1 className={styles.newsInnerMainTitle}>
								{useLangChange('newsInnerTitle')}
							</h1>
						</div>
					</div>
				</section>

				<section className={styles.newsInnerCard}>
					<div className={styles.container}>
						<ul className={styles.newsInnerCardList}>
							<PreviewNews props1={NewsBD} />
						</ul>
					</div>
				</section>
        <StartGame />
			</main>
		</>
	)
}

export default News;