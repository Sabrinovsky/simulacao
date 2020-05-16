export function simular ({ horas, chegadaDeterministica, tempoServicoDeterministico }) {
  const minutos = horas * 60
  let funcionario = { ocupado:false, fila:[], atendendo: null}

  const intervaloChegada = parseInt(chegadaDeterministica)
  let proximoCliente = parseInt(chegadaDeterministica)

  const intervaloServico = parseInt(tempoServicoDeterministico)
  let terminoProximoServico = undefined

  for (let i = 0; i <= minutos; i++) {
    if(funcionario.atendendo && i === terminoProximoServico ){
      terminaServico(i)
    }

    if (i == proximoCliente) {
      proximoCliente += intervaloChegada
      alocaCliente({id:i},i)
    }

    console.log(terminoProximoServico)

  }

  console.log(funcionario)

  function alocaCliente(cliente,tempoAtual){
    if(funcionario.atendendo){
      const novaFila = [...funcionario.fila, cliente]
      funcionario = {...funcionario, fila: novaFila}
    }else{
      funcionario = {...funcionario, atendendo: cliente}
      terminoProximoServico = intervaloServico + tempoAtual
    }
  }

  function terminaServico(tempoAtual){
    if(funcionario.fila.length > 0){
      const novaFila = funcionario.fila.filter((_,index) => index !== 0)

      funcionario = {...funcionario,atendendo:funcionario.fila[0], fila: novaFila}
      terminoProximoServico = intervaloServico + tempoAtual
    }else{
      funcionario = {...funcionario, atendendo: false}
    }
  }
}
