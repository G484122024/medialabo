function changeDom() {
  let li1 = document.createElement('li');
  li1.textContent = 'ヨット';
  let kazoeuta = document.querySelector('ul#kazoeuta');
  kazoeuta.insertAdjacentElement('beforeend', li1);


  let img = document.querySelector('img#bluemoon');
  img.setAttribute('src', 'bluemoon.jpg');


  let p = document.querySelector('p#takudai');
  let a = document.createElement('a');
  a.textContent = '拓殖大学HP';
  p.insertAdjacentElement('afterend', a);


  let mochi = document.querySelector('li#mochi');
    mochi.remove();
  


  let kassen = document.querySelector('ul#kassen');
    kassen.remove();



  let li2 = document.createElement('li');
  kazoeuta.insertAdjacentElement('beforeend', li2);
  li2.textContent = '赤';
}


let b = document.querySelector('button#henkou').addEventListener('click', changeDom);