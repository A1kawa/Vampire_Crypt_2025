var NextPage = [136]
let Chars = {
    Name: 'Aikawa',
    Hab: Number.parseInt(localStorage.getItem('Hab')),
    Ene: Number.parseInt(localStorage.getItem('Ene')),
    Sor: Number.parseInt(localStorage.getItem('Sor')),
    Fth: Number.parseInt(localStorage.getItem('Fth')),
    initHab: Number.parseInt(localStorage.getItem('Hab')),
    initEne: Number.parseInt(localStorage.getItem('Ene')),
    initSor: Number.parseInt(localStorage.getItem('Sor')),
    initFth: Number.parseInt(localStorage.getItem('Fth')),
    encontros: []
}
let Enemy = {name: 'Dog', Hab: 17, Ene:88}
let condition = {has:false, which: '', id: 0}
let combate = false
let feiticos = ["Grande-Ataque", "Raio-de-Jandor", 'Divisao']
let aflicoes = []
let itens = ['Livro-das-Espadas']
let provisoes = 0
let ouro = 0

function Paginas(pagNmb) {
    let personalizado = false
    condition = {has:false, which: '', id: 0, times:0, ref:0}
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
            but = ['não tenho']
            NextPage = [208]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [173]
            }
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
                personalizado = true
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
            if (combate == 1) {
                combate = false
                NextPage = [10]
                Continue(0)
                break
            }
            combate = true
            condition = {has:true, which: 'dano por rodada', id: 3, ref:1}
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
            Chars.Fth = Chars.Fth - 3
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
            if (Chars.encontros.includes('valderesse')) {
                const text = `Quando você se aproxima, um pequeno e envelhecido <strong>Gnomo</strong> corre de dentro de sua cabana para a luz cinzenta da madrugada e anda meio de lado até você,sorrindo de modo bastante malicioso. Ele lhe pede 2 Moedas de Ouro para levá-lo para o outro lado do rio, em seu barco, mas acrescenta que você pode ficar e dormir em sua cabana se o desejar - e você está muito cansado!<br>
                Antes de consegui se decidir sobre o que fazer Valderesse entrevem`
                typingEffect(text)
                personalizado = true
                but = ['CONTINUAR']
                NextPage = [64]
                return
            }
            but = ['atacar o Gnomo', 'aceitar sua oferta', 'pagá-lo e atravessar o rio']
            NextPage = [113, 211, 162]
            break;
        case 14:
            but = ['não tenho']
            NextPage = [61]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [84]
            }
            break;
        case 15:
            itens.push("Crucifixo-de-Prata")
            Chars.Ene = Chars.Ene + 4
            if (Chars.Ene > Chars.initEne) {
                Chars.Ene = Chars.initEne
            }
            attInv()
            but = ['sair e abrir a porta oeste']
            NextPage = [294]
            if (aflicoes.length > 0) {
                but.push('pedir ajuda a Gunthar com alguma Aflição')
                NextPage.push(48)
            }
            if (itens.includes("Livro-de-Cura") || itens.includes("Livro-das-Espadas")) {
                but.push('mostrar um livro a Gunthar')
                NextPage.push(317)
            }
            break;
        case 16:
            Chars.Ene = Chars.Ene - 2
            attInv()
            condition = {has:true, which: 'dano por rodada', id: 5, ref:1}
            but = ['CONTINUAR']
            NextPage = [150]
            break;
        case 17:
            if (!itens.includes("Espelho")) {
                NextPage = [26]
                Continue(0)
                personalizado = true
                break
            }
            but = ['atacar o Conde']
            NextPage = [26]
            if (itens.includes("AguaBenta")) {
                but.push('jogar-lhe a Água-benta')
                NextPage.push(216)
            }
            if (feiticos.includes("Grande-Ataque") || feiticos.includes("Raio-de-Jandor")) {
                but.push('lançar-lhe um feitiço')
                NextPage.push(158)
            }
            break;
        case 18:
            but = ['seguir para a porta a oeste do depósito', 'sair e seguir para a Cripta', 'sair e seguir para as portas ao norte do pátio']
            NextPage = [67, 90, 2]
            break;
        case 19:
            but = ['CONTINUAR']
            if (itens.includes("Crucifixo-de-Prata") || itens.includes("Escudo-da-Fé") && itens.includes("Estaca-de-Prata") || itens.includes("Espada-Magica")) {
                NextPage = [32]
            } else {
                NextPage = [69]
            }
            break;
        case 20:
            but = ['CONTINUAR']
            NextPage = [106]
            Chars.Ene = Chars.Ene - 2
            attInv()
            break;
        case 21:
            but = ['examinar os aposentos', 'sair e abrir a porta leste oposta no corredor', 'sair e abrir a porta no final sul do corredor', 'retomar para o hall e abrir a porta norte']
            NextPage = [78, 118, 252, 101]
            break;
        case 22:
            if (combate == true) {
                but = ['CONTINUAR JORNADA']
                attInv()
                combate = false
                NextPage = [224]
                personalizado = true
                initButtons(but)
                break
            }
            but = ['INICIAR COMBATE']
            combate = true
            Enemy = {name: 'Thassalos Maior', Hab: 10, Ene:15}
            condition = {has:true, which: 'dado por rodada', id: 1, times: 1, ref: 6}
            break;
        case 23:
            if (itens.includes('Espada-Magica')) {
                Chars.Hab++
                attInv()
            }
            but = ['CONTINUAR']
            NextPage = [106]
            break;
        case 24:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
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
            itens.push("Estaca-de-Prata", "Chaves-do-Castelao")
            attInv()
            but = ['ir embora']
            NextPage = [319]
            if (Chars.encontros.includes('Katarina')) {
                const text = pagTxtGame[pagNmb] + 'Você também pode levar o Livro das Espadas para Katarina Heydrich.'
                typingEffect(text)
                but.push('Levar o livro a Katarina')
                NextPage.push(41)
                personalizado = true
            }
            break;
        case 26:
            but = ['não tenho']
            NextPage = [284]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [372]
            }
            break;
        case 27:
            Chars.Ene = Chars.Ene - 2
            attInv()
            but = ['tentar conversar com ele', 'atacá-lo imediatamente']
            NextPage = [126, 77] 
            break;
        case 28:
            but = ['continuar']
            NextPage = [63, 111]
            if (feiticos.includes('Parede-de-Força')) {
                but = ['não usar', 'usar feitiço']
            }
            break;
        case 29:
            but = []
            NextPage = []
            if (feiticos.includes('Parede-de-Força')) {
                but.push('usar parede de Força')
                NextPage.push(155)
            }
            if (feiticos.includes('Grande-Ataque')) {
                but.push('usar grande ataque')
                NextPage.push(112)
            }
            if (feiticos.includes('Raio-de-Jandor')) {
                but.push('usar raio de Jandor')
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
            Chars.Fth = Chars.Fth + 2
            Chars.Sor = Chars.Sor + 2
           Chars.Fth =Chars.Fth + 2
            Chars.Sor = Chars.Sor + 2
            if (Chars.Sor > Chars.initSor) {
                Chars.Sor = Chars.initSor
            }
            attInv()
            but = ['continuar']
            NextPage = [132]
            break;
        case 33:
            if (TestesDados02 == true) {
                Chars.Sor--
                localStorage.setItem('Chars.Sorrent', Chars.Sor)
                attInv()
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados02 = false
                if (Compare <= Chars.Sor) {
                    NextPage01 = 86
                } else {
                    NextPage01 = 133
                }
            } else {
                TestesDadosComparativo = Chars.Sor
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
                Chars.Sor--
                localStorage.setItem('Chars.Sorrent', Chars.Sor)
                attInv()
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados02 = false
                if (Compare <= Chars.Sor) {
                    NextPage01 = 134
                }
            } else {
                TestesDadosComparativo = Chars.Sor
                TestesDados02 = true
                botao01.style.visibility = 'visible'
                botao01.innerText = 'alegar pobreza'
                NextPage01 = 183
                botao06.style.visibility = 'visible'
                botao06.innerText = 'testar sorte'
            }
            break;
        case 37:
            Chars.Ene--
            attInv()
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
            but = ['entrar no barco', 'atravessar o rio']
            NextPage = [138, 187]
            if (Chars.encontros.includes('mastimTrue')) {
                Chars.encontros = Chars.encontros.filter(item => item !== "mastimTrue")
                combate = true
                but = ['iniciar combate']
                NextPage = [40]
                const text = `O cão é um <strong>Mastim Selvagem</strong>, com grosso pelo cinzento e grandes dentes amarelados, que late ferozmente e baba diante da possibilidade de tê-lo como refeição!`
                Enemy = {name: 'Mastim Selvagem', Hab: 7, Ene:7}
                typingEffect(text)
                personalizado = true
            }
            if (Chars.encontros.includes('mastimFalse')) {
                Chars.encontros = Chars.encontros.filter(item => item !== "mastimFalse")
                combate = true
                but = ['iniciar combate']
                NextPage = [40]
                const text = `Por escolher atacar o cão, em vez de tentar passar sorrateiramente por ele, você terá um golpe livre e poderá subtrair 2 pontos da ENERGIA dele antes de enfrentá-lo`
                Enemy = {name: 'Mastim Selvagem', Hab: 7, Ene:5}
                typingEffect(text)
                personalizado = true
            }
            break;
        case 41:
            but = ['CONTINUAR']
            NextPage = [319]
            break;
        case 42:
            if (combate) {
                Chars.Hab--
                attInv()
                combate = false
                NextPage = [10]
                Continue(0)
                personalizado = true
                break
            }
            Chars.Hab++
            attInv()
            but = ['iniciar combate']
            Enemy = {name: 'Névoa Vampira', Hab: 7, Ene:9}
            condition = {has:true, which: 'vezes atingido', id: 2, times: 2, ref: 165}
            combate = true
            break;
        case 43:
            if (TestesDados02 == true) {
                Chars.Sor--
                localStorage.setItem('Chars.Sorrent', Chars.Sor)
                attInv()
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados02 = false
                if (Compare <= Chars.Sor) {
                    NextPage01 = 147
                } else {
                    NextPage01 = 91
                }
            } else {
                TestesDadosComparativo = Chars.Sor
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
            if (combate) {
                combate = false
                NextPage = [135]
                Continue(0)
                personalizado = true
                break
            }
            but = ['iniciar combate']
            Enemy = {name: 'Morcego Vampiro Chifrudo', Hab: 8, Ene:7}
            condition = {has:true, which: 'vezes atingido', id: 2, times: 2, ref: 85}
            combate = true
            break;
        case 46:
            but = ['não tenho']
            NextPage = [208]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [298]
            }
            break;
        case 47:
            if (combate) {
                if (Chars.encontros.includes('nextEnemy')) {
                    Chars.encontros = Chars.encontros.filter(item => item !== "nextEnemy")
                    Enemy = {name: 'Zumbi Dois', Hab: 7, Ene:6}
                    but = ['próximo combate']
                    personalizado = true
                    initButtons(but)
                    break
                }
                combate = false
                NextPage = [348]
                Continue(0)
                personalizado = true
                break
            }
            but = ['iniciar combate']
            Enemy = {name: 'Zumbi Um', Hab: 6, Ene:6}
            Chars.encontros.push('nextEnemy')
            combate = true
            break;
        case 48:
            but = ['ir embora']
            NextPage = [294]
            if (itens.includes('Livro-dos-Curandeiros')){
                but.push('Mostrar o Livro dos Curandeiros')
                NextPage.push(375)
            }
            if (itens.includes('Livro-das-Espadas')) {
                const text = pagTxtGame[pagNmb] + ` <br> Mesmo sem o Livro dos Curandeiros você pode tentar mostrar a Gunther outro livro que tenha encontrado no Castelo`
                typingEffect(text)
                personalizado = true
                but.push('mostrar o outro livro')
                NextPage.push(188)
                break
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
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
                    NextPage01 = 99
                } else {
                    const text = `Você continua circulando o castelo cuidadosamente mas acaba voltando aos portões principais 
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
            Chars.Sor++
            Chars.Fth++
            itens.push('Escudo-da-Fé')
            if (Chars.Sor > Chars.initSor) {
                Chars.Sor = Chars.initSor
            }
            attInv()
            but = ['CONTINUAR']
            NextPage = [101]
            break;
        case 52:
            if (combate == true) {
                Chars.Hab = Chars.Hab + 2
                attInv()
                but = ['examinar a câmara', 'ir embora']
                combate = false
                NextPage = [352, 320]
                personalizado = true
                initButtons(but)
                break
            }
            Chars.Hab = Chars.Hab - 2
            attInv()
            but = ['INICIAR COMBATE']
            combate = true
            Enemy = {name: 'Thassalos Menor', Hab: 8, Ene:11}
            condition = {has:true, which: 'dado por rodada', id: 1, ref:4}
            break;
        case 53:
            Chars.Ene = Chars.Ene + 4
            if (Chars.Ene > Chars.initEne) {
                Chars.Ene = Chars.initEne
            }
            attInv()
            but = ['comer os biscoitos', 'ir para a porta oeste']
            NextPage = [4, 45]
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
                but = ['continuar']
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
            Chars.encontros.push('snivel')
            but = ['CONTINUAR']
            NextPage = [383]
            break;
        case 65:
            but = ['CONTINUAR']
            NextPage = [335]
            Chars.Ene = Chars.Ene - 3
            attInv()
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
            if (combate) {
                combate = false
                NextPage = [159]
                Continue(0)
                personalizado = true
                break
            }
            combate = true
            but = ['iniciar combate']
            Enemy = {name: 'Ghoul Imenso', Hab: 8, Ene:11}
            condition = {has:true, which: 'vezes atingido', id: 2, times: 3, ref: 127}
            if (Chars.encontros.includes('GhoulDano')) {
                Enemy.Ene = Enemy.Ene - 2
                Chars.encontros = Chars.encontros.filter(item => item !== 'GhoulDano')
            }
            break;
        case 71:
            but = ['não tenho']
            NextPage = [208]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [298]
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
                    const text = `O Sábio agradece por você ter pago pelas informações e você o deixa envolvido com seus velhos e bolorentos livros e manuscritos.`
                    TextoPersonalizado()
                    personalizado = true
                    botao01.style.visibility = 'visible'
                    botao01.innerText = 'ir à biblioteca'
                    NextPage01 = 332
                }
            } else {
                if (ArrayDeDados.includes(7)) {
                    const text = `Após ter pago pelas informações você deixa o Sábio envolvido com seus velhos e bolorentos livros e manuscritos.`
                    TextoPersonalizado()
                    personalizado = true
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
                    const text = `Você pensa sobre o que dizer, mas o Sábio fala livremente, por si mesmo. Na maior parte do tempo comenta como o Conde é malvado e como ele - o Sábio - 
     necessita de mais dinheiro para livros. Você percebe que terá de pagar por informações, e que não vai ser barato. Enquanto se pergunta quanto lhe oferecer, e como 
     fazê-lo de modo educado, o Sábio anuncia de repente: “É claro, por uma boa quantia em ouro eu poderia levá-lo à biblioteca. Quem sabe o que se pode encontrar lá?” 
     Você pode perguntar ao Sábio sobre vários assuntos, mas terá que pagar para conseguir cada resposta. Ele aceitará Moedas de Ouro, ou quaisquer itens de Tesouro de igual 
     valor. Você pode escolher perguntar-lhe o que desejar da lista que se segue, mas tem que pagar por cada resposta. O Sábio exige pagamento adiantado e ele não pechincha!`
                    TextoPersonalizado()
                    personalizado = true
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
                    if (feiticos.includes('GrandeAtaque')) {
                        const text = `O conde tenta se esquivar da magia, mas não consegue, e sofre o dano total de 6 pontos de ENERGIA.<br><br>
                        Você deve então enfrentá-lo.<br><br>
                        Pode usar o feitiço de Grande Ataque se o tiver e desejar usá-lo.`
                        TextoPersonalizado()
                        botao02.style.visibility = 'visible'
                        botao02.innerText = 'usar Grande Ataque'
                        NextPage02 = 346
                    }
                    const text = `O conde tenta se esquivar da magia, mas não consegue, e sofre o dano total de 6 pontos de ENERGIA.<br><br>
                    Você deve então enfrentá-lo.`
                    TextoPersonalizado()
                } else {
                    sessionStorage.setItem('DanoConde', sessionStorage.getItem('DanoConde') + 3)
                    if (feiticos.includes('GrandeAtaque')) {
                        const text = `Ele consegue evadir-se da força total do Raio e sofre somente perda de 3 pontos de ENERGIA.<br><br>
                        Você deve então enfrentá-lo.<br><br>
                        Pode usar o feitiço de Grande Ataque se o tiver e desejar usá-lo.`
                        TextoPersonalizado()
                        botao02.style.visibility = 'visible'
                        botao02.innerText = 'usar Grande Ataque'
                        NextPage02 = 346
                    }
                    const text = `Ele consegue evadir-se da força total do Raio e sofre somente perda de 3 pontos de ENERGIA.<br><br>
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
            if (combate) {
                combate = false
                but = ['examinar a cabana', 'continuar jornada']
                NextPage = [177, 228]
                initButtons(but)
                personalizado = true
                break
            }
            combate = true
            but = ['iniciar combate']
            Enemy = {name: 'Homem da Floresta', Hab: 10, Ene:7}
            break;
        case 78:
            if (combate) {
                combate = false
                NextPage = [252]
                Continue(0)
                personalizado = true
                break
            }
            ouro = ouro + 4
            attInv()
            combate = true
            but = ['iniciar combate']
            Enemy = {name: 'Corvo Gigante Filhote', Hab: 7, Ene:6}
            condition = {has:true, which: 'vezes atingido', id: 2, times: 1, ref: 360}
            break;
        case 79:
            ouro = ouro - 8
            Chars.Ene = Chars.Ene - 4
            aflicoes = aflicoes.filter(item => item !== 'Licantropia-Maior' && item !== "Licantropia")
            attInv()
            but = ['CONTINUA']
            NextPage = [373]
            break;
        case 80:
            but = ['CONTINUAR']
            NextPage = [31]
            break;
        case 81:
            if (combate) {
                if (Chars.encontros.includes('firstEnemy')) {
                    Chars.encontros = Chars.encontros.filter(item => item !== "firstEnemy")
                    Chars.encontros.push('secondEnemy')
                    Enemy = {name: 'Zumbi Dois', Hab: 7, Ene:5}
                    but = ['próximo combate']
                    personalizado = true
                    initButtons(but)
                    break
                }
                if (Chars.encontros.includes('secondEnemy')) {
                    Chars.encontros = Chars.encontros.filter(item => item !== "secondEnemy")
                    Enemy = {name: 'Zumbi Três', Hab: 6, Ene:6}
                    but = ['próximo combate']
                    personalizado = true
                    initButtons(but)
                    break
                }
                combate = false
                NextPage = [11]
                Continue(0)
                personalizado = true
                break
            }
            but = ['iniciar combate']
            Enemy = {name: 'Zumbi Um', Hab: 6, Ene:5}
            Chars.encontros.push('firstEnemy')
            combate = true
            break;
        case 82:
            but = ['descer pela escada leste', 'descer pela escada sul']
            NextPage = [108, 161]
            break;
        case 83:
            but = ['não tenho']
            NextPage = [231]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [129]
            }
            break;
        case 84:
            Chars.Fth = Chars.Fth - 2
            Chars.Sor--
            attInv()
            botao01.style.visibility = 'visible'
            but = ['continuar']
            NextPage = [25]
            break;
        case 85:
            if (aflicoes.includes('Maldição-do-Curandeiro')) {
                NextPage = [186]
                Continue(0)
                personalizado = true
                break
            }
            NextPage = [206]
            Continue(0)
            personalizado = true
            break;
        case 86:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
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
            Chars.Ene = Chars.Ene - 2
            attInv()
            but = ['continuar']
            NextPage = [122]
            break;
        case 89:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
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
            if (!itens.includes("Agua-Benta") && !itens.includes("Conhaque")) {
                const text = `Dando um passo para a frente, seu peso aciona uma armadilha-alçapão escondida.<br>
                Você cai com força no chão de pedra, três metros abaixo, perdendo 4 pontos de ENERGIA.<br> <br>
                Você consegue arrastar-se para fora do fosso: uma simples, porém eficiente armadilha.`
                typingEffect(texto)
                personalizado = true
            }
            itens = itens.filter(item => item !== "Conhaque" && item !== "Agua-Benta")
            but = ['continuar']
            NextPage = [157]
            break;
        case 92:
            but = ['abrir a porta']
            NextPage = [294]
            break;
        case 93:
            if (feiticos.includes('Parede-de-Força')) {
                but.push('Parede de Força')
                NextPage.push(194)
            }
            if (feiticos.includes('Raio-de-Jandor')) {
                but.push('Raio de Jandor')
                NextPage.push(125)
            }
            if (feiticos.includes('Divisao')) {
                but.push('Divisão')
                NextPage.push(109)
            }
            break;
        case 94:
            but = ['entregar seu sangue']
            NextPage = [328]
            if (itens.includes('Estaca')) {
                but.push('manter-se ccom a Estaca de Prata')
                NextPage.push(14)
                const text = pagTxtGame + `<br> Se não quiser reduzir sua ENERGIA, pode escolher se manter apenas com a Estaca de Prata que encontrou.`
                typingEffect(text)
                personalizado = true
                break
            }
            but.push('perguntar sobre outras armas')
            NextPage.push(374)
            const text = pagTxtGame + `<br> Se não quiser reduzir sua ENERGIA, pode perguntar a Siegfried se existe algum outro meio de se obter uma arma que possa destruir o Vampiro.`
            typingEffect(text)
            personalizado = true
            break;
        case 95:
            but = ['abrir a porta leste do corredor', 'correr para o sul do corredor']
            NextPage = [351, 166]
            Chars.Fth--
            Chars.Sor--
            aflicoes.push("Licantropia-Maior")
            attInv()
            break;
        case 96:
            but = ['abrir a porta leste', 'abrir a porta sul']
            NextPage = [371, 8]
            Chars.Fth--
            Chars.Sor--
            attInv()
            break;
        case 97:
            but = ['CONTINUAR']
            NextPage = [47]
            break;
        case 98:
            but = ['atacar diretamente', 'consultar provisões']
            NextPage = [3, 117]
            break;
        case 99:
            but = ['CONTINUAR']
            NextPage = [326]
            break;
        case 100:
            if (combate) {
                combate = false
                NextPage = [10]
                Continue(0)
                personalizado = true
                break
            }
            Chars.Ene = Chars.Ene - 2
            attInv()
            combate = true
            condition = {has:true, which:'dano por rodada', id:3, ref:2}
            but = ['voltar ao combate']
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
                if (feiticos >= 3) {
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
            if (combate) {
                if (Chars.encontros.includes('nextEnemy')) {
                    Chars.encontros = Chars.encontros.filter(item => item !== "nextEnemy")
                    Enemy = {name: 'Lobo Dois', Hab: 7, Ene:6}
                    but = ['próximo combate']
                    personalizado = true
                    initButtons(but)
                    break
                }
                const text = `Você derrota os lobos e analisa seus arredores mas não encontra nada de interessante aqui.<br><br>Escolha sua proxima ação:`
                combate = false
                but = ['seguir para a Cripta', 'abrir as portas ao sul do pátio', 'abrir as portas de bronze ao norte']
                NextPage = [90, 18, 2]
                typingEffect(text)
                personalizado = true
                break
            }
            but = ['iniciar combate']
            Enemy = {name: 'Lobo Um', Hab: 6, Ene:5}
            Chars.encontros.push('nextEnemy')
            combate = true
            break;
        case 104:
            
            break;
        case 105:
            if (combate) {
                if (Chars.encontros.includes('nextEnemy')) {
                    Chars.encontros = Chars.encontros.filter(item => item !== "nextEnemy")
                    Chars.encontros.push('secondEnemy')
                    Enemy = {name: 'Zumbi Dois', Hab: 6, Ene:6}
                    but = ['próximo combate']
                    personalizado = true
                    initButtons(but)
                    break
                }
                combate = false
                NextPage = [11]
                Continue(0)
                personalizado = true
                break
            }
            but = ['iniciar combate']
            Enemy = {name: 'Zumbi Um', Hab: 7, Ene:5}
            Chars.encontros.push('nextEnemy')
            combate = true
            break;
        case 106:
            but = ['usar a espada', 'lançar um feitiço']
            NextPage = [164, 29]
            if (itens.includes('Agua-Benta')) {
                but.push('jogar Água benta sobre ela')
                NextPage.push(23)
            }
            if (itens.includes('Espelho-Prateado')) {
                but.push('Usar o espelho prateado')
                NextPage.push(145)
            }
            Chars.encontros.push('KatarinaPrimeiroAtaque')
            Enemy = {name: 'Katarina Heydrich', Hab: 10, Ene:10}
            break;
        case 107:
            but = ['continuar']
            NextPage = [70]
            Chars.encontros.push('GhoulDano')
            break;
        case 108:
            but = ['Tentar abrir o sarcófago', 'Sair, subir a escada e ir para o sul', 'Sair, subir a escada e ir para o norte']
            NextPage = [213, 161, 257]
            break;
        case 109:
            but = ['CONTINUAR']
            NextPage = [324]
            break;
        case 110:
            if (TestesDados02 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
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
            but = ['termine sua luta com ele']
            NextPage = [212]
            break;
        case 112:
            NextPage = [164]
            break;
        case 113:
            if (combate) {
                but = ['Examinar a casa do Gnomo', 'Pegar o barco e atravessar o rio', 'Atravessar o rio raso a pé']
                combate = false
                NextPage = [358, 138, 187]
                const text = 'O gnomo foi vencido. <br><br> Escolha sua próxima ação:'
                typingEffect(text)
                personalizado = true
                break
            }
            but = ['INICIAR COMBATE']
            combate = true
            Enemy = {name: 'Snivel, o Gnomo', Hab: 8, Ene:6}
            condition = {has:true, which: 'dano aumentado', id: 6, ref:2}
            break;
        case 114:
            if (combate) {
                combate = false
                NextPage = [168]
                Continue(0)
                personalizado = true
                break
            }
            combate = true
            but = ['INICIAR COMBATE']
            Enemy = {name:'Golem de Madeira', Hab:8, Ene:6}
            break;
        case 115:
            
            break;
        case 116:
            itens.push('Chaves-do-Castelao', 'Estaca-de-Prata')
            attInv()
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
                if (itens.includes('Poção-de-Cura')) {
                    botao02.style.visibility = 'visible'
                    botao02.innerText = 'beber Poção de Cura'
                }
                prov = false  
            } else {
                Chars.Ene = Chars.Ene + 4
                if (minus == true) {
                    provisoes--
                } else {
                    itens = itens.filter(item => item !== 'Pocao')
                }
                if (Chars.Ene >= sessionStorage.getItem('EneUsuario')) {
                    localStorage.setItem('Chars.Enerent', sessionStorage.getItem('EneUsuario'))
                } else {
                    localStorage.setItem('Chars.Enerent', Chars.Ene)
                }
                Aumentou = true
                attInv()
                const text = `Você tem uma <strong>Espada Mágica</strong>?`
                TextoPersonalizado()
                personalizado = true
                if (itens.includes("Espada-Magica")) {
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
            but = ['atacar o homem', 'conversar com ele', 'Sair pela porta na parede oeste deste aposento']
            NextPage = [251, 205, 373]
            break;
        case 119:
            but = ['concordar', 'recusar']
            NextPage = [198, 248]
            break;
        case 120:
            feiticos.push("Cura-Verdadeira")
            but = ['CONTINUAR']
            NextPage = [102]
            break;
        case 121:
            if (combate) {
                combate = false
                NextPage = [314]
                if (Chars.encontros.includes('reached')) {
                    Chars.encontros = Chars.encontros.filter(item => item !== "reached")
                    NextPage = [266]
                }
                Continue(0)
                personalizado = true
                break
            }
            combate = true
            but = ['INCIAR COMBATE']
            Enemy = {name:'Lobos Gigantes', Hab:7, Ene:13}
            condition = {has:true, which:'vezes atingido', id:4, times:3}
            break;
        case 122:
            if (combate) {
                Chars.Hab = Chars.Hab + 2
                attInv()
                combate = false
                NextPage = [180]
                Continue(0)
                personalizado = true
                break
            }
            Chars.Hab = Chars.Hab - 2
            attInv()
            combate = true
            but = ['iniciar combate']
            Enemy = {name: 'Ghoul Fedorento', Hab: 8, Ene:9}
            condition = {has:true, which: 'vezes atingido', id: 2, times: 3, ref: 127}
            break;
        case 123:
            but = ['desistir', 'tentar sussurrar']
            NextPage = [191, 402]
            break;
        case 124:
            but = ['não tenho']
            NextPage = [231]
            if (itens.includes("Espada-Magica")) {
                but = ['tenho']
                NextPage = [200]
            }
            break;
        case 125:
            but = ['CONTINUAR']
            NextPage = [22]
            break;
        case 126:
            but = ['RETORNAR A JORNADA']
            NextPage = [228]
            Chars.Ene = Chars.Ene + 4
            if (!Chars.encontros.includes('sleep')) {
                Chars.Ene = Chars.Ene + 4
            }
            if (Chars.Ene > Chars.initEne) {
                Chars.Ene = Chars.initEne
            }
            itens.push("Alho")
            attInv()
            break;
        case 127:
            but = ['C0NT1NU4R']
            NextPage = [401]
            break;
        case 128:
            but = ['tentar enfrentá-la', 'tentar fugir']
            NextPage = [153, 215]
            break;
        case 129:
            but = ['CONTINUAR']
            NextPage = [200]
            Chars.encontros.push('danoPrevio')
            break;
        case 130:
            itens.push('Agua-Benta')
            ouro = ouro + 7
            attInv()
            but = ['CONTINUAR']
            NextPage = [271]
            break;
        case 131:
            but = ['tentar conversar com o homem', 'atacá-lo imediatamente']
            NextPage = [15, 92]
            break;
        case 132:
            but = ['continuar']
            NextPage = [66]
            if (Chars.encontros.includes('Katarina')) {
                NextPage = [176]
            }
            break;
        case 133:
            but = ['tentar subir para a torre do sino', 'voltar ao pátio principal']
            NextPage = [33, 380]
            break;
        case 134:
            ouro = 0
            but = ['CONTINUAR']
            NextPage = [79]
            break;
        case 135:
            ouro - ouro + 4

            break;
        case 136:
            if (combate) {
                combate = false
                NextPage = [97]
                Continue(0)
                personalizado = true
                break
            }
            but = ['INICIAR COMBATE']
            Enemy = {name: 'Rato Gigante', Hab: 7, Ene:8}
            combate = true
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
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
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
                but = ['continuar']
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
            feiticos.push("GrandeAtaque")
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
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
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
           Chars.Fth--
            localStorage.setItem("CharsChars.Fthrent",Chars.Fth)
            attInv()
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
                const text = `Agora você pode atacar com sua espada ou lançar um feitiço.`
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
                    const text = `Se desejar, pode jogar o segundo vidro de Água-benta com os mesmos resultados seguido por um ataque com espada ou feitiço, ou fazê-los diretamente.`
                    NextPage03 = 216
                    TestesDadosComparativo = Compare
                }
                TextoPersonalizado()
                personalizado = true
                console.log(sessionStorage.getItem(`DanoConde`))
            } else {
                let indice = itens.indexOf("Agua-Benta")
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
            feiticos.push("Divisao")
            botao01.style.visibility = "visible"
            botao01.innerText = "continuar"
            NextPage01 = 102
            break;
        case 223:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados01 = false
                if (Compare <= Number.parseInt(localStorage.getItem("CharsChars.Fthrent"))) {
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
                but = ['continuar']
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
            feiticos.push("Parede-de-Força")
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
           Chars.Fth =Chars.Fth - 2
            Chars.Sor = Chars.Sor - 2
            localStorage.setItem("Chars.Sorrent", Chars.Sor)
            localStorage.setItem("CharsChars.Fthrent",Chars.Fth)
            attInv()
            botao01.style.visibility = 'visible'
            botao01.innerText = "sair da sala e continuar"
            NextPage01 = 373
            break;
        case 252:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
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
                but = ['continuar']
                TestesDados01 = false
                if (Compare <= Number.parseInt(localStorage.getItem("Chars.Sorrent"))) {
                    NextPage01 = 24
                } else {
                    NextPage01 = 370
                }
            } else {
                Chars.Ene--
                Chars.Ene--
                localStorage.setItem("Chars.Enerent", Chars.Ene)
                attInv()
                TestesDados02 = true
                botao06.style.visibility = 'visible'
                botao06.innerText = 'jogar dados'
            }
            break;
        case 273:
            feiticos.push("RaioJandor")
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
            Chars.Ene--
            localStorage.setItem("Chars.Enerent", Chars.Ene)
            attInv()
            TestesDados02 = true
            botao01.style.visibility = 'visible'
            but = ['continuar']
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
            if (itens.includes("Espada-Magica")) {
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
            feiticos.push("FeiticoSorte")
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
            but = ['continuar']
            Chars.Ene = Chars.Ene - 2
            localStorage.setItem("Chars.Enerent", Chars.Ene)
            attInv()
            NextPage01 = 341
            break;
        case 326:
            but = ['seguir para as portas de metal', 'abrir a porta sul', 'abrir a primeira porta a oeste', 'abrir a segunda porta a oeste', 'seguir para a Cripta']
            NextPage = [2, 18, 377, 54, 90]
            break;
        case 327:
            if (TestesDados01 == true) {
                botao01.style.visibility = 'visible'
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
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
                but = ['continuar']
                TestesDados01 = false
                if (Compare <=Chars.Fth) {
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
            but = ['continuar']
            NextPage01 = 13
            Valderesse = true
            Chars.Ene--
            Chars.Ene--
            localStorage.setItem("Chars.Enerent", Chars.Ene)
            attInv()
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
            attInv()
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
            if (feiticos > 0) {
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

    if (!personalizado) {
        typingEffect(pagTxtGame[pagNmb])
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
