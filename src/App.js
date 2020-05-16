import React from 'react'
import './App.css'
import {simular} from './simularLavacar'

function App () {
  function run () {
    simular({ horas, chegadaDeterministica, tempoServicoDeterministico })
  }

  const [horas, setTime] = React.useState(2)
  const [expressaoChegada, setExpressaoChegada] = React.useState('fixed')
  const [chegadaDeterministica, setChegadaDeterministica] = React.useState(0)
  const [expressaoServico, setExpressaoServico] = React.useState('fixed')
  const [tempoServicoDeterministico, setTempoServicoDeterministico] = React.useState(0)

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
              <select value='fixed' className="form-control" onChange={({ target }) => setExpressaoChegada(target.value)} >
                <option value='random'>Aleatório</option>
                <option value='fixed'>Determinístico</option>
              </select>
            </div>
            {expressaoChegada === 'fixed' && (
              <div className="form-group">
                <label >Intervalo de chegada</label>
                <input className="form-control" onChange={({ target }) => setChegadaDeterministica(target.value)} />
              </div>
            )}

            <div className="form-group">
              <label >Tempo de serviço</label>
              <select value='fixed' className="form-control" onChange={({ target }) => setExpressaoServico(target.value)} >
                <option value='random'>Aleatório</option>
                <option value='fixed'>Determinístico</option>
              </select>
            </div>
            {expressaoServico === 'fixed' && (
              <div className="form-group">
                <label >Tempo de serviço</label>
                <input className="form-control" onChange={({ target }) => setTempoServicoDeterministico(target.value)} />
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
