const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function playNote (note) {
  let element = document.getElementById(`${note}Audio`)
  // we need to get the right <audio> element
  // based on the note passed in
  element.currentTime = 0
  element.play()
}

function clickHandler (event) {
  event.preventDefault()
  let note  = event.target.innerText

  // we need to figure out which note is associated with the event
  // and then ask the audio element to play it for us
  playNote(note)
}

function keyHandler (event) {
  event.preventDefault()

  let key = event.key
  if (notes.includes(key)) {
  // play the note
  playNote(key)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("note")
  for (button of buttons) {
    button.addEventListener("click", clickHandler)
  }
  document.body.addEventListener("keypress", keyHandler)
})
