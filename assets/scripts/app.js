const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector("#add-modal")
// const addMovieModal = document.body.children[1]

//All the above statment are used to access add-modal
 const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

const startaddMovieButton=document.querySelector('header button') //select header inside the button 
// const startaddMovieButton = document.querySelector('header').lastElementChild

const backdrop = document.getElementById("backdrop")
// const backdrop = document.getElementById('backdrop')

const confrimAddMovieButton= cancelAddMovieButton.nextElementSibling

const movies =[]


const userInput = addMovieModal.querySelectorAll('input')
const toggleBackdrop = () =>{
    backdrop.classList.toggle('visible')
}

//Arrow function stored in toggleMOvieModal
const toggleMovieModal= () =>{
    addMovieModal.classList.toggle('visible')
    toggleBackdrop()
} 

const backdropClickhandler = () => {
    toggleMovieModal()
}

const cancelMovieHandler = () => {
    toggleMovieModal() 
}

const clearMovieInputs = () =>{
    for (const userInputs of userInput){
        userInputs.value=""
    }
}

const addMovieHandler = () =>{
  const titleValue = userInput[0].value
  const imageUrlValue = userInput[1].value
  const ratingValue = userInput[2].value

  //Remove extra whitespace 
  if(titleValue.trim() === '' || imageUrlValue.trim()==='' 
  || ratingValue.trim()=='' || +ratingValue <1 || +ratingValue >5){
  alert("Please enter a valid rating ")
  return
  }
  // Javscript Object
const newMovie = {
    title : titleValue ,
    image : imageUrlValue ,
    rating : ratingValue
}

movies.push(newMovie)
console.log(movies)
toggleMovieModal()
clearMovieInputs()
}






cancelAddMovieButton.addEventListener("click",cancelMovieHandler )
startaddMovieButton.addEventListener('click',toggleMovieModal)
backdrop.addEventListener('click',toggleMovieModal)
confrimAddMovieButton.addEventListener('click',addMovieHandler)
