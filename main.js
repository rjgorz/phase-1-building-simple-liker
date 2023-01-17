// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('div#modal');
modal.className = 'hidden';

const likebtns = document.querySelectorAll('.like-glyph');

likebtns.forEach(likebtn => likebtn.addEventListener('click', () => {
  mimicServerCall("someURL")
  .then(() => {
    if(likebtn.textContent === EMPTY_HEART) {
      likebtn.textContent = FULL_HEART;
      likebtn.className = 'activated-heart';
    } else {
      likebtn.textContent = EMPTY_HEART;
      likebtn.className = '';
    }
  })
  .catch((error) => {
    modal.className = '';
    modal.textContent = error;
    setTimeout(() => modal.className = 'hidden', 3000);
  })
}));


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
