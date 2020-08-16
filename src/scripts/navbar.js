const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const menuElement = document.querySelectorAll('.navbar-menu .menu-element');
    
    burger.addEventListener('click', () => {
        // Toggle main-menu
        navbarCollapse.classList.toggle('main-menu-active');
        // Animate menu-items
        menuElement.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }else {
                link.style.animation = `menuItemFade 0.5s ease forwards ${index / 5}s`
            }
        
            
        })
        // Burger animation
        burger.classList.toggle('toggle')


    });
    
}

navSlide()