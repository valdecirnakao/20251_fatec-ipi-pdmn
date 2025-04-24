import React from 'react'
import Busca from './components/Busca.jsx'
import env from 'react-dotenv'
//import { createClient } from 'pexels'
import pexelsClient from './utils/pexelsClient.js'
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo.jsx'

class App extends React.Component {

  pexelsClient = null

  state = {
    photos: []
  }

  componentDidMount() {
//    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo,
        per_page: 5
      }
    }).then(result => this.setState({ photos: result.data.photos }))
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //     , per_page: 5
  //   }).then((result) => this.setState({ photos: result.photos }))
  // }

  render() {
    return (
      <div className='grid justify-content-center'>
        <div className='col-12'>
          <PexelsLogo />
        </div>

        <div className='col-12'>
          <h1 className='text-center'>Exibir uma lista de...</h1>
        </div>

        <div className='col-12'>
          <Busca
            dica='Buscar imagens de...'
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className='col-12'>
          <ListaImagens photos={this.state.photos} />
        </div>
      </div>
    )

  }

}

export default App