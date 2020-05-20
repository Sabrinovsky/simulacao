import React from 'react'
import './App.css'
import { simular } from './simularLavacar'

function App() {
  function run() {
    if (expressaoChegada === 'normal') {
      simular({ horas, expressaoChegada, media, variancia, tempoServicoDeterministico, exponencial })

    } else {
      simular({ horas, chegadaDeterministica, tempoServicoDeterministico, exponencial })
    }
  }

  const [horas, setTime] = React.useState(2)
  const [expressaoChegada, setExpressaoChegada] = React.useState('fixed')
  const [chegadaDeterministica, setChegadaDeterministica] = React.useState(0)
  const [expressaoServico, setExpressaoServico] = React.useState('fixed')
  const [tempoServicoDeterministico, setTempoServicoDeterministico] = React.useState(0)
  const [media, setMedia] = React.useState()
  const [variancia, setVariancia] = React.useState()
  const [exponencial, setExponencial] = React.useState()

  return (
    <div className="App">
      <div>
        <div className='row'>
          <div className='col-5'>
            {/* <form onSub> */}
            <div className="form-group">
              <label >Horas</label>
              <input defaultValue='2' className="form-control" onChange={({ target }) => setTime(target.value)} />
            </div>
            <div className="form-group">
              <label >Tempo entre chegadas</label>
              <select defaultValue='fixed' className="form-control" onChange={({ target }) => setExpressaoChegada(target.value)} >
                <option value='normal'>Aleatório normal</option>
                <option value='fixed'>Determinístico</option>
              </select>
            </div>
            {expressaoChegada === 'fixed' && (
              <div className="form-group">
                <label >Intervalo de chegada</label>
                <input className="form-control" onChange={({ target }) => setChegadaDeterministica(target.value)} />
              </div>
            )}

            {expressaoChegada === 'normal' && (
              <>
                <div className="form-group">
                  <label >Média</label>
                  <input className="form-control" onChange={({ target }) => setMedia(target.value)} />
                </div>
                <div className="form-group">
                  <label >Variância</label>
                  <input className="form-control" onChange={({ target }) => setVariancia(target.value)} />
                </div>
              </>
            )}
            <br />
            <br />
            <br />
            <hr />

            <div className="form-group">
              <label >Tempo de serviço</label>
              <select defaultValue='fixed' className="form-control" onChange={({ target }) => { setExpressaoServico(target.value);setExponencial(0);setTempoServicoDeterministico(0) }} >
                <option value='expo'>Aleatório exponencial</option>
                <option value='fixed'>Determinístico</option>
              </select>
            </div>
            {expressaoServico === 'fixed' && (
              <div className="form-group">
                <label >Tempo de serviço</label>
                <input className="form-control" onChange={({ target }) => setTempoServicoDeterministico(target.value)} />
              </div>
            )}

            {expressaoServico === 'expo' && (
              <div className="form-group">
                <label >Media Exponencial</label>
                <input className="form-control" onChange={({ target }) => setExponencial(target.value)} />
              </div>
            )}

            <button onClick={run}>Simular</button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
