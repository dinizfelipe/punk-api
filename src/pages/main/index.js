import React, { Component } from 'react';
import api from "../../services/api"
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
  state = {
    beers: [],
  }


  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = async () => {
    const response = await api.get('/');

    this.setState({ beers: response.data })
  }

  render() {
    const { beers } = this.state;

    return (
      <div className="beer-list">
        {beers.map(beer => (
          <div className="list-complete" key={beer.id}>
            <img height="250" src={beer.image_url} />
            <div>
              <p style={{ fontWeight: 'bold', color: "#fff" }} key={beer.id}>{beer.name}</p>
              <p style={{ color: "#fff" }}>  {beer.tagline}</p>
            </div>
            <Link className="btn-detalhes"
              to={`/beers/${beer.id}`}
            >Detalhes</Link>
          </div>
        ))}

      </div>
    )
  }
}
