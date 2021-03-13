const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector("#add-modal")
// const addMovieModal = document.body.children[1]

//All the above statment are used to access add-modal
 const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

const startaddMovieButton=document.querySelector('header button') //select header inside the button 
// const startaddMovieButton = document.querySelector('header').lastElementChild

const backdrop = document.getElementById("backdrop")
// const backdrop = document.getElementById('backdrop')

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

const cancelMovie = () => {
    toggleMovieModal()
}

cancelAddMovieButton.addEventListener("click",cancelMovie)



startaddMovieButton.addEventListener('click',toggleMovieModal)

backdrop.addEventListener('click',toggleMovieModal)