import { v4 as uuidv4 } from 'uuid'

const BASE_PATH = `/United`;

export const ShopBD = [
	{
		id: uuidv4(),
		title: `titleShop`,
		gpsName: `gpsShopName`,
		telName: `telShopName`,
		todoName: `todoShopName`,
		gpsLogo: `${BASE_PATH}/ParnersProduct/logo/gps.png`,
		telLogo: `${BASE_PATH}/ParnersProduct/logo/tel.png`,
		todoLogo: `${BASE_PATH}/ParnersProduct/logo/todo.png`,
		logo: `${BASE_PATH}/ParnersProduct/logo/shopLogo.png`,
	},
]
