function enviarelatorio() {
  var ssFormulario = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Relatorio');
  var ssRelatorio = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('historico de postagem');
  var ultimaLinhaRel = ssRelatorio.getLastRow() + 1;

  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE1sCompra1 = ssFormulario.getRange('D39:G61').getValues();
  var compraItens1 = [];
  var compraPresente1 = false;
  var vendaItens1 = [];
  var vendaPresente1 = false;
  var RecompensaItens1 = [];
  var RecPresente1 = false;
  var PerdaItens1 = [];
  var PerdaPresente1 = false;  

  for (var i = 0; i < valorE1sCompra1.length; i++) {
    var valorD1 = valorE1sCompra1[i][0];
    var valorE1 = valorE1sCompra1[i][1];
    var valorF1 = valorE1sCompra1[i][2];
    var valorG1 = valorE1sCompra1[i][3];
  
    if (valorD1 === 'Compra') {
      compraPresente1 = true;
      // Construir a mensagem da compra
      var compraItem1 = valorE1 + 'x, ' + valorF1;
      if (valorG1) {
        compraItem1 += ' [' + valorG1 + ']';
      }
      compraItens1.push(compraItem1);
    } else if (valorD1 === 'Venda') {
      vendaPresente1 = true;
      // Construir a mensagem da venda
      var vendaItem1 = valorE1 + 'x, ' + valorF1;
      if (valorG1) {
        vendaItem1 += ' [' + valorG1 + ']';
      }
      vendaItens1.push(vendaItem1);
    } else if (valorD1 === 'Recompensa') {
      RecPresente1 = true;
      // Construir a mensagem da recompensa
      var RecompensaItem1 = valorE1 + 'x, ' + valorF1;
      if (valorG1) {
        RecompensaItem1 += ' [' + valorG1 + ']';
      }
      RecompensaItens1.push(RecompensaItem1);
    } else if (valorD1 === 'Perda/Consumo') {
      PerdaPresente1 = true;
      // Construir a mensagem da venda
      var PerdaItem1 = valorE1 + 'x, ' + valorF1;
      if (valorG1) {
        PerdaItem1 += ' [' + valorG1 + ']';
      }
      PerdaItens1.push(PerdaItem1);
    }
  }


  if (RecPresente1 && RecompensaItens1.length > 0) {
    var RecompensaString = '[Recompensa] ' + RecompensaItens1.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 9).setValue(RecompensaString);
  }

  if (compraPresente1 && compraItens1.length > 0) {
    var compraString = '[Compra] ' + compraItens1.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 10).setValue(compraString);
  }

  if (vendaPresente1 && vendaItens1.length > 0) {
    var vendaString = '[Venda] ' + vendaItens1.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 11).setValue(vendaString);
  }

  if (PerdaPresente1 && PerdaItens1.length > 0) {
    var RecompensaString = '[Recompensa] ' + PerdaItens1.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 12).setValue(RecompensaString);
  }

  //COMPRA E VENDA JOGADOR 2
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE2sCompra2 = ssFormulario.getRange('D66:G88').getValues();
  var compraItens2 = [];
  var compraPresente2 = false;
  var vendaItens2 = [];
  var vendaPresente2 = false;

  for (var i = 0; i < valorE2sCompra2.length; i++) {
    var valorD2 = valorE2sCompra2[i][0];
    var valorE2 = valorE2sCompra2[i][1];
    var valorF2 = valorE2sCompra2[i][2];
    var valorG2 = valorE2sCompra2[i][3];

    if (valorD2 === 'Compra') {
      compraPresente2 = true;
      // Construir a mensagem da compra
      var compraItem2 = valorE2 + 'x, ' + valorF2;
      if (valorG2) {
        compraItem2 += ' [' + valorG2 + ']';
      }
      compraItens2.push(compraItem2);
    } else if (valorD2 === 'Venda') {
      vendaPresente2 = true;
      // Construir a mensagem da venda
      var vendaItem2 = valorE2 + 'x, ' + valorF2;
      if (valorG2) {
        vendaItem2 += ' [' + valorG2 + ']';
      }
      vendaItens2.push(vendaItem2);
    }
  }

  if (compraPresente2 && compraItens2.length > 0) {
    var compraString = '[Compra] ' + compraItens2.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 15).setValue(compraString);
  }

  if (vendaPresente2 && vendaItens2.length > 0) {
    var vendaString = '[Venda] ' + vendaItens2.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 16).setValue(vendaString);
  }

  //COMPRA E VENDA JOGADOR 3
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE3sCompra3 = ssFormulario.getRange('D93:G115').getValues();
  var compraItens3 = [];
  var compraPresente3 = false;
  var vendaItens3 = [];
  var vendaPresente3 = false;

  for (var i = 0; i < valorE3sCompra3.length; i++) {
    var valorD3 = valorE3sCompra3[i][0];
    var valorE3 = valorE3sCompra3[i][1];
    var valorF3 = valorE3sCompra3[i][2];
    var valorG3 = valorE3sCompra3[i][3];

    if (valorD3 === 'Compra') {
      compraPresente3 = true;
      // Construir a mensagem da compra
      var compraItem3 = valorE3 + 'x, ' + valorF3;
      if (valorG3) {
        compraItem3 += ' [' + valorG3 + ']';
      }
      compraItens3.push(compraItem3);
    } else if (valorD3 === 'Venda') {
      vendaPresente3 = true;
      // Construir a mensagem da venda
      var vendaItem3 = valorE3 + 'x, ' + valorF3;
      if (valorG3) {
        vendaItem3 += ' [' + valorG3 + ']';
      }
      vendaItens3.push(vendaItem3);
    }
  }

  if (compraPresente3 && compraItens3.length > 0) {
    var compraString = '[Compra] ' + compraItens3.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 20).setValue(compraString);
  }

  if (vendaPresente3 && vendaItens3.length > 0) {
    var vendaString = '[Venda] ' + vendaItens3.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 21).setValue(vendaString);
  }

  //COMPRA E VENDA JOGADOR 4
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE4sCompra4 = ssFormulario.getRange('D120:G142').getValues();
  var compraItens4 = [];
  var compraPresente4 = false;
  var vendaItens4 = [];
  var vendaPresente4 = false;
  
  for (var i = 0; i < valorE4sCompra4.length; i++) {
    var valorD4 = valorE4sCompra4[i][0];
    var valorE4 = valorE4sCompra4[i][1];
    var valorF4 = valorE4sCompra4[i][2];
    var valorG4 = valorE4sCompra4[i][3];
  
    if (valorD4 === 'Compra') {
      compraPresente4 = true;
      // Construir a mensagem da compra
      var compraItem4 = valorE4 + 'x, ' + valorF4;
      if (valorG4) {
        compraItem4 += ' [' + valorG4 + ']';
      }
      compraItens4.push(compraItem4);
    } else if (valorD4 === 'Venda') {
      vendaPresente4 = true;
      // Construir a mensagem da venda
      var vendaItem4 = valorE4 + 'x, ' + valorF4;
      if (valorG4) {
        vendaItem4 += ' [' + valorG4 + ']';
      }
      vendaItens4.push(vendaItem4);
    }
  }
  
  if (compraPresente4 && compraItens4.length > 0) {
    var compraString = '[Compra] ' + compraItens4.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 25).setValue(compraString);
  }
  
  if (vendaPresente4 && vendaItens4.length > 0) {
    var vendaString = '[Venda] ' + vendaItens4.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 26).setValue(vendaString);
  }
  

  //COMPRA E VENDA JOGADOR 5
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE5sCompra5 = ssFormulario.getRange('D158:G169').getValues();
  var compraItens5 = [];
  var compraPresente5 = false;
  var vendaItens5 = [];
  var vendaPresente5 = false;
  
  for (var i = 0; i < valorE5sCompra5.length; i++) {
    var valorD5 = valorE5sCompra5[i][0];
    var valorE5 = valorE5sCompra5[i][1];
    var valorF5 = valorE5sCompra5[i][2];
    var valorG5 = valorE5sCompra5[i][3];
  
    if (valorD5 === 'Compra') {
      compraPresente5 = true;
      // Construir a mensagem da compra
      var compraItem5 = valorE5 + 'x, ' + valorF5;
      if (valorG5) {
        compraItem5 += ' [' + valorG5 + ']';
      }
      compraItens5.push(compraItem5);
    } else if (valorD5 === 'Venda') {
      vendaPresente5 = true;
      // Construir a mensagem da venda
      var vendaItem5 = valorE5 + 'x, ' + valorF5;
      if (valorG5) {
        vendaItem5 += ' [' + valorG5 + ']';
      }
      vendaItens5.push(vendaItem5);
    }
  }
  
  if (compraPresente5 && compraItens5.length > 0) {
    var compraString = '[Compra] ' + compraItens5.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 30).setValue(compraString);
  }
  
  if (vendaPresente5 && vendaItens5.length > 0) {
    var vendaString = '[Venda] ' + vendaItens5.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 31).setValue(vendaString);
  }

  //COMPRA E VENDA JOGADOR 6
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE6sCompra6 = ssFormulario.getRange('D174:G196').getValues();
  var compraItens6 = [];
  var compraPresente6 = false;
  var vendaItens6 = [];
  var vendaPresente6 = false;
  
  for (var i = 0; i < valorE6sCompra6.length; i++) {
    var valorD6 = valorE6sCompra6[i][0];
    var valorE6 = valorE6sCompra6[i][1];
    var valorF6 = valorE6sCompra6[i][2];
    var valorG6 = valorE6sCompra6[i][3];
  
    if (valorD6 === 'Compra') {
      compraPresente6 = true;
      // Construir a mensagem da compra
      var compraItem6 = valorE6 + 'x, ' + valorF6;
      if (valorG6) {
        compraItem6 += ' [' + valorG6 + ']';
      }
      compraItens6.push(compraItem6);
    } else if (valorD6 === 'Venda') {
      vendaPresente6 = true;
      // Construir a mensagem da venda
      var vendaItem6 = valorE6 + 'x, ' + valorF6;
      if (valorG6) {
        vendaItem6 += ' [' + valorG6 + ']';
      }
      vendaItens6.push(vendaItem6);
    }
  }
  
  if (compraPresente6 && compraItens6.length > 0) {
    var compraString = '[Compra] ' + compraItens6.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 35).setValue(compraString);
  }
  
  if (vendaPresente6 && vendaItens6.length > 0) {
    var vendaString = '[Venda] ' + vendaItens6.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 36).setValue(vendaString);
  }
    
  //COMPRA E VENDA JOGADOR 7
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE7sCompra7 = ssFormulario.getRange('D201:G223').getValues();
  var compraItens7 = [];
  var compraPresente7 = false;
  var vendaItens7 = [];
  var vendaPresente7 = false;
  
  for (var i = 0; i < valorE7sCompra7.length; i++) {
    var valorD7 = valorE7sCompra7[i][0];
    var valorE7 = valorE7sCompra7[i][1];
    var valorF7 = valorE7sCompra7[i][2];
    var valorG7 = valorE7sCompra7[i][3];
  
    if (valorD7 === 'Compra') {
      compraPresente7 = true;
      // Construir a mensagem da compra
      var compraItem7 = valorE7 + 'x, ' + valorF7;
      if (valorG7) {
        compraItem7 += ' [' + valorG7 + ']';
      }
      compraItens7.push(compraItem7);
    } else if (valorD7 === 'Venda') {
      vendaPresente7 = true;
      // Construir a mensagem da venda
      var vendaItem7 = valorE7 + 'x, ' + valorF7;
      if (valorG7) {
        vendaItem7 += ' [' + valorG7 + ']';
      }
      vendaItens7.push(vendaItem7);
    }
  }
  
  if (compraPresente7 && compraItens7.length > 0) {
    var compraString = '[Compra] ' + compraItens7.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 40).setValue(compraString);
  }
  
  if (vendaPresente7 && vendaItens7.length > 0) {
    var vendaString = '[Venda] ' + vendaItens7.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 41).setValue(vendaString);
  }

  //COMPRA E VENDA JOGADOR 8
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE8sCompra8 = ssFormulario.getRange('D228:G251').getValues();
  var compraItens8 = [];
  var compraPresente8 = false;
  var vendaItens8 = [];
  var vendaPresente8 = false;
  
  for (var i = 0; i < valorE8sCompra8.length; i++) {
    var valorD8 = valorE8sCompra8[i][0];
    var valorE8 = valorE8sCompra8[i][1];
    var valorF8 = valorE8sCompra8[i][2];
    var valorG8 = valorE8sCompra8[i][3];
  
    if (valorD8 === 'Compra') {
      compraPresente8 = true;
      // Construir a mensagem da compra
      var compraItem8 = valorE8 + 'x, ' + valorF8;
      if (valorG8) {
        compraItem8 += ' [' + valorG8 + ']';
      }
      compraItens8.push(compraItem8);
    } else if (valorD8 === 'Venda') {
      vendaPresente8 = true;
      // Construir a mensagem da venda
      var vendaItem8 = valorE8 + 'x, ' + valorF8;
      if (valorG8) {
        vendaItem8 += ' [' + valorG8 + ']';
      }
      vendaItens8.push(vendaItem8);
    }
  }
  
  if (compraPresente8 && compraItens8.length > 0) {
    var compraString = '[Compra] ' + compraItens8.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 45).setValue(compraString);
  }
  
  if (vendaPresente8 && vendaItens8.length > 0) {
    var vendaString = '[Venda] ' + vendaItens8.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 46).setValue(vendaString);
  }
    
  //COMPRA E VENDA JOGADOR 9
  //VAMOS VER SE VAI DAR CERTO
  // Obter os valorE1s das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var valorE9sCompra9 = ssFormulario.getRange('D255:G277').getValues();
  var compraItens9 = [];
  var compraPresente9 = false;
  var vendaItens9 = [];
  var vendaPresente9 = false;
  
  for (var i = 0; i < valorE9sCompra9.length; i++) {
    var valorD9 = valorE9sCompra9[i][0];
    var valorE9 = valorE9sCompra9[i][1];
    var valorF9 = valorE9sCompra9[i][2];
    var valorG9 = valorE9sCompra9[i][3];
  
    if (valorD9 === 'Compra') {
      compraPresente9 = true;
      // Construir a mensagem da compra
      var compraItem9 = valorE9 + 'x, ' + valorF9;
      if (valorG9) {
        compraItem9 += ' [' + valorG9 + ']';
      }
      compraItens9.push(compraItem9);
    } else if (valorD9 === 'Venda') {
      vendaPresente9 = true;
      // Construir a mensagem da venda
      var vendaItem9 = valorE9 + 'x, ' + valorF9;
      if (valorG9) {
        vendaItem9 += ' [' + valorG9 + ']';
      }
      vendaItens9.push(vendaItem9);
    }
  }
  
  if (compraPresente9 && compraItens9.length > 0) {
    var compraString = '[Compra] ' + compraItens9.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 50).setValue(compraString);
  }
  
  if (vendaPresente9 && vendaItens9.length > 0) {
    var vendaString = '[Venda] ' + vendaItens9.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 51).setValue(vendaString);
  }
  
  //Começo do resto do código. Acima é mais compra e venda do jogador 1 e algumas constantes

//Mapear nomes de jogadores e alertar nomes repetidos
//Estou pegando os nomes dos jogadores 1 ao 9
  var dados = ssFormulario.getRange('E23:E31').getValues();
  var valorE1sVerificados = {};
  for (var i = 0; i < dados.length; i++) {
    var valor = dados[i][0];
    if (valor !== '' && valorE1sVerificados[valor]) {
      SpreadsheetApp.getUi().alert('Há valorE1s repetidos no intervalo E23:E31');
      return;
    }
    valorE1sVerificados[valor] = true;
  }

//Dados da missão
  var dataSessao = ssFormulario.getRange('H18').getValue();
  var nomeDaMissao = ssFormulario.getRange('H15').getValue();
  var nSessao = ssFormulario.getRange('H16').getValue();
  var tierMesa = ssFormulario.getRange('H17').getValue();


//RECOMPENSAS PARCIAIS DE JOGADOR 1; 
//AQUI IREMOS TRABALHAR MELHOR ESSA PORRA '-'

  var recompensasPorJogador = {};

  for (var i = 24; i <= 32; i++) {
    var jogador = ssFormulario.getRange('J' + i).getValue();
    var dinheiro = ssFormulario.getRange('K' + i).getValue();
    var item = ssFormulario.getRange('L' + i).getValue();
    var rec = '';

    if (dinheiro) {
      rec += '[' + 'Dinheiro' + '] ' + dinheiro + ' PO\n';
    }

    if (item) {
      rec += '[' + 'Item' + '] ' + item + ', ' + ssFormulario.getRange('M' + i).getValue() + '\n';
    }

    if (recompensasPorJogador[jogador] === undefined) {
      recompensasPorJogador[jogador] = '';
    }

    recompensasPorJogador[jogador] += rec;
  }

  var colunasDestino = [8, 13, 18, 23, 28, 33, 38, 43, 48];

  for (var i = 0; i < dados.length; i++) {
    if (dados[i][0] !== '') {
      ssRelatorio.getRange(ultimaLinhaRel, colunasDestino[i]).setValue(dados[i][0]);
    }
  }

  ssRelatorio.getRange(ultimaLinhaRel, 4).setValue(dataSessao);
  ssRelatorio.getRange(ultimaLinhaRel, 5).setValue(nomeDaMissao);
  ssRelatorio.getRange(ultimaLinhaRel, 6).setValue(nSessao);
  ssRelatorio.getRange(ultimaLinhaRel, 7).setValue(tierMesa);

  for (var jogador in recompensasPorJogador) {
    if (recompensasPorJogador.hasOwnProperty(jogador)) {
      var colunaDestino = 1;

      switch (jogador) {
        case 'JOGADOR 1':
          colunaDestino = 9;
          break;
        case 'JOGADOR 2':
          colunaDestino = 14;
          break;
        case 'JOGADOR 3':
          colunaDestino = 19;
          break;
        case 'JOGADOR 4':
          colunaDestino = 24;
          break;
        case 'JOGADOR 5':
          colunaDestino = 29;
          break;
        case 'JOGADOR 6':
          colunaDestino = 34;
          break;
        case 'JOGADOR 7':
          colunaDestino = 39;
          break;
        case 'JOGADOR 8':
          colunaDestino = 44;
          break;
        case 'JOGADOR 9':
          colunaDestino = 49;
          break;
      }

      ssRelatorio.getRange(ultimaLinhaRel, colunaDestino).setValue(recompensasPorJogador[jogador]);
    }
  }

  var dataHoraExecucao = new Date();
  var emailUsuario = Session.getActiveUser().getEmail();
  var nomeFuncionario = ssFormulario.getRange('H14').getValue();

  ssRelatorio.getRange(ultimaLinhaRel, 1).setValue(dataHoraExecucao);
  ssRelatorio.getRange(ultimaLinhaRel, 2).setValue(emailUsuario);
  ssRelatorio.getRange(ultimaLinhaRel, 3).setValue(nomeFuncionario);

// Exibe uma mensagem "Relatório entregue" em uma janela de aviso
Browser.msgBox("Relatório entregue", "Caro contratante, seu relatório foi recebido pela Ordem de Samsara. Obrigado.", Browser.Buttons.OK);
}
