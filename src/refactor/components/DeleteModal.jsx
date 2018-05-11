import React, { Component } from 'react';
import Modal from 'reboron/FadeModal';
// import ActionButton from '../widgets/ActionButton';

class DeleteModal extends Component {
  componentWillReceiveProps(newProps) {
    let wasShowing = this.props.showing;
    let showing = newProps.showing;
    if (!wasShowing && showing) this.refs.deleteModal.show();
    if (wasShowing && !showing) this.refs.deleteModal.hide();
  }

  render() {
    let { modifyCardInfo, lastFour } = this.props;
    return (
      <Modal
        ref="deleteModal"
        backdropStyle={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        className="globalModal"
      >
        <div className="globalModalHeader flexRow">
          <h2 className="
            globalModalHeaderText">
            Remove Card?
          </h2>
        </div>
        <div className="globalModalBody">
          <p className="globalModalBodyText">
            Are you sure you want to remove card ending •••• {lastFour} from your wallet?
          </p>
          <button
            className="dashboardWalletButton addCardCancelButton"
            onClick={this.props.dismiss}>
            Keep Card
          </button>
          <button
            className="dashboardWalletButton addCardSubmitButton"
            onClick={this.props.confirmDelete}>
            Confirm Delete
          </button>
          <div style={{ height: '30px' }} />
        </div>
      </Modal>
    );
  }
}


// <ActionButton
//   className="globalModalButton"
//   onClick={() => this.deleteCard(modifyCardInfo)}
//   value="Remove Card"
//   promise={this.deleteCardCall}
//   />

export default DeleteModal;
