let currentStep = 0
const formSteps = document.querySelector("form-step")
const form = document.querySelector("form")

// steps
form.addEventListener('click', (e) => {
  if(!e.target.matches('[data-action]')) {
    return
  }

  const actions = {
    next() {
      currentStep++
    },
    prev() {
      currentStep--
    }
  }
  
  const action = e.target.dataset.action
  actions[action]()
  updateActiveStep()
  updateProgressStep()
})

// envio do formulario
form.addEventListener('submit', (e) => {
  e.preventDefault()
})

// update steps
function updateActiveStep() {
  formSteps.forEach(step => step.classList.remove('active'))
  formSteps[currentStep].classList.add('active')
}
const updateProgressStep = () => {
  
}