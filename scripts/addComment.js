//Enter
document.addEventListener('keydown', (event) => {
  event.key === 'Enter' ? addComment() : '';
});
const addComment = () => {
  const nameInput = document.getElementById('name');
  const textInput = document.getElementById('text');
  const dateInput = document.getElementById('date');
  const commentsList = document.getElementById('comments');
  const nameError = document.getElementById('name-error');
  const textError = document.getElementById('text-error');

  const name = nameInput.value.trim();
  const text = textInput.value.trim();
  const date = dateInput.value;

  // Валидация формы
  if (name === '') {
    nameError.innerHTML = 'Введите имя';
    return;
  } else {
    nameError.innerHTML = '';
  }

  if (text === '') {
    textError.innerHTML = 'Введите текст комментария';
    return;
  } else {
    textError.innerHTML = '';
  }

  const comment = document.createElement('li');
  const commentHeader = document.createElement('div');
  const commentName = document.createElement('h2');
  const commentDate = document.createElement('span');
  const commentDelete = document.createElement('button');
  const commentText = document.createElement('p');
  const commentLike = document.createElement('button');

  // Добавляем классы
  commentDate.classList.add('date');
  commentDelete.classList.add('delete');
  commentLike.classList.add('like');
  commentText.classList.add('body');
  // Добавляем имя и дату комментария
  commentName.innerHTML = name;

  const today = new Date();
  const commentDateValue = new Date(date);

  let dateString = '';
  if (commentDateValue.toDateString() === today.toDateString()) {
    dateString = 'сегодня';
  } else {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (commentDateValue.toDateString() === yesterday.toDateString()) {
      dateString = 'вчера';
    } else {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      dateString = commentDateValue.toLocaleDateString('ru-RU', options);
    }
  }

  commentDate.innerHTML = dateString;

  // Добавляем кнопку удаления
  commentDelete.innerHTML = '&#128465;';
  commentDelete.onclick = function () {
    commentsList.removeChild(comment);
  };

  // Добавляем текст комментария
  commentText.innerHTML = text;

  // Добавляем кнопку лайка
  commentLike.innerHTML = '&#10084;';
  commentLike.onclick = function () {
    if (commentLike.classList.contains('liked')) {
      commentLike.classList.remove('liked');
    } else {
      commentLike.classList.add('liked');
    }
  };

  // Собираем комментарий
  commentHeader.appendChild(commentName);
  commentHeader.appendChild(commentDate);

  comment.appendChild(commentHeader);
  comment.appendChild(commentText);
  comment.appendChild(commentLike);
  comment.appendChild(commentDelete);

  commentsList.appendChild(comment);

  // Очищаем поля ввода
  nameInput.value = '';
  textInput.value = '';
};
