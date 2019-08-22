import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';
import '../App.css';

class Karya extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid">
          <Cell col={12}>
            <h3>Karya</h3>
            <hr /><br />

            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/JzR0G6T/PT-Multi-Sarana-Equipment-2018-05-21-15-44-31.png) center / cover', margin: 'auto'}}>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/r5WvSQv/PT-Qlay-Bangun-Jaya-Developer-Property-amp-Infrastruktur-Terbaik-Di-Depok-2019-04-24-09-03-23.png) center / cover', margin: 'auto'}}>
              </Card>

              {/* Project 3 */}
              <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/b6Z8t2y/Ruang-Bersama-2017-03-29-16-27-09.png) center / cover', margin: 'auto'}}>
              </Card>
            </div>

          </Cell>
        </Grid>      
      </div>
    )
  }
}

export default Karya;


