// Calcula as médias
const calcularMedia = () => {
  const tr = document.querySelectorAll("tr")

  for (let i = 1; i < tr.length; i++) {
    var nota1 = parseInt(tr[i].children[1].textContent)
    var nota2 = parseInt(tr[i].children[2].textContent)
    var nota3 = parseInt(tr[i].children[3].textContent)

    var media = (nota1 + nota2 + nota3) / 3
    tr[i].children[4].innerText = media.toFixed(1)
    console.log(tr)
    if (media < 5) {
      tr[i].children[4].classList.add("table-danger")
    } else {
      tr[i].children[4].classList.add("table-success")
    }
  }
}

const inserirAluno = (event) => {
  event.preventDefault()
  const form = document.querySelector("form")
  if (form.nota1.value <= 10 && form.nota2.value <= 10 && form.nota3.value <= 10) {
    const table = document.querySelector(".tbody")
  
    const tr = document.createElement("tr")
  
    const nomeAluno = document.createElement("td")
    nomeAluno.innerText = form.name.value
    tr.appendChild(nomeAluno)
  
    const nota1 = document.createElement("td")
    nota1.innerText = form.nota1.value
    tr.appendChild(nota1)
  
    const nota2 = document.createElement("td")
    nota2.innerText = form.nota2.value
    tr.appendChild(nota2)
  
    const nota3 = document.createElement("td")
    nota3.innerText = form.nota3.value
    tr.appendChild(nota3)
  
    const media = document.createElement("td")
    tr.appendChild(media)
  
    table.appendChild(tr)
  
    form.reset()
    form.name.focus()
    calcularMedia()
  } else {
    alert("Notas não podem ser maior do que 10!")
  }
}

const botao = document.querySelector("#botao")
botao.addEventListener("click", inserirAluno)

const input = document.querySelectorAll(".n")

var invalidNumberChars = ["-", "+", "e"]

for (let i = 0; i < 3; i++) {
  input[i].addEventListener("keydown", function (e) {
    if (invalidNumberChars.includes(e.key)) {
      e.preventDefault()
    }
  })
}

calcularMedia()
