import { REAL_DATA } from './src/app/data/realData.ts';

const ALL_CONTENT = [
  ...REAL_DATA.marvel,
  ...REAL_DATA.dc,
  ...REAL_DATA.tvShows,
  ...REAL_DATA.anime,
  ...REAL_DATA.koreanDramas,
  ...REAL_DATA.fastandfurious,
  ...REAL_DATA.harrypotter,
  ...REAL_DATA.missionimpossible,
  ...REAL_DATA.jurassic,
  ...REAL_DATA.prabhas
].map(item => ({
  ...item,
  route: `/content/${item.title.toLowerCase().replace(/[\s:-]+/g, '-')}`
}));

console.log(ALL_CONTENT.length);
console.log(ALL_CONTENT.filter(item => item.title.toLowerCase().includes('salaar')).length);
