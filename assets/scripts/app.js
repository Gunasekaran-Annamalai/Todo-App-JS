class DOMElements {
  constructor() {
    this.main = document.querySelector('.main');
    this.addItemButton = document.querySelector('.main button');
    this.count = document.querySelector('.count');
    this.popup = document.querySelector('.popup');
    this.titleInput = document.querySelector('.popup input:first-child');
    this.summaryInput = document.querySelector('.popup input:last-child');
    this.descriptionInput = document.querySelector('.popup textarea');
    this.add = document.querySelector('.popup .buttons button:first-child');
    this.cancel = document.querySelector('.popup .buttons button:last-child');
    this.close = document.querySelector('.popup img');
  }

  eventHandler() {
    this.addItemButton.addEventListener('click', ()=> {
      this.showPopup();
      this.clearInputs();
    });

    this.cancel.addEventListener('click', ()=> {
      this.clearInputs();
    });

    this.close.addEventListener('click', ()=> {
      this.showPopup();
    })
  }

  showPopup() {
    this.popup.classList.toggle('show-popup');
  }

  clearInputs() {
    this.titleInput.value = '';
    this.summaryInput.value = '';
    this.descriptionInput.value = '';
  }
}

class AddItems extends DOMElements {
  constructor() {
    super();
    this.add.addEventListener('click', ()=> {
      this.addItem();
    })
  }
  
  addItem() {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="card__title">${this.titleInput.value}</div>
            <div class="card__summary">${this.summaryInput.value}</div>
            <div class="card__icons">
              <img src="./assets/svg/trash.svg" id="delete" alt="trash">
            </div>
            <div class="card__desc">${this.descriptionInput.value}</div>
          </div>`;
    this.main.appendChild(card);
    this.showPopup();
    new DeleteItems();
  }
}

class DeleteItems extends DOMElements{
  constructor() {
    super();
    this.delete_icon = document.querySelectorAll('#delete');
    for (const item of this.delete_icon) {
      item.addEventListener('click', ()=> {
        item.parentElement.parentElement.remove();
      })
    }
   
  }
}

class App {
  static init() {
    let addItems = new AddItems();
    addItems.eventHandler();
  }
}

App.init();