const paragr = document.getElementById('body')
let loadGameState = true
let toggleDarkMode = false
let textIndexInit = 0
let but = []
const buttons = 
[document.getElementsByClassName('opt')[0],
 document.getElementsByClassName('opt')[1], 
 document.getElementsByClassName('opt')[2], 
 document.getElementsByClassName('opt')[3], 
 document.getElementsByClassName('opt')[4],
 document.getElementsByClassName('opt')[5]]


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
        //document.getElementById('bats').src = "images/frontLogo02.png"
        toggleDarkMode = false
        sessionStorage.setItem('DarkMode', true)
        return
    }
    document.documentElement.style.setProperty("--color-background", '#3D3131')
    document.documentElement.style.setProperty("--color-content", '#D9ABAB')
    //document.getElementById('bats').src = "images/frontLogo01.png"
    toggleDarkMode = true
    sessionStorage.setItem('DarkMode', true)
    return
}
//DETERMINA O MODO DE ACORDO COM O ESCOLHIDO PREVIAMENTE
function darkModeCheck() {
    if (sessionStorage.getItem('DarkMode')){
        document.documentElement.style.setProperty("--color-background", '#3D3131')
        document.documentElement.style.setProperty("--color-content", '#D9ABAB')
        document.getElementById('bats').src = "images/frontLogo01.png"
        return
    }
    document.documentElement.style.setProperty("--color-background", '#D9ABAB')
    document.documentElement.style.setProperty("--color-content", '#3D3131')
    document.getElementById('bats').src = "images/frontLogo02.png"
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
    setTimeout(() => typingEffect(body, (i + 1)), 50)
}
function initButtons(which) {
    let i = which.length
    let ind = 0
    while (ind != i) {
        buttons[ind].classList.remove('content')
        buttons[ind].textContent = which[ind]
        ind++
    }
}
function Continue(whichButtonPressed) {
    //RESETA TODOS OS BOTOES
    let ind = 0
    while (ind != 5) { 
        buttons[ind].classList.add('content')
        buttons[ind].textContent = ''
        ind++
    }

    if (textIndexInit < 5) { //CHECA SE ESTA NO COMECO E PASSA O TEXTO DE INICIO (HISTORICO)
        textIndexInit++
        const text = pagTxtInit[textIndexInit]
        typingEffect(text)
        return
    }

    typingEffect(pagTxtGame[NextPage[whichButtonPressed]])
    Paginas(NextPage[whichButtonPressed]) //CHAMA O SWITCH PRINCIPAL PARA A PROXIMA PAG PASSANDO O PARAMETRO DE QUAL BOTAO FOI APERTADO
}

