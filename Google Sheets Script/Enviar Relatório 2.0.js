function enviarelatorio() {
  var ssFormulario = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Relatorio');
  var ssRelatorio = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('historico de postagem');
  var ultimaLinhaRel = ssRelatorio.getLastRow() + 1;

  // Relatório Jogador 1 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
  var NomeJogador1 = ssFormulario.getRange('E26').getValues();
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

  ssRelatorio.getRange(ultimaLinhaRel, 8).setValue(NomeJogador1)

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
    var PerdaString = '[Perda/Consumo] ' + PerdaItens1.join('; ') + ';';
    ssRelatorio.getRange(ultimaLinhaRel, 12).setValue(PerdaString);
  }

    // Obter valores e fazer mensagem do Jogador2 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador2 = ssFormulario.getRange('E27').getValues();
    var valorE2sCompra2 = ssFormulario.getRange('D66:G88').getValues();
    var compraItens2 = [];
    var compraPresente2 = false;
    var vendaItens2 = [];
    var vendaPresente2 = false;
    var RecompensaItens2 = [];
    var RecPresente2 = false;
    var PerdaItens2 = [];
    var PerdaPresente2 = false;  
  
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
      } else if (valorD2 === 'Recompensa') {
        RecPresente2 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem2 = valorE2 + 'x, ' + valorF2;
        if (valorG2) {
          RecompensaItem2 += ' [' + valorG2 + ']';
        }
        RecompensaItens2.push(RecompensaItem2);
      } else if (valorD2 === 'Perda/Consumo') {
        PerdaPresente2 = true;
        // Construir a mensagem da venda
        var PerdaItem2 = valorE2 + 'x, ' + valorF2;
        if (valorG2) {
          PerdaItem2 += ' [' + valorG2 + ']';
        }
        PerdaItens2.push(PerdaItem2);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 13).setValue(NomeJogador2)

    if (RecPresente2 && RecompensaItens2.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 14).setValue(RecompensaString);
    }
  
    if (compraPresente2 && compraItens2.length > 0) {
      var compraString = '[Compra] ' + compraItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 15).setValue(compraString);
    }
  
    if (vendaPresente2 && vendaItens2.length > 0) {
      var vendaString = '[Venda] ' + vendaItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 16).setValue(vendaString);
    }
  
    if (PerdaPresente2 && PerdaItens2.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 17).setValue(PerdaString);
    }
  
      // Obter valores e fazer mensagem do Jogador2 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador2 = ssFormulario.getRange('E27').getValues();
    var valorE2sCompra2 = ssFormulario.getRange('D66:G88').getValues();
    var compraItens2 = [];
    var compraPresente2 = false;
    var vendaItens2 = [];
    var vendaPresente2 = false;
    var RecompensaItens2 = [];
    var RecPresente2 = false;
    var PerdaItens2 = [];
    var PerdaPresente2 = false;  
  
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
      } else if (valorD2 === 'Recompensa') {
        RecPresente2 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem2 = valorE2 + 'x, ' + valorF2;
        if (valorG2) {
          RecompensaItem2 += ' [' + valorG2 + ']';
        }
        RecompensaItens2.push(RecompensaItem2);
      } else if (valorD2 === 'Perda/Consumo') {
        PerdaPresente2 = true;
        // Construir a mensagem da venda
        var PerdaItem2 = valorE2 + 'x, ' + valorF2;
        if (valorG2) {
          PerdaItem2 += ' [' + valorG2 + ']';
        }
        PerdaItens2.push(PerdaItem2);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 13).setValue(NomeJogador2)

    if (RecPresente2 && RecompensaItens2.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 14).setValue(RecompensaString);
    }
  
    if (compraPresente2 && compraItens2.length > 0) {
      var compraString = '[Compra] ' + compraItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 15).setValue(compraString);
    }
  
    if (vendaPresente2 && vendaItens2.length > 0) {
      var vendaString = '[Venda] ' + vendaItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 16).setValue(vendaString);
    }
  
    if (PerdaPresente2 && PerdaItens2.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens2.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 17).setValue(PerdaString);
    }
    // Obter valores e fazer mensagem do Jogador3 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador3 = ssFormulario.getRange('E28').getValues();
    var valorE3sCompra3 = ssFormulario.getRange('D93:G115').getValues();
    var compraItens3 = [];
    var compraPresente3 = false;
    var vendaItens3 = [];
    var vendaPresente3 = false;
    var RecompensaItens3 = [];
    var RecPresente3 = false;
    var PerdaItens3 = [];
    var PerdaPresente3 = false;  
  
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
      } else if (valorD3 === 'Recompensa') {
        RecPresente3 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem3 = valorE3 + 'x, ' + valorF3;
        if (valorG3) {
          RecompensaItem3 += ' [' + valorG3 + ']';
        }
        RecompensaItens3.push(RecompensaItem3);
      } else if (valorD3 === 'Perda/Consumo') {
        PerdaPresente3 = true;
        // Construir a mensagem da venda
        var PerdaItem3 = valorE3 + 'x, ' + valorF3;
        if (valorG3) {
          PerdaItem3 += ' [' + valorG3 + ']';
        }
        PerdaItens3.push(PerdaItem3);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 18).setValue(NomeJogador3)

    if (RecPresente3 && RecompensaItens3.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens3.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 19).setValue(RecompensaString);
    }
  
    if (compraPresente3 && compraItens3.length > 0) {
      var compraString = '[Compra] ' + compraItens3.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 20).setValue(compraString);
    }
  
    if (vendaPresente3 && vendaItens3.length > 0) {
      var vendaString = '[Venda] ' + vendaItens3.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 21).setValue(vendaString);
    }
  
    if (PerdaPresente3 && PerdaItens3.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens3.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 22).setValue(PerdaString);
    }  

    // Obter valores e fazer mensagem do Jogador4 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador4 = ssFormulario.getRange('E29').getValues();
    var valorE4sCompra4 = ssFormulario.getRange('D120:G142').getValues();
    var compraItens4 = [];
    var compraPresente4 = false;
    var vendaItens4 = [];
    var vendaPresente4 = false;
    var RecompensaItens4 = [];
    var RecPresente4 = false;
    var PerdaItens4 = [];
    var PerdaPresente4 = false;  
  
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
      } else if (valorD4 === 'Recompensa') {
        RecPresente4 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem4 = valorE4 + 'x, ' + valorF4;
        if (valorG4) {
          RecompensaItem4 += ' [' + valorG4 + ']';
        }
        RecompensaItens4.push(RecompensaItem4);
      } else if (valorD4 === 'Perda/Consumo') {
        PerdaPresente4 = true;
        // Construir a mensagem da venda
        var PerdaItem4 = valorE4 + 'x, ' + valorF4;
        if (valorG4) {
          PerdaItem4 += ' [' + valorG4 + ']';
        }
        PerdaItens4.push(PerdaItem4);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 23).setValue(NomeJogador4)

    if (RecPresente4 && RecompensaItens4.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens4.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 24).setValue(RecompensaString);
    }
  
    if (compraPresente4 && compraItens4.length > 0) {
      var compraString = '[Compra] ' + compraItens4.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 25).setValue(compraString);
    }
  
    if (vendaPresente4 && vendaItens4.length > 0) {
      var vendaString = '[Venda] ' + vendaItens4.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 26).setValue(vendaString);
    }
  
    if (PerdaPresente4 && PerdaItens4.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens4.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 27).setValue(PerdaString);
    }

    // Obter valores e fazer mensagem do Jogador5 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador5 = ssFormulario.getRange('E30').getValues();
    var valorE5sCompra5 = ssFormulario.getRange('D147:G169').getValues();
    var compraItens5 = [];
    var compraPresente5 = false;
    var vendaItens5 = [];
    var vendaPresente5 = false;
    var RecompensaItens5 = [];
    var RecPresente5 = false;
    var PerdaItens5 = [];
    var PerdaPresente5 = false;  
  
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
      } else if (valorD5 === 'Recompensa') {
        RecPresente5 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem5 = valorE5 + 'x, ' + valorF5;
        if (valorG5) {
          RecompensaItem5 += ' [' + valorG5 + ']';
        }
        RecompensaItens5.push(RecompensaItem5);
      } else if (valorD5 === 'Perda/Consumo') {
        PerdaPresente5 = true;
        // Construir a mensagem da venda
        var PerdaItem5 = valorE5 + 'x, ' + valorF5;
        if (valorG5) {
          PerdaItem5 += ' [' + valorG5 + ']';
        }
        PerdaItens5.push(PerdaItem5);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 28).setValue(NomeJogador5)

    if (RecPresente5 && RecompensaItens5.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens5.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 29).setValue(RecompensaString);
    }
  
    if (compraPresente5 && compraItens5.length > 0) {
      var compraString = '[Compra] ' + compraItens5.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 30).setValue(compraString);
    }
  
    if (vendaPresente5 && vendaItens5.length > 0) {
      var vendaString = '[Venda] ' + vendaItens5.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 31).setValue(vendaString);
    }
  
    if (PerdaPresente5 && PerdaItens5.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens5.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 32).setValue(PerdaString);
    }

    // Obter valores e fazer mensagem do Jogador6 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador6 = ssFormulario.getRange('E31').getValues();
    var valorE6sCompra6 = ssFormulario.getRange('D174:G196').getValues();
    var compraItens6 = [];
    var compraPresente6 = false;
    var vendaItens6 = [];
    var vendaPresente6 = false;
    var RecompensaItens6 = [];
    var RecPresente6 = false;
    var PerdaItens6 = [];
    var PerdaPresente6 = false;  
  
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
      } else if (valorD6 === 'Recompensa') {
        RecPresente6 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem6 = valorE6 + 'x, ' + valorF6;
        if (valorG6) {
          RecompensaItem6 += ' [' + valorG6 + ']';
        }
        RecompensaItens6.push(RecompensaItem6);
      } else if (valorD6 === 'Perda/Consumo') {
        PerdaPresente6 = true;
        // Construir a mensagem da venda
        var PerdaItem6 = valorE6 + 'x, ' + valorF6;
        if (valorG6) {
          PerdaItem6 += ' [' + valorG6 + ']';
        }
        PerdaItens6.push(PerdaItem6);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 33).setValue(NomeJogador6)

    if (RecPresente6 && RecompensaItens6.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens6.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 34).setValue(RecompensaString);
    }
  
    if (compraPresente6 && compraItens6.length > 0) {
      var compraString = '[Compra] ' + compraItens6.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 35).setValue(compraString);
    }
  
    if (vendaPresente6 && vendaItens6.length > 0) {
      var vendaString = '[Venda] ' + vendaItens6.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 36).setValue(vendaString);
    }
  
    if (PerdaPresente6 && PerdaItens6.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens6.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 37).setValue(PerdaString);
    }

        // Obter valores e fazer mensagem do Jogador7 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
        var NomeJogador7 = ssFormulario.getRange('E32').getValues();
        var valorE7sCompra7 = ssFormulario.getRange('D201:G223').getValues();
        var compraItens7 = [];
        var compraPresente7 = false;
        var vendaItens7 = [];
        var vendaPresente7 = false;
        var RecompensaItens7 = [];
        var RecPresente7 = false;
        var PerdaItens7 = [];
        var PerdaPresente7 = false;  
      
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
          } else if (valorD7 === 'Recompensa') {
            RecPresente7 = true;
            // Construir a mensagem da recompensa
            var RecompensaItem7 = valorE7 + 'x, ' + valorF7;
            if (valorG7) {
              RecompensaItem7 += ' [' + valorG7 + ']';
            }
            RecompensaItens7.push(RecompensaItem7);
          } else if (valorD7 === 'Perda/Consumo') {
            PerdaPresente7 = true;
            // Construir a mensagem da venda
            var PerdaItem7 = valorE7 + 'x, ' + valorF7;
            if (valorG7) {
              PerdaItem7 += ' [' + valorG7 + ']';
            }
            PerdaItens7.push(PerdaItem7);
          }
        }
      
        ssRelatorio.getRange(ultimaLinhaRel, 38).setValue(NomeJogador7)
    
        if (RecPresente7 && RecompensaItens7.length > 0) {
          var RecompensaString = '[Recompensa] ' + RecompensaItens7.join('; ') + ';';
          ssRelatorio.getRange(ultimaLinhaRel, 39).setValue(RecompensaString);
        }
      
        if (compraPresente7 && compraItens7.length > 0) {
          var compraString = '[Compra] ' + compraItens7.join('; ') + ';';
          ssRelatorio.getRange(ultimaLinhaRel, 40).setValue(compraString);
        }
      
        if (vendaPresente7 && vendaItens7.length > 0) {
          var vendaString = '[Venda] ' + vendaItens7.join('; ') + ';';
          ssRelatorio.getRange(ultimaLinhaRel, 41).setValue(vendaString);
        }
      
        if (PerdaPresente7 && PerdaItens7.length > 0) {
          var PerdaString = '[Perda/Consumo] ' + PerdaItens7.join('; ') + ';';
          ssRelatorio.getRange(ultimaLinhaRel, 42).setValue(PerdaString);
        }

            // Obter valores e fazer mensagem do Jogador8 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
    var NomeJogador8 = ssFormulario.getRange('E33').getValues();
    var valorE8sCompra8 = ssFormulario.getRange('D228:G250').getValues();
    var compraItens8 = [];
    var compraPresente8 = false;
    var vendaItens8 = [];
    var vendaPresente8 = false;
    var RecompensaItens8 = [];
    var RecPresente8 = false;
    var PerdaItens8 = [];
    var PerdaPresente8 = false;  
  
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
      } else if (valorD8 === 'Recompensa') {
        RecPresente8 = true;
        // Construir a mensagem da recompensa
        var RecompensaItem8 = valorE8 + 'x, ' + valorF8;
        if (valorG8) {
          RecompensaItem8 += ' [' + valorG8 + ']';
        }
        RecompensaItens8.push(RecompensaItem8);
      } else if (valorD8 === 'Perda/Consumo') {
        PerdaPresente8 = true;
        // Construir a mensagem da venda
        var PerdaItem8 = valorE8 + 'x, ' + valorF8;
        if (valorG8) {
          PerdaItem8 += ' [' + valorG8 + ']';
        }
        PerdaItens8.push(PerdaItem8);
      }
    }
  
    ssRelatorio.getRange(ultimaLinhaRel, 43).setValue(NomeJogador8)

    if (RecPresente8 && RecompensaItens8.length > 0) {
      var RecompensaString = '[Recompensa] ' + RecompensaItens8.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 44).setValue(RecompensaString);
    }
  
    if (compraPresente8 && compraItens8.length > 0) {
      var compraString = '[Compra] ' + compraItens8.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 45).setValue(compraString);
    }
  
    if (vendaPresente8 && vendaItens8.length > 0) {
      var vendaString = '[Venda] ' + vendaItens8.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 46).setValue(vendaString);
    }
  
    if (PerdaPresente8 && PerdaItens8.length > 0) {
      var PerdaString = '[Perda/Consumo] ' + PerdaItens8.join('; ') + ';';
      ssRelatorio.getRange(ultimaLinhaRel, 47).setValue(PerdaString);
    }

        // Obter valores e fazer mensagem do Jogador9 das colunas D (Compra), E (Quantidade), F (Nome do item) e G (Preço do item)
        var NomeJogador9 = ssFormulario.getRange('E34').getValues();
        var valorE9sCompra9 = ssFormulario.getRange('D255:G277').getValues();
        var compraItens9 = [];
        var compraPresente9 = false;
        var vendaItens9 = [];
        var vendaPresente9 = false;
        var RecompensaItens9 = [];
        var RecPresente9 = false;
        var PerdaItens9 = [];
        var PerdaPresente9 = false;  
      
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
          } else if (valorD9 === 'Recompensa') {
            RecPresente9 = true;
            // Construir a mensagem da recompensa
            var RecompensaItem9 = valorE9 + 'x, ' + valorF9;
            if (valorG9) {
              RecompensaItem9 += ' [' + valorG9 + ']';
            }
            RecompensaItens9.push(RecompensaItem9);
          } else if (valorD9 === 'Perda/Consumo') {
            PerdaPresente9 = true;
            // Construir a mensagem da venda
            var PerdaItem9 = valorE9 + 'x, ' + valorF9;
            if (valorG9) {
              PerdaItem9 += ' [' + valorG9 + ']';
            }
            PerdaItens9.push(PerdaItem9);
}
        }

        ssRelatorio.getRange(ultimaLinhaRel, 48).setValue(NomeJogador9)
    
        if (RecPresente9 && RecompensaItens9.length > 0) {
var RecompensaString = '[Recompensa] ' + RecompensaItens9.join('; ') + ';';
ssRelatorio.getRange(ultimaLinhaRel, 49).setValue(RecompensaString);
        }
        if (compraPresente9 && compraItens9.length > 0) {
var compraString = '[Compra] ' + compraItens9.join('; ') + ';';
ssRelatorio.getRange(ultimaLinhaRel, 50).setValue(compraString);
        }
        if (vendaPresente9 && vendaItens9.length > 0) {
var vendaString = '[Venda] ' + vendaItens9.join('; ') + ';';
ssRelatorio.getRange(ultimaLinhaRel, 51).setValue(vendaString);
        }

        if (PerdaPresente9 && PerdaItens9.length > 0) {
var PerdaString = '[Perda/Consumo] ' + PerdaItens9.join('; ') + ';';
ssRelatorio.getRange(ultimaLinhaRel, 52).setValue(PerdaString);
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

    
  //Abaixo, demais informações da mesa

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

  //Dados extras
    var dataHoraExecucao = new Date();
    var emailUsuario = Session.getActiveUser().getEmail();

    //Infos
    var NomeMestre = ssFormulario.getRange('K14').getValue();
    var TipodeRelatório = ssFormulario.getRange('K15').getValue();
    var dataSessao = ssFormulario.getRange('K18').getValue();
    var nomeDaMissao = ssFormulario.getRange('K17').getValue();
    var nSessao = ssFormulario.getRange('K18').getValue();
    var tierMesa = ssFormulario.getRange('K19').getValue();

    //postando
    ssRelatorio.getRange(ultimaLinhaRel, 1).setValue(dataHoraExecucao);
    ssRelatorio.getRange(ultimaLinhaRel, 2).setValue(emailUsuario);
    ssRelatorio.getRange(ultimaLinhaRel, 3).setValue(NomeMestre);
    ssRelatorio.getRange(ultimaLinhaRel, 4).setValue(dataSessao);
    ssRelatorio.getRange(ultimaLinhaRel, 5).setValue(nomeDaMissao);
    ssRelatorio.getRange(ultimaLinhaRel, 6).setValue(nSessao);
    ssRelatorio.getRange(ultimaLinhaRel, 7).setValue(tierMesa);
  // Exibe uma mensagem "Relatório entregue" em uma janela de aviso
Browser.msgBox("Relatório entregue", "Caro contratante, seu relatório foi recebido pela Ordem de Samsara. Obrigado.", Browser.Buttons.OK);
}