import React, { Fragment, useState } from 'react';

import Form from './Games/NewGameForm.js';
import Games from './Games/Games.js'

function Main() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  }

  return (
    <Fragment>
      <Form modalOpen={modalOpen} handleModalClose={handleModalClose} />
      <Games setModalOpen={setModalOpen} />
    </Fragment>
  )  
}

export default Main;