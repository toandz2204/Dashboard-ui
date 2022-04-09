const heartIcons = document.querySelectorAll('#feeds .heart ion-icon') // Lay toan bo trai tim
heartIcons.forEach((item) => {
  // Lap qua tung trai tim
  item.addEventListener('click', (e) => {
    // them su kien click cho trai tim
    if (e.target.classList.contains('active') == false) {
      // Thuc hien kich hoat khi ban chua tha tim
      e.target.classList.add('active') // kich hoat css cho trai tim thanh mau do
      let number = Number(e.target.nextElementSibling.textContent) // lay so luong trai tim
      let amount = (e.target.nextElementSibling.textContent = number += 1) // tang so luong trai tim len 1
    } else {
      e.target.classList.remove('active') //vo hieu css cho trai tim thanh mau do
      let number = Number(e.target.nextElementSibling.textContent) // lay so luong trai tim
      let amount = (e.target.nextElementSibling.textContent = number -= 1) // giam so luong trai tim xuong 1
    }
  })
})

// suggest

const listSuggest = document.querySelectorAll('.list-suggest .item .status')

listSuggest.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.target.textContent = 'followed'
    event.target.classList.toggle('follow')
  })
})