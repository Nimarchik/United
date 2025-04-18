import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './app/pages/Home.jsx'
import Error from './app/shared/Error.jsx'
import News from './app/pages/News/News.jsx'
import Mumble from './app/pages/Content/Mumble.jsx'
import About from './app/pages/Information/About.jsx'
import TeamSpeak from './app/pages/Teams/TeamSpeak.jsx'
import Donate from './app/pages/Information/Donate.jsx'
import KeySteam from './app/pages/Content/KeySteam.jsx'
import Resource from './app/pages/Content/Resource.jsx'
import NewsPreview from './app/pages/UI/NewsPreview.jsx'
import TeamsUnite from './app/pages/Teams/TeamsUnite.jsx'
import { NewsBD } from '../public/NewsPictures/NewsBD.jsx'
import LauncherForPc from './app/pages/OS/LauncherForPc.jsx'
import OnlineGames from './app/pages/GamesForPC/OnlineGames.jsx'
import ComunityUnite from './app/pages/Content/ComunityUnite.jsx'
import SecvicesGames from './app/pages/Content/SecvicesGames.jsx'
import LauncherForAndroid from './app/pages/OS/LauncherForAndroid.jsx'
import ProgramsforGames from './app/pages/Content/ProgramsforGames.jsx'
import ServicesGamePreview from './app/pages/UI/ServicesGamePreview.jsx'
import { servicesGamesCards } from '../public/ServicesGames/ServicesGamesBD.jsx'
import { OnlineGamesBD } from '../public/OnlineGamesPictures/OnlineGamesBD.jsx'
import './app/components/styles/_Flickyti.scss'
import './i18n.js'
import GamesforAndroid from './app/pages/GamesForAndoid/GamesforAndroid.jsx'
import Parterres from './app/pages/Information/Parterres.jsx'
import All from './app/shared/Sections/All.jsx'
import Contact from './app/pages/Information/Contact.jsx'
import Privacy from './app/pages/Information/Privacy.jsx'
import Rules from './app/pages/Information/Rules.jsx'
import SinglGames from './app/pages/GamesForPC/SinglGames.jsx'
import { SinglGamePreview } from './app/shared/SinglGamePreview.jsx'
import Career from './app/pages/Information/Career.jsx'
import BuyGames from './app/pages/Content/BuyGames.jsx'

const searchID = servicesGamesCards.map(index => index)
const searchIDOnlineGame = OnlineGamesBD.map(index => index)
const searchIDNews = NewsBD.map(index => index)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: ``,
				element: <Home />,
			},
			{
				path: `/:l`,
				element: <Home />,
			},
			{
				path: `/:l/launchPcId`,
				element: <LauncherForPc />,
			},
			{
				path: `/:l/teamspeak`,
				element: <TeamSpeak />,
			},
			{
				path: `/:l/mumble`,
				element: <Mumble />,
			},
			{
				path: `/:l/launchAndroid`,
				element: <LauncherForAndroid />,
			},
			{
				path: `/:l/services-game`,
				element: <SecvicesGames index={searchID} />,
			},
			{
				path: `/:l/game-preview/:id`,
				element: <ServicesGamePreview />,
			},
			{
				path: `/:l/donate`,
				element: <Donate />,
			},
			{
				path: `/:l/about`,
				element: <About />,
			},
			{
				path: `/:l/TeamsUnite`,
				element: <TeamsUnite />,
			},
			{
				path: `/:l/OnlineGame`,
				element: <OnlineGames index={searchIDOnlineGame} />,
			},
			{
				path: `/:l/News`,
				element: <News index={searchIDNews} />,
			},
			{
				path: `/:l/NewsPreview/:id`,
				element: <NewsPreview />,
			},
			{
				path: `/:l/Resource`,
				element: <Resource />,
			},
			{
				path: `/:l/keySteam`,
				element: <KeySteam />,
			},
			{
				path: `/:l/ProgramForGame`,
				element: <ProgramsforGames />,
			},
			{
				path: `/:l/GamesForAndroid`,
				element: <GamesforAndroid />,
			},
			{
				path: `/:l/ComunityUniteICQ`,
				element: <ComunityUnite />,
			},
			{
				path: `/:l/Parters`,
				element: <Parterres />,
			},
			{
				path: `/:l/Contacts`,
				element: <Contact />,
			},
			{
				path: `/:l/Error`,
				element: <Error />,
			},
			{
				path: `/:l/Privacy`,
				element: <Privacy />
			},
			{
				path: `/:l/Rules`,
				element: <Rules />
			},
			{
				path: `/:l/SinglGames`,
				element: <SinglGames />
			},
			{
				path: `/:l/singl-game-preview/:id`,
				element: <SinglGamePreview />
			},
			{
				path: `/:l/Career`,
				element: <Career />
			},
			{
				path: `/:l/buygames`,
				element: <BuyGames />
			}
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} basename="/United" />
	</StrictMode>
)
