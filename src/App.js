import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Beranda from './components/Beranda';
import TentangSaya from './components/TentangSaya';
import Karya from './components/Karya';
import Kontak from './components/Kontak';
import Navigasi from './components/Navigasi';


function App() {
  return (
      <BrowserRouter>

        <div>

          <Navigasi />

          <Switch>
            <Route path="/" component={Beranda} exact />
            <Route path="/beranda" component={Beranda} />
            <Route path="/tentang-saya" component={TentangSaya} />
            <Route path="/karya" component={Karya} />
            <Route path="/kontak" component={Kontak} />
          </Switch> 

    
        </div>

      </BrowserRouter>
  );
}

export default App;
