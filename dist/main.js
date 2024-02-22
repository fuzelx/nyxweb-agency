
//get the navbar component
const nav = document.getElementById('top-nav');


// function to handle 
const handleScroll= () =>{

    //check the scroll!
    let checkScroll = window.scrollY;
    if(checkScroll > 50){
        nav.classList.add('lb')
    } else{
      nav.classList.remove('lb')
    }
}

  
  // Listen for the scroll event
  window.addEventListener('scroll', handleScroll);

  