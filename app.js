let toggleDarkMode = false
let textIndexInit = 0
let textIndex = 0
let iniText = true
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

function typingEffect(element, body, i = 0) {
    if (i === 0) {
        element.innerHTML = ''
    }
    
    if (body[i] === '<') {
        element.innerHTML = body.slice(0, i + 4)
        i = i + 4
        console.log(but)
    }
    element.innerHTML += body[i]
    if (i === body.length - 1){
        initButtons(but)
        return
    }
    setTimeout(() => typingEffect(element, body, (i + 1)), 50)
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
function Continue(param) {
    switch (param) {
        case 6:
            
        break;
        case 5:
            
        break;
        case 4:
            
        break;
        case 3:
            
        break;
        case 2:
            
        break;
        case 1:
            if (iniText) {
                textIndexInit++
                gameTextSet(textIndexInit, but)
                resetButtons()
                if (textIndexInit == 5) {
                    iniText = false
                }
                return
            }
            
        break;
        default:
            break;
    }
}
function resetButtons(){
    const ind = 0
    while (ind != 5) {
        buttons[ind].classList.add('content')
        buttons[ind].textContent = ''
        ind++
    }
}
function gameTextSet(i = 0, button){
    let text = pagTxtInit[i]
    if (!iniText) {
        text = pagTxtGame[i]
    }
    const paragr = document.getElementById('body')
    but = button
    typingEffect(paragr, text)
}