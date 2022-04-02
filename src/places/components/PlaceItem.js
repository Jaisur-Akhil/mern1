/** @format */

import React, { useState } from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UI Elements/Card/Card';
import Button from '../../shared/components/FormElements/Button.js';
import Modal from '../../shared/components/UI Elements/Modal/Modal';
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const openMap = () => {
    setShowMap(true);
  };
  const closeMap = () => {
    setShowMap(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMap}>Close</Button>}>
        <div className='map-container'>
          <h2> !! The Map !!</h2>
        </div>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMap}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
