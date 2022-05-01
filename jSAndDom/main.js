let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
let textChange = function(){
  view.innerHTML = 'Hello World!'
}

view.addEventListener('click', textChange);

let textReturn = function(){
  view.innerHTML = 'View'
}

view.addEventListener('click', textReturn);

view.onclick = textChange;

close.onclick = textReturn;
