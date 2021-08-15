const button = document.querySelector('[data-menu-button]')
const menu = document.querySelector('[data-menu]')
const body = document.querySelector('body')

button.addEventListener('click', openMenu)


function openMenu(){
  body.classList.toggle('overflow-hidden')

  if(menu.classList.contains('open')){
    menu.classList.toggle('hide')
    setTimeout(() => {
      menu.classList.toggle('hide')
      menu.classList.toggle('open')
    }, 500)
    return
  }
  menu.classList.toggle('open')
}

