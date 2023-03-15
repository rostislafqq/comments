const setDate = () => {
  console.log(1);
  let todayInput = document.getElementById('date');
  let todayVal = new Date();
  console.log(todayVal);
  let year = todayVal.getFullYear();
  let month =
    todayVal.getMonth() + 1 < 10 ? '0' + (todayVal.getMonth() + 1) : todayVal.getMonth() + 1;
  let day = todayVal.getDate() < 10 ? '0' + todayVal.getDate() : todayVal.getDate();
  let formattedDate = `${year}-${month}-${day}`;

  todayInput.setAttribute('value', formattedDate);
};

setDate();
