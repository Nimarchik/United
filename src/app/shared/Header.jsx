import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from '../components/styles/App.module.css'
import logo from '../components/assets/logo.svg'
import { useTranslation } from "react-i18next";
import useLangChange from "../pages/LangChange";




const Header = () => {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const { l: lang } = useParams();

	const [hover, setHover] = useState(false);
	const [value, setValue] = useState(() => localStorage.getItem('value') || 'uk');

	useEffect(() => {
		const supportedLangs = ['uk', 'en'];
		if (lang && supportedLangs.includes(lang)) {
			if (i18n.language !== lang) {
				i18n.changeLanguage(lang);
			}
			setValue(lang);
			localStorage.setItem('value', lang);
		}
	}, [lang, i18n]);

	const changeLanguage = (newLang) => {
		setValue(newLang);
		localStorage.setItem('value', newLang);

		const path = window.location.hash.replace(/^#/, '');
		const pathParts = path.split('/').filter(Boolean);

		if (pathParts.length > 0) {
			pathParts[0] = newLang;
		} else {
			pathParts.push(newLang);
		}

		navigate(`/${pathParts.join('/')}`);
	};



	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<div className={styles.container}>
						<nav className={styles.nav}>
							<Link to={`/`}>
								<img src={logo} alt='logo' />
							</Link>

							<div className={hover ? styles.menuActive : styles.menu}
								onClick={() => setHover(!hover)}
							>
								<span className={hover ? styles.line1Active : styles.line1}></span>
								<span className={hover ? styles.line2Active : styles.line1}></span>
								<span className={hover ? styles.line3Active : styles.line1}></span>
							</div>

							<span className={hover ? styles.navMedia : styles.navMediaHiden}>
								<ul className={styles.navList}>
									<li className={styles.navListItem}>
										<div className={styles.navListLink}>
											{useLangChange('navListLink')}
											<ul className={styles.navListItemList}>
												<li className={styles.navListItemListItem}>
													<Link to={`/${value}/launchPcId`} onClick={() => setHover(!hover)}>
														{useLangChange('navListItemListItemPc')}
													</Link>
												</li>
												<li className={styles.navListItemListItem}>
													<Link to={`/${value}/launchAndroid`} onClick={() => setHover(!hover)}>
														{useLangChange('navListItemListItemAnd')}
													</Link>
												</li>
												<li className={styles.navListItemListItem}>
													<Link to={`/${value}/teamspeak`} onClick={() => setHover(!hover)}>
														{useLangChange('TeamSpeakTopTitle')}
													</Link>
												</li>
												<li className={styles.navListItemListItem}>
													<Link to={`/${value}/mumble`} onClick={() => setHover(!hover)}>
														{useLangChange('navListItemListItemMum')}
													</Link>
												</li>
												<li className={styles.navListItemListItem}>
													<Link to={`/${value}/buygames`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkBuy')}
													</Link>
												</li>
												<li className={styles.navListItemListItem}>
													<Link to={`/${value}/keySteam`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkKey')} Steam
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className={styles.navListItem}>
										<div className={styles.navListLink1}>
											{useLangChange('navListLink1')}
											<ul className={styles.navListItemList1}>
												<li className={styles.navListItemListItem1}>
													<Link to={`/${value}/services-game`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkSer')}
													</Link>
												</li>
												<li className={styles.navListItemListItem1}>
													<Link to={`/${value}/OnlineGame`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkSet')}
													</Link>
												</li>
												<li className={styles.navListItemListItem1}>
													<Link to={`/${value}/SinglGames`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkSingl')}
													</Link>
												</li>
												<li className={styles.navListItemListItem1}>
													<Link to={`/${value}/ProgramForGame`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkProg')}
													</Link>
												</li>
												<li className={styles.navListItemListItem1}>
													<Link to={`/${value}/GamesForAndroid`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkGameAnd')}
													</Link>
												</li>

											</ul>
										</div>
									</li>
									<li className={styles.navListItem}>
										<Link to={`/${value}/donate`} className={styles.navListLink2} onClick={() => setHover(!hover)}>
											{useLangChange('navListLink2')}
										</Link>
									</li>
									<li className={styles.navListItem}>
										<div className={styles.navListLink3}>
											{useLangChange('navListLink3')}

											<ul className={styles.navListItemList3}>
												<li className={styles.navListItemListItem3}>
													<Link to={`/${value}/about`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkAbo')}
													</Link>
												</li>
												<li className={styles.navListItemListItem3}>
													<Link to={`/${value}/TeamsUnite`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkTeam')}
													</Link>
												</li>
												<li className={styles.navListItemListItem3}>
													<Link to={`/${value}/about#culture`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkCul')}
													</Link>
												</li>
												<li className={styles.navListItemListItem3}>
													<Link to={`/${value}/Parters`} onClick={() => setHover(!hover)}>
														{useLangChange('navListLink4')}
													</Link>
												</li>
												<li className={styles.navListItemListItem3}>
													<Link to={`/${value}/Career`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkKar')}
													</Link>
												</li>
												<li className={styles.navListItemListItem3}>
													<Link to={`/${value}/Resource`} onClick={() => setHover(!hover)}>
														{useLangChange('footerInnerItemLinkRes')}
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className={styles.navListItem}>
										<Link
											to={`/${value}/Parters`}
											className={styles.navListLink4} onClick={() => setHover(!hover)}
										>
											{useLangChange('navListLink4')}
										</Link>
									</li>
									<li className={styles.navListItem}>
										<Link
											to={`/${value}/ComunityUniteICQ`}
											className={styles.navListLink5} onClick={() => setHover(!hover)}
										>
											{useLangChange('navListLink5')}
										</Link>
									</li>
									<li className={styles.navListItem}>
										<Link to={`/${value}/Contacts`} className={styles.navListLink6} onClick={() => setHover(!hover)}>
											{useLangChange('navListLink6')}
										</Link>
									</li>
								</ul>

								<select
									value={value}
									className={styles.listLang}
									onChange={e => changeLanguage(e.target.value)}
								>
									<option value='uk'>UK</option>
									<option value='en'>EN</option>
								</select>
								<button className={styles.navBtnReg}>
									{useLangChange('innerContentBtn')}
								</button>
							</span>

						</nav>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;