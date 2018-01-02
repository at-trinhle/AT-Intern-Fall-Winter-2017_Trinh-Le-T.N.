function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          var data = JSON.parse(httpRequest.responseText);
          showItem(data);
          if (callback) callback(data);
          function showItem(data) {
            var name, price, img;
            var listPr = '';
            dt = data['myProduct'];
            var saveCount = localStorage.getItem('num-product');
            if(saveCount){
              var btn = document.getElementById('display');
              if (btn) {
                btn.innerHTML = saveCount;
              }
            }
            else {
              localStorage.setItem('num-product',0);
            }   
            for (let i of dt) {
              name ='<h2>'+i.name+'</h2>';
              img = '<img src="../images/'+i.image+'">';
              price = '<p>Price: '+i.price+'$</p';
              listPr += '<div class="col-md-4"><div class="product">'+name+img+price+'<div class="btn-buy"><button class="btn btn-primary buy" data-count="0">Buy</button></div></div></div>';
            }
            document.getElementById('list-Product').innerHTML = listPr;
            clickCount(data);
          }
        }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}

fetchJSONFile('../dataProduct.json', function(data){
});

function clickCount(data) {
  getdata = document.getElementsByClassName('buy');
  var len = getdata.length;
  var count = document.getElementById('display').innerHTML;
  var arrayIdProduct = localStorage.getItem('id-product');
  //saveID: object
  var saveID = JSON.parse(arrayIdProduct);
  if (!saveID) {
    saveID = [];
  }
  for (let i = 0; i < len; i++) {
    getdata[i].addEventListener('click', function(){
      //check id noRepeat
        if (saveID.includes(data['myProduct'][i].id) != 1){
          saveID.push(data['myProduct'][i].id);
          localStorage.setItem('id-product',JSON.stringify(saveID));
          count = Number(count) + 1;
          localStorage.setItem('num-product',count);
          document.getElementById('display').innerHTML = count;
          getdata[i].disabled = true;
        }
    });
  }
}

document.getElementById('display').addEventListener('click', function(){
  window.location.href = 'template/detailCart.html';
})
