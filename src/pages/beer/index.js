import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'


export default class Beer extends Component {
  state = {
    beer: null,
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/${id}`);

    this.setState({ beer: response.data[0] });

  }

  render() {
    const { beer } = this.state;
    return (
      <>
        <div className="container-all">
          {
            beer && (
              <>
                <img className="beerImg" height="250" src={beer.image_url} alt={beer.name} />

                <div className="description">
                  <h1>Beer name: {beer.name}</h1>
                  <h4 className="tagline">Beer tagline: {beer.tagline}</h4>
                  <h4 className="description">Description: {beer.description}</h4>
                  <h4 className="firstBrewed">First brewer: {beer.first_brewed}</h4>
                  <div className="ingredientsItems">
                    <h3>Hops</h3>
                    <ul>
                      {beer.ingredients.hops.map((hop, index) => (
                        <li key={index}>* {hop.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="ingredientsItems">
                    <h3>Malt</h3>
                    <ul>
                      {beer.ingredients.malt.map((mal, index) => (
                        <li key={index}>* {mal.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="ingredientsItems">
                    <h3>Yeast</h3>
                    <p>{beer.ingredients.yeast}</p>
                  </div>                </div>
              </>
            )
          }
        </div>
        <div>
          <Link to={`/`} style={{
            padding: 10,
            backgroundColor: "#7159C1",
            display: 'flex',
            justifyContent: 'center',
            color: "#fff",
            textDecoration: 'none',
          }}>Retornar</Link>
        </div>

      </>
    )
  }
}