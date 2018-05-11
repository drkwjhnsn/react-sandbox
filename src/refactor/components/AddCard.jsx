import React, { Component } from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

import CardFormStub from './CardForm.jsx';
import AddressFormStub from './AddressForm.jsx';
import DeleteModal from './DeleteModal.jsx'
import { setDefaultFormHelpers, DisplayFormikState, Checkbox } from './formHelpers.jsx';

// Consider making this stateful:
// the question is how performant is it to reset the
// context of the form helpers on each rerender (every keystroke).

const AddCardStub = (props) => {
  let formHelpers = setDefaultFormHelpers(props);
  let { defaultAtts, defaultErr } = formHelpers;
  let { showingDeleteModal, dismissDeleteModal, deleteCard } = props;
  return (
    <div className="addCard">
      <form onSubmit={props.handleSubmit}>
        <h3>Credit Card Info</h3>
        <CardFormStub {...props}/>
        <h3>Billing Address</h3>
        <AddressFormStub {...props}/>
        <div className="flexColumn">
          <Checkbox label="Set as primary card" {...defaultAtts(props)}/>
          <div className="flexRow">
            <button className="addCardCancelButton">Cancel</button>
            <button className="addCardSubmitButton" type="submit">Save</button>
          </div>
        </div>
        <DeleteModal
          showing={showingDeleteModal}
          dismiss={dismissDeleteModal}
          confirmDelete={deleteCard}/>
        <DisplayFormikState {...props}/>
      </form>
    </div>
  )
}

const AddCard = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    cardDescription: Yup.string().required(),
    cardNumber: Yup.string().matches(/^\d{13,19}$/, 'Please enter valid card number').required(),
    expMonth: Yup.string().required(),
    expYear: Yup.string().required(),
    cvv: Yup.string().matches(/^\d{3,4}$/, 'Please enter valid cvv').required(),
    addressLine1: Yup.string().required(),
    addressLine2: Yup.string(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.string().required(),
    country: Yup.string().required()
  }),

  mapPropsToValues: ({cardData}) => {
    if (cardData) return {...cardData};
    return {
      firstName: '',
      lastName: '',
      email: '',
      cardDescription: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvv: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      isPrimaryCard: false
    }
  },

  handleSubmit: (payload, { props, setSubmitting }) => {
    props.submitCardData(payload);
    setSubmitting(false);
  }
})(AddCardStub);

export default AddCard;
