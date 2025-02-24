var NextPage = [5]
let Chars = {
    Name: 'Aikawa',
    Hab: localStorage.getItem('Hab'),
    Ene: localStorage.getItem('Ene'),
    Sor: localStorage.getItem('Sor'),
    Fth: localStorage.getItem('Fth'),
    initHab: localStorage.getItem('Hab'),
    initEne: localStorage.getItem('Ene'),
    initSor: localStorage.getItem('Sor'),
    initFth: localStorage.getItem('Fth'),
}
let Enemy = {name: 'Dog', Hab: 17, Ene:88}
let condition = {has:false, which: '', id: 0}
let combate = false
let feiticos = ["Grande-Ataque", "Raio-de-Jandor", 'Divisao']
let aflicoes = []
let itens = ["Espada-Magica", "Crucifixo-de-Prata", 'Livro-das-Espadas']
let provisoes = 0
let ouro = 0

function Paginas(pagNmb) {

    switch (pagNmb) {
        case 1:
            but = ['Atacar o Cavaleiro Sem Cabeça', 'Entrar no coche', 'Ignorar o coche, perguntar a alguém o caminho']
            NextPage = [201, 174, 148]
            break;
        case 2:
            but = ['porta para norte', 'porta para leste', 'porta para oeste']
            NextPage = [101, 256, 60]
            break;
        case 3:
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [173]
                return
            }
            but = ['não tenho']
            NextPage = [208]
            break;
        case 4:
            Chars.Fth--
            attInv()
            but = ['tentar a porta oeste']
            NextPage = [45]
            break;
        case 5:
            if (combate == true) {
                typingEffect('Você derrota o corcel e analisa a sala mas não encontra nada de interessante aqui.')
                Chars.Hab = Chars.Hab + 2
                attInv()
                but = ['seguir para a Cripta', 'abrir as portas de bronze', 'abrir a porta ao sul']
                NextPage = [90, 2, 18]
                combate = false
                return
            }
            but = ['iniciar combate']
            combate = true
            Chars.Hab = Chars.Hab - 2
            attInv()
            Enemy = {name: 'Corcel Demônio', Hab: 8, Ene:10}
            break;
        case 6:
            if (IfCombate == 1) {
                combate = false
                NextPage03 = 10
                Continua03()
            } else {
                combate = true
                sessionStorage.setItem("CondicaoDano", 0)
                localStorage.setItem("CondicaoSerieAtaque", 1)
            }
            break;
        case 7:
            but = ['CONTINUAR']
            NextPage = [51]
            Chars.Ene = Chars.Ene - 3
            attInv()
            break;
        case 8:
            but = ['fugir', 'andar até a aparição']
            NextPage = [59, 102]
            break;
        case 9:
            but = ['CONTINUAR']
            NextPage = [118]
            break;
        case 10:
            but = ['tentar abrir a porta', 'seguir o corredor']
            NextPage = [34, 31]
            Chars.Fth = CharsFth - 3
            attInv()
            break;
        case 11:
            but = ['seguir pela cozinha principal', 'sair e ir para a porta norte', 'sair e abrir a porta oeste', 'sair e descer pela passagem leste']
            NextPage = [282, 332, 221, 353]
            break;
        case 12:
            but = ['CONTINUAR']
            NextPage = [35]
            Chars.Ene = Chars.initEne
            attInv()
            break;
        case 13:
            if (Valderesse == true) {
                Texto = `Quando você se aproxima, um pequeno e envelhecido <strong>Gnomo</strong> corre de dentro de sua cabana para a luz cinzenta da madrugada e anda meio de lado até você,
    sorrindo de modo bastante malicioso. Ele lhe pede 2 Moedas de Ouro para levá-lo para o outro lado do rio, em seu barco, mas acrescenta que você
    pode ficar e dormir em sua cabana se o desejar - e você está muito cansado!<br>
    Antes de consegui se decidir sobre o que fazer Valderesse entrevem`
                TextoPersonalizado()
                PersonalizarTexto = true
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                NextPage01 = 64
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'atacar o Gnomo'
                NextPage01 = 113
                botao02.style.visibility = 'visible'
                botao02.innerText = 'aceitar sua oferta'
                NextPage02 = 211
                botao03.style.visibility = 'visible'
                botao03.innerText = 'pagá-lo e atravessar o rio'
                NextPage03 = 162
            }
            break;
        case 14:
            botao01.style.visibility = 'visible'
            if (itens.includes("Espada-Magica")) {
                botao01.innerText = 'tenho'
                NextPage01 = 84
            } else {
                botao01.innerText = 'não tenho'
                NextPage01 = 61
            }
            break;
        case 15:
            itens.push("CrucifixoPrata")
            EneCur = EneCur + 4
            Aumentou = true
            if (EneCur >= sessionStorage.getItem("EneUsuario")) {
                localStorage.setItem("EneCurrent", sessionStorage.getItem("EneUsuario"))
                attChar()
            } else {
                localStorage.setItem("EneCurrent", EneCur)
                attChar()
            }
            botao01.style.visibility = 'visible'
            botao01.innerText = 'sair e abrir a porta oeste'
            NextPage01 = 294
            if (aflicoes.length() > 0) {
                botao02.style.visibility = 'visible'
                botao02.innerText = 'pedir ajuda a Gunthar com alguma Aflição'
                NextPage02 = 48
            }
            if (itens.includes("Livro-de-Cura") || itens.includes("Livro-das-Espada")) {
                botao03.style.visibility = 'visible'
                botao03.innerText = 'mostrar um livro a Gunthar'
                NextPage03 = 317
            }
            break;
        case 16:
            EneCur = EneCur - 2
            localStorage.setItem("EneCurrent", EneCur)
            attChar()
            localStorage.setItem("CondicaoSerieAtaque", 1)
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 150
            break;
        case 17:
            if (!itens.includes("Espelho")) {
                NextPage03 = 26
                Continua03()
            }
            botao01.style.visibility = 'visible'
            botao01.innerText = 'atacar o Conde'
            NextPage01 = 26
            if (itens.includes("AguaBenta")) {
                botao02.style.visibility = "visible"
                botao02.innerText = 'jogar-lhe Água-benta'
                NextPage02 = 216
            }
            if (magias.includes("GrandeAtaque") || magias.includes("RaioJandor")) {
                botao03.style.visibility = 'visible'
                botao03.innerText = 'lançar-lhe um feitiço'
                NextPage03 = 158
            }
            break;
        case 18:
            but = ['seguir para a porta a oeste do depósito', 'sair e seguir para a Cripta', 'sair e seguir para as portas ao norte do pátio']
            NextPage = [67, 90, 2]
            break;
        case 19:
            but = ['CONTINUAR']
            if (itens.includes("Cruz") || itens.includes("Escudo") && itens.includes("EstacaPrata") || itens.includes("EspadaMagica")) {
                NextPage = [32]
            } else {
                NextPage = [69]
            }
            break;
        case 20:
            but = ['CONTINUAR']
            NextPage = [106]
            EneCur = EneCur - 2
            localStorage.setItem("EneCurrent", EneCur)
            attChar()
            break;
        case 21:
            but = ['examinar os aposentos', 'sair e abrir a porta leste oposta no corredor', 'sair e abrir a porta no final sul do corredor', 'retomar para o hall e abrir a porta norte']
            NextPage = [78, 118, 252, 101]
            break;
        case 22:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar jornada'
                combate = false
                NextPage01 = 224
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Thassalos Maior')
                sessionStorage.setItem("HabEnemy", 10)
                sessionStorage.setItem("EneEnemy", 15)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 23:
            if (itens.includes('EspadaMagica')) {
                HabCur++
                Aumentou = true
                localStorage.setItem('HabCurrent', HabCur)
                attChar()
            }
            but = ['CONTINUAR']
            NextPage = [106]
            break;
        case 24:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= 2) {
                    NextPage01 = 362
                } else {
                    NextPage01 = 73
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dado'
                Addition = 0
            }
            break;
        case 25:
            itens.push("EstacaPrata", "ChavesCastelao")
            console.log(itens)
            break;
        case 26:
            TestesDados01 = false
            botao01.style.visibility = 'visible'
            if (itens.includes("EspadaMagica")) {
                botao01.innerText = 'tenho'
                NextPage01 = 372
            } else {
                botao01.innerText = 'não tenho'
                NextPage01 = 284
            }
            break;
        case 27:
            Chars.Ene = Chars.Ene - 2
            attInv()
            but = ['tentar conversar com ele', 'atacá-lo imediatamente']
            NextPage = [126, 77] 
            break;
        case 28:
            botao01.style.visibility = 'visible'
            botao01.innerText = 'não usar'
            NextPage01 = 63
            if (magias.includes('ParedeForca')) {
                botao02.style.visibility = 'visible'
                botao02.innerText = 'lançar feitiço'
                NextPage02 = 111
            } else {
                botao01.innerText = 'continuar'
            }
            break;
        case 29:
            if (feiticos.includes('ParedeForca')) {
                but.push('usar parede de Força')
                NextPage.push(155)
            }
            if (feiticos.includes('GrandeAtaque')) {
                but.push('usar grande ataque')
                NextPage.push(112)
            }
            if (feiticos.includes('RaioJandor')) {
                but.push('usar raio de Jando')
                NextPage.push(395)
            }
            break;
        case 30:
            but = ['subir a escada de pedra', 'atacar o Ghoul']
            NextPage = [159, 107]
            break;
        case 31:
            but = ['abrir a primeira porta para leste', 
                'abrir a segunda porta para leste',
                'abrir a porta na ponta sul do corredor',
                'abrir a porta para oeste'
            ]
            NextPage = [58, 227, 319, 114]
            break;
        case 32:
            Aumentou = true
            FeCur = FeCur + 2
            SorCur = SorCur + 2
            if (FeCur >= localStorage.getItem('FeCurrent')) {
                localStorage.setItem('FeCurrent', sessionStorage.getItem('FeUsuario'))
            } else {
                localStorage.setItem('FeCurrent', FeCur)
            }
            if (SorCur >= localStorage.getItem('SorCurrent')) {
                localStorage.setItem('SorCurrent', sessionStorage.getItem('SorUsuario'))
            } else {
                localStorage.setItem('SorCurrent', SorCur)
            }
            attChar()
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 132
            break;
        case 33:
            if (TestesDados02 == true) {
                SorCur--
                localStorage.setItem('SorCurrent', SorCur)
                attChar()
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= SorCur) {
                    NextPage01 = 86
                } else {
                    NextPage01 = 133
                }
            } else {
                TestesDadosComparativo = SorCur
                TestesDados02 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 34:
            but = ['atacá-la', 'conversar']
            NextPage = [71, 363]
            break;
        case 35:
            but = ['CONTINUAR']
            NextPage = [71, 363]
            if (itens.includes('LivroEspada')) {
                NextPage = [94]
            } else {
                NextPage = [14]
            }
            break;
        case 36:
            if (TestesDados02 == true) {
                SorCur--
                localStorage.setItem('SorCurrent', SorCur)
                attChar()
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= SorCur) {
                    NextPage01 = 134
                }
            } else {
                TestesDadosComparativo = SorCur
                TestesDados02 = true
                botao01.style.visibility = 'visible'
                botao01.innerText = 'alegar pobreza'
                NextPage01 = 183
                botao06.style.visibility = 'visible'
                botao06.innerText = 'testar sorte'
            }
            break;
        case 37:
            EneCur--
            localStorage.setItem('EneCurrent', EneCur)
            attChar()
            but = ['tentar encontrar os foles', 'tentar silenciar o órgão', 'correr para a porta norte']
            NextPage = [65, 149, 335]
            break;
        case 38:
            but = ['abrir ao porta sul da junção em T', 'abrir a porta sul']
            NextPage = [8, 371]
            break;
        case 39:
            but = ['seguir para a Cripta', 'abrir as portas de bronze', 'abrir a porta para o sul']
            NextPage = [90, 2, 18]
            break;
        case 40:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                botao02.style.visibility = 'visible'
                botao01.innerText = 'entrar no barco'
                botao02.innerText = 'atravessar o rio'
                NextPage01 = 138
                NextPage02 = 187
            } else if (Inimigos == 1) {
                Texto = `O cão é um <strong>Mastim Selvagem</strong>, com grosso pelo cinzento e grandes dentes amarelados, que late ferozmente e baba diante da possibilidade de tê-lo como refeição!`
                TextoPersonalizado()
                PersonalizarTexto = true
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                Inimigos = 0
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Mastim Selvagem')
                sessionStorage.setItem("HabEnemy", 7)
                sessionStorage.setItem("EneEnemy", 7)
            } else if (Inimigos == 2) {
                Texto = `Por escolher atacar o cão, em vez de tentar passar sorrateiramente por ele, você terá um golpe livre e poderá 
                <strong>subtrair 2 pontos da ENERGIA dele</strong> antes de enfrentá-lo.<br>`
                TextoPersonalizado()
                PersonalizarTexto = true
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                Inimigos = 0
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Mastim Selvagem')
                sessionStorage.setItem("HabEnemy", 7)
                sessionStorage.setItem("EneEnemy", 5)
            } else {
                botao01.style.visibility = 'visible'
                botao02.style.visibility = 'visible'
                botao01.innerText = 'entrar no barco'
                botao02.innerText = 'atravessar o rio'
                NextPage01 = 138
                NextPage02 = 187
            }
            break;
        case 41:
            but = ['CONTINUAR']
            NextPage = [319]
            break;
        case 42:
            if (IfCombate == 1) {
                HabCur--
                localStorage.setItem("HabCurrent", HabCur)
                attChar()
                combate = false
                NextPage03 = 10
                Continua03()
            } else if (IfCombate == 2) {
                NextPage03 = 165
                Continua03()
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                HabCur++
                localStorage.setItem("HabCurrent", HabCur)
                attChar()
                combate = true
                localStorage.setItem("CondicaoDano", 2)
                sessionStorage.setItem("nomeInimigo", 'Névoa Vampira')
                sessionStorage.setItem("HabEnemy", 7)
                sessionStorage.setItem("EneEnemy", 9)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 43:
            if (TestesDados02 == true) {
                SorCur--
                localStorage.setItem('SorCurrent', SorCur)
                attChar()
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= SorCur) {
                    NextPage01 = 147
                } else {
                    NextPage01 = 91
                }
            } else {
                TestesDadosComparativo = SorCur
                TestesDados02 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 44:
            but = ['atacar a Aparição malévola', 'subir pela escada', 'retomar ao hall e abrir a porta norte']
            NextPage = [83, 316, 101]
            break;
        case 45:
            if (IfCombate == 1) {
                combate = false
                NextPage03 = 135
                Continua03()
            } else if (IfCombate == 2) {
                NextPage03 = 85
                Continua03()
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                combate = true
                localStorage.setItem("CondicaoDano", 2)
                sessionStorage.setItem("nomeInimigo", 'Morcego Vampiro Chifrudo')
                sessionStorage.setItem("HabEnemy", 8)
                sessionStorage.setItem("EneEnemy", 7)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 46:
            if (itens.includes('EspadaMagica')) {
                botao01.innerText = 'tenho'
                botao01.style.visibility = 'visible'
                NextPage01 = 298
            } else {
                botao01.innerText = 'não tenho'
                botao01.style.visibility = 'visible'
                NextPage01 = 208
            }
            break;
        case 47:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                if (Inimigos == 1) {
                    botao01.innerText = 'próximo combate'
                    Inimigos = 0
                    combate = true
                    sessionStorage.setItem("nomeInimigo", 'Zumbi Dois')
                    sessionStorage.setItem("HabEnemy", 7)
                    sessionStorage.setItem("EneEnemy", 6)
                } else {
                    Texto = 
                    `Você derrota os lobos e analisa seus arredores mas não encontra nada de interessante aqui.<br><br>
                    <strong>Escolha sua proxima ação:</strong>`
                    TextoPersonalizado()
                    botao02.style.visibility = 'visible'
                    botao03.style.visibility = 'visible'
                    botao01.innerText = 'seguir para a Cripta'
                    botao02.innerText = 'abrir as portas ao sul do pátio'
                    botao03.innerText = 'abrir as portas de bronze ao norte'
                    combate = false
                    NextPage01 = 90
                    NextPage02 = 18
                    NextPage03 = 2
                }
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                Inimigos++
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Zumbi Um')
                sessionStorage.setItem("HabEnemy", 6)
                sessionStorage.setItem("EneEnemy", 6)
            }
            NextPage01 = 348
            break;
        case 48:
            if (!itens.includes('LivroCura')) {
                Texto = `Gunthar parece nervoso. Ele diz que qualquer magia que usasse para ajudar alertaria Katarina, que pode ser muito perigosa... ele reluta visivelmente. 
     Você tem o <strong>Livro dos Curandeiros</strong>?<br>
     Se não o tiver, pode sair daqui e abrir a porta oeste do patamar.`
                TextoPersonalizado()
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                NextPage01 = 294
                if (itens.includes('LivroEspada')) {
                    Texto = `Gunthar parece nervoso. Ele diz que qualquer magia que usasse para ajudar alertaria Katarina, que pode ser muito perigosa... ele reluta visivelmente. 
     Você tem o <strong>Livro dos Curandeiros</strong>?<br>
     Se não o tiver, pode sair daqui e abrir a porta oeste do patamar.<br>
     Você pode também, mesmo sem o Livro dos Curandeiros, tentar mostrar a Gunther qualquer outro livro que tenha encontrado no Castelo`
                    TextoPersonalizado()
                    botao02.style.visibility = 'visible'
                    botao02.innerText = 'mostrar o outro livro'
                    NextPage02 = 188
                }
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                NextPage01 = 375
            }
            break;
        case 49:
            but = ['CONTINUAR']
            if (aflicoes.includes('Lican')) {
                NextPage = [95]
            } else {
                NextPage = [144]
            }
            break;
        case 50:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 99
                } else {
                    Texto = `Você continua circulando o castelo cuidadosamente mas acaba voltando aos portões principais 
     sem encontrar nada que lhe indique um meio de entrar.`
                    TextoPersonalizado()
                    NextPage01 = 326
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 3
            }
            break;
        case 51:
            FeCur = FeCur + 1
            SorCur = SorCur + 1
            localStorage.setItem('')
            itens.push('EscudoFe')
            if (FeCur <= sessionStorage.getItem('FeUsuario')) {
                localStorage.setItem('FeCurrent', FeCur)
            } else {
                localStorage.setItem('FeCurrent', sessionStorage.getItem('FeUsuario'))
            }
            if (SorCur <= sessionStorage.getItem('SorUsuario')) {
                localStorage.setItem('SorCurrent', SorCur)
            } else {
                localStorage.setItem('SorCurrent', sessionStorage.getItem('SorUsuario'))
            }
            Aumentou = true
            attChar()
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 101
            break;
        case 52:
            if (IfCombate == 1) {
                combate = false
                botao01.style.visibility = 'visible'
                botao01.innerText = 'examinar a câmara'
                botao02.style.visibility = 'visible'
                botao02.innerText = 'ir embora'
                NextPage01 = 352
                NextPage02 = 320
            } else if (IfCombate == 2) {
                NextPage03 = 401
                Continua03()
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Thassaloss Menor')
                sessionStorage.setItem("HabEnemy", 8)
                sessionStorage.setItem("EneEnemy", 11)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 53:
            EneCur = EneCur + 4
            if (EneCur <= sessionStorage.getItem('EneUsuario')) {
                localStorage.setItem('EneCurrent', EneCur)
            } else {
                localStorage.setItem('EneCurrent', sessionStorage.getItem('EneUsuario'))
            }
            botao01.style.visibility = 'visible'
            botao01.innerText = 'comer os biscoitos'
            botao02.style.visibility = 'visible'
            botao02.innerText = 'ir para a porta oeste'
            NextPage01 = 4
            NextPage02 = 45
            break;
        case 54:
            but = ['atacar os lobos', 'fechar a porta e ir embora', 'procurar algo que possa usar contra os lobos']
            NextPage = [103, 152, 299]
            break;
        case 55:
            but = ['CONTINUAR']
            NextPage = [123]
            break;
        case 56:
            but = ['CONTINUAR']
            NextPage = [135]
            break;
        case 57:
            but = ['CONTINUAR']
            NextPage = [252]
            break;
        case 58:
            but = ['abrir a segunda porta para leste', 'abrir a porta na ponta sul', 'abrir a porta para oeste']
            NextPage = [227, 319, 114]
            break;
        case 59:
            but = ['CONTINUAR']
            NextPage = [371]
            break;
        case 60:
            but = ['examinar o depósito', 'sair e seguir para a porta norte', 'sair e seguir pela passagem leste']
            NextPage = [110, 101, 256]
            break;
        case 61:
            but = ['seguir adiante']
            NextPage = [108]
            break;
        case 62:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= 2) {
                    NextPage01 = 150
                } else {
                    NextPage01 = 195
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dado'
                Addition = 4
            }
            break;
        case 63:
            but = ['CONTINUAR']
            NextPage = [178]
            break;
        case 64:
            but = ['CONTINUAR']
            NextPage = [383]
            break;
        case 65:
            but = ['CONTINUAR']
            NextPage = [335]
            EneCur = EneCur - 3
            localStorage.setItem("EneCurrent", EneCur)
            attChar()
            break;
        case 66:
            but = ['CONTINUAR']
            NextPage = [264]
            break;
        case 67:
            but = ['abrir a porta oeste', 'recuar de volta ao pátio']
            NextPage = [115, 163]
            break;
        case 68:
            but = ['CONTINUAR']
            NextPage = [227]
            break;
        case 69:
            but = ['C0NT1NU4R']
            NextPage = [401]
            break;
        case 70:
            if (IfCombate == 1) {
                combate = false
                NextPage03 = 159
                Continua03()
            } else if (IfCombate == 2) {
                NextPage03 = 127
                Continua03()
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                combate = true
                localStorage.setItem("CondicaoDano", 3)
                sessionStorage.setItem("nomeInimigo", 'Ghoul Imenso')
                sessionStorage.setItem("HabEnemy", 8)
                sessionStorage.setItem("EneEnemy", 11)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 71:
            if (itens.includes('EspadaMagica')) {
                but = ['tenho']
                NextPage = [298]
            } else {
                but = ['não tenho']
                NextPage = [208]
            }
            break;
        case 72:
            but = ['C0NT1NU4R']
            NextPage = [401]
            break;
        case 73:
            but = ['atacar os lobos', 'jogar-lhes um pouco de comida', 'tentar correr pra longe']
            NextPage = [121, 218, 170]
            break;
        case 74:
            itens.push('Crucifixo')
            but = ['CONTINUAR']
            NextPage = [104]
            break;
        case 75:
            if (ouro > 1) {
                if (ouro >= 2 && !ArrayDeDados.includes(1)) {
                    if (!ArrayDeDados.includes(7)) {
                        ArrayDeDados.push(7)
                    }
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'Nastassia, a garota desaparecida(2 Moedas)'
                    NextPage01 = 185
                }
                if (ouro >= 2 && !ArrayDeDados.includes(2)) {
                    if (!ArrayDeDados.includes(7)) {
                        ArrayDeDados.push(7)
                    }
                    botao02.style.visibility = 'visible'
                    botao02.innerText = 'o que há dentro da Cripta(2 Moedas)'
                    NextPage02 = 303
                }
                if (ouro >= 2 && !ArrayDeDados.includes(3)) {
                    if (!ArrayDeDados.includes(7)) {
                        ArrayDeDados.push(7)
                    }
                    botao03.style.visibility = 'visible'
                    botao03.innerText = 'quaisquer Aflições que tenha(2 Moedas)'
                    NextPage03 = 394
                }
                if (ouro >= 3 && !ArrayDeDados.includes(4)) {
                    if (!ArrayDeDados.includes(7)) {
                        ArrayDeDados.push(7)
                    }
                    botao04.style.visibility = 'visible'
                    botao04.innerText = 'onde encontrar o Conde(3 Moedas)'
                    NextPage04 = 254
                }
                if (ouro >= 3 && !ArrayDeDados.includes(5)) {
                    if (!ArrayDeDados.includes(7)) {
                        ArrayDeDados.push(7)
                    }
                    botao05.style.visibility = 'visible'
                    botao05.innerText = 'parentes do Conde(3 Moedas)'
                    NextPage05 = 209
                }
                if (ouro >= 6 && !itens.includes("ChavePrata")) {
                    if (!ArrayDeDados.includes(7)) {
                        ArrayDeDados.push(7)
                    }
                    botao06.style.visibility = 'visible'
                    botao06.innerText = 'entrar na biblioteca(6 Moedas)'
                    NextPage06 = 146
                }
                if (ArrayDeDados.includes(5) && ArrayDeDados.includes(4) && ArrayDeDados.includes(3) && ArrayDeDados.includes(2) && ArrayDeDados.includes(1) && itens.includes("ChavePrata")) {
                    Texto = `O Sábio agradece por você ter pago pelas informações e você o deixa envolvido com seus velhos e bolorentos livros e manuscritos.`
                    TextoPersonalizado()
                    PersonalizarTexto = true
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'ir à biblioteca'
                    NextPage01 = 332
                }
            } else {
                if (ArrayDeDados.includes(7)) {
                    Texto = `Após ter pago pelas informações você deixa o Sábio envolvido com seus velhos e bolorentos livros e manuscritos.`
                    TextoPersonalizado()
                    PersonalizarTexto = true
                    if (itens.includes("ChavePrata")) {
                        botao01.style.visibility = 'visible'
                        botao01.innerText = 'ir à biblioteca'
                        NextPage01 = 332
                    } else {
                        botao01.style.visibility = 'visible'
                        botao01.innerText = 'retornar à passagem externa'
                        NextPage01 = 47
                    }
                } else {
                    Texto = `Você pensa sobre o que dizer, mas o Sábio fala livremente, por si mesmo. Na maior parte do tempo comenta como o Conde é malvado e como ele - o Sábio - 
     necessita de mais dinheiro para livros. Você percebe que terá de pagar por informações, e que não vai ser barato. Enquanto se pergunta quanto lhe oferecer, e como 
     fazê-lo de modo educado, o Sábio anuncia de repente: “É claro, por uma boa quantia em ouro eu poderia levá-lo à biblioteca. Quem sabe o que se pode encontrar lá?” 
     Você pode perguntar ao Sábio sobre vários assuntos, mas terá que pagar para conseguir cada resposta. Ele aceitará Moedas de Ouro, ou quaisquer itens de Tesouro de igual 
     valor. Você pode escolher perguntar-lhe o que desejar da lista que se segue, mas tem que pagar por cada resposta. O Sábio exige pagamento adiantado e ele não pechincha!`
                    TextoPersonalizado()
                    PersonalizarTexto = true
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'não tenho dinheiro'
                    NextPage01 = 47
                }
            }
            break;
        case 76:
            if (TestesDados01 == true) {
                TestesDados01 = false
                botao01.style.visibility = 'visible'
                botao01.innerText = 'atacá-lo'
                NextPage01 = 26
                if (Compare <= 4) {
                    sessionStorage.setItem('DanoConde', sessionStorage.getItem('DanoConde') + 6)
                    if (magias.includes('GrandeAtaque')) {
                        Texto = `O conde tenta se esquivar da magia, mas não consegue, e sofre o dano total de 6 pontos de ENERGIA.<br><br>
                        Você deve então enfrentá-lo.<br><br>
                        Pode usar o feitiço de Grande Ataque se o tiver e desejar usá-lo.`
                        TextoPersonalizado()
                        botao02.style.visibility = 'visible'
                        botao02.innerText = 'usar Grande Ataque'
                        NextPage02 = 346
                    }
                    Texto = `O conde tenta se esquivar da magia, mas não consegue, e sofre o dano total de 6 pontos de ENERGIA.<br><br>
                    Você deve então enfrentá-lo.`
                    TextoPersonalizado()
                } else {
                    sessionStorage.setItem('DanoConde', sessionStorage.getItem('DanoConde') + 3)
                    if (magias.includes('GrandeAtaque')) {
                        Texto = `Ele consegue evadir-se da força total do Raio e sofre somente perda de 3 pontos de ENERGIA.<br><br>
                        Você deve então enfrentá-lo.<br><br>
                        Pode usar o feitiço de Grande Ataque se o tiver e desejar usá-lo.`
                        TextoPersonalizado()
                        botao02.style.visibility = 'visible'
                        botao02.innerText = 'usar Grande Ataque'
                        NextPage02 = 346
                    }
                    Texto = `Ele consegue evadir-se da força total do Raio e sofre somente perda de 3 pontos de ENERGIA.<br><br>
                    Você deve então enfrentá-lo.`
                    TextoPersonalizado()
                }
            } else {
                TestesDados01 = true
                TestesDadosComparativo = HabCur
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 77:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                botao02.style.visibility = 'visible'
                botao01.innerText = 'examinar a cabana'
                botao02.innerText = 'continuar jornada'
                combate = false
                NextPage01 = 177
                NextPage02 = 228
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Homem da Floresta')
                sessionStorage.setItem("HabEnemy", 10)
                sessionStorage.setItem("EneEnemy", 7)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 78:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                combate = false
                NextPage01 = 252
            } else if (IfCombate == 2) {
                NextPage03 = 360
                Continua03()
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                combate = true
                localStorage.setItem("CondicaoDano", 1)
                sessionStorage.setItem("nomeInimigo", 'Corvo Gigante Filhote')
                sessionStorage.setItem("HabEnemy", 7)
                sessionStorage.setItem("EneEnemy", 6)
                sessionStorage.setItem("PaginaSalva", pagNmb)
            }
            break;
        case 79:
            ouro = ouro - 8
            EneCur = EneCur - 4
            if (EneCur <= 0) {
                NextPage03 = 401
                Continua03()
            } else {
                aflicoes = aflicoes.filter(item => item !== 'Lican')
                localStorage.setItem('EneCurrent', EneCur)
                attChar()
            }
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 373
            break;
        case 80:
            but = ['CONTINUAR']
            NextPage = [31]
            break;
        case 81:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                if (Inimigos == 1) {
                    botao01.innerText = 'próximo combate'
                    Inimigos++
                    combate = true
                    sessionStorage.setItem("nomeInimigo", 'Zumbi Dois')
                    sessionStorage.setItem("HabEnemy", 7)
                    sessionStorage.setItem("EneEnemy", 5)
                } else if (Inimigos == 2) {
                    botao01.innerText = 'último combate'
                    Inimigos = 0
                    combate = true
                    sessionStorage.setItem("nomeInimigo", 'Zumbi Três')
                    sessionStorage.setItem("HabEnemy", 6)
                    sessionStorage.setItem("EneEnemy", 6)
                } else {
                botao01.innerText = 'continuar'
                combate = false
                NextPage01 = 11
                }
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                Inimigos++
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Zumbi Um')
                sessionStorage.setItem("HabEnemy", 6)
                sessionStorage.setItem("EneEnemy", 5)
            }
            break;
        case 82:
            but = ['descer pela escada leste', 'descer pela escada sul']
            NextPage = [108, 161]
            break;
        case 83:
            if (itens.includes('EspadaMagica')) {
                botao01.innerText = 'tenho'
                botao01.style.visibility = 'visible'
                NextPage01 = 129
            } else {
                botao01.innerText = 'não tenho'
                botao01.style.visibility = 'visible'
                NextPage01 = 231
            }
            break;
        case 84:
            FeCur = FeCur - 2
            SorCur--
            localStorage.setItem('FeCurrent', FeCur)
            localStorage.setItem('SorCurrent', SorCur)
            attChar()
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 25
            break;
        case 85:
            if (aflicoes.includes('Curandeiro')) {
                NextPage03 = 186
                Continua03()
            } else {
                NextPage03 = 206
                Continua03()
            }
            break;
        case 86:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 179
                } else {
                    NextPage01 = 233
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dado'
                Addition = 3
            }
            break;
        case 87:
            but = ['abrir a porta para a direita', 'abrir a porta para o sul', 'abrir a porta para o extremo sul']
            NextPage = [128, 302, 244]
            break;
        case 88:
            EneCur = EneCur - 2
            if (EneCur <= 0) {
                NextPage03 = 401
                Continua03()
            } else {
                localStorage.setItem('EneCurrent', EneCur)
                attChar()
            }
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 122
            break;
        case 89:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= HabCur) {
                    Inimigos = 0
                    NextPage01 = 40
                } else {
                    Inimigos = 1
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'enfrentar o cachorro'
                    NextPage01 = 40
                }
            } else {
                TestesDados02 = true
                TestesDadosComparativo = HabCur
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 90:
            but = ['tentar forçar os portões', 'abrir a porta leste no pátio', 'seguir para as portas de bronze']
            NextPage = [141, 18, 2]
            break;
        case 91:
            if (!itens.includes("AguaBenta") && !itens.includes("Conhaque")) {
                const texto = `Dando um passo para a frente, seu peso aciona uma armadilha-alçapão escondida.<br>
                Você cai com força no chão de pedra, três metros abaixo, <strong>perdendo 4 pontos de ENERGIA</strong>.<br><br>
                Você consegue arrastar-se para fora do fosso: uma simples, porém eficiente armadilha.`
                typingEffect(texto)
            }
            const itensFiltrados = itens.filter(item => item !== "Conhaque" && item !== "AguaBenta")
            itens = itensFiltrados
            but = ['continuar']
            NextPage = [157]
            break;
        case 92:
            but = ['abrir a porta']
            NextPage = [294]
            break;
        case 93:
            if (magias.includes('ParedeForca')) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'Parede de Força'
                NextPage01 = 194
            }
            if (magias.includes('RaioJandor')) {
                botao02.style.visibility = 'visible'
                botao02.innerText = 'Raio de Jandor'
                NextPage02 = 125
            }
            if (magias.includes('Divisao')) {
                botao03.style.visibility = 'visible'
                botao03.innerText = 'Divisão'
                NextPage03 = 109
            }
            break;
        case 94:
            botao01.style.visibility = 'visible'
            botao01.innerText = 'entregar seu sangue'
            NextPage01 = 328
            if (itens.includes('Estaca')) {
                botao02.style.visibility = 'visible'
                botao02.innerText = 'manter-se com a Estaca de Prata'
                NextPage02 = 14
            } else {
                Texto = `<strong>“Você tem o Livro”</strong> diz a aparição, de modo aprovador.<br>
                <strong> “Minha espada está presa dentro dele. A magia de Reiner usou sangue para colocá-la aí dentro, e sangue será necessário para libertá-la novamente.”</strong><br><br>
                Siegfried aponta para um cálice de prata ornamentado, que está sobre a mesa.
                <strong>“Você deve dar seu sangue para libertar Nightstar. Isso lhe custará energia, mas a arma é incomparável.”</strong><br><br>
                Se estiver pronto para fazê-lo pode seguir em frente com o ritual.<br>
                Se não quiser reduzir sua ENERGIA, pode perguntar a Siegfried se existe algum outro meio de se obter uma arma que possa destruir o Vampiro.`
                TextoPersonalizado()
                PersonalizarTexto = true
                botao02.style.visibility = 'visible'
                botao02.innerText = 'perguntar sobre outras armas'
                NextPage02 = 374
            }
            break;
        case 95:
            but = ['abrir a porta leste do corredor', 'correr para o sul do corredor']
            NextPage = [351, 166]
            FeCur--
            SorCur--
            localStorage.setItem("FeCurrent", FeCur)
            localStorage.setItem("SorCurrent", SorCur)
            aflicoes.push("LicanMaior")
            attChar()
            break;
        case 96:
            but = ['abrir a porta leste', 'abrir a porta sul']
            NextPage = [371, 8]
            FeCur--
            SorCur--
            localStorage.setItem("FeCurrent", FeCur)
            localStorage.setItem("SorCurrent", SorCur)
            attChar()
            break;
        case 97:
            but = ['CONTINUAR']
            NextPage = [47]
            break;
        case 98:
            prov = true
            but = ['atacar diretamente', 'consultar provisões']
            NextPage = [3, 117]
            break;
        case 99:
            but = ['CONTINUAR']
            NextPage = [326]
            break;
        case 100:
            if (IfCombate == 1) {
                combate = false
                NextPage03 = 10
                Continua03()
            } else {
                EneCur = EneCur - 2
                localStorage.setItem("EneCurrent", EneCur)
                attChar()
                combate = true
                sessionStorage.setItem("CondicaoDano", 0)
                localStorage.setItem("CondicaoSerieAtaque", 2)
            }
            break;
        case 101:
            but = ['abrir a porta norte', 'abrir a porta leste', 'abrir a porta oeste', 'descer pela passagem leste']
            NextPage = [332, 172, 221, 353]
            break;
        case 102:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'adquirir sua nova magia'
                TestesDados01 = false
                if (Compare == 1 && !ArrayDeDados.includes(1)) {
                    ArrayDeDados.push(Compare)
                    NextPage01 = 232
                } else if (Compare == 2 && !ArrayDeDados.includes(2)) {
                    ArrayDeDados.push(Compare)
                    NextPage01 = 160
                } else if (Compare == 3 && !ArrayDeDados.includes(3)) {
                    ArrayDeDados.push(Compare)
                    NextPage01 = 273
                } else if (Compare == 4 && !ArrayDeDados.includes(4)) {
                    ArrayDeDados.push(Compare)
                    NextPage01 = 323
                } else if (Compare == 5 && !ArrayDeDados.includes(5)) {
                    ArrayDeDados.push(Compare)
                    NextPage01 = 222
                } else if (Compare == 6 && !ArrayDeDados.includes(6)) {
                    ArrayDeDados.push(Compare)
                    NextPage01 = 120
                } else {
                    ResetButtonsInt()
                    MagiaRepetida()
                }
            } else {
                if (magias >= 3) {
                    ArrayDeDados = []
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'continuar jornada'
                    NextPage01 = 59
                } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dado'
                Addition = 0
                }
            }
            break;
        case 103:
            if (IfCombate == 1) {
                botao01.style.visibility = 'visible'
                if (Inimigos == 1) {
                    botao01.innerText = 'próximo combate'
                    Inimigos = 0
                    combate = true
                    sessionStorage.setItem("nomeInimigo", 'Lobo Dois')
                    sessionStorage.setItem("HabEnemy", 7)
                    sessionStorage.setItem("EneEnemy", 6)
                } else {
                    Texto = 
                    `Você derrota os lobos e analisa seus arredores mas não encontra nada de interessante aqui.<br><br>
                    <strong>Escolha sua proxima ação:</strong>`
                    TextoPersonalizado()
                    botao02.style.visibility = 'visible'
                    botao03.style.visibility = 'visible'
                    botao01.innerText = 'seguir para a Cripta'
                    botao02.innerText = 'abrir as portas ao sul do pátio'
                    botao03.innerText = 'abrir as portas de bronze ao norte'
                    combate = false
                    NextPage01 = 90
                    NextPage02 = 18
                    NextPage03 = 2
                }
            } else {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'iniciar combate'
                Inimigos++
                combate = true
                sessionStorage.setItem("nomeInimigo", 'Lobo Um')
                sessionStorage.setItem("HabEnemy", 6)
                sessionStorage.setItem("EneEnemy", 5)
            }
            break;
        case 104:
            
            break;
        case 105:
            NextPage01 = 81
            break;
        case 106:
            but = ['iniciar combate']
            combate = true
            Chars.Hab = Chars.Hab - 2
            attInv()
            Enemy = {name: 'Corcel Demônio', Hab: 8, Ene:10}
            break;
        case 107:
            NextPage01 = 70
            break;
        case 108:
            
            break;
        case 109:
            but = ['CONTINUAR']
            NextPage = [324]
            break;
        case 110:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= HabCur) {
                    NextPage01 = 156
                } else {
                    NextPage01 = 214
                }
            } else {
                TestesDados02 = true
                TestesDadosComparativo = HabCur
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 111:
            botao01.style.visibility = 'visible'
            botao01.innerText = 'termine sua luta com ele'
            NextPage01 = 212
            break;
        case 112:
            NextPage01 = 164
            break;
        case 113:
            
            break;
        case 114:
            NextPage01 = 168
            break;
        case 115:
            
            break;
        case 116:
            but = ['SEGUIR']
            NextPage = [319]
            break;
        case 117:
            if (prov == true) {
                NextPage01 = 117
                if (provisoes > 0) {
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'consumir provisão'
                }
                if (itens.includes('Pocao')) {
                    botao02.style.visibility = 'visible'
                    botao02.innerText = 'beber Poção de Cura'
                }
                prov = false  
            } else {
                EneCur = EneCur + 4
                if (minus == true) {
                    provisoes--
                } else {
                    itens = itens.filter(item => item !== 'Pocao')
                }
                if (EneCur >= sessionStorage.getItem('EneUsuario')) {
                    localStorage.setItem('EneCurrent', sessionStorage.getItem('EneUsuario'))
                } else {
                    localStorage.setItem('EneCurrent', EneCur)
                }
                Aumentou = true
                attChar()
                Texto = `Você tem uma <strong>Espada Mágica</strong>?`
                TextoPersonalizado()
                PersonalizarTexto = true
                if (itens.includes("EspadaMagica")) {
                    botao01.innerText = 'tenho'
                    botao01.style.visibility = 'visible'
                    NextPage01 = 298
                } else {
                    botao01.innerText = 'não tenho'
                    botao01.style.visibility = 'visible'
                    NextPage01 = 208
                }
            }
            break;
        case 118:

            break;
        case 119:
            
            break;
        case 120:
            magias.push("CuraVdd")
            but = ['CONTINUAR']
            NextPage = [102]
            break;
        case 121:
            
            break;
        case 122:
            
            break;
        case 123:
            
            break;
        case 124:
            
            break;
        case 125:
            NextPage01 = 22
            break;
        case 126:
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            EneCur = EneCur + 8
            Aumentou = true
            itens.push("alho")
            if (EneCur >= sessionStorage.getItem("EneUsuario")) {
                localStorage.setItem("EneCurrent", sessionStorage.getItem("EneUsuario"))
                attChar()
            } else {
                localStorage.setItem("EneCurrent", EneCur)
                attChar()
            }
            NextPage01 = 228
            break;
        case 127:
            but = ['C0NT1NU4R']
            NextPage = [401]
            break;
        case 128:
            
            break;
        case 129:
            NextPage01 = 200
            break;
        case 130:
            but = ['CONTINUAR']
            NextPage = [271]
            break;
        case 131:
            
            break;
        case 132:
            
            break;
        case 133:
            
            break;
        case 134:
            but = ['CONTINUAR']
            NextPage = [79]
            break;
        case 135:
            
            break;
        case 136:
            but = ['INICIAR COMBATE']
            NextPage = [97]
            break;
        case 137:
            NextPage01 = 45
            break;
        case 138:
            but = ['CONTINUAR']
            NextPage = [187]
            break;
        case 139:
            
            break;
        case 140:
            
            break;
        case 141:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 192
                } else {
                    NextPage01 = 243
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 2
            }
            break;
        case 142:
            
            break;
        case 143:
            but = ['C0NT1NU4R']
            NextPage = [401]
            break;
        case 144:
            
            break;
        case 145:
            NextPage01 = 164
            break;
        case 146:
            ouro = ouro - 6
            itens.push("ChavePrata")
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            NextPage01 = 75
            break;
        case 147:
            but = ['CONTINUAR']
            NextPage = [157]
            break;
        case 148:
            but = ['Atacar o arqueiro', 'Atacar o urso', 'Tentar conversar com a figura', 'Tentar fugir']
            NextPage = [246, 295, 344, 197]
            ouro = 2
            break;
        case 149:
            
            break;
        case 150:

            break;
        case 151:
            but = ['CONTINUAR']
            NextPage = [252]
            break;
        case 152:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= HabCur) {
                    NextPage01 = 250
                } else {
                    NextPage01 = 103
                }
            } else {
                TestesDados02 = true
                TestesDadosComparativo = HabCur
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 153:
            
            break;
        case 154:
            
            break;
        case 155:
            NextPage01 = 164
            break;
        case 156:
            
            break;
        case 157:
            but = ['Entrar na tumba de Boris', 'Entrar na tumba do Chanceler Schmidt', 'Para a junção em T, ignorando AS TUMBAS']
            NextPage = [210, 359, 230]
            break;
        case 158:
            TestesDados01 = false
            break;
        case 159:
            
            break;
        case 160:
            magias.push("GrandeAtaque")
            but = ['CONTINUAR']
            NextPage = [102]
            break;
        case 161:
            
            break;
        case 162:
            ouro = ouro - 2
            but = ['CONTINUAR']
            NextPage = [383]
            break;
        case 163:
            
            break;
        case 164:
            NextPage01 = 106
            break;
        case 165:
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            localStorage.setItem("FimCombate", 0)
            combate = false
            if (aflicoes.includes("MalCura")) {
                console.log("Aflicao detectada")
                NextPage01 = 100
            } else {
                NextPage01 = 6
            }
            break;
        case 166:
            but = ['Abrir a porta leste', 'Abrir a porta leste, no final do corredor', 'Abrir a porta oeste']
            NextPage = [118, 252, 240]
            break;
        case 167:
            
            break;
        case 168:
            
            break;
        case 169:
            
            break;
        case 170:
            NextPage01 = 121
            break;
        case 171:
            NextPage01 = 244
            break;
        case 172:
            
            break;
        case 173:
            NextPage01 = 335
            break;
        case 174:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 223
                } else {
                    NextPage01 = 362
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 2
            }
            break;
        case 175:

            break;
        case 176:
            
            break;
        case 177:
            but = ['CONTINUAR']
            NextPage = [228]
            break;
        case 178:
            NextPage01 = 212
            break;
        case 179:
            but = ['CONTINUAR']
            NextPage = [280]
            break;
        case 180:
            
            break;
        case 181:
            
            break;
        case 182:
            
            break;
        case 183:
            
            break;
        case 184:
            but = ['Terminar a busca pelo aposento', 'Sair daqui e abrir a porta leste', 'Sair e abrir a porta sul']
            NextPage = [142, 371, 8]
            break;
        case 185:
            ArrayDeDados.push(1)
            ouro = ouro - 2
            but = ['CONTINUAR']
            NextPage = [75]
            break;
        case 186:
            but = ['C0NT1NU4R']
            NextPage = [401]
            break;
        case 187:
            
            break;
        case 188:
            but = ['CONTINUAR']
            NextPage = [294]
            break;
        case 189:
            
            break;
        case 190:
            but = ['CONTINUAR']
            NextPage = [81]
            break;
        case 191:
            
            break;
        case 192:
            but = ["lutar com a Sombra", "correr para as portas ao sul", "correr para as portas de bronze, ao norte"]
            NextPage = [292, 18, 2]
            break;
        case 193:
            
            break;
        case 194:
            
            break;
        case 195:
            but = ['C00NT111NU44R']
            NextPage = [401]
            break;
        case 196:
            but = ['CONTINUAR']
            NextPage = [116]
            break;
        case 197:
            
            break;
        case 198:
            but = ['SEGUIR']
            NextPage = [227]
            break;
        case 199:
            but = ['INICIAR COMBATE']
            NextPage = [226]
            break;
        case 200:
            but = ['INICIAR COMBATE']
            NextPage = [290, 316]
            break;
        case 201:
            but = ['CONTINUAR']
            NextPage = [148]
            FeCur--
            localStorage.setItem("FeCurrent", FeCur)
            attChar()
            break;
        case 202:
            but = ['CONTINUAR']
            NextPage = [252]
            break;
        case 203:
            
            break;
        case 204:
            but = ['C0N71NU4R']
            NextPage = [401]
            break;
        case 205:
            
            break;
        case 206:
            but = ['CONTINUAR COMBATE']
            NextPage = [45]
            break;
        case 207:
            but = ['CONTINUAR']
            NextPage = [263]
            break;
        case 208:
            
            break;
        case 209:
            ArrayDeDados.push(5)
            ouro = ouro - 3
            but = ['CONTINUAR']
            NextPage = [75]
            break;
        case 210:
            
            break;
        case 211:
            
            break;
        case 212:
            
            break;
        case 213:
            
            break;
        case 214:
            
            break;
        case 215:
            
            break;
        case 216:
            console.log(itens)
            if (TestesDados01 == true) {
                sessionStorage.setItem(`DanoConde`, Compare)
                Texto = `Agora você pode atacar com sua espada ou lançar um feitiço.`
                botao01.style.visibility = 'visible'
                botao01.innerText = 'atacar o Conde'
                botao02.style.visibility = 'visible'
                botao02.innerText = 'lançar feitiço'
                if (TestesDadosComparativo == Compare) {
                    itens = itens.filter(item => item !== "AguaBenta")
                    console.log(sessionStorage.getItem(`DanoConde`))
                    sessionStorage.setItem(`DanoConde`, TestesDadosComparativo + Compare)
                }
                NextPage01 = 26
                NextPage02 = 158
                if (itens.includes('AguaBenta')) {
                    botao03.style.visibility = 'visible'
                    botao03.innerText = 'usar outra Água-benta'
                    Texto = `Se desejar, pode jogar o segundo vidro de Água-benta com os mesmos resultados seguido por um ataque com espada ou feitiço, ou fazê-los diretamente.`
                    NextPage03 = 216
                    TestesDadosComparativo = Compare
                }
                TextoPersonalizado()
                PersonalizarTexto = true
                console.log(sessionStorage.getItem(`DanoConde`))
            } else {
                let indice = itens.indexOf("AguaBenta")
                if (indice !== -1) { // Verifica se o item existe no array
                    itens.splice(indice, 1); // Remove o item no índice encontrado
                }
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dado'
                Addition = 1
            }
            break;
        case 217:
            but = ['CONTINUAR']
            NextPage = [311]
            break;
        case 218:
            NextPage01 = 121
            break;
        case 219:
            
            break;
        case 220:
            
            break;
        case 221:
            NextPage01 = 364
            break;
        case 222:
            magias.push("Divisao")
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            NextPage01 = 102
            break;
        case 223:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= Number.parseInt(localStorage.getItem("FeCurrent"))) {
                    NextPage01 = 321
                } else {
                    NextPage01 = 272
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 4
            }
            break;
        case 224:
            but = ['A ESCADA para O norte', 'A ESCADA para O LESTE', 'A ESCADA para O SUL']
            NextPage = [257, 108, 161]
            break;
        case 225:
            but = ['CONTINUAR']
            NextPage = [269]
            break;
        case 226:
            
            break;
        case 227:
            
            break;
        case 228:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados02 = false
                if (Compare <= HabCur) {
                    NextPage01 = 362
                } else {
                    NextPage01 = 277
                }
            } else {
                TestesDados02 = true
                TestesDadosComparativo = HabCur
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 229:
            
            break;
        case 230:
            but = ['A porta norte', 'A porta leste', 'A porta oeste']
            NextPage = [255, 371, 8]
            break;
        case 231:
            NextPage01 = 101
            break;
        case 232:
            magias.push("ParedeForca")
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            NextPage01 = 102
            break;
        case 233:
            
            break;
        case 234:
            
            break;
        case 235:
            NextPage01 = 294
            break;
        case 236:
            
            break;
        case 237:
            NextPage01 = 400
            break;
        case 238:
            
            break;
        case 239:
            NextPage01 = 313
            break;
        case 240:
            
            break;
        case 241:
            NextPage01 = 55
            break;
        case 242:
            but = ['C0N71NU@R']
            NextPage = [401]
            break;
        case 243:
            
            break;
        case 244:
            but = ["experimentar o vinho tinto", "experimentar o vinho branco", "experimentar os biscoitos", "seguir para a porta oeste"]
            NextPage = [137, 53, 4, 45]
            break;
        case 245:
            but = ['C0N71NU@R']
            NextPage = [401]
            break;
        case 246:
            but = ["enfrentar o urso", "tentar conversar"]
            NextPage = [295, 344]
            break;
        case 247:
            but = ['CONTINUAR']
            NextPage = [116]
            break;
        case 248:
            
            break;
        case 249:
            
            break;
        case 250:

            break;
        case 251:
            FeCur = FeCur - 2
            SorCur = SorCur - 2
            localStorage.setItem("SorCurrent", SorCur)
            localStorage.setItem("FeCurrent", FeCur)
            attChar()
            botao01.style.visibility = 'visible'
            botao01.innerText = "sair da sala e continuar"
            NextPage01 = 373
            break;
        case 252:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 330
                } else {
                    NextPage01 = 316
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 3
            }
            break;
        case 253:
            NextPage01 = 382
            break;
        case 254:
            ArrayDeDados.push(4)
            ouro = ouro - 3
            but = ['CONTINUAR']
            NextPage = [75]
            break;
        case 255:
            
            break;
        case 256:
            
            break;
        case 257:
            
            break;
        case 258:
            but = ['atacar o Doutor', 'falar com ele', 'sair e voltar ao corredor']
            NextPage = [242, 75, 181]
            break;
        case 259:
            but = ['C0N71NU@R']
            NextPage = [401]
            break;
        case 260:
            NextPage01 = 309
            break;
        case 261:
            NextPage01 = 335
            break;
        case 262:
            
            break;
        case 263:
            but = ['INICIAR COMBATE']
            NextPage = [324]
            break;
        case 264:
            
            break;
        case 265:
            but = ['INICIAR COMBATE']
            NextPage = [311]
            break;
        case 266:
            NextPage01 = 314
            break;
        case 267:
            
            break;
        case 268:
            but = ['C0N71NU@R']
            NextPage = [401]
            break;
        case 269:
            
            break;
        case 270:
            
            break;
        case 271:
            
            break;
        case 272:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= Number.parseInt(localStorage.getItem("SorCurrent"))) {
                    NextPage01 = 24
                } else {
                    NextPage01 = 370
                }
            } else {
                EneCur--
                EneCur--
                localStorage.setItem("EneCurrent", EneCur)
                attChar()
                TestesDados02 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 273:
            magias.push("RaioJandor")
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            NextPage01 = 102
            break;
        case 274:
            
            break;
        case 275:

            break;
        case 276:
            
            break;
        case 277:
            EneCur--
            localStorage.setItem("EneCurrent", EneCur)
            attChar()
            TestesDados02 = true
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 362
            break;
        case 278:
            NextPage01 = 239
            break;
        case 279:
            NextPage01 = 341
            break;
        case 280:
            but = ['CONTINUAR']
            NextPage = [337]
            break;
        case 281:
            NextPage01 = 71
            break;
        case 282:
            
            break;
        case 283:
            but = ['tentar a porta leste', 'tentar a porta no extremo sul']
            NextPage = [302, 244]
            break;
        case 284:
            but = ['C0N71NU@R']
            NextPage = [401]
            break;
        case 285:
            
            break;
        case 286:
            NextPage01 = 31
            break;
        case 287:
            NextPage01 = 229
            break;
        case 288:
            
            break;
        case 289:
            NextPage01 = 244
            break;
        case 290:
            NextPage01 = 316
            break;
        case 291:
            but = ['CONTINUAR']
            NextPage = [196]
            break;
        case 292:
            botao01.style.visibility = 'visible'
            if (itens.includes("EspadaMagica")) {
                botao01.innerText = 'tenho'
                NextPage01 = 388
            } else {
                botao01.innerText = 'não tenho'
                NextPage01 = 340
            }
            break;
        case 293:
            but = ['CONTINUAR']
            NextPage = [264]
            break;
        case 294:
            but = [
                'fechar essa porta e abrir aquela ao sul',
                'abrir a porta norte próxima a você',
                'abrir a segunda porta ao norte',
                'abrir a porta oeste à sua frente',
                'seguir o corredor para o sul'
            ]
            NextPage = [131, 182, 267, 34, 31]
            break;
        case 295:
            but = ['INICIAR COMBATE']
            NextPage = [393]
            break;
        case 296:
            
            break;
        case 297:
            NextPage01 = 154
            break;
        case 298:
            
            break;
        case 299:
            if (itens.includes("alho")) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'usar o alho'
                NextPage01 = 349
            }
            if (itens.includes("amuleto")) {
                botao02.style.visibility = 'visible'
                botao02.innerText = 'usar o Amuleto do Conde'
                NextPage02 = 398
            }
            botao03.style.visibility = 'visible'
            botao03.innerText = 'tentar jogar suas provisões'
            NextPage03 = 398
            break;
        case 300:
            but = ['fechar essa porta e abrir aquela ao sul', 'abrir a porta norte próxima a você']
            NextPage = [351, 166]
            break;
        case 301:
            
            break;
        case 302:
            
            break;
        case 303:
            ArrayDeDados.push(2)
            ouro = ouro - 2
            but = ['CONTINUAR']
            NextPage = [75]
            break;
        case 304:
            
            break;
        case 305:
            
            break;
        case 306:
            
            break;
        case 307:
            but = ['CONTINUAR']
            NextPage = [258]
            break;
        case 308:
            but = ['C0N77INU@4R']
            NextPage = [401]
            break;
        case 309:
            
            break;
        case 310:
            but = ['C0N77INU@4R']
            NextPage = [401]
            break;
        case 311:
            but = ['passar por ela', 'voltar para o pátio']
            NextPage = [342, 380]
            break;
        case 312:
            NextPage01 = 289
            break;
        case 313:
            
            break;
        case 314:
            but = ['CONTINUAR']
            NextPage = [362]
            break;
        case 315:
            NextPage01 = 382
            break;
        case 316:
            but = ['abrir a porta corajosamente', 'recuar e abrir a porta no hall']
            NextPage = [390, 101]
            break;
        case 317:
            
            break;
        case 318:
            
            break;
        case 319:
            
            break;
        case 320:
            but = ['abrir a porta ao norte', 'Abrir a porta a oeste', 'Seguir pelo corredor e virar para o sul']
            NextPage = [267, 34, 31]
            break;
        case 321:
            but = ['CONTINUAR']
            NextPage = [362]
            break;
        case 322:
            
            break;
        case 323:
            magias.push("FeiticoSorte")
            but = ['CONTINUAR']
            NextPage = [102]
            break;
        case 324:
            if (aflicoes.includes("Lican")) {
                NextPage03 = 7
                Continua03()
            } else if (aflicoes.includes("LicanMaior")) {
                NextPage03 = 386
                Continua03()
            } else {
                NextPage03 = 51
                Continua03()
            }
            break;
        case 325:
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            EneCur = EneCur - 2
            localStorage.setItem("EneCurrent", EneCur)
            attChar()
            NextPage01 = 341
            break;
        case 326:
            but = ['seguir para as portas de metal', 'abrir a porta sul', 'abrir a primeira porta a oeste', 'abrir a segunda porta a oeste', 'seguir para a Cripta']
            NextPage = [2, 18, 377, 54, 90]
            break;
        case 327:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 62
                } else {
                    NextPage01 = 16
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 5
            }
            break;
        case 328:
            NextPage01 = 82
            break;
        case 329:
            but = ['atacá-la', 'TENTAR CONVERSAR']
            NextPage = [71, 399]
            break;
        case 330:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                botao01.innerText = 'continuar'
                TestesDados01 = false
                if (Compare <= FeCur) {
                    NextPage01 = 44
                } else {
                    NextPage01 = 124
                }
            } else {
                TestesDados01 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
                Addition = 3
            }
            break;
        case 331:
            but = ['CONTINUAR']
            NextPage = [227]
            break;
        case 332:
            if (itens.includes("ChavePrata")) {
                botao03.style.visibility = 'visible'
                botao03.innerText = 'abrir a porta'
                NextPage03 = 378
            }
            botao01.style.visibility = 'visible'
            botao02.style.visibility = 'visible'
            botao01.innerText = 'voltar e abrir a porta oeste'
            botao02.innerText = 'seguir pela passagem leste'
            NextPage01 = 221
            NextPage01 = 353
            break;
        case 333:
            NextPage01 = 123
            break;
        case 334:
            NextPage01 = 236
            break;
        case 335:
            NextPage01 = 361
            break;
        case 336:
            but = ['UsaR a chave para abrir a gaveta', 'AbrIR o cofre', 'Abre a primeira gaveta']
            NextPage = [219, 271, 392]
            break;
        case 337:
            NextPage01 = 380
            break;
        case 338:
            
            break;
        case 339:
            
            break;
        case 340:
            NextPage01 = 2
            break;
        case 341:
            
            break;
        case 342:
            
            break;
        case 343:
            NextPage01 = 106
            break;
        case 344:
            botao01.style.visibility = 'visible'
            botao01.innerText = 'continuar'
            NextPage01 = 13
            Valderesse = true
            EneCur--
            EneCur--
            localStorage.setItem("EneCurrent", EneCur)
            attChar()
            break;
        case 345:
            NextPage01 = 196
            break;
        case 346:
            NextPage01 = 26
            break;
        case 347:
            
            break;
        case 348:
            
            break;
        case 349:
            NextPage01 = 103
            break;
        case 350:
            NextPage01 = 191
            break;
        case 351:
            but = ['TENTAR ATACAR', 'TENTAR CONVERSAR']
            NextPage = [366, 9]
            break;
        case 352:
            but = ['CONTINUAR']
            NextPage = [320]
            break;
        case 353:
            but = ['abrir a porta ao norte', 'abrir a porta no fundo']
            NextPage = [307, 258]
            break;
        case 354:
            NextPage01 = 389
            break;
        case 355:
            but = ['abrir a porta na junção', 'seguir pelo corredor']
            NextPage = [351, 166]
            break;
        case 356:
            but = ['CONTINUAR']
            NextPage = [341]
            break;
        case 357:
            but = ['C0NC0N71NU4R4R']
            NextPage = [401]
            break;
        case 358:
            but = ['atacar o cão', 'tentar passar sorrateiro pelo cachorro', 'sair e atravessar o rio', 'sair e entrar no barco']
            NextPage = [40, 89, 187, 138]
            break;
        case 359:
            but = ['TENTAR LUTAR', 'tentar FUGIR']
            NextPage = [122, 88]
            break;
        case 360:
            but = ['CONTINUAR']
            NextPage = [252]
            const Hab = sessionStorage.getItem("HabUsuario") - 2
            sessionStorage.setItem("HabUsuario", Hab)
            HabCur = HabCur - 2
            localStorage.setItem("HabCurrent", HabCur)
            attChar()
            aflicoes.push("MalCorvo")
            break;
        case 361:
            
            break;
        case 362:
            but = ['entrar agora', 'dar uma volta']
            NextPage = [326, 50]
            break;
        case 363:
            but = ['ConcordaR que está aqui para matar O CONDE', 'NegaR que pretenda matar o Conde', 'Diz que está ali para resgatar NasTassia']
            NextPage = [399, 329, 281]
            break;
        case 364:
            
            break;
        case 365:
            NextPage01 = 389
            break;
        case 366:
            but = ['INICIAR COMBATE']
            NextPage = [57]
            break;
        case 367:
            
            break;
        case 368:
            but = ['CONTINUAR']
            NextPage = [62]
            break;
        case 369:
            but = ['INICIAR COMBATE']
            NextPage = [234]
            break;
        case 370:
            but = ['3U $0U 0 M@10R V3RM3 D3 T0D05']
            NextPage = [401]
            break;
        case 371:
            if (magias > 0) {
                botao02.style.visibility = 'visible'
                botao02.innerText = 'lançar um feitiço'
                NextPage02 = 93
            }
            botao01.style.visibility = 'visible'
            botao01.innerText = 'atacar a criatura'
            NextPage01 = 22
            break;
        case 372:
            
            break;
        case 373:
            but = ['ABRIR A PORTA AO OESTE', 'IR PARA O SUDESTE']
            NextPage = [240, 252]
            break;
        case 374:
            
            break;
        case 375:

            break;
        case 376:
            but = ['CONCORDAR', 'RECUSAR']
            NextPage = [198, 248]
            break;
        case 377:
            but = ['entrar e revistar a sala', 'seguir para a cripta', 'ir as portas de bronze ao norte do pátio', 'abrir a porta ao sul do pátio']
            NextPage = [5, 90, 2, 18]
            break;
        case 378:
            NextPage01 = 47
            break;
        case 379:
            NextPage01 = 21
            break;
        case 380:
            but = ['INVESTIGAR A CRIPTA', 'SEGUIR PARA O NORTE']
            NextPage = [90, 2]
            break;
        case 381:
            but = ['G4M3 0V3R 0T4R10']
            NextPage = [401]
            break;
        case 382:
            
            break;
        case 383:
            if (Snivel == true) {
                botao01.style.visibility = 'visible'
                botao02.style.visibility = 'visible'
                botao03.style.visibility = 'visible'
                botao01.innerText = 'Atacar o homem adormecido'
                botao02.innerText = 'Falar com o homem adormecido'
                botao03.innerText = 'Ignorar o homem e seguir em frente'
                NextPage01 = 27
                NextPage02 = 126
                NextPage03 = 228
            } else {
                botao01.style.visibility = 'visible'
                botao02.style.visibility = 'visible'
                botao01.innerText = 'Atacar o homem'
                botao02.innerText = 'Entrar e falar com ele'
                NextPage01 = 27
                NextPage02 = 126
            }
            break;
        case 384:
            
            break;
        case 385:
            
            break;
        case 386:
            but = ['G4M3 0V3R 0T4R10']
            NextPage = [401]
            break;
        case 387:
            but = ['G4M3 0V3R 0T4R10']
            NextPage = [401]
            break;
        case 388:
            
            break;
        case 389:
            
            break;
        case 390:
            
            break;
        case 391:
            NextPage01 = 335
            break;
        case 392:
            ouro = ouro + 4
            but = ['TENTAR A SEGUNDA GAVETA', 'TENTAR ABRIR O COFRE']
            NextPage = [336, 271]
            break;
        case 393:
            NextPage01 = 13
            break;
        case 394:
            ouro = ouro - 2
            ArrayDeDados.push(3)
            but = ['CONTINUAR']
            NextPage = [75]
            break;
        case 395:
            NextPage01 = 106
            break;
        case 396:
            but = ['abrir a porta oposta', 'abrir a porta ao norte', 'seguir pela passagem']
            NextPage = [221, 332, 353]
            break;
        case 397:
            
            break;
        case 398:
            but = ['abrir as portas de bronze ao norte', 'aproximar-se da Cripta', 'abrir a porta ao sul']
            NextPage = [2, 90, 18]
            break;
        case 399:
            
            break;
        case 400:
            but = ['CONTINUAR']
            NextPage = [402]
            break;
        default:
            break;
    }
}

//FUNCOES RELATIVAS A INTERACAO DO JOGO

//Retorna magia repetida com os delays necessarios
async function MagiaRepetida() {
    let displaydado = document.getElementById("DadoTeste")
    displaydado.innerHTML = 
    `Você já tem essa magia!<br>
    Role novamente.`
    displaydado.style.backgroundColor = "aquamarine"
    await delay(200)
    displaydado.style.backgroundColor = ""
    await delay(2000)
    displaydado.innerHTML = ``
    TestesDados01 = true
    botao06.style.visibility = 'visible'
    botao06.innerText = 'jogar dado'
}

function TextoPersonalizado() {
    txtp.innerHTML =
    `${Texto}<br>
    ${pagNmb}`
}