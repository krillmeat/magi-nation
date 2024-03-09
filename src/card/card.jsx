import React from "react";

import './card.css';

const Card = ({set,cardName}) => {
  return <div className='card'>
    <img alt={'Card Art for '+cardName} src={`./card-images/original/${set}/${cardName}.jpg`} />
  </div>
}

export default Card;