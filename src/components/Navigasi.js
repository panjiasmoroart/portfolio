import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';

const Navigasi = (props) => {

  return(
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
              <Link to="/beranda">Beranda</Link> 
              <Link to="/tentang-saya">Tentang Saya</Link> 
              <Link to="/karya">Karya</Link> 
              <Link to="/kontak">Kontak</Link> 
            </Navigation>
          </Header> 

          <Drawer title="Portfolio">
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentang-saya">Tentang Saya</Link>
              <Link to="/karya">Karya</Link>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Drawer>
        </Layout>
    </div>
  )

}


export default Navigasi;





