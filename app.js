let toggleDarkMode = false
const nameDisplay = `<div class="name macondo-regular centralY">
            Diga ao olho seu verdadeiro nome
            <input type="text" name="" id="nameInput" placeholder="seu nome aqui">
            
        </div>
        <button class="macondo-regular" onclick="continuar()">CONTINUAR</button>`
        
const sortDisplay = `sdas`

function darkMode(){
    if (toggleDarkMode) {
        document.documentElement.style.setProperty("--color-background", '#D9ABAB')
        document.documentElement.style.setProperty("--color-content", '#3D3131')
        document.getElementById('bats').src = "images/frontLogo02.png"
        toggleDarkMode = false
        return
    }
    document.documentElement.style.setProperty("--color-background", '#3D3131')
    document.documentElement.style.setProperty("--color-content", '#D9ABAB')
    document.getElementById('bats').src = "images/frontLogo01.png"
    toggleDarkMode = true
    return
}

function typingEffect(element, body, i = 0) {
    if (i === 0) {
        element.textContent = ''
    }
    element.textContent += text[i]
    if (i === text.length - 1){
        return
    }
    setInterval(() => typingEffect(element, text, i++), 50)
}

function iniciar() {
    document.getElementById('main').innerHTML = nameDisplay
}

function continuar() {
    const input = document.getElementById('nameInput').value
    if (input.trim() === "") {
        alert("Por favor, nos dê o seu nome.")
        return;
    }
    sessionStorage.setItem('SeuNome', input)
    document.getElementById('main').innerHTML = sortDisplay
}