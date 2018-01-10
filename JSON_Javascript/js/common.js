var dataProduct;
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      var data = JSON.parse(httpRequest.responseText);
      dataProduct = data;
      if (callback) {
        callback(data);
      }
      showItem(data)
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}

fetchJSONFile('../dataProduct.json', function(data) {
});
function showItem(dataProduct) {
  var listPr = '';
  dt = dataProduct['myProduct'];
  var saveCount = localStorage.getItem('num-product');
  if (saveCount){
    var btn = document.getElementById('display');
    if (btn) {
      btn.innerHTML = saveCount;
    }
    else {
      //do nothing
    }
  }
  else {
    localStorage.setItem('num-product',0);
  }   
  for (let i of dt) {
    listPr += '<div class="col-md-4"><div class="product">';
    listPr += '<h2>'+i.name+'</h2>';
    listPr += '<img src="../images/'+i.image+'">';
    listPr += '<p>Price: '+i.price+'$</p';
    listPr += '<div class="btn-buy">'
              +'<button class="btn btn-primary buy" data-count="0">Buy</button></div></div></div>';
  }
  document.getElementById('product-list').innerHTML = listPr;
  clickCount(dataProduct);
}
function clickCount(data) {
  getdata = document.getElementsByClassName('buy');
  var lengthData = getdata.length;
  var count = document.getElementById('display').innerHTML;
  var arrayIdProduct = localStorage.getItem('id-product');
  //saveID: object
  var saveID = JSON.parse(arrayIdProduct);
  if (!saveID) {
    saveID = [];
  }
  for (let i = 0; i < lengthData; i++) {
    getdata[i].addEventListener('click', function() {
      //check id noRepeat
      if (saveID.includes(data['myProduct'][i].id) != 1) {
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

document.getElementById('display').addEventListener('click', function() {
  window.location.href = 'template/detailCart.html';
});
