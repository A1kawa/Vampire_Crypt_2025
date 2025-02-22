const paragr = document.getElementById('body')
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
        if (body[i + 1] === 's' || body[i + 1] === '/'){
            paragr.innerHTML = body.slice(0, i + 8)
            i = i + 7
        } else {
            paragr.innerHTML = body.slice(0, i + 4)
            i = i + 3
        }
        setTimeout(() => typingEffect(body, (i + 1)), 50)
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
    setTimeout(() => typingEffect(body, (i + 1)), 25)
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

    if (textIndexInit < 5) { //CHECA SE ESTA NO COMECO E PASSA O TEXTO DE INICIO (HISTORICO)
        textIndexInit++
        const text = pagTxtInit[textIndexInit]
        typingEffect(text)
        return
    }

    typingEffect(pagTxtGame[NextPage[whichButtonPressed]])
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
    const cmbBG = document.getElementsByClassName('inventoryBG')[0]
    if (close) {
        cmb.style.scale = 0
        cmbBG.style.zIndex = -5
        cmbBG.style.opacity = 0
        return
    }
    cmb.style.scale = 1
    cmbBG.style.zIndex = 5
    cmbBG.style.opacity = 1
}