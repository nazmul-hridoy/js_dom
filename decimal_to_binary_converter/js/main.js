const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binary(event) {
  event.preventDefault();


  const num = document.getElementById("number").value;

  if (num === ''){
    alert('PLEASE ENTER A NUMBER');
  } else if (num < 0){
    alert("PLEASE ENTER A POSITIVE NUMBER");
  }
  else{
    result.style.visibility = 'visible';
  }








  // Converting
  binaryNumber = Number(num).toString(2);
  result.innerText = binaryNumber;
}

submit.addEventListener('click', binary);
