//use addEventListener
function first() {
  alert('This is alert demonstrate for addEventListener');
}
document.getElementById('btn1').addEventListener('click', first);
//use removeEventListener
function second() {
  alert('aaaa');
}
document.getElementsByTagName('a')[0].addEventListener('dblclick', second);
document.getElementsByTagName('a')[0].removeEventListener('dblclick', second);
//create element p and appendChild
function createEl() {
  var el = document.createElement('p');
  document.getElementById('container').appendChild(el);
}
//remove appendChild
function removeChl() {
  var rem = document.getElementById('listnav');
  rem.removeChild(rem.children[0]);
}
//replaceChild
function replaceChl() {
  var re1 = document.getElementById('rep');
  var newtxt = document.createTextNode('new code for p tag');
  re1.parentNode.replaceChild(newtxt, re1);
}
//cloneChild
function cloneChl() {
  var clon = document.getElementById('listnav');
  var cln = clon.cloneNode(true);
  document.getElementById('container').appendChild(cln);
}
//set Attribute
document.getElementsByTagName('h1')[0].setAttribute('class','title-for-h1-tag');
//get Attribute
document.getElementsByTagName('input')[0].getAttribute('value');
//remove Attribute
document.getElementsByTagName('h1')[0].removeAttribute('style');
