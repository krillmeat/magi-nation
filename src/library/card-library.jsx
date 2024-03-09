import React, { useEffect, useState } from "react";
import Card from "../card/card";
import setOrders from '../DB/set-orders.json';
import { filterRegions } from "../filter/filters.utils";

import './library.css';

const CardLibrary = ({set,cardNumber}) => {
  let MN_CARDS = setOrders.MN;

  let [filteredCardList,setFilteredCardList] = useState([]);

  useEffect(()=>{
    let allCards = MN_CARDS;
    let filter = filterRegions(allCards,['naroom']);
    setFilteredCardList(filter);
  },[]);

  return <div id='card-library'>
    {filteredCardList.map((cardName) => <Card key={`card-${cardName.replace("_","-")}`} set={'MN'} cardName={cardName}/>)}
  </div>
}

export default CardLibrary;
