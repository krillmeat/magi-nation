import MN_CARDS from '../DB/sets/MN.json';

const hasRegionMatch = (cardRegions,filterRegions) => {
  return true; // SHOWING ALL CARDS FOR NOW
  if(!cardRegions) return false;
  for(let region of cardRegions){
    for(let filterRegion of filterRegions){
      if(region === filterRegion) return true;
    }
  }

  return false;
}

export const filterSets = (_cardList, shownSets) => {
  let cardList = Object.keys(_cardList);
  // return cardList.filter( card => hasRegionMatch(card.regions,shownSets) );
  return cardList;
}

export const filterRegions = (cardList, shownRegions) => {
  let ALL_SETS = {...MN_CARDS.MN}; // TODO - This should be in the set filter
  return cardList.filter( card => hasRegionMatch(ALL_SETS[card]?.regions,shownRegions) );
}
