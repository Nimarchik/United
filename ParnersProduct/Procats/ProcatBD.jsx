import { v4 as uuidv4 } from 'uuid'

const BASE_PATH = `/United`;

export const ProcatBD = [
	{
		id: uuidv4(),
		title: `titleProcat`,
		gpsName: `gpsProcatName`,
		telName: `telProcatName`,
		todoName: `todoProcatName`,
		gpsLogo: `${BASE_PATH}/ParnersProduct/logo/gps.png`,
		telLogo: `${BASE_PATH}/ParnersProduct/logo/tel.png`,
		todoLogo: `${BASE_PATH}/ParnersProduct/logo/todo.png`,
		logo: `${BASE_PATH}/ParnersProduct/logo/procatLogo.png`,
	},
]
