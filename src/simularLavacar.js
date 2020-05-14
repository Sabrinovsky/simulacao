export function simular ({ horas, chegadaDeterministica, tempoServicoDeterministico }) {
  const minutos = horas * 60
  let funcionario = { ocupado:false, fila:[], atendendo: null}

  const intervaloChegada = parseInt(chegadaDeterministica)
  let proximoCliente = parseInt(chegadaDeterministica)

  const intervaloServico = parseInt(tempoServicoDeterministico)
  let terminoProximoServico = parseInt(tempoServicoDeterministico)

  for (let i = 0; i <= minutos; i++) {
    if (i == proximoCliente) {
      proximoCliente += intervaloChegada
      alocaCliente({id:i})
    }

    if(!!funcionario.atendendo && i == terminoProximoServico ){
      terminoProximoServico += intervaloServico
      terminaServico({id:i})
    }
  }

  console.log(funcionario)

  function alocaCliente(cliente){
    if(funcionario.atendendo){
      const novaFila = [...funcionario.fila, cliente]
      funcionario = {...funcionario, fila: novaFila}
    }else{
      funcionario = {...funcionario, atendendo: cliente}
    }
  }

  function terminaServico(){
    if(funcionario.fila.length > 0){
      const novaFila = funcionario.fila.filter((_,index) => index !== 0)

      funcionario = {...funcionario,atendendo:funcionario.fila[0], fila: novaFila}
    }else{
      funcionario = {...funcionario, atendendo: false}
    }
  }
}
