import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Iframe from 'react-iframe';
import '../App.css';

class Kontak extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid">
          <Cell col={5}>
            <h3>Hubungi Saya</h3>
            <div className="content-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0858-8315-4442
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (021) 354-7710
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    pandjiasmoroart@gmail.com 
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-globe" aria-hidden="true"/>
                    www.railsdev.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>

          <Cell col={7}>
            <h3>Alamat Kantor</h3>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              <Iframe  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.5576006201907!2d106.82922387452025!3d-6.3791277624799525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec0869e31b4f%3A0xaa40278d69385917!2sHotel+Bumi+Wiyata!5e0!3m2!1sid!2sid!4v1565677751308!5m2!1sid!2sid"
                 width="450px"
                 height="400px"
                 id="myId"
                 className="myIframe"
                 display="initial"
                 position="relative"
                 allowFullScreen/>
            </p>  
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Kontak;



