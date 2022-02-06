const chatListWrapper = document.getElementsByClassName('chats')[0];
const chatMessages = document.getElementsByClassName('messages-box')[0];
const goBackBtn = document.getElementsByClassName('goBack-btn')[0];

const removeHidenClasses = () => {
  chatListWrapper.classList.remove('show-chats');
  chatMessages.classList.remove('hide-wrapper');
};

goBackBtn.addEventListener('click', () => {
  chatListWrapper.classList.add('show-chats');
  chatMessages.classList.add('hide-wrapper');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 950)  removeHidenClasses();
});