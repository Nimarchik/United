import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange';

// PICTURES
import padLock from '../../components/assets/Privacy/Padlock.png'
const Privacy = () => {
  return (
		<>
			<main className={styles.main}>
				<section className={styles.privacy}>
					<div className={styles.container}>
						<div className={styles.privacyInner}>
							<h1 className={styles.privacyInnerTitle}>
								{useLangChange('privacyInnerTitle')}
							</h1>
							<p className={styles.privacyInnerSub}>
								{useLangChange('privacyInnerSub')}
							</p>
						</div>
					</div>
				</section>

				<section className={styles.privacyContent}>
					<div className={styles.container}>
						<div className={styles.privacyContentBlock}>
							<img
								className={styles.privacyContentBlockImg}
								src={padLock}
								alt=''
							/>
							<div className={styles.privacyContentBlockCont}>
								<h2 className={styles.privacyContentBlockContTitle}>
									{useLangChange('privacyContentBlockContTitle')}
								</h2>
								<p className={styles.privacyContentBlockContSub}>
									{useLangChange('privacyContentBlockContSub')}
								</p>
							</div>
						</div>
						<div className={styles.privacyContentInner}>
							<h3 className={styles.privacyContentInnerTitle}>
								{useLangChange('privacyInnerTitle')}
							</h3>
							<p className={styles.privacyContentInnerSub}>
								{useLangChange('privacyContentInnerSub')}
							</p>

							<ul className={styles.privacyContentInnerList}>
								<li className={styles.privacyContentInnerItem}>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSub')}
									</p>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h2 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleDef')}
									</h2>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubDef')}
									</p>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h3 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleCol')}
									</h3>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubCol')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubCol1')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubCol2')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubCol3')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubCol4')}
									</p>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h4 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleType')}
									</h4>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubType')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubType1')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubType2')}
										<ul className={styles.privacyContentInnerItemSubList}>
											<li className={styles.privacyContentInnerItemSubListItem}>
												{useLangChange('privacyContentInnerItemSubListItem')}
											</li>
											<li className={styles.privacyContentInnerItemSubListItem}>
												{useLangChange('privacyContentInnerItemSubListItem1')}
											</li>
											<li className={styles.privacyContentInnerItemSubListItem}>
												{useLangChange('privacyContentInnerItemSubListItem2')}
											</li>
											<li className={styles.privacyContentInnerItemSubListItem}>
												{useLangChange('privacyContentInnerItemSubListItem3')}
											</li>
										</ul>
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubType3')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubType4')}
									</p>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h5 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleAgeData')}
									</h5>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubData')}
									</p>
									<ul className={styles.privacyContentInnerItemSubList}>
										<li className={styles.privacyContentInnerItemSubListItem}>
											{useLangChange('privacyContentInnerItemSubListItemData')}
										</li>
										<li className={styles.privacyContentInnerItemSubListItem}>
											{useLangChange('privacyContentInnerItemSubListItemData1')}
										</li>
										<li className={styles.privacyContentInnerItemSubListItem}>
											{useLangChange('privacyContentInnerItemSubListItemData2')}
										</li>
									</ul>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h6 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleDate')}
									</h6>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubDate')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubDate1')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubDate2')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubDate3')}
									</p>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h6 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleControls')}
									</h6>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubControls')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubControls2')}
									</p>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubControls3')}
									</p>
								</li>
								<li className={styles.privacyContentInnerItem}>
									<h6 className={styles.privacyContentInnerItemTitle}>
										{useLangChange('privacyContentInnerItemTitleBaby')}
									</h6>
									<p className={styles.privacyContentInnerItemSub}>
										{useLangChange('privacyContentInnerItemSubBaby')}
									</p>
								</li>
							</ul>
							<div className={styles.privacyContentDate}>
								<h6 className={styles.privacyContentDate}>
									{useLangChange('privacyContentDate')}
								</h6>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Privacy;