import React, { Component } from 'react';
import Modal from 'reboron/FadeModal';
import AddCard from '../components/AddCard.jsx';
// TODO: in the form helpers, add an optional 'label' parameter,
// then you can create default error messages, one for required
// and one for valid

// something like:
// {props.label} is required.
// and:
// please enter a valid {props.label}

// then inject them as props into the validation schema

// work in the different buttons
// bring in dropdown list data

// find out what these props actually do:
// ref (wtf srsly?) - antipattern no, just no.
// forPayment - I need to look into this, probably different endpoints
//    make value field optional (this will be changed after I add the saveToWallet feature)
//    for some reason 'US' is preferred to 'United States' during payment
//    same shit, apparently payment uses country codes, labels are the same tho,
//    wtf are country codes?
//    essentially this same component was used to render two different components, but I'll continue that
//    it actually makes much more sense considering how similar these are

// hideCards - this is bad redundant, just hide the cards with the for payment flag

// cardData - I don't know if this really should be passed, but for now I'll do it
// onChange -  looks like it simply adds the validation status, I dunno, we'll see
//    it might not even be used...

// cardAdded - looks like a status callback, called when well card is added successfully
// dismiss - to be called on cancel

// on the parent component: have

// for what this component actually does, I'd rename it to EditCard

// there should be flexibility with the props that should
// allow modification and deletion as well as the choice to add to wallet or not

export default class AddCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingDeleteModal: false
    }
    this.submitCardData = this.submitCardData.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.dismissDeleteModal = this.dismissDeleteModal.bind(this);
  }

  componentDidMount() {
    this.setState({showingDeleteModal: true})
  }

  normalizeCardData(values) {
    return {
      CreditCard: {
        Description: values.cardDescription,
        Number: values.cardNumber,
        Cvv: values.cvv,
        Expires: {
          Year: values.expYear,
          Month: values.expMonth,
        },
        IsPrimaryCard: values.isPrimaryCard,
      },
      Firstname: values.firstName,
      Lastname: values.lastName,
      City: values.city,
      Country: values.country,
      Email: values.email,
      Street1: values.addressLine1 + (values.addressLine2 && ` ${values.addressLine2}`),
      State: values.state,
      Postalcode: values.zip,
      Currency: 'USD',
      Reference: null, // Ezy says we don't need this field
    };
  }

  submitCardData(values) {
    const normalizedCardData = this.normalizeCardData(values);
    console.log(normalizedCardData);
    // if (this.props.fromModify) {
    //   this.addCardCall = this.walletStore
    //     .modifyCard(this.props.modifyCardInfo, cardInfo)
    //     .then(result => {
    //       this.props.cardAdded();
    //     });
    // } else {
    //   this.addCardCall = this.walletStore
    //     .addCard(cardInfo)
    //     .then(result => {
    //       this.props.cardAdded();
    //     });
    // }
  }

  dismissDeleteModal() {
    // this.setState(({ showingDeleteModal }) => ({ showingDeleteModal: !!showingDeleteModal }))
    this.setState(({ showingDeleteModal }) => ({showingDeleteModal: !showingDeleteModal}))
  }

  deleteCard() {
    console.log('deleting card');
    this.dismissDeleteModal();
  // this.deleteCardCall = this.walletStore
  //   .deleteCard(cardInfo)
  //   .then(result => {
  //     this.props.cardAdded();
  //   });
  }

  render() {
    let { forPayment } = this.props;
    return (
      <AddCard
        submitCardData={this.submitCardData}
        forPayment={forPayment}
        showingDeleteModal={this.state.showingDeleteModal}
        deleteCard={this.deleteCard}
        dismissDeleteModal={this.dismissDeleteModal}
        />
    );
  }
}

//TODO: using delete modal touches all form controls
