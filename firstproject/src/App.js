import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import GameSetting from './GameSetting';
import JoinGame from './JoinGame';
import HowToPlay from './HowToPlay';
import Offline from './Offline';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/GameSetting" element = {<GameSetting />} />
          <Route path = "/JoinGame" element = {<JoinGame />} />
          <Route path = "/HowToPlay" element = {<HowToPlay />} />
          <Route path = "/Offline" element = {<Offline />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
