import {Routes, Route} from 'react-router-dom'

import About from './About';
import Home from './Home';
import GameToolbar from './GameToolbar';
import NewGameForm from './NewGameForm';

import useStyles from './styles/mainStyles.js';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
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