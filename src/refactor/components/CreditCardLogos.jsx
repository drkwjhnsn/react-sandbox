import React from 'react';
import creditCardType from 'credit-card-type';

let acceptedCards = [
    {
      type: 'visa',
      img: "https://js-web-resources.s3.amazonaws.com/dashboardpages/visa.png",
    },
    {
      type: 'american-express',
      img: "https://js-web-resources.s3.amazonaws.com/dashboardpages/amex.png"
    },
    {
      type: 'mastercard',
      img: "https://js-web-resources.s3.amazonaws.com/dashboardpages/mastercard.png",
    },
    {
      type: 'discover',
      img: "https://js-web-resources.s3.amazonaws.com/dashboardpages/discover.png",
    }];

const CreditCardLogos = ({ cardNumber }) => {
  let possibleCards = creditCardType(cardNumber.toString()).map((card) => (card.type));
  if (!cardNumber) possibleCards = ['visa', 'american-express', 'mastercard', 'discover'];
  return (
    <div className="creditCardLogos">
      {
         acceptedCards.map((card) => (
           <div key={card.type}>
             <img className={'creditCardLogo'.concat(!possibleCards.includes(card.type) ? ' inactiveCard' : '' )} alt={card.type} src={card.img}/>
           </div>
          )
        )
      }
    </div>
  )
}

export default CreditCardLogos;
