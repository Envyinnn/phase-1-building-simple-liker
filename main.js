// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//error message hidden
const errorMessage = document.getElementById('modal')
errorMessage.className = 'hidden'

const love = document.getElementsByClassName('like-glyph')
const errorSection = document.getElementById('modal-message')

for (const btn of love) {
  btn.addEventListener('click', () => {
    mimicServerCall()

      .then(() => {
        if (btn.className === 'activated-heart') {
          btn.textContent = EMPTY_HEART
          btn.classList.remove('activated-heart')
      } else {
        btn.textContent = FULL_HEART
        btn.className = 'activated-heart'
      }  
      })
      .catch((errors) => {
        errorMessage.removeAttribute('class')
        errorMessage.textContent = errors
     
        setTimeout(() => {
          errors.setAttribute('class', 'hidden') }, 4000)

      })  
      })
  }
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
