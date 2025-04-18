import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'

import sergey from '../../components/assets/TeamUnite/sergey.png'
import rustam from '../../components/assets/TeamUnite/rustam.png'
import Begench from '../../components/assets/TeamUnite/Begench.png'
import kirill from '../../components/assets/TeamUnite/kirill.png'
import dmitrii from '../../components/assets/TeamUnite/dmitrii.png'
import dmitriy from '../../components/assets/TeamUnite/dmitriy2.png'
import Merdan from '../../components/assets/TeamUnite/Merdan.png'
import Reshitguly from '../../components/assets/TeamUnite/Reshitguly.png'
import Roy from '../../components/assets/TeamUnite/Roy.png'
import Rahim from '../../components/assets/TeamUnite/Rahim.png'
import Victoria from '../../components/assets/TeamUnite/Victoriya.png'
import Danil from '../../components/assets/TeamUnite/Danil.png'
import Sahet from '../../components/assets/TeamUnite/Sahet.png'
import Elluminat from '../../components/assets/TeamUnite/Elluminat.png'
import Redirex from '../../components/assets/TeamUnite/Redirex.png'
import Denis from '../../components/assets/TeamUnite/Denis.png'
import uTacker from '../../components/assets/TeamUnite/uTacker.png'
import AboutParters from '../../shared/AboutParters'
import NewsEvents from '../../shared/NewsEvents'
import StartGame from '../UI/StartGame'

const TeamsUnite = () => {
	const fouterPerson = [
		{
			name: 'Sergey',
			subs: 'TeamsUniteFounderInnerItemBlockSub',
			img: `${sergey}`,
		},
		{
			name: 'Rustam',
			subs: 'TeamsUniteFounderInnerItemBlockSub',
			img: `${rustam}`,
		},
		{
			name: 'Begench',
			subs: 'TeamsUniteFounderInnerItemBlockSub',
			img: `${Begench}`,
		},
		{
			name: 'Kirill',
			subs: 'TeamsUniteFounderInnerItemBlockSub',
			img: `${kirill}`,
		},
		{
			name: 'Dmitriy',
			subs: 'TeamsUniteFounderInnerItemBlockSub',
			img: `${dmitrii}`,
		},
	]

	const teamProject = [
		{
			name: 'Merdan',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Merdan}`,
			id: 1,
		},
		{
			name: 'Reshitguly',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Reshitguly}`,
			id: 2,
		},
		{
			name: 'Roy',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Roy}`,
			id: 3,
		},
		{
			name: 'Rahim',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Rahim}`,
			id: 4,
		},
		{
			name: 'Victoria',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Victoria}`,
			id: 5,
		},
		{
			name: 'Danil',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Danil}`,
			id: 6,
		},
		{
			name: 'Sahet',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${Sahet}`,
			id: 7,
		},
		{
			name: 'Dmitriy',
			subs: 'TeamsUniteProjectInnerBlockSub',
			img: `${dmitriy}`,
			id: 8,
		},
	]

	const teamCommunity = [
		{
			name: 'Elluminat',
			subs: 'TeamsUniteCommunityInnerItemBlockSub',
			img: `${Elluminat}`,
		},
		{
			name: 'Redirex',
			subs: 'TeamsUniteCommunityInnerItemBlockSub',
			img: `${Redirex}`,
		},
		{
			name: 'Denis',
			subs: 'TeamsUniteCommunityInnerItemBlockSub',
			img: `${Denis}`,
		},
		{
			name: 'uTacker',
			subs: 'TeamsUniteCommunityInnerItemBlockSub',
			img: `${uTacker}`,
		},
	]



	return (
		<>
			<main className={styles.main}>
				<section className={styles.TeamsUnite}>
					<div className={styles.container}>
						<div className={styles.TeamsUniteInner}>
							<h1 className={styles.TeamsUniteInnerTitle}>
								{useLangChange('TeamsUniteInnerTitle')}
							</h1>
							<p className={styles.TeamsUniteInnerSub}>
								{useLangChange('TeamsUniteInnerSub')}
							</p>
						</div>
					</div>
				</section>

				<section className={styles.TeamsUniteFounder}>
					<div className={styles.container}>
						<div className={styles.TeamsUniteFounderInner}>
							<h2 className={styles.TeamsUniteFounderInnerTitle}>
								{useLangChange('TeamsUniteFounderInnerTitle')}
							</h2>
							<ul className={styles.TeamsUniteFounderInnerList}>
								{fouterPerson.map((item, index) => (
									<>
										<li
											className={styles.TeamsUniteFounderInnerItem}
											key={index}
										>
											<img
												className={styles.TeamsUniteFounderInnerItemImg}
												src={item.img}
												alt={`${item.name}`}
											/>
											<div className={styles.TeamsUniteFounderInnerItemBlock}>
												<h2
													className={
														styles.TeamsUniteFounderInnerItemBlockTitle
													}
												>
													{item.name}
												</h2>
												<p
													className={styles.TeamsUniteFounderInnerItemBlockSub}
												>
													{useLangChange(`${item.subs + index}`)}
												</p>
											</div>
										</li>
									</>
								))}
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.TeamsUniteProject}>
					<div className={styles.container}>
						<div className={styles.TeamsUniteProjectInner}>
							<h3 className={styles.TeamsUniteProjectInnerTitle}>
								{useLangChange('TeamsUniteProjectInnerTitle')}
							</h3>
							<ul className={styles.TeamsUniteProjectInnerList}>
								{teamProject.map((item, index) => (
									<li
										className={styles.TeamsUniteProjectInnerItem}
										key={item.id}
									>
										<img
											className={styles.TeamsUniteProjectInnerImg}
											src={item.img}
											alt={item.name}
										/>
										<div className={styles.TeamsUniteProjectInnerBlock}>
											<h3 className={styles.TeamsUniteProjectInnerBlockTitle}>
												{item.name}
											</h3>
											<p className={styles.TeamsUniteProjectInnerBlockSub}>
												{useLangChange(`${item.subs + index}`)}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.TeamsUniteCommunity}>
					<div className={styles.container}>
						<div className={styles.TeamsUniteCommunityInner}>
							<h4 className={styles.TeamsUniteCommunityInnerTitle}>
								{useLangChange('TeamsUniteCommunityInnerTitle')}
							</h4>
							<ul className={styles.TeamsUniteCommunityInnerList}>
								{teamCommunity.map((item, index) => (
									<li
										className={styles.TeamsUniteCommunityInnerItem}
										key={index}
									>
										<img
											className={styles.TeamsUniteCommunityInnerItemImg}
											src={item.img}
											alt=''
										/>
										<div className={styles.TeamsUniteCommunityInnerItemBlock}>
											<h5
												className={
													styles.TeamsUniteCommunityInnerItemBlockTitle
												}
											>
												{item.name}
											</h5>
											<p
												className={styles.TeamsUniteCommunityInnerItemBlockSub}
											>
												{useLangChange(`${item.subs + index}`)}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				<AboutParters />
				<NewsEvents />
				<StartGame />
			</main>
		</>
	)
}

export default TeamsUnite
