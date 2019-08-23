import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import '../App.css';

class TentangSaya extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid2">
          <Cell col={3}>
            <div className="content-list">
              <img 
                src="https://i.ibb.co/nfVFhyq/users-avatar.jpg"
                alt="avatar"
                className="avatar"
              /> 
              <h4>Panji Asmoro</h4>
              <hr style={{borderTop: '3px solid #0575e6' }}/>
              <p>Alamat:</p>
              <p>Jalan Pemuda Sawangan Baru - Depok</p>
              <p>Phone: 085883154442</p>
              <p>Email: pandjiasmoroart@gmail.com</p>
              <p>Web: http://www.railsdev.com</p>
            </div>

          </Cell>

          <Cell className="resume-right-col" col={9}>
            <h3>Pendidikan</h3>
            <Grid>
              <Cell col={4}>
                <p>2012 - 2015</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>D3 Bina Sarana Informatika</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>2008 - 2011</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>SMK Fazar Depok</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>2005 - 2008</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>SMP Islamiyah Sawangan Depok</h5>
              </Cell>
            </Grid>
            <hr style={{borderTop: '3px solid #00F260'}} />
            <h3>Pengalaman</h3>
            <Grid>
              <Cell col={4}>
                <p>2016 - 2017</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>BNI 46 (Web Developer)</h5>
              </Cell>
            </Grid>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default TentangSaya;

