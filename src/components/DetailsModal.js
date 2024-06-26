import React from 'react';
import Modal from 'react-modal';

const DetailsModal = ({ isOpen, onRequestClose, dataPoint }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Data Point Details"
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      <div className="modal-content">
        <h2>Data Point Details</h2>
        {dataPoint ? (
          <div className="modal-details">
            <p><strong>Timestamp:</strong> {new Date(dataPoint.timestamp).toLocaleString()}</p>
            <p><strong>Value:</strong> {dataPoint.value}</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
        <button className="modal-button" onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default DetailsModal;
