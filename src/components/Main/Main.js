import React, { Fragment, useState } from 'react';

import Form from './Games/NewGameForm.js';
import Games from './Games/Games.js'

function Main() {

  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  return (
    <Fragment>
      <Form modalOpen={modalOpen} setModalOpen={setModalOpen} handleModalClose={handleModalClose} />
      <Games drawerOpen={drawerOpen} setModalOpen={setModalOpen} setDrawerOpen={setDrawerOpen} handleDrawerClose={handleDrawerClose} />
    </Fragment>
  )  
}

export default Main;