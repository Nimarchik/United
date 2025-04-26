import { v4 as uuidv4 } from 'uuid'

const BASE_PATH = `/United`;

export const PreeBD = [
	{
		id: uuidv4(),
		title: `titlePree`,
		gpsName: `gpsPreeName`,
		telName: `telPreeName`,
		todoName: `todoPreeName`,
		gpsLogo: `${BASE_PATH}/ParnersProduct/logo/gps.png`,
		telLogo: `${BASE_PATH}/ParnersProduct/logo/tel.png`,
		todoLogo: `${BASE_PATH}/ParnersProduct/logo/todo.png`,
		logo: `${BASE_PATH}/ParnersProduct/logo/joyLogo.png`,
	},
	{
		id: uuidv4(),
		title: `titlePree`,
		gpsName: `gpsPreeName2`,
		telName: `telPreeName`,
		todoName: `todoPreeName2`,
		gpsLogo: `${BASE_PATH}/ParnersProduct/logo/gps.png`,
		telLogo: `${BASE_PATH}/ParnersProduct/logo/tel.png`,
		todoLogo: `${BASE_PATH}/ParnersProduct/logo/todo.png`,
		logo: `${BASE_PATH}/ParnersProduct/logo/joyLogo.png`,
	},
	{
		id: uuidv4(),
		title: `titleOther`,
		gpsName: `gpsOtherName`,
		telName: `telOtherName`,
		todoName: `todoOtherName`,
		gpsLogo: `${BASE_PATH}/ParnersProduct/logo/gps.png`,
		telLogo: `${BASE_PATH}/ParnersProduct/logo/tel.png`,
		todoLogo: `${BASE_PATH}/ParnersProduct/logo/todo.png`,
		logo: `${BASE_PATH}/ParnersProduct/logo/other.png`,
	},
]