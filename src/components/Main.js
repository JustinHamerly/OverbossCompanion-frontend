import {Routes, Route} from 'react-router-dom'

import GameToolbar from './GameToolbar';
import Welcome from './Welcome';
import NewGameForm from './NewGameForm';

import useStyles from './styles.js';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/active' element={<GameToolbar />} />
        <Route path='/new' element={<NewGameForm />} />
        <Route path='/profile' element={<p>Profile Component Here</p>} />
        <Route path='/login' element={<p>Login Component Here</p>} />
        <Route path='/games' element={<p>My Games Component Here</p>} />
      </Routes>
    </main>
  )  
}

export default Main;