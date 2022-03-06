import React, { Fragment } from 'react';

import Form from './Games/NewGameForm.js';
import Games from './Games/Games.js'

function Main() {
  return (
    <Fragment>
      <Form />
      <Games />
    </Fragment>
  )  
}

export default Main;