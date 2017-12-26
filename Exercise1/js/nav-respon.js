document.getElementsByClassName('fa-bars')[0].addEventListener('click',function(){
  var getnavUl = document.getElementsByClassName('main-menu')[0];
  getnavUl.className === 'navigation' ? getnavUl.className += 'active' : getnavUl.className = 'navigation';
});
