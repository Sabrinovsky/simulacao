export function simular ({ horas, chegadaDeterministica, expressaoChegada, media, variancia, tempoServicoDeterministico, exponencial ,maxFila}) {
  const minutos = horas * 60
  const clientes = []
  const filaPorMinuto = []
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

  function intervaloServico(){
    if(tempoServicoDeterministico){
      return parseInt(tempoServicoDeterministico)
    }

    if(exponencial){
        const result = Math.round((-exponencial * Math.log(Math.random())))
        return result || 1
    }
  }

  let proximoCliente = intervaloChegada()

  let terminoProximoServico = undefined

  for (let i = 0; i <= minutos; i++) {
    if(funcionario.fila.length >= maxFila) {
      console.log('Fila atingiu o tamanho máximo')
      return {error:'Atingiu tomanho total da fila'}
    }

    if(funcionario.atendendo && i === terminoProximoServico ){
      terminaServico(i)
    }

    if (i == proximoCliente) {
      proximoCliente += intervaloChegada()
      alocaCliente({id:i},i)
    }

    filaPorMinuto.push(funcionario.fila.length)
  }

  function alocaCliente(cliente,tempoAtual){
    if(funcionario.atendendo){
      const novaFila = [...funcionario.fila, cliente]

      funcionario = {...funcionario, fila: novaFila}
      clientes[tempoAtual] = {id:tempoAtual, entradaFila: tempoAtual}
    }else{
      funcionario = {...funcionario, atendendo: cliente}
      terminoProximoServico = intervaloServico() + tempoAtual
      clientes[tempoAtual] = {...clientes[tempoAtual], id:tempoAtual, entradaFila: 0, entradaAtendimento: tempoAtual}

    }
  }



  // clientes.map((cliente, index)=>{
  //   if(cliente.entradaFila && cliente.entradaAtendimento){
  //     console.log('tempo na fila: ', cliente.entradaAtendimento - cliente.entradaFila )
  //   }
  // })

  // var mediaEntidadesNaFila = 0
  // for(let i=0;i<filaPorMinuto.length;i++){
  //   mediaEntidadesNaFila += filaPorMinuto[i]
  // }
  // mediaEntidadesNaFila = mediaEntidadesNaFila / filaPorMinuto.length

  // console.log('Média de entidades na fila: ', mediaEntidadesNaFila)

  var totalTempoFila = 0
  var numeroClientesFila = 0

  clientes.forEach((cliente)=>{
    if(cliente.entradaFila && cliente.entradaAtendimento){
      totalTempoFila += cliente.entradaAtendimento - cliente.entradaFila
      numeroClientesFila++;
    }
  })

  var tempoTotalSistema = 0
  var numeroTotalClientesQueSairam = 0
  clientes.forEach((cliente)=>{
    if(cliente.entradaFila && cliente.entradaAtendimento && cliente.saidaAtendimento){
      tempoTotalSistema += cliente.saidaAtendimento - cliente.entradaFila
      numeroTotalClientesQueSairam++
    }else if(cliente.entradaAtendimento && cliente.saidaAtendimento){
      console.log(tempoTotalSistema)
      tempoTotalSistema += cliente.saidaAtendimento - cliente.entradaAtendimento
      numeroTotalClientesQueSairam++
    }
  })

  console.log(tempoTotalSistema)
  console.log(numeroTotalClientesQueSairam)

  const tempoMedioNoSistema = tempoTotalSistema / numeroTotalClientesQueSairam

  // console.log('tempo médio em fila: ', totalTempoFila/numeroClientesFila)

  // console.log(funcionario)
  // console.log(clientes)


  return ({funcionario,clientes, tempoMedioNaFila: totalTempoFila/numeroClientesFila || 0,tempoMedioNoSistema})

  function terminaServico(tempoAtual){

    clientes[funcionario.atendendo.id] = {...clientes[funcionario.atendendo.id], saidaAtendimento: tempoAtual}

    if(funcionario.fila.length > 0){
      const novaFila = funcionario.fila.filter((_,index) => index !== 0)


      clientes[funcionario.fila[0].id] = {...clientes[funcionario.fila[0].id], entradaAtendimento: tempoAtual}

      funcionario = {...funcionario, atendendo:funcionario.fila[0], fila: novaFila}
      terminoProximoServico = intervaloServico() + tempoAtual


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
