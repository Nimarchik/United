import { GameTekBD } from '../../../../public/ParnersProduct/GameTek/GameTekBD'
import { PreeBD } from '../../../../public/ParnersProduct/Pree/PreeBD'
import { ProcatBD } from '../../../../public/ParnersProduct/Procats/ProcatBD'
import { ShopBD } from '../../../../public/ParnersProduct/Shop/ShopBD'
import styles from '../../components/styles/App.module.css'
import SectionPreviewParters from '../SectionPreviewParters'

const All = () => {
	return (
		<>
			<SectionPreviewParters cards={GameTekBD} />
			<SectionPreviewParters cards={ProcatBD} />
			<SectionPreviewParters cards={ShopBD} />
			<SectionPreviewParters cards={PreeBD} />
		</>
	)
}

export default All
