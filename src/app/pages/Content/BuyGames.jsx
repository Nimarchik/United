import styles from '../../components/styles/App.module.css'
import { Link } from 'react-router-dom';
import useLangChange from '../LangChange';

// PICTURES
import info from '../../components/assets/BuyGame/info.png'
import prog from '../../components/assets/BuyGame/prog.png'
import use from '../../components/assets/BuyGame/use.png'



const BuyGames = () => {
  return <>
    <main className={styles.main}>
      <section className={styles.buyGames}>
        <div className={styles.container}>
          <div className={styles.buyGamesInner}>
            <p className={styles.buyGamesInnerSubGen}>
              {useLangChange('buyGamesInnerSubGen')}
            </p>
            <h1 className={styles.buyGamesInnerTitle}>
              {useLangChange('buyGamesInnerTitle')}
            </h1>
            <p className={styles.buyGamesInnerSub}>
              {useLangChange('buyGamesInnerSub')}
            </p>
            <Link className={styles.buyGamesInnerBtn}>
              {useLangChange('buyGamesInnerBtn')}
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.buyGamesBlocks}>
        <div className={styles.container}>
          <div className={styles.buyGamesBlocksInfo}>
            <img className={styles.buyGamesBlocksInfoImg} src={info} alt="" />
            <div className={styles.buyGamesBlocksInfoCont}>
              <h2 className={styles.buyGamesBlocksInfoContTitle}>
                {useLangChange('buyGamesBlocksInfoContTitle')}
              </h2>
              <p className={styles.buyGamesBlocksInfoContSub}>
                {useLangChange('buyGamesBlocksInfoContSub')}
              </p>
              <ul className={styles.buyGamesBlocksInfoContList}>
                <li className={styles.buyGamesBlocksInfoContItem}>
                  {useLangChange('buyGamesBlocksInfoContItem')}
                </li>
                <li className={styles.buyGamesBlocksInfoContItem}>
                  {useLangChange('buyGamesBlocksInfoContItem1')}
                </li>
                <li className={styles.buyGamesBlocksInfoContItem}>
                  {useLangChange('buyGamesBlocksInfoContItem2')}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.buyGamesBlocksPlat}>
            <div className={styles.buyGamesBlocksPlatCont}>
              <h2 className={styles.buyGamesBlocksPlatContTitle}>
                {useLangChange('buyGamesBlocksPlatContTitle')}
              </h2>
              <p className={styles.buyGamesBlocksPlatContSub}>
                {useLangChange('buyGamesBlocksPlatContSub')}
              </p>
            </div>
            <img className={styles.buyGamesBlocksPlatImg} src={prog} alt="" />
          </div>
          <Link className={styles.buyGamesBlocksUse}>
            <img className={styles.buyGamesBlocksUseImg} src={use} alt="" />
            <div className={styles.buyGamesBlocksUseCont}>
              <h2 className={styles.buyGamesBlocksUseContTitle}>
                {useLangChange('buyGamesBlocksUseContTitle')}
              </h2>
              <p className={styles.buyGamesBlocksUseContSub}>
                {useLangChange('buyGamesBlocksUseContSub')}
              </p>
              <p className={styles.buyGamesBlocksUseContLink}>
                {useLangChange('buyGamesBlocksUseContLink')} {'>'}
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.buyGamesApp}>
        <div className={styles.container}>
          <div className={styles.buyGamesAppInner}>
            <h3 className={styles.buyGamesAppTitle}>
              {useLangChange('buyGamesAppTitle')}
            </h3>
            <p className={styles.buyGamesAppSub}>
              {useLangChange('buyGamesAppSub')}
            </p>
            <Link className={styles.buyGamesAppLink}>
              {useLangChange('buyGamesBlocksUseContLink')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default BuyGames;