import styles from '../../components/styles/App.module.css'
import useLangChange from '../LangChange'

const Rules = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.rules}>
					<div className={styles.container}>
						<div className={styles.rulesInner}>
							<h1 className={styles.rulesInnerTitle}>
								{useLangChange('rulesInnerTitle')}
							</h1>
							<p className={styles.rulesInnerSub}>
								{useLangChange('rulesInnerSub')}
							</p>
						</div>
					</div>
				</section>

				<section className={styles.rulesInnerContent}>
					<div className={styles.container}>
						<div className={styles.rulesInnerContentWrapper}>
							<h2 className={styles.rulesInnerContentWrapperTitle}>
								{useLangChange('rulesInnerContentWrapperTitle')}
							</h2>
							<p className={styles.rulesInnerContentWrapperSub}>
								{useLangChange('privacyContentInnerSub')}
							</p>
						</div>
						<ul className={styles.rulesInnerContentList}>
							<li className={styles.rulesInnerContentItem}>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSub')}
								</p>
							</li>
							<li className={styles.rulesInnerContentItem}>
								<h1 className={styles.rulesInnerContentItemTitle}>
									{useLangChange('rulesInnerContentItemTitleUse')}
								</h1>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubUse')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubUse1')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubUse2')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubUse3')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubUse4')}
								</p>
							</li>
							<li className={styles.rulesInnerContentItem}>
								<h1 className={styles.rulesInnerContentItemTitle}>
									{useLangChange('rulesInnerContentItemTitleRes')}
								</h1>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubReg')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubReg1')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubReg2')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubReg3')}
								</p>
							</li>
							<li className={styles.rulesInnerContentItem}>
								<h1 className={styles.rulesInnerContentItemTitle}>
									{useLangChange('rulesInnerContentItemTitleRules')}
								</h1>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubRules')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubRules1')}
								</p>
								<p className={styles.rulesInnerContentItemSub}>
									{useLangChange('rulesInnerContentItemSubRules2')}
								</p>
							</li>
						</ul>
						<div className={styles.rulesInnerContentDate}>
							<p className={styles.privacyContentDate}>
								{useLangChange('privacyContentDate')}
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Rules
