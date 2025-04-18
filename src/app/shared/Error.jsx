import { Link, useRouteError } from 'react-router-dom'
import styles from '../components/styles/App.module.css'
import useLangChange from '../pages/LangChange'
import Helps from './Helps'
import StartGame from '../pages/UI/StartGame'

const Error = () => {
	const error = useRouteError()
  console.error(error);
  
	return (
		<>
			<section className={styles.error} id='error-page'>
				<div className={styles.container}>
					<div className={styles.errorInner}>
						<p className={styles.errorInnerimg}>
							{error.status}
						</p>
						<h1 className={styles.errorInnerTitle}>
							{useLangChange('errorInnerTitle')}
						</h1>
						<p className={styles.errorInnerSub}>
							{useLangChange('errorInnerSub')}
						</p>
						<Link to={`/`} className={styles.errorInnerBtn}>
							{useLangChange('errorInnerBtn')}
						</Link>
					</div>
				</div>
				<Helps />
				<StartGame />
			</section>
		</>
	)
}

export default Error
