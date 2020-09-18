const visitorBtn = document.querySelector("#visitor")
const submitBtn = document.querySelector("#submit")
const mainBody = document.querySelector("main")
const loginModal = document.querySelector("#loginDiv")
const addMoreCompany = document.querySelector(".addMoreCompanyForm")
const loginForm = document.forms.loginForm
const addSectionForm = document.forms.addSectionForm
const loginDetails = {
    username: "NTnanotech",
    password: "NT##2020"
}

function hideLoginModal() {
    loginModal.style.display = "none"
    mainBody.style.display = "block"
}

function getFormData(e) {
    e.preventDefault()
    const formDetails = new FormData(loginForm)
    const userName = formDetails.get('username')
    const passWd = formDetails.get('password')
    if ((userName === loginDetails.username) && (passWd === loginDetails.password)) {
        loginModal.style.display = "none"
        addMoreCompany.style.display = "flex"
    } else {
        alert("wrong user information")
    }
}

visitorBtn.addEventListener("click", hideLoginModal)
submitBtn.addEventListener("click", getFormData)