import React from 'react'
import './App.css'
import { simular } from './simularLavacar'

function App() {
  function run() {
    if (expressaoChegada === 'normal') {
      const result = simular({ horas, expressaoChegada, media, variancia, tempoServicoDeterministico, exponencial,maxFila })
      setData(result)
    } else {
      const result = simular({ horas, chegadaDeterministica, tempoServicoDeterministico, exponencial,maxFila })
      setData(result)
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
  const [maxFila, setMaxFila] = React.useState(100)
  const [data,setData] = React.useState()
  const [error,setError] = React.useState()

  React.useEffect(()=>{
    if(data?.error){
      setError(data.error)
    }
  },[data])

  return (
    <div className="App">
      <div>
        <div className='row'>
          <div className='col-5'>
            {/* <form onSub> */}
            <div className="form-group">
              <label >Tamanho maximo de fila</label>
              <input defaultValue='100' className="form-control" onChange={({ target }) => setMaxFila(target.value)} />
            </div>

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

          <div className='col'>
              {data?.error && (<h3>{data.error}</h3>) }

              {data?.clientes && (
                <table className='table'>
                  <thead>
                    <tr>
                      <th>
                        Entrada fila
                      </th>
                      <th>
                        Entrada atendimento
                      </th>
                      <th>
                        Saida atendimento
                      </th>
                    </tr>
                  </thead>
                <tbody>
                  {data.clientes.map((cliente) => (
                        <tr key={cliente.id}>
                          <td>
                            {cliente.entradaFila}
                          </td>
                          <td>
                            {cliente.entradaAtendimento}
                          </td>
                          <td>
                          {cliente.saidaAtendimento}
                          </td>
                      </tr>
                    ))}
                </tbody>

                </table>
              )}
              <hr></hr>
              {!!data?.tempoMedioNaFila && (
                <h4>O tempo médio na fila foi de {data.tempoMedioNaFila} minutos</h4>
              )}

              {!!data?.tempoMedioNoSistema && (
                <h4>O tempo médio no sistema foi de {data.tempoMedioNoSistema} minutos</h4>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
