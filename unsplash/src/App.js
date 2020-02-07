import React, { useState, useEffect } from 'react';

const clientId = 'f24b3b41a268359029d7c0842b3831f976de6241e18f9d4f48b317c3fa623850'
const endpoint = 'https://api.unsplash.com/search/photos'
var query = ''
var cad = ''

export default function App (){
const [images, setImages] =  useState();


function search() {
  fetch(`${endpoint}?query=${query}&client_id=${clientId}`)
    .then(response => {
      return response.json()
    }).then(jsonResponse => {
      setImages(jsonResponse.results)
    })
}

function limpiarHistorial() {
  return (cad = '',
  setImages(images),
    query = '')
}

function trackQueryValue(ev) {//ev.target es lo q dispara el input y value el valor
  return query = ev.target.value
}

function historial() {
  cad += `${query} `
  return <div className="text-white"> {cad} </div>
}

function pulsar(event) {
  if (event.key === 'Enter')
    search()
}

  return (
    <div>
      <header align='center' className="p-1 mb-1 bg-warning text-dark" ><h2>BUSCADOR</h2></header>
      <table>
        <tbody>
          <tr>
            <td valign='top'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="input-group-append">
                        <input type='search' size='50' className="form-control form-control-sm"
                          placeholder='Ingrese la búsqueda'
                          onChange={trackQueryValue} onKeyDown={pulsar} />

                        <button type="button" className="btn btn-success" onClick={search}>Buscar</button>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td valign='top'>
                      <label><h5 className="p-1 mb-1 bg-light text-dark">Historial</h5></label>
                      <button className="btn btn-danger" onClick={limpiarHistorial}>Limpiar</button>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td valign='top'>
                      <label>
                        {historial()}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td rowSpan='2' valign='top'>
              
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}




/*
export default class App extends Component {
  constructor() {
    super()
    this.query = ''
    this.cad = ''
    //.bind evita que cuando se ejecuta la funcion, no cambie el valor de this.;
    this.trackQueryValue = this.trackQueryValue.bind(this)
    this.search = this.search.bind(this)
    this.historial = this.historial.bind(this)
    this.limpiarHistorial = this.limpiarHistorial.bind(this)
    this.pulsar = this.pulsar.bind(this)
    this.state = {
      images: []
    }
  }

  search() {
    fetch(`${endpoint}?query=${this.query}&client_id=${clientId}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        //console.log(jsonResponse)
        this.setState({
          images: jsonResponse.results
        })
      })
  }

  limpiarHistorial() {
    return (this.cad = '',
      this.setState({ images: [] }),
      this.query = '')
  }

  trackQueryValue(ev) {//ev.target es lo q dispara el input y value el valor
    return this.query = ev.target.value
  }

  historial() {
    this.cad += `${this.query} `
    return <div className="text-white"> {this.cad} </div>
  }

  images() {
    return this.state.images.map(image => {
      return <img alt="Descripcion" src={image.urls.thumb} key={image.id} />
    })
  }

  pulsar(event) {
    if (event.key === 'Enter')
      this.search()
  }

  render() {
    return (
      <div>
        <header align='center' className="p-1 mb-1 bg-warning text-dark" ><h2>BUSCADOR</h2></header>
        <table>
          <tbody>
            <tr>
              <td valign='top'>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="input-group-append">
                          <input type='search' size='50' className="form-control form-control-sm"
                            placeholder='Ingrese la búsqueda'
                            onChange={this.trackQueryValue} onKeyDown={this.pulsar} />

                          <button type="button" className="btn btn-success" onClick={this.search}>Buscar</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td valign='top'>
                        <label><h5 className="p-1 mb-1 bg-light text-dark">Historial</h5></label>
                        <button className="btn btn-danger" onClick={this.limpiarHistorial}>Limpiar</button>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td valign='top'>
                        <label>
                          {this.historial()}
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td rowSpan='2' valign='top'>
                {this.images()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
*/

