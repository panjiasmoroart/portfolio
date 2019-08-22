import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import '../App.css';

class Beranda extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="beranda-grid">
					<Cell col={12}>
            <div className="img-round">
              <img 
                src="https://i.ibb.co/nfVFhyq/users-avatar.jpg"
                alt="avatar"
                className="avatar-img"
              /> 
            </div>

            <div className="banner-text">
              <h1>Software Enginer</h1>
              <hr />
              <p>HTML5 | CSS3 | JavaScript | jQuery | ReactJS | PHP | Ruby | Ruby On Rails | MySQL | Oracle | PostgreSQL</p>
              <div className="social-links">
                <a href="https://www.facebook.com/panjiasmoroart" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/panjiasmoroart" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/panjiasmoroart" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://linkedin.com/in/panjiasmoro/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
					</Cell>
        </Grid>
      </div>
    )
  }
}

export default Beranda;
