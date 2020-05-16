export function simular ({ horas, chegadaDeterministica, tempoServicoDeterministico }) {
  const minutos = horas * 60
  const clientes = []
  let funcionario = { fila:[], atendendo: null}

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

    if(i===20){
      // console.log(funcionario)
    }

    if(i===70){
      // console.log(funcionario)
    }


  }
  // console.log(clientes)
  // console.log(funcionario.fila)

  function alocaCliente(cliente,tempoAtual){
    if(funcionario.atendendo){
      const novaFila = [...funcionario.fila, cliente]

      funcionario = {...funcionario, fila: novaFila}
      clientes[tempoAtual] = {id:tempoAtual, entradaFila: tempoAtual}
    }else{
      funcionario = {...funcionario, atendendo: cliente}
      terminoProximoServico = intervaloServico + tempoAtual
      clientes[tempoAtual] = {id:tempoAtual, entradaFila: 0, entradaAtendimento: tempoAtual}

    }
  }

  console.log(funcionario)
  console.log(clientes)


  function terminaServico(tempoAtual){

    clientes[funcionario.atendendo.id] = {...clientes[funcionario.atendendo.id], saidaAtendimento: tempoAtual}

    if(funcionario.fila.length > 0){
      const novaFila = funcionario.fila.filter((_,index) => index !== 0)

      clientes[funcionario.fila[0].id] = {...funcionario.fila[0], entradaAtendimento: tempoAtual}

      console.log(funcionario.fila[0].id)
      console.log(funcionario.atendendo.id)

      funcionario = {...funcionario, atendendo:funcionario.fila[0], fila: novaFila}
      terminoProximoServico = intervaloServico + tempoAtual


    }else{
      funcionario = {...funcionario, atendendo: false}
    }


  }
}
