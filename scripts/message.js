const addMessage = (selfOrigin, text, date) => {
  const newMessage = document.createElement('div');
  newMessage.classList.add('message');
  const messageDate = new Date(date);
  const isAM = messageDate.getHours - 12 >= 1;

  if (selfOrigin) newMessage.classList.add('is-sender');
  if (!selfOrigin) newMessage.classList.add('is-receiver');

  newMessage.innerHTML = `
    <div class="message-body">
      <p class="message-text"> ${text} </p>
    </div>
    <div class="message-details">
      <span class="message-date">
        ${isAM ? messageDate.getHours() : messageDate.getHours() - 12}:${messageDate.getMinutes() >= 10 ? messageDate.getMinutes() : `0${messageDate.getMinutes()}`} ${isAM ? 'am' : 'pm'}
      </span>
      ${selfOrigin ? '<span class="message-status is-dobleCheck"></span>' : ''}
    </div>
  `;

  return newMessage;
};

const textInput = document.getElementsByClassName('inputText')[0];

const renderMessages = (messagesArray) => {
  console.log(messagesArray)
  messagesArray.forEach(({ selfOrigin, text, date }) => {
    document.getElementsByClassName('message-list')[0].prepend(addMessage(selfOrigin, text, date));
  });
};

textInput.addEventListener('keypress', (event) => {
  if (event.code === 'Enter' && !!textInput.value) {
    selectedItem.messages.unshift({
      text: textInput.value,
      selfOrigin: true,
      date: new Date(),
    });
    renderMessages(selectedItem.messages);
    textInput.value = '';
  }
});