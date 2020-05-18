export function simular ({ horas, chegadaDeterministica, expressaoChegada, media, variancia, tempoServicoDeterministico }) {
  const minutos = horas * 60
  const clientes = []
  let funcionario = { fila:[], atendendo: null}

  function intervaloChegada(){
    if(chegadaDeterministica){
      return parseInt(chegadaDeterministica)
    }

    if(expressaoChegada === 'normal'){
      const random1 = Math.random()
      const random2 = Math.random()

      const Z = Math.sqrt(-2*Math.log(random1)) * Math.sin(2*Math.PI*random2)
      return Math.abs(Math.round(parseFloat(media) + (parseFloat(variancia) * Z)))
    }
  }

  let proximoCliente = intervaloChegada()


  const intervaloServico = parseInt(tempoServicoDeterministico)
  let terminoProximoServico = undefined

  for (let i = 0; i <= minutos; i++) {
    if(funcionario.atendendo && i === terminoProximoServico ){
      terminaServico(i)
    }

    if (i == proximoCliente) {
      proximoCliente += intervaloChegada()
      alocaCliente({id:i},i)
    }


  }

  function alocaCliente(cliente,tempoAtual){
    if(funcionario.atendendo){
      const novaFila = [...funcionario.fila, cliente]

      funcionario = {...funcionario, fila: novaFila}
      clientes[tempoAtual] = {id:tempoAtual, entradaFila: tempoAtual}
    }else{
      funcionario = {...funcionario, atendendo: cliente}
      terminoProximoServico = intervaloServico + tempoAtual
      clientes[tempoAtual] = {...clientes[tempoAtual], id:tempoAtual, entradaFila: 0, entradaAtendimento: tempoAtual}

    }
  }

  console.log(funcionario)
  console.log(clientes)


  function terminaServico(tempoAtual){

    clientes[funcionario.atendendo.id] = {...clientes[funcionario.atendendo.id], saidaAtendimento: tempoAtual}

    if(funcionario.fila.length > 0){
      const novaFila = funcionario.fila.filter((_,index) => index !== 0)


      clientes[funcionario.fila[0].id] = {...clientes[funcionario.fila[0].id], entradaAtendimento: tempoAtual}

      funcionario = {...funcionario, atendendo:funcionario.fila[0], fila: novaFila}
      terminoProximoServico = intervaloServico + tempoAtual


    }else{
      funcionario = {...funcionario, atendendo: false}
    }


  }

  function normal(media, variancia){
    const random1 = Math.random()
    const random2 = Math.random()

    const Z = Math.sqrt(-2*Math.log(random1)) * Math.sin(2*Math.PI*random2)
    return media + (variancia * Z)
  }

}
