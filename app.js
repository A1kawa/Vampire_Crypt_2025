//DETERMINA O TITULO DO COMBATE PRA MUDAR DE ACORDO COM NECESSIDADE
const tittle = document.getElementById('tittleCmb')
const paragr = document.getElementById('body')
let FA01
let FA02
let loadGameState = true
let toggleDarkMode = false
let textIndexInit = 0
let but = []
const buttons = 
[document.getElementsByClassName('intBut')[0],
 document.getElementsByClassName('intBut')[1], 
 document.getElementsByClassName('intBut')[2], 
 document.getElementsByClassName('intBut')[3], 
 document.getElementsByClassName('intBut')[4],
 document.getElementsByClassName('intBut')[5]]


//MUDA O MODO ESCURO NA PAGINA INICIAL
function darkMode(){
    if (toggleDarkMode) {
        document.documentElement.style.setProperty("--color-background", '#D9ABAB')
        document.documentElement.style.setProperty("--color-content", '#3D3131')
        document.getElementById('bats').src = "images/frontLogo02.png"
        toggleDarkMode = false
        sessionStorage.setItem('DarkMode', true)
        return
    }
    document.documentElement.style.setProperty("--color-background", '#3D3131')
    document.documentElement.style.setProperty("--color-content", '#D9ABAB')
    document.getElementById('bats').src = "images/frontLogo01.png"
    toggleDarkMode = true
    sessionStorage.setItem('DarkMode', true)
    return
}
//MUDA O MODO ESCURO NA PAGINA DE JOGO
function darkMode2(){
    if (toggleDarkMode) {
        document.documentElement.style.setProperty("--color-background", '#D9ABAB')
        document.documentElement.style.setProperty("--color-content", '#3D3131')
        toggleDarkMode = false
        return
    }
    document.documentElement.style.setProperty("--color-background", '#3D3131')
    document.documentElement.style.setProperty("--color-content", '#D9ABAB')
    toggleDarkMode = true
    return
}

function typingEffect(body, i = 0) {
    if (i === 0) {
        paragr.innerHTML = ''
    }
    if (body[i] === '<') { //CHECA SE A PROXIMA PALAVRA SERA UMA TAG E PULA
        paragr.innerHTML = body.slice(0, i + 4)
        i = i + 3
        setTimeout(() => typingEffect(body, (i + 1)), 20)
        return
    }
    paragr.innerHTML += body[i]
    if (i === body.length - 1){
        if (textIndexInit < 5) {
            but = init
        }
        paragr.innerHTML = body
        initButtons(but)
        return
    }
    setTimeout(() => typingEffect(body, (i + 1)), 20)
}

function initButtons(which) {
    let i = which.length
    let ind = 0
    while (ind != i) {
        buttons[ind].classList.add('opt')
        buttons[ind].textContent = which[ind]
        ind++
    }
    ind = 0
    while (ind != i) {
        buttons[ind].classList.remove('content')
        buttons[ind].textContent = which[ind]
        ind++
    }
}

function Continue(whichButtonPressed) {
    //RESETA TODOS OS BOTOES
    let ind = 0
    while (ind != 6) {
        buttons[ind].classList.add('content')
        buttons[ind ].classList.remove('opt')
        buttons[ind].textContent = ''
        ind++
    }
    buttons[0].textContent = 'OPT1'
    buttons[0].classList.add('opt')
    if (combate == true) {
        cmbInit()
        return
    }
    if (textIndexInit < 5) { //CHECA SE ESTA NO COMECO E PASSA O TEXTO DE INICIO (HISTORICO)
        textIndexInit++
        const text = pagTxtInit[textIndexInit]
        typingEffect(text)
        return
    }
    Paginas(NextPage[whichButtonPressed]) //CHAMA O SWITCH PRINCIPAL PARA A PROXIMA PAG PASSANDO O PARAMETRO DE QUAL BOTAO FOI APERTADO
}
function openInv(close = false) {
    const larguraJanela = window.innerWidth;
    const Inv = document.getElementsByClassName('inventory')[0]
    const InvBG = document.getElementsByClassName('inventoryBG')[0]
    const InvWid = Inv.clientWidth
    if (close) {
        Inv.style.left = '100%'
        InvBG.style.zIndex = -5
        InvBG.style.opacity = 0
        document.getElementById('att').classList.add('content')
        return
    }
    if (larguraJanela <= 600) {
        Inv.style.left = 0
        return
    }
    Inv.style.left = `${(larguraJanela - InvWid)}px`
    InvBG.style.zIndex = 5
    InvBG.style.opacity = 1
}
function attInv(init = false) {
    if (init) {
        document.getElementById('iniStats').innerHTML = `${Chars.Hab}<br>${Chars.Ene}<br>${Chars.Sor}<br>${Chars.Fth}`
    }
    document.getElementById('att').classList.remove('content')
    document.getElementById('curStats').innerHTML = `${Chars.Hab}<br>${Chars.Ene}<br>${Chars.Sor}<br>${Chars.Fth}`
    document.getElementById('provisions').textContent = provisoes
    document.getElementById('treasures').textContent = ouro
    let equip = ''
    let aflic = ''
    let spell = ''
    let i = 0
    while (i < itens.length) {
        equip += `${itens[i]}<br>`
        i++
    }
    i = 0
    while (i < aflicoes.length) {
        aflic += `${aflicoes[i]}<br>`
        i++
    }
    i = 0
    while (i < feiticos.length) {
        spell += `${feiticos[i]}<br>`
        i++
    }
    document.getElementById('spells').innerHTML = spell
    document.getElementById('aflic').innerHTML = aflic
    document.getElementById('equip').innerHTML = equip
}
function cmbInit(close = false){
    const cmb = document.getElementById('combateContainer')
    const EnmName = document.getElementById('EnmName')
    const EnmStat = document.getElementById('EnmStat')
    const UsuName = document.getElementById('UsuName')
    const UsuStat = document.getElementById('UsuStat')
    const cmbBG = document.getElementsByClassName('inventoryBG')[1]
    if (close) {
        cmb.style.scale = 0
        cmbBG.style.zIndex = -5
        cmbBG.style.opacity = 0
        attInv()
        Paginas(NextPage[0])
        return
    }
    cmb.style.scale = 1
    cmbBG.style.zIndex = 5
    cmbBG.style.opacity = 1
    EnmName.textContent = Enemy.name
    EnmStat.innerHTML = `H ${Enemy.Hab}<br>E ${Enemy.Ene}`
    UsuName.textContent = Chars.Name
    UsuStat.innerHTML = `H ${Chars.Hab}<br>E ${Chars.Ene}`
    document.getElementById('cond').classList.add('content')
    if (condition.has == true){
        document.getElementById('cond').classList.remove('content')
        document.getElementById('cond').textContent = `condição de combate: ${condition.which}`
    }
}
async function initCmb() {
    const sorteTesteBtn = document.getElementById('SorteTeste')//DETERMINA O BOTAO DE TESTAR SORTE COMO VARIAVEL
    //DETERMINA AS CAIXA DE FORCA DE ATAQUE DO INIMIGO E DO USUARIO COMO VARIAVEIS E RESETA SEUS VALORES
    const EneFA = document.getElementById('EneFA')
    const UsuFA = document.getElementById('UsuFA')
    EneFA.textContent = ''
    UsuFA.textContent = ''
    if (condition.id > 0) {
        condition.has = true
    }
    
    document.getElementsByClassName('endCmb')[0].classList.add('content')
    document.getElementById('diceBut').classList.add('content') //ESCONDE O BOTAO DE COMBATE

    //ROLA OS DADOS DO INIMIGO
    const EneDice01 = await rollDice("Enedice01")
    const EneDice02 = await rollDice("Enedice02")
    FA01 = EneDice01 + EneDice02 + Enemy.Hab //DETERMINA A FORCA DE ATAQUE DO INIMIGO

    EneFA.textContent = FA01 //PRINTA A FORCA DE ATAQUE DO INIMIGO

    //ROLA OS DADOS DO USUARIO
    const UsuDice01 = await rollDice("Usudice01")
    const UsuDice02 = await rollDice("Usudice02")
    FA02 = UsuDice01 + UsuDice02 + Chars.Hab //DETERMINA A FORCA DE ATAQUE DO USUARIO

    UsuFA.textContent = FA02 //PRINTA A FORCA DE ATAQUE DO USUARIO
    
    if (Chars.Sor === 0) { //VE SE O USUARIO TEM SORTE O SUFICIENTE PARA MOSTRAR O BOTAO DE TESTE DA MESMA
        sorteTesteBtn.classList.add('content')
        sorteTesteBtn.style.position = 'absolute'
    } else {
        sorteTesteBtn.classList.remove('content')
        sorteTesteBtn.style.position = ''
    }
    if (condition.id == 7) {
        await new Promise(resolve => setTimeout(resolve, 1500))
        if (FA01 < FA02) {
            Chars.encontros.push('reached')
        }
        cmbInit(true)
        return
    }
    if (FA01 < FA02) { //PRINTA O RESULTADO DE VITORIA DO COMBATE
        tittle.innerHTML = `VOCÊ VENCEU A RODADA`
        if (Chars.Sor > 0) { //SE O USUARIO TIVER SORTE, PERGUNTA SE VAI TESTA-LA
            tittle.innerHTML += `<br>gostaria de testar sua sorte?`
        }
        document.getElementById('VaryingButton').textContent = `infringir dano natural`
        document.getElementsByClassName('endCmbButtons')[0].classList.remove('content')
    }
    if (FA01 > FA02) { //PRINTA O RESULTADO DE PERDA DO COMBATE
        tittle.innerHTML = `VOCÊ PERDEU A RODADA`
        if (Chars.Sor > 0) { //SE O USUARIO TIVER SORTE, PERGUNTA SE VAI TESTA-LA
            tittle.innerHTML += `<br>gostaria de testar sua sorte?`
        }
        document.getElementById('VaryingButton').textContent = `receber dano natural`
        document.getElementsByClassName('endCmbButtons')[0].classList.remove('content')
    }
    if (FA01 == FA02) { //PRINTA O RESULTADO DE EMPATE
        tittle.innerHTML = `NINGUEM VENCEU A RODADA`
        document.getElementsByClassName('endCmbButtons')[0].classList.add('content')
        if (condition.has) {
            await conditionTest()
        }
        document.getElementById('diceBut').classList.remove('content')
    }
    
    document.getElementsByClassName('endCmb')[0].classList.remove('content')
    document.getElementById('cmbSorte').textContent = `sua sorte é ${Chars.Sor}`
}
async function TestarSorte(){
    document.getElementsByClassName('endCmbButtons')[0].classList.add('content')//RESETA A TELA DE FIM DE COMBATE
    tittle.textContent = 'testando...'
    document.getElementsByClassName('endCmb')[1].classList.remove('content')
    const dice01 = await rollDice("Teste01")
    const dice02 = await rollDice("Teste02")
    if ((dice01 + dice02) > Chars.Sor) {
        tittle.textContent = 'A SORTE NÃO ESTAVA DO SEU LADO'
        Chars.Sor--
        document.getElementById('cmbSorte').textContent = `sua sorte agora é ${Chars.Sor}`
        await new Promise(resolve => setTimeout(resolve, 2000))
        document.getElementsByClassName('endCmb')[1].classList.add('content')
        damage(true)
        return
    }
    tittle.textContent = 'A SORTE LHE FAVORECEU'
    Chars.Sor--
    document.getElementById('cmbSorte').textContent = `sua sorte agora é ${Chars.Sor}`
    await new Promise(resolve => setTimeout(resolve, 2000))
    document.getElementsByClassName('endCmb')[1].classList.add('content')
    damage(true, true)
}
async function damage(sorte = false, result = false, i = 2) {
    const EnmCont = document.getElementsByClassName('cmbStats')[0]
    const UsuCont = document.getElementsByClassName('cmbStats')[1]
    let cont = 0
    document.getElementsByClassName('endCmb')[0].classList.add('content')
    if (sorte) { //VE SE O USUARIO TESTOU A SORTE
        i = 3
        if (FA01 < FA02) {
            i = 1
        }
        if (result) { //SE O USUARIO TESTOU A SORTE, VE SE FOI BEM SUCEDIDO 
            i = 1
            if (FA01 < FA02) { //SE SUCESSO NA SORTE, CHECA SE GANHOU COMBATE
                i = 4
            }
        }
    }
    if (FA01 > FA02) {
        while (cont < i){
            UsuCont.style.backgroundColor = 'var(--color-content)'
            UsuCont.style.color = 'var(--color-background)'
            Chars.Ene--
            document.getElementById('UsuStat').innerHTML = `H ${Chars.Hab}<br>E ${Chars.Ene}`
            await new Promise(resolve => setTimeout(resolve, 100))
            UsuCont.style.backgroundColor = 'var(--color-background)'
            UsuCont.style.color = 'var(--color-content)'
            await new Promise(resolve => setTimeout(resolve, 500))
            if (Chars.Ene == 0) {
                cmbInit(true)
                typingEffect(pagTxtGame[401])
                Paginas(401)
                return
            }
            cont++
        }
        if (condition.has) {
            await conditionTest()
        }
        document.getElementById('diceBut').classList.remove('content')
        return
    }
    while (cont < i){
        EnmCont.style.backgroundColor = 'var(--color-content)'
        EnmCont.style.color = 'var(--color-background)'
        Enemy.Ene--
        document.getElementById('EnmStat').innerHTML = `H ${Enemy.Hab}<br>E ${Enemy.Ene}`
        await new Promise(resolve => setTimeout(resolve, 100))
        EnmCont.style.backgroundColor = 'var(--color-background)'
        EnmCont.style.color = 'var(--color-content)'
        await new Promise(resolve => setTimeout(resolve, 500))
        if (Enemy.Ene == 0) {
            cmbInit(true)
        }
        cont++
    }
    if (condition.has) {
        await conditionTest()
    }
    document.getElementById('diceBut').classList.remove('content')
}
async function rollDice(roll) {
    const dice = document.getElementById(roll)
    let cont = 0
    let result = 0
    while (cont < 10){
        result = Math.floor(Math.random() * 6) + 1
        dice.innerHTML = dices[result]
        cont++
        await new Promise(resolve => setTimeout(resolve, 100))
    }
    return result
}
async function damageSelf(i) {
    const UsuCont = document.getElementsByClassName('cmbStats')[1]
    let cont = 0
    while (cont < i){
        UsuCont.style.backgroundColor = 'var(--color-content)'
        UsuCont.style.color = 'var(--color-background)'
        Chars.Ene--
        document.getElementById('UsuStat').innerHTML = `H ${Chars.Hab}<br>E ${Chars.Ene}`
        await new Promise(resolve => setTimeout(resolve, 100))
        UsuCont.style.backgroundColor = 'var(--color-background)'
        UsuCont.style.color = 'var(--color-content)'
        await new Promise(resolve => setTimeout(resolve, 500))
        if (Chars.Ene == 0) {
            cmbInit(true)
            typingEffect(pagTxtGame[401])
            Paginas(401)
            return
        }
        cont++
    }
}
async function conditionTest(){
    switch (condition.id) {
        case 5:
            if (FA01 > FA02) {
                damage(condition.ref)
            }
        break;
        case 4:
            if (FA01 > FA02) {
                condition.times--
            }
            if (condition.times == 0) {
                Chars.encontros.push('reached')
                condition.id = 0
            }
        break;
        case 3:
            damageSelf(condition.ref)
        break;
        case 2:
            if (FA01 > FA02) {
                condition.times--
            }
            if (condition.times == 0) {
                combate = false
                NextPage = [condition.ref]
                cmbInit(true)
            }
        break;
        case 1:
            document.getElementById('condTest').classList.remove('content')
            const result = await rollDice('condTest')
            await new Promise(resolve => setTimeout(resolve, 1500))
            document.getElementById('condTest').classList.add('content')
            document.getElementById('condTittle').textContent = 'Vitória.'
            if (result < condition.ref) {
                document.getElementById('condTittle').textContent = 'Derrota.'
            }
            document.getElementById('condTittle').classList.remove('content')
            await new Promise(resolve => setTimeout(resolve, 500))
            if (result < condition.ref) {
                damageSelf(condition.times)
            }
            await new Promise(resolve => setTimeout(resolve, 1000))
            document.getElementById('condTittle').classList.add('content')
        break;
    
        default:
            return
    }
    condition.has = false
}