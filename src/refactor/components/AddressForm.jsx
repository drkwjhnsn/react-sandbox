import React from 'react';
import { arrayToOptions, setDefaultFormHelpers, Selection } from './formHelpers.jsx';

const AddressForm = (props) => {
  const { defaultAtts, defaultErr } = setDefaultFormHelpers(props);
  const { values, handleSubmit } = props;
  return (
    <div className="addressForm flexColumn" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Address Line 1'
        {...defaultAtts('addressLine1')}
      />
      <input
        type="text"
        placeholder='Address Line 2 (Optional)'
        {...defaultAtts('addressLine2')}
      />
      <input
        type="text"
        placeholder="City"
        {...defaultAtts('city')}
      />
      <div className="flexRow">
        <Selection
          className="cardFormDropdown state"
          placeholder="State"
          clearable={false}
          options={[]}
          {...defaultAtts('state', true)}
        />
        <input
          type="text"
          placeholder="Zip Code"
          {...defaultAtts('zip')}
        />
      </div>
      <Selection
        className="cardFormDropdown Country"
        placeholder="Country"
        clearable={false}
        options={[]}
        {...defaultAtts('country', true)}
      />
    </div>
  );
}

export default AddressForm;
