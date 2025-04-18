import { Link } from 'react-router-dom';
import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange';


// PICTURES
import cubook from '../../components/assets/Career/cubok.png'
import prod from '../../components/assets/Career/prod.png'
import you from '../../components/assets/Career/you.png'
import NewsEvents from '../../shared/NewsEvents';
import Helps from '../../shared/Helps';
import StartGame from '../UI/StartGame';



const Career = () => {
  return <>
    <main className={styles.main}>
      <section className={styles.career}>
        <div className={styles.container}>
          <div className={styles.careerInner}>
            <h1 className={styles.careerInnerTitle}>
              {useLangChange('careerInnerTitle')}
            </h1>
            <p className={styles.careerInnerSub}>
              {useLangChange('careerInnerSub')}
            </p>
            <Link className={styles.careerInnerBtn}>
              {useLangChange('careerInnerBtn')}
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.careerInnerBlocks}>
        <div className={styles.container}>
          <div className={styles.careerInnerBlocksGlobal}>
            <img className={styles.careerInnerBlocksGlobalImg} src={cubook} alt="" />
            <div className={styles.careerInnerBlocksGlobalCont}>
              <h2 className={styles.careerInnerBlocksGlobalContTitle}>
                {useLangChange('careerInnerBlocksGlobalContTitle')}
              </h2>
              <p className={styles.careerInnerBlocksGlobalContSub}>
                {useLangChange('careerInnerBlocksGlobalContSub')}
              </p>
              <p className={styles.careerInnerBlocksGlobalContSub}>
                {useLangChange('careerInnerBlocksGlobalContSub2')}
              </p>
            </div>
          </div>
          <div className={styles.careerInnerBlocksProd}>
            <div className={styles.careerInnerBlocksProdCont}>
              <h3 className={styles.careerInnerBlocksProdContTitle}>
                {useLangChange('careerInnerBlocksProdContTitle')}
              </h3>
              <p className={styles.careerInnerBlocksProdContSub}>
                {useLangChange('careerInnerBlocksProdContSub')}
              </p>
            </div>
            <img className={styles.careerInnerBlocksProdImg} src={prod} alt="" />
          </div>
          <Link className={styles.careerInnerBlocksYou}>
            <img className={styles.careerInnerBlocksYouImg} src={you} alt="" />
            <div className={styles.careerInnerBlocksYouCont}>
              <h4 className={styles.careerInnerBlocksYouContTitle}>
                {useLangChange('careerInnerBlocksYouContTitle')}
              </h4>
              <p className={styles.careerInnerBlocksYouContSub}>
                {useLangChange('careerInnerBlocksYouContSub')}
              </p>
              <p className={styles.careerInnerBlocksYouContLink}>
                {useLangChange('careerInnerBlocksYouContLink')} {'>'}
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
}

export default Career;