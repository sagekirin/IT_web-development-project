let script = localStorage.getItem('darkmode') //If a theme is stored, then it'll be loaded in
const themeSwitch = document.getElementById('theme-switch')

//Defining functions
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

//Enables DM if it's sitting in local storage
if(darkmode === "active") enableDarkmode()

//If DM is active, enable it. If not, disable it.
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})