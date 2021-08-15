const button = document.querySelector('[data-menu-button]')
const menu = document.querySelector('[data-menu]')
const body = document.querySelector('body')



button.addEventListener('click', openMenu)

menu.addEventListener('click', closeMenu)


function openMenu(){
  body.classList.toggle('overflow-hidden')

  if(menu.classList.contains('open')){
    menu.classList.toggle('hide')

    setTimeout(() => {
      menu.classList.toggle('hide')
      menu.classList.remove('open')
    }, 350)
    return
  }
  menu.classList.toggle('open')
}

function closeMenu(e){
  if(!e.target.dataset.menuItem){
    return
  }
  menu.classList.toggle('open')
}

