const usersChatList = document.getElementsByClassName('chats-list')[0];
const searchInput = document.getElementsByClassName('search-input')[0];

let selectedItem = null;

const usersChat = [
  {
    id: 0,
    name: 'Ingrid',
    img: './images/profiles/ingrid.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 1,
    name: 'Josefa',
    img: './images/profiles/josefa.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 2,
    name: 'Jan',
    img: './images/profiles/jan.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 3,
    name: 'Ruben',
    img: './images/profiles/ruben.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 4,
    name: 'Dionisio',
    img: './images/profiles/dionisio.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 5,
    name: 'Rufino',
    img: './images/profiles/rufino.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 6,
    name: 'Mariana',
    img: './images/profiles/mariana.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 7,
    name: 'Pilar',
    img: './images/profiles/pilar.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }, {
    id: 8,
    name: 'Juan',
    img: './images/profiles/juan.jpg',
    messages: [
      {
        text: '',
        selfOrigin: true,
        date: new Date(), 
      }
    ],
  }
];

let filteredUsersChat = usersChat;

const chatElement = ({ img, name }, isSelected = false) => {
  const parent = document.createElement('div');
  parent.classList.add('chat');
  if (isSelected) parent.classList.add('chat-is-selected');

  parent.innerHTML = `
    <img src=${img} alt=${name} width="24" height="24" class="chat-img" />
    <div class="chat-box">
      <p class="chat-header">
        <span class="chat-name">${name}</span>
        <span class="chat-date">Viernes</span>
      </p>
      <p class="chat-message">
        <span class="dobleCheck-icon"></span>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing e.</span>
      </p>
    </div>`

  return parent;
};

filteredUsersChat.forEach((item, index) => {
  usersChatList.appendChild(chatElement(item, index === 0));
});

const chatsItems = [...document.getElementsByClassName('chat')];

const removeSelectedChatItem = (elements, className) => {
  elements.forEach(elem => elem.classList.remove(className));
}

const changeChangeHeaderUserData = (img, name) => {
  document.getElementById('header-user-img').src = img;
  document.getElementById('header-user-name').innerText = name;
  document.getElementById('header-user-status').innerText = !!Math.floor(Math.random() * 2) ? 'En línea' : '';
};

const renderElements = (elementsArray) => {
  elementsArray.forEach((chat) => {
    usersChatList.append(chatElement(chat))
  });
  [...document.getElementsByClassName('chat')].forEach((chat, index) => {
    chat.addEventListener('click', () => {
      selectedItem = filteredUsersChat[index];
  
      removeSelectedChatItem(chatsItems, 'chat-is-selected');
      chat.classList.add('chat-is-selected');
  
      removeHidenClasses();  
      changeChangeHeaderUserData(selectedItem.img, selectedItem.name);
    });
  });
};

selectedItem = usersChat[0];
changeChangeHeaderUserData(selectedItem.img, selectedItem.name);

chatsItems.forEach((chat, index) => {
  chat.addEventListener('click', () => {
    selectedItem = filteredUsersChat[index];

    removeSelectedChatItem(chatsItems, 'chat-is-selected');
    chat.classList.add('chat-is-selected');

    removeHidenClasses();  
    changeChangeHeaderUserData(selectedItem.img, selectedItem.name);
  });
});

searchInput.addEventListener('keyup', () => {
  usersChatList.innerHTML = '';
  filteredUsersChat = usersChat.filter(element => element.name.toLowerCase().includes(searchInput.value));
  renderElements(filteredUsersChat);
});