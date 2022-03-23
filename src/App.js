import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getGames } from './redux/actions/games';

import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';

function App() {

  const dispatch = useDispatch();
  
  dispatch(getGames());

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
      <Header 
        drawerOpen={drawerOpen} 
        setModalOpen={setModalOpen} 
        setDrawerOpen={setDrawerOpen} 
        handleDrawerClose={handleDrawerClose}
      />
      <Main />
    </Fragment>
  );

}

export default App;