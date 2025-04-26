import { v4 as uuidv4 } from 'uuid'

const BASE_PATH = `/United`;

export const SinglGamesBD = [
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/wither.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/witcher.png`,
    subGenre: `Аction, RPG`,
    title: `The Witcher 3: Wild Hunt`,
    downolad: `https://store.steampowered.com/app/292030/Vidmak_3_Dikij_gin/`,
    registration: `https://store.steampowered.com/app/292030/Vidmak_3_Dikij_gin/`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleWitcher`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blocWitcher.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/skyrim.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/skyrim.png`,
    subGenre: `Аction, RPG`,
    title: `The Elder Scrolls V: Skyrim`,
    downolad: `https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/`,
    registration: `https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleSkyrim`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blocSkyrim.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/atomic.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/atomic.png`,
    subGenre: `Shooter, Action, Adventure`,
    title: `Atomic Heart`,
    downolad: `https://store.steampowered.com/app/668580/Atomic_Heart/`,
    registration: `https://store.steampowered.com/app/668580/Atomic_Heart/`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleAtomic`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockAtomic.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/assasin.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/asssasin.png`,
    subGenre: `Stealth Action, Adventure`,
    title: `Assasin’s Creed 2`,
    downolad: `https://store.steampowered.com/app/33230/Assassins_Creed_2/?l=russian`,
    registration: `https://store.steampowered.com/app/33230/Assassins_Creed_2/?l=russian`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleAssasin`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockAssasin.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/mafia.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/mafia.png`,
    subGenre: `Shooter, Adventure`,
    title: `Mafia 2`,
    downolad: `https://store.steampowered.com/app/50130/Mafia_II_Classic/?l=russian`,
    registration: `https://store.steampowered.com/app/50130/Mafia_II_Classic/?l=russian`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleMafia`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockMafia.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/Dishonored.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/dishonored.png`,
    subGenre: `Stealth Action, RPG.`,
    title: `Dishonored`,
    downolad: `https://store.steampowered.com/app/217980/Dishonored/`,
    registration: `https://store.steampowered.com/app/217980/Dishonored/`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleDish`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockDish.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/stalker.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/stalker.png`,
    subGenre: `Action, Shooter, Adventure`,
    title: `Stalker - Clear Sky`,
    downolad: `https://store.steampowered.com/app/20510/STALKER_Clear_Sky/`,
    registration: `https://store.steampowered.com/app/20510/STALKER_Clear_Sky/`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleStalk`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockStalk.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/bioshick.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/bioshok.png`,
    subGenre: `RPG, Action, Shooter`,
    title: `Bioshok 2`,
    downolad: `https://store.steampowered.com/app/8850/BioShock_2/?l=ukrainian`,
    registration: `https://store.steampowered.com/app/8850/BioShock_2/?l=ukrainian`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitleBio`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockBio.png`
  },
  {
    id: uuidv4(),
    img: `${BASE_PATH}/SinglGame/pic/pc.png`,
    imgCard: `${BASE_PATH}/SinglGame/PicCard/pc.png`,
    subGenre: `Simulator (PC Build)`,
    title: `PC Building Simulator`,
    downolad: `https://store.steampowered.com/app/621060/PC_Building_Simulator/`,
    registration: `https://store.steampowered.com/app/621060/PC_Building_Simulator/`,
    titleBlock: `titleBlocWitcher`,
    subtitle: `subtitlePc`,
    imgBlock: `${BASE_PATH}/SinglGame/pic/blockPc.png`
  },
]