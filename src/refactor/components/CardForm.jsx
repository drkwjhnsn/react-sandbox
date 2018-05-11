import React from 'react';
import { arrayToOptions, setDefaultFormHelpers, Selection } from './formHelpers.jsx';
import CreditCardLogos from './CreditCardLogos.jsx';

const CardForm = (props) => {
  const { defaultAtts, defaultErr } = setDefaultFormHelpers(props);
  const { values, handleSubmit } = props;
  return (
    <div className="cardForm flexColumn" onSubmit={handleSubmit}>
      <div className="flexRow">
        <input
          placeholder="First Name"
          type="text"
          {...defaultAtts('firstName')}
        />
        <input
          placeholder="Last Name"
          type="text"
          {...defaultAtts('lastName')}
        />
      </div>
      {defaultErr('firstName')}
      {defaultErr('lastName')}
      <input
        placeholder="Email"
        type="text"
        {...defaultAtts('email')}
      />
      {defaultErr('email')}
      <input
        placeholder="Card Description"
        type="text"
        {...defaultAtts('cardDescription')}
      />
      {defaultErr('cardDescription')}
      <CreditCardLogos cardNumber={values.cardNumber} />
      <input
        placeholder="Card Number"
        {...defaultAtts('cardNumber')}
        type="text"
      />
    {defaultErr('cardNumber')}
    <div className="flexRow">
        <Selection
          placeholder="Exp Month"
          clearable={false}
          options={arrayToOptions(['January', 'February'])}
          {...defaultAtts('expMonth', true)}
        />
        <Selection
          placeholder="Exp Year"
          clearable={false}
          options={[]}
          {...defaultAtts('expYear', true)}
        />
        <input
          placeholder="CVV"
          type="text"
          {...defaultAtts('cvv')}
        />
      </div>
      {defaultErr('expMonth')}
      {defaultErr('expYear')}
      {defaultErr('cvv')}
    </div>
  );
}

export default CardForm;
