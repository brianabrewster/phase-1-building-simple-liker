// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const hearts = document.querySelectorAll(".like-glyph")
console.log(hearts)

function handleLikes() {
  hearts.forEach((heart) => {
    mimicServerCall()
    .then(() => {
      heart.addEventListener('click', (e) => {
        if(heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART
        } else {
          heart.textContent = EMPTY_HEART
        }
      } )
    })
    .catch((error) => {
      const modal = document.querySelector('#modal')
      modal.className = ''
      modal.textContent = error
    })
  })
}
// fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
// .then(res => res.json())
// .then(data => console.log(data))
// handleLikes()
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
handleLikes()