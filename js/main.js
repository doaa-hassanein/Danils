let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('navbar nav-item nav-link')

window.onscroll = () =>{

  section.forEach(sec =>{
     
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let hight = sec.offsetHeight;
    let id = sec.getAttribute('id')


    if( top >= offset && top < offset + hight){


      navLinks.forEach(links =>{

        links.classList.remove('active');
        document.querySelector('navbar nav-item nav-link[href*=' + id + ']').classList.add('active')

      })
    }

  });
};