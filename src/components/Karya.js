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
              <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(./images/golang-web.jpg) center / cover', margin: 'auto'}}>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(./images/railsreact.png) center / cover', margin: 'auto'}}>
              </Card>

              {/* Project 3 */}
              <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(./images/reactnative.jpg) center / cover', margin: 'auto'}}>
              </Card>
            </div>

          </Cell>
        </Grid>      
      </div>
    )
  }
}

export default Karya;


