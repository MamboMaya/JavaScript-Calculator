var button = document.querySelectorAll("p")
var number = document.querySelector(".number")
var operator = document.querySelector(".operator")
var equal = document.querySelector(".equal")
var decimal = document.querySelector(".decimal")
var entry = document.querySelector(".entry")
var clear = document.querySelector(".clear")

var calculation = []

for (var i = 0; i < button.length; i++) {
  let value = button[i].id
  let type = button[i].className

  button[i].addEventListener('click', function() {
    console.log(value)

    if (type == "clear") {
      entry.textContent = ""
      calculation = []
    } else if (type == "equal"){

        var answer = calculation.join("")

        answer = eval(answer)
        entry.textContent = answer

    } else {
        if (entry.textContent == answer) {
          calculation = [answer]
      }

        calculation.push(value)
        entry.textContent = calculation.join(" ")
    }
  })

}
