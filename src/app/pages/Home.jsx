import styles from '../components/styles/App.module.css'
import { Link, useParams } from 'react-router-dom'
import StartGame from './UI/StartGame'
import NewsEvents from '../shared/NewsEvents'

import logo from '../components/assets/logo.svg'
import topPictures from '../components/assets/Home/Rectangle 4.jpg'
import picPC from '../components/assets/Home/picPC.png'
import picAndroid from '../components/assets/Home/picAndroid.png'
import ServPicture from '../components/assets/Home/groupGamePictures.png'
import picWarr from '../components/assets/Home/picWarr.png'
import gtaMen from '../components/assets/Home/gta-men.png'
import insta from '../components/assets/Home/insta.svg'
import icq from '../components/assets/Home/icq.svg'
import PicIcq from '../components/assets/Home/icqPhone.png'
import phone1 from '../components/assets/Home/phone1.png'
import phone2 from '../components/assets/Home/phone2.png'
import phone3 from '../components/assets/Home/phone3.png'
import battlenet from '../components/assets/Home/battlenet.svg'
import steam from '../components/assets/Home/steam.svg'
import epic from '../components/assets/Home/epic.svg'
import gameClub1 from '../components/assets/Home/gameClub1.png'
import gameClub2 from '../components/assets/Home/gameClub2.png'
import keySteamPic from '../components/assets/Home/keySteamPic.png'
import img11 from '../components/assets/LauncherForPc/img1.png'
import img22 from '../components/assets/LauncherForPc/img2.png'
import img33 from '../components/assets/LauncherForPc/img3.png'
import img44 from '../components/assets/LauncherForPc/img4.png'
import img55 from '../components/assets/LauncherForPc/img5.png'
import img66 from '../components/assets/LauncherForPc/img6.png'
import img77 from '../components/assets/LauncherForPc/img7.png'
import img88 from '../components/assets/LauncherForPc/img8.png'
import imgRight11 from '../components/assets/LauncherForPc/imgRight1.png'
import imgRight22 from '../components/assets/LauncherForPc/imgRight2.png'
import imgRight33 from '../components/assets/LauncherForPc/imgRight3.png'
import imgRight44 from '../components/assets/LauncherForPc/imgRight4.png'
import imgRight55 from '../components/assets/LauncherForPc/imgRight5.png'
import imgRight66 from '../components/assets/LauncherForPc/imgRight6.png'
import imgRight77 from '../components/assets/LauncherForPc/imgRight7.png'
import imgRight88 from '../components/assets/LauncherForPc/imgRight8.png'
import imgRight99 from '../components/assets/LauncherForPc/imgRight9.png'
import useLangChange from './LangChange'

const Home = () => {
	const value = localStorage.getItem('value') || 'uk'


	return (
		<>
			<main className={styles.main}>
				<section className={styles.uniteHome}>
					<div className={styles.container}>
						<div className={styles.innerUnite}>
							<div className={styles.innerContent}>
								<img className={styles.innerLogo} src={logo} alt='logo' />
								<h1 className={styles.innerContentTitle}>
									{useLangChange('innerContentTitle')}
								</h1>
								<p className={styles.innerContentSubtitle}>
									{useLangChange('innerContentSubtitle')}
								</p>
								<div className={styles.innerContentNavig}>
									<button className={styles.innerContentBtn}>
										{useLangChange('innerContentBtn')}
									</button>
									<p className={styles.innerContentText}>
										{useLangChange('innerContentText')}
									</p>
									<ul className={styles.innerContentList}>
										<li className={styles.innerContentItem}>
											<Link to={`/${value}/launchPcId`}>
												<svg
													className={styles.windows}
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='25'
													viewBox='0 0 24 25'
													fill='inherit'
												>
													<g clipPath='url(#clip0_7859_8350)'>
														<path
															d='M0 3.33124L9.8305 1.97434V11.4654H0V3.33124ZM9.8305 12.6812V22.0601L0 20.7105V12.6812H9.8305ZM10.9189 1.8296L24.0031 0.03125V11.4654H10.9189V1.8296ZM24.0031 12.6812V24.0032L10.9189 22.2049V12.674H24.0031V12.6812Z'
															fill='inherit'
														/>
													</g>
													<defs>
														<clipPath id='clip0_7859_8350'>
															<rect
																width='24'
																height='24'
																fill='inherit'
																transform='translate(0 0.5)'
															/>
														</clipPath>
													</defs>
												</svg>
											</Link>
										</li>
										<li className={styles.innerContentItem}>
											<Link to={`/${value}/launchAndroid`}>
												<svg
													className={styles.android}
													xmlns='http://www.w3.org/2000/svg'
													width='26'
													height='31'
													viewBox='0 0 26 31'
													fill='inherit'
												>
													<path
														d='M1.97885 21.2969C0.890462 21.2969 0 20.3151 0 19.115V11.4787C0 10.2787 0.890462 9.29688 1.97885 9.29688C3.06725 9.29688 3.95771 10.2787 3.95771 11.4787V19.1151C3.95771 20.3151 3.06725 21.2969 1.97885 21.2969Z'
														fill='inherit'
													/>
													<path
														d='M24.0218 21.2969C22.9334 21.2969 22.043 20.3151 22.043 19.115V11.4787C22.043 10.2787 22.9334 9.29688 24.0218 9.29688C25.1102 9.29688 26.0007 10.2787 26.0007 11.4787V19.1151C26.0007 20.3151 25.1102 21.2969 24.0218 21.2969Z'
														fill='inherit'
													/>
													<path
														d='M18.9036 23.9468V29.3728C18.9036 30.2952 18.2057 31.0006 17.293 31.0006C16.3803 31.0006 15.6825 30.2952 15.6825 29.3728V23.9468H10.3139V29.3728C10.3139 30.2952 9.5623 31.0006 8.70331 31.0006C7.84433 31.0006 7.09274 30.2952 7.09274 29.3728V23.9468H4.94531V9.29688H21.051V23.9468H18.9036Z'
														fill='inherit'
													/>
													<path
														d='M20.7215 8H4.89062C5.10169 5.85002 7.31804 2 12.8588 2C18.1358 2 20.5104 5.85002 20.7215 8Z'
														fill='inherit'
													/>
													<path
														d='M11.223 5.5C11.223 4.94999 10.7481 4.5 10.1676 4.5C9.58711 4.5 9.1122 4.94999 9.1122 5.5C9.1122 6.05001 9.58711 6.5 10.1676 6.5C10.7481 6.5 11.223 6.05001 11.223 5.5Z'
														fill='inherit'
													/>
													<path
														d='M16.4999 5.5C16.4999 4.94999 16.025 4.5 15.4445 4.5C14.864 4.5 14.3891 4.94999 14.3891 5.5C14.3891 6.05001 14.864 6.5 15.4445 6.5C16.025 6.5 16.4999 6.05001 16.4999 5.5Z'
														fill='inherit'
													/>
													<path
														d='M8.40308 4C8.19767 4 8.04357 3.86611 7.94089 3.59842L6.96515 0.92133C6.86242 0.586694 6.96515 0.185115 7.22193 0.0513067C7.4787 -0.0825787 7.78685 0.0513067 7.88952 0.385943L8.86527 3.06303C8.968 3.39767 8.86527 3.79925 8.60849 3.93306C8.55718 3.93306 8.50581 4 8.40308 4Z'
														fill='inherit'
													/>
													<path
														d='M16.7867 3.3C16.7353 3.3 16.6327 3.3 16.5813 3.24477C16.3245 3.13432 16.2218 2.80308 16.3245 2.527L17.3003 0.318403C17.403 0.042328 17.7111 -0.0681274 17.9679 0.042328C18.2246 0.152783 18.3274 0.484022 18.2246 0.760097L17.2489 2.9687C17.1976 3.18954 16.9922 3.3 16.7867 3.3Z'
														fill='inherit'
													/>
												</svg>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className={styles.shadowBox}>
								<div className={styles.shadow}></div>
								<img
									className={styles.innerUnitePictures}
									src={topPictures}
									alt=''
								/>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.gameInc}>
					<div className={styles.lanchPcImgPakLeft1}>
						<img className={styles.img11} src={img11} alt='' />
						<img className={styles.img22} src={img22} alt='' />
						<img className={styles.img33} src={img33} alt='' />
						<img className={styles.img44} src={img44} alt='' />
						<img className={styles.img55} src={img55} alt='' />
						<img className={styles.img66} src={img66} alt='' />
						<img className={styles.img77} src={img77} alt='' />
						<img className={styles.img88} src={img88} alt='' />
					</div>
					<div className={styles.gameIncInnerI}>
						<div className={styles.containers}>
							<div className={styles.gameIncInner}>
								<h2 className={styles.gameIncInnerTitle}>
									{useLangChange('gameIncInnerTitle')}
								</h2>
								<p className={styles.gameIncInnerSubtitle}>
									{useLangChange('gameIncInnerSubtitle')}
								</p>
							</div>
						</div>
					</div>

					<div className={styles.lanchPcImgPakRight1}>
						<img className={styles.imgRight11} src={imgRight11} alt='' />
						<img className={styles.imgRight22} src={imgRight22} alt='' />
						<img className={styles.imgRight33} src={imgRight33} alt='' />
						<img className={styles.imgRight44} src={imgRight44} alt='' />
						<img className={styles.imgRight55} src={imgRight55} alt='' />
						<img className={styles.imgRight66} src={imgRight66} alt='' />
						<img className={styles.imgRight77} src={imgRight77} alt='' />
						<img className={styles.imgRight88} src={imgRight88} alt='' />
						<img className={styles.imgRight99} src={imgRight99} alt='' />
					</div>
				</section>
				<section className={styles.sectionOurProduct}>
					<div className={styles.container}>
						<div className={styles.ourInner}>
							<div className={styles.blockTitle}>
								<p className={styles.nameBlock}>{useLangChange('nameBlock')}</p>
								<h3 className={styles.sectionTitle}>
									{useLangChange('sectionTitle')}
								</h3>
								<p className={styles.sectionSubtitle}>
									{useLangChange('sectionSubtitle')}
								</p>
							</div>

							<div className={styles.innerDownload}>
								<Link to={`/:lang/launchPcId`}>
									<div className={styles.innerDownoladBlock1}>
										<h4 className={styles.blocksTitle}>
											{useLangChange('blocksTitle')}
										</h4>
										<img className={styles.blockImg1} src={picPC} alt='' />
										<p className={styles.blocksLink1}>
											{useLangChange('blocksLink1')}
											<span className={styles.arrows1}> {'>'} </span>
										</p>
									</div>
								</Link>
								<Link to={`/${value}/launchAndroid`}>
									<div className={styles.innerDownoladBlock2}>
										<h4 className={styles.blocksTitle2}>
											{useLangChange('blocksTitle2')}
										</h4>
										<img className={styles.blockImg2} src={picAndroid} alt='' />
										<p className={styles.blocksLink2}>
											{useLangChange('blocksLink2')}
											<span className={styles.arrows2}>{'>'}</span>
										</p>
									</div>
								</Link>
							</div>
							<div className={styles.innerServicesGame}>
								<Link to={`/${value}/services-game`}>
									<div className={styles.groupContentServices}>
										<div className={styles.servBlockTitle}>
											<h4 className={styles.servTitle}>
												{useLangChange('servTitle')}
											</h4>
											<p className={styles.servSubtitle}>
												{useLangChange('servSubtitle')}
											</p>
										</div>
										<div className={styles.servContent}>
											<img
												className={styles.servPictures}
												src={ServPicture}
												alt=''
											/>
										</div>
									</div>

									<p className={styles.servLink}>
										{useLangChange('servLink')}{' '}
										<span className={styles.servArrow}>{'>'}</span>
									</p>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.popularGame}>
					<div className={styles.container}>
						<Link to={`/${value}/OnlineGame`}>
							<div className={styles.popularGameInner}>
								<div className={styles.popularGameInnerContent}>
									<h1 className={styles.popularGameInnerContentTitle}>
										{useLangChange('popularGameInnerContentTitle')}
									</h1>
									<p className={styles.popularGameInnerContentSub}>
										{useLangChange('popularGameInnerContentSub')}
									</p>
								</div>
								<img
									className={styles.popularGameInnerContentImg}
									src={picWarr}
									alt='Warr men'
								/>
								<p className={styles.popularGameInnerContentLink}>
									{useLangChange('popularGameInnerContentLink')} {'>'}
								</p>
							</div>
						</Link>
					</div>
				</section>

				<section className={styles.getCommunity}>
					<div className={styles.container}>
						<Link to={`/${value}/ComunityUniteICQ`}>
							<div className={styles.communityInner}>
								<div className={styles.communityInnerContent}>
									<h1 className={styles.communityInnerContentTitle}>
										{useLangChange('communityInnerContentTitle')}
									</h1>
									<p className={styles.communityInnerContentSub}>
										{useLangChange('communityInnerContentSub')}
									</p>
								</div>
								<img
									className={styles.popularGameInnerImg}
									src={gtaMen}
									alt='gta men'
								/>
								<p className={styles.popularGameInnerLink}>
									{useLangChange('popularGameInnerLink')} {'>'}
								</p>
							</div>
						</Link>
					</div>
				</section>

				<section className={styles.info}>
					<div className={styles.container}>
						<ul className={styles.infoList}>
							<li className={styles.infoListItem1}>
								<span className={styles.infoListItemBold}>2700+</span>
								{useLangChange('infoListItem1')}
							</li>
							<li className={styles.infoListItem2}>
								<span className={styles.infoListItemBold}>45+</span>

								{useLangChange('infoListItem2')}
							</li>
							<li className={styles.infoListItem3}>
								<span className={styles.infoListItemBold}>20мс</span>

								{useLangChange('infoListItem3')}
							</li>
							<li className={styles.infoListItem4}>
								<span className={styles.infoListItemBold}>
									<p className={styles.infoListItemBolds}>Android</p>
									<span className={styles.infoListItemBolds3}>
										{useLangChange('infoListItemBolds3')}
									</span>
									<p className={styles.infoListItemBolds}>PC</p>
								</span>

								{useLangChange('infoListItem4')}
							</li>
						</ul>
					</div>
				</section>

				<NewsEvents />

				<section className={styles.social}>
					<div className={styles.container}>
						<p className={styles.socialSuntitle}>
							{useLangChange('socialSuntitle')}
						</p>
						<h1 className={styles.socialTitle}>
							{useLangChange('socialTitle')}
						</h1>
						<p className={styles.subsTitle}>{useLangChange('subsTitle')}</p>
						<div className={styles.socialInner}>
							<Link>
								<div className={styles.socialInnerInst}>
									<div className={styles.socialInnerInstBLock}>
										<img src={insta} alt='' />
									</div>
									<h6 className={styles.socialInnerInstTitle}>
										{useLangChange('socialInnerInstTitle')} Instagram
									</h6>
									<div className={styles.socialInnerInstBlockImg}>
										<img
											className={styles.socialInnerInstBlockImgPic}
											src={phone1}
											alt=''
										/>
										<img
											className={styles.socialInnerInstBlockImgPic}
											src={phone2}
											alt=''
										/>
										<img
											className={styles.socialInnerInstBlockImgPic}
											src={phone3}
											alt=''
										/>
									</div>
									<p className={styles.socialInnerInstLink}>
										{useLangChange('socialInnerInstLink')} {'>'}
									</p>
								</div>
							</Link>
							<Link>
								<div className={styles.socialInnerIcq}>
									<div className={styles.socialInnerIcqBlock}>
										<img src={icq} alt='' />
										<h6 className={styles.socialInnerIcqBlockTitle}>icq</h6>
									</div>
									<h6 className={styles.socialInnerIcqTitle}>
										{useLangChange('socialInnerIcqTitle')} ICQ{' '}
										{useLangChange('socialInnerIcqTitle1')}
									</h6>
									<img
										className={styles.socialInnerIcqPic}
										src={PicIcq}
										alt=''
									/>
									<p className={styles.socialInnerIcqLink}>
										{useLangChange('socialInnerInstLink')} {'>'}
									</p>
								</div>
							</Link>
						</div>
					</div>
				</section>

				<section className={styles.otherServices}>
					<div className={styles.container}>
						<p className={styles.nameSection}>{useLangChange('nameSection')}</p>
						<h1 className={styles.otherServicesTitle}>
							{useLangChange('otherServicesTitle')}
						</h1>
						<p className={styles.otherServicesSub}>
							{useLangChange('otherServicesSub')}
						</p>

						<div className={styles.otherServicesInner}>
							<Link to={`/${value}/buygames`} className={styles.otherServicesInnerSteam}>
								<div className={styles.otherSteamBlock}>
									<h2 className={styles.otherSteamBlockTitle}>
										Steam, Epic Games, Battle.net
									</h2>
									<p className={styles.otherSteamBlockSub}>
										{useLangChange('otherSteamBlockSub')}
									</p>
								</div>
								<div className={styles.otherSteamBlockPic}>
									<img
										className={styles.otherSteamBlockPicBatt}
										src={battlenet}
										alt=''
									/>
									<img
										className={styles.otherSteamBlockPicSteam}
										src={steam}
										alt=''
									/>
									<img
										className={styles.otherSteamBlockPicEpic}
										src={epic}
										alt=''
									/>
								</div>

								<p className={styles.otherServicesLink}>
									{useLangChange('otherServicesLink')} {'>'}
								</p>
							</Link>
							<Link to={`/${value}/Parters`} className={styles.partnersInner}>
								<div className={styles.partners}>
									<div className={styles.partnersBlockTitle}>
										<h2 className={styles.partnersTitle}>
											{useLangChange('partnersTitle')}
										</h2>
										<p className={styles.partnersSub}>
											{useLangChange('partnersSub')}
										</p>
									</div>
									<div className={styles.partnersBlockImg}>
										<img
											className={styles.partnersImg1}
											src={gameClub1}
											alt='photo game club'
										/>
										<img
											className={styles.partnersImg2}
											src={gameClub2}
											alt='photo game clubs'
										/>
									</div>
								</div>
								<p className={styles.partnersLink}>
									{useLangChange('partnersLink')} {'>'}
								</p>
							</Link>
							<Link to={`/${value}/keySteam`} className={styles.keySteamInner}>
								<div className={styles.keySteam}>
									<div className={styles.keySteamBlockTitle}>
										<h2 className={styles.keySteamTitle}>
											{useLangChange('keySteamTitle')}
										</h2>
										<p className={styles.keySteamSub}>
											{useLangChange('keySteamSub')}
										</p>
									</div>
									<img
										className={styles.keySteamImg}
										src={keySteamPic}
										alt='photo steam'
									/>
								</div>
								<p className={styles.keySteamLink}>
									{useLangChange('keySteamTitle')} {'>'}
								</p>
							</Link>
						</div>
					</div>
				</section>
				<StartGame useLangChange={useLangChange} />
			</main>
		</>
	)
}

export default Home
