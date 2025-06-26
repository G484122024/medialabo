
    function calculate() {
  let l = parseInt(document.querySelector('#left').value);
  let r = parseInt(document.querySelector('#right').value);

  let result = l + r;
  document.querySelector('#answer').textContent = result;
}

 let b = document.querySelector('#calc');
    b.addEventListener('click',calculate);
