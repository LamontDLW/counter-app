let count = 0

function increment() {
  count += 1
  let counter = document.getElementById('counter')

  counter.innerText = count
  console.log(count)
}


function save() {
  let saveEl = document.getElementById('save-el')
  let countStr = count + " - "
  saveEl.textContent += countStr

  let counter = document.getElementById('counter')
  count = 0
  counter.textContent = count

}
