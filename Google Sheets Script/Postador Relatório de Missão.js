function GERAR_TEXTO_COM_REFERENCIAS() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Relatorio Discord"); // Substitua pelo nome da sua aba
    const wsrelato = ss.getSheetByName("Relatorios de missao");
  
      //Analisar não postadas
    const ultimopost = wsrelato.getRange(wsrelato.getMaxRows(), 53).getNextDataCell(SpreadsheetApp.Direction.UP).offset(1, -52);
    const analisepost = ultimopost.getValue();
  
    const ultimorelatdisc = ws.getRange(ws.getMaxRows(), 2).getNextDataCell(SpreadsheetApp.Direction.UP).offset(1, -1)
    let linhatualdisc = ultimorelatdisc.getRow ();
  
    
  
    const colunaTexto = 1; // Coluna 1 (A)
    let linhaAtual = ultimopost.getRow(); // Linha a partir da qual você deseja começar a leitura
  
    
      // Obtenha os valores das células F, K e P da planilha "Relatorios de missao"
      const formattedDate = ws.getRange(`'Relatorios de missao'!D${linhaAtual}`).getValue();
     // const dateObj = new Date(datajogo);
     // const formattedDate = Utilities.formatDate(datajogo, "GMT-3", "dd/MM/yyyy");
      const mestre = ws.getRange(`'Relatorios de missao'!C${linhaAtual}`).getValue();
      const nomemissao = ws.getRange(`'Relatorios de missao'!E${linhaAtual}`).getValue();
      const nsessao = ws.getRange(`'Relatorios de missao'!F${linhaAtual}`).getValue();
      const tiermesa = ws.getRange(`'Relatorios de missao'!G${linhaAtual}`).getValue();
      //const sucesso = ws.getRange(`'Relatorios de missao'!H${linhaAtual}`).getValue();
      
      const jogador1 = ws.getRange(`'Relatorios de missao'!H${linhaAtual}`).getValue();
      const tesouro1 = ws.getRange(`'Relatorios de missao'!I${linhaAtual}`).getValue();
      const compra1 = ws.getRange(`'Relatorios de missao'!J${linhaAtual}`).getValue();
      const venda1 = ws.getRange(`'Relatorios de missao'!K${linhaAtual}`).getValue();
      const consumo1 = ws.getRange(`'Relatorios de missao'!L${linhaAtual}`).getValue();
  
      
      //Jogador 2
      const jogador2 = ws.getRange(`'Relatorios de missao'!M${linhaAtual}`).getValue();
      const tesouro2 = ws.getRange(`'Relatorios de missao'!N${linhaAtual}`).getValue();
      const compra2 = ws.getRange(`'Relatorios de missao'!O${linhaAtual}`).getValue();
      const venda2 = ws.getRange(`'Relatorios de missao'!P${linhaAtual}`).getValue();
      const consumo2 = ws.getRange(`'Relatorios de missao'!Q${linhaAtual}`).getValue();
  
      //Jogador 3
      const jogador3 = ws.getRange(`'Relatorios de missao'!R${linhaAtual}`).getValue();
      const tesouro3 = ws.getRange(`'Relatorios de missao'!S${linhaAtual}`).getValue();
      const compra3 = ws.getRange(`'Relatorios de missao'!T${linhaAtual}`).getValue();
      const venda3 = ws.getRange(`'Relatorios de missao'!U${linhaAtual}`).getValue();
      const consumo3 = ws.getRange(`'Relatorios de missao'!V${linhaAtual}`).getValue();
      
  
      //Jogador 4
      const jogador4 = ws.getRange(`'Relatorios de missao'!W${linhaAtual}`).getValue();
      const tesouro4 = ws.getRange(`'Relatorios de missao'!X${linhaAtual}`).getValue();
      const compra4 = ws.getRange(`'Relatorios de missao'!Y${linhaAtual}`).getValue();
      const venda4 = ws.getRange(`'Relatorios de missao'!Z${linhaAtual}`).getValue();
      const consumo4 = ws.getRange(`'Relatorios de missao'!AA${linhaAtual}`).getValue();
      
      //Jogador 5
      const jogador5 = ws.getRange(`'Relatorios de missao'!AB${linhaAtual}`).getValue();
      const tesouro5 = ws.getRange(`'Relatorios de missao'!AC${linhaAtual}`).getValue();
      const compra5 = ws.getRange(`'Relatorios de missao'!AD${linhaAtual}`).getValue();
      const venda5 = ws.getRange(`'Relatorios de missao'!AE${linhaAtual}`).getValue();
      const consumo5 = ws.getRange(`'Relatorios de missao'!AF${linhaAtual}`).getValue();
      
      //Jogador 6
      const jogador6 = ws.getRange(`'Relatorios de missao'!AG${linhaAtual}`).getValue();
      const tesouro6 = ws.getRange(`'Relatorios de missao'!AH${linhaAtual}`).getValue();
      const compra6 = ws.getRange(`'Relatorios de missao'!AI${linhaAtual}`).getValue();
      const venda6 = ws.getRange(`'Relatorios de missao'!AJ${linhaAtual}`).getValue();
      const consumo6 = ws.getRange(`'Relatorios de missao'!AK${linhaAtual}`).getValue();
        
      //Jogador 7
      const jogador7 = ws.getRange(`'Relatorios de missao'!AL${linhaAtual}`).getValue();
      const tesouro7 = ws.getRange(`'Relatorios de missao'!AM${linhaAtual}`).getValue();
      const compra7 = ws.getRange(`'Relatorios de missao'!AN${linhaAtual}`).getValue();
      const venda7 = ws.getRange(`'Relatorios de missao'!AO${linhaAtual}`).getValue();
      const consumo7 = ws.getRange(`'Relatorios de missao'!AP${linhaAtual}`).getValue();
      
      //Jogador 8
      const jogador8 = ws.getRange(`'Relatorios de missao'!AQ${linhaAtual}`).getValue();
      const tesouro8 = ws.getRange(`'Relatorios de missao'!AR${linhaAtual}`).getValue();
      const compra8 = ws.getRange(`'Relatorios de missao'!AS${linhaAtual}`).getValue();
      const venda8 = ws.getRange(`'Relatorios de missao'!AT${linhaAtual}`).getValue();
      const consumo8 = ws.getRange(`'Relatorios de missao'!AU${linhaAtual}`).getValue();
      
      //Jogador 9
      const jogador9 = ws.getRange(`'Relatorios de missao'!AV${linhaAtual}`).getValue();
      const tesouro9 = ws.getRange(`'Relatorios de missao'!AW${linhaAtual}`).getValue();
      const compra9 = ws.getRange(`'Relatorios de missao'!AX${linhaAtual}`).getValue();
      const venda9 = ws.getRange(`'Relatorios de missao'!AY${linhaAtual}`).getValue();
      const consumo9 = ws.getRange(`'Relatorios de missao'!AZ${linhaAtual}`).getValue();
  
     //Condicional para voltar se não tiver relatório a fazer
      if (mestre === ""){
       return;
     }
  
  
  
  
      // Crie a mensagem com as informações do jogador
       
      // Crie a mensagem com as informações do jogador
      const mensageminicial = `\`\`\`ini\n [Nome do Mestre] ${mestre}\n [Nome da Missão] ${nomemissao}\n [Número da Sessão] ${nsessao}\n [Tier da Mesa] ${tiermesa}\n [Data da Mesa]: ${formattedDate}`
  
      const mensagemjogador1 = jogador1 !== "" ? `\n ---------------------------------\n [Nome do Personagem] ${jogador1} \n` : "";       
      const mensagemtesouro1 = tesouro1 !== "" ? ` ${tesouro1} \n` : ""; 
      const mensagemcompra1 = compra1 !== "" ? ` ${compra1} \n` : ""; 
      const mensagemvenda1 = venda1 !== "" ? ` ${venda1} \n` : ""; 
      const mensagemconsumo1 = consumo1 !== "" ? ` ${consumo1} \n` : ""; 
  
  
      const mensagemjogador2 = jogador2 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador2} \n` : "";       
      const mensagemtesouro2 = tesouro2 !== "" ? ` ${tesouro2} \n` : ""; 
      const mensagemcompra2 = compra2 !== "" ? ` ${compra2} \n` : ""; 
      const mensagemvenda2 = venda2 !== "" ? ` ${venda2} \n` : ""; 
      const mensagemconsumo2 = consumo2 !== "" ? ` ${consumo2} \n` : ""; 
  
      const mensagemjogador3 = jogador3 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador3} \n` : "";       
      const mensagemtesouro3 = tesouro3 !== "" ? ` ${tesouro3} \n` : ""; 
      const mensagemcompra3 = compra3 !== "" ? ` ${compra3} \n` : ""; 
      const mensagemvenda3 = venda3 !== "" ? ` ${venda3} \n` : ""; 
      const mensagemconsumo3 = consumo3 !== "" ? ` ${consumo3} \n` : ""; 
  
      const mensagemjogador4 = jogador4 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador4} \n` : "";       
      const mensagemtesouro4 = tesouro4 !== "" ? ` ${tesouro4} \n` : ""; 
      const mensagemcompra4 = compra4 !== "" ? ` ${compra4} \n` : ""; 
      const mensagemvenda4 = venda4 !== "" ? ` ${venda4} \n` : ""; 
      const mensagemconsumo4 = consumo4 !== "" ? ` ${consumo4} \n` : ""; 
  
      const mensagemjogador5 = jogador5 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador5} \n` : "";       
      const mensagemtesouro5 = tesouro5 !== "" ? ` ${tesouro5} \n` : ""; 
      const mensagemcompra5 = compra5 !== "" ? ` ${compra5} \n` : ""; 
      const mensagemvenda5 = venda5 !== "" ? ` ${venda5} \n` : ""; 
      const mensagemconsumo5 = consumo5 !== "" ? ` ${consumo5} \n` : ""; 
  
      const mensagemjogador6 = jogador6 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador6} \n` : "";       
      const mensagemtesouro6 = tesouro6 !== "" ? ` ${tesouro6} \n` : ""; 
      const mensagemcompra6 = compra6 !== "" ? ` ${compra6} \n` : ""; 
      const mensagemvenda6 = venda6 !== "" ? ` ${venda6} \n` : ""; 
      const mensagemconsumo6 = consumo6 !== "" ? ` ${consumo6} \n` : ""; 
  
      const mensagemjogador7 = jogador7 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador7} \n` : "";       
      const mensagemtesouro7 = tesouro7 !== "" ? ` ${tesouro7} \n` : ""; 
      const mensagemcompra7 = compra7 !== "" ? ` ${compra7} \n` : ""; 
      const mensagemvenda7 = venda7 !== "" ? ` ${venda7} \n` : ""; 
      const mensagemconsumo7 = consumo7 !== "" ? ` ${consumo7} \n` : ""; 
  
      const mensagemjogador8 = jogador8 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador8} \n` : "";       
      const mensagemtesouro8 = tesouro8 !== "" ? ` ${tesouro8} \n` : ""; 
      const mensagemcompra8 = compra8 !== "" ? ` ${compra8} \n` : ""; 
      const mensagemvenda8 = venda8 !== "" ? ` ${venda8} \n` : ""; 
      const mensagemconsumo8 = consumo8 !== "" ? ` ${consumo8} \n` : ""; 
  
      const mensagemjogador9 = jogador9 !== "" ? ` ---------------------------------\n [Nome do Personagem] ${jogador9} \n` : "";       
      const mensagemtesouro9 = tesouro9 !== "" ? ` ${tesouro9} \n` : ""; 
      const mensagemcompra9 = compra9 !== "" ? ` ${compra9} \n` : ""; 
      const mensagemvenda9 = venda9 !== "" ? ` ${venda9} \n` : ""; 
      const mensagemconsumo9 = consumo9 !== "" ? ` ${consumo9} \n` : ""; 
  
      const mensagemfinal = ` ---------------------------------\n\`\`\``
  
  
  
  
      const mensagem = `${mensageminicial}${mensagemjogador1}${mensagemtesouro1}${mensagemcompra1}${mensagemvenda1}${mensagemconsumo1}${mensagemjogador2}${mensagemtesouro2}${mensagemcompra2}${mensagemvenda2}${mensagemconsumo2}${mensagemjogador3}${mensagemtesouro3}${mensagemcompra3}${mensagemvenda3}${mensagemconsumo3}${mensagemjogador4}${mensagemtesouro4}${mensagemcompra4}${mensagemvenda4}${mensagemconsumo4}${mensagemjogador5}${mensagemtesouro5}${mensagemcompra5}${mensagemvenda5}${mensagemconsumo5}${mensagemjogador6}${mensagemtesouro6}${mensagemcompra6}${mensagemvenda6}${mensagemconsumo6}${mensagemjogador7}${mensagemtesouro7}${mensagemcompra7}${mensagemvenda7}${mensagemconsumo7}${mensagemjogador8}${mensagemtesouro8}${mensagemcompra8}${mensagemvenda8}${mensagemconsumo8}${mensagemjogador9}${mensagemtesouro9}${mensagemcompra9}${mensagemvenda9}${mensagemconsumo9}${mensagemfinal}`;
      
  
  
  
      // Insira a mensagem na próxima linha da coluna 1 (A) na planilha "Thread"
      ws.getRange(linhatualdisc, colunaTexto).setValue(mensagem);
  
        // Escreva "postado" na célula 53 da linha copiada na planilha de destino
      wsrelato.getRange(ultimopost.getRow(), 53).setValue("postado");    
    }
  