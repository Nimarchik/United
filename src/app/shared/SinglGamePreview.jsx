import styles from '../components/styles/App.module.css'
import { Link } from 'react-router-dom'
import useLangChange from '../pages/LangChange'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NewsEvents from './NewsEvents'
import Helps from './Helps'
import StartGame from '../pages/UI/StartGame'



export const SinglGamePreview = () => {
  const location = useLocation()
  const [items, setItems] = useState(location.state?.items || [])

  useEffect(() => {
    if (location.state && location.state.items) {
      setItems(location.state.items)
    }
    localStorage.getItem('value')
  }, [location.state])
  return (
    <>
      <main className={styles.main}>
        <section className={styles.sectionPriview}>
          <img className={styles.imgPreview} src={items.img} alt="" />
          <div className={styles.container}>
            <p className={styles.servSubPreview}>
              {useLangChange(items.subGenre)}</p>
            <h1 className={styles.previewTitle}>{items.title}</h1>
            <ul className={styles.previewListBtn}>
              <li className={styles.previewListItem}>
                <Link className={styles.previewLink} to={items.downloadLink}>
                  {useLangChange('previewLinkDown')}
                </Link>
              </li>
              <li className={styles.previewListItem}>
                <Link className={styles.previewLink} to={items.registration}>
                  {useLangChange('previewLinkReg')}
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.singlGame}>
          <div className={styles.container}>
            <div className={styles.singlGameInner}>
              <div className={styles.singlGameInnerBlock}>
                <div className={styles.singlGameInnerBlockCont}>
                  <h1 className={styles.singlGameInnerBlockContTitle}>
                    {useLangChange(items.titleBlock)}
                  </h1>
                  <p className={styles.singlGameInnerBlockContSub}>
                    {useLangChange(items.subtitle)}
                  </p>
                </div>
                <img className={styles.singlGameInnerBlockImg} src={items.imgBlock} alt="" />
              </div>
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
