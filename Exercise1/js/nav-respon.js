document.getElementsByClassName('fa-bars')[0].addEventListener('click',function(){
  var getnavUl =document.getElementById('bars-menu-fix');
  //var getnavUl =document.getElementById('bars-menu-fix').outerHTML;
  //alert(getnavUl);
  if(getnavUl.className === 'bottom-head'){
    getnavUl.className += ' active';
  }
  getnavUl.className = 'bottom-head';
});
