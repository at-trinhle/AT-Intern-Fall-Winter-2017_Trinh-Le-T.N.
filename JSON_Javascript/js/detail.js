var dataGetJson;
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          var data = JSON.parse(httpRequest.responseText);
          showCart(data);
          if (callback) callback(data);
          else {
            //do nothing
          }
        }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}

fetchJSONFile('../dataProduct.json', function(data) {
  this.dataGetJson = data;  
});
var getList;
function showCart(data) {
  var arraygetIdProduct = localStorage.getItem('id-product');
  var dt = data['myProduct'];
  var listProduct = [];
  if (arraygetIdProduct) {
    for (let i of dt) {
      if (arraygetIdProduct.includes(i.id)) {
        listProduct.push(i);
      }
    }
    getList = listProduct;
  }
  var listCart = '<table class="table">'+
  '<thead><tr><th>Name</th><th>Price</th><th>Quantity</th>'
  +'<th>Total</th><th>Delete</th></tr></thead>';
    var html = '', sum = 0;
  for (let j of listProduct) {
    html += '<tr><td>'+j.name+'</td>';
    html += '<td>'+j.price +'$</td>';
    html += '<td><input data-id="'+j.id+'" id="number-'+j.id+'" type="number" value="'+j.quantity+'" min="1" max="10" onclick="calculate(this)"></td>';
    html += '<td>'+j.price * j.quantity+'$</td>';
    html += '<td><button class="btn btn-danger" data-id="'+j.id+'">Delete</button></td></tr>';
    sum += j.price * j.quantity;
  }
  listCart += html;
  listCart += '<tr><td></td><td></td><td><strong>Total money: </strong></td><td>' + sum + '$</td><td></td></tr></table>';
  document.getElementById('show-item').innerHTML = listCart;

  //btn-delete
  del = document.getElementsByClassName('btn-danger');
  for (let z of del) {
    z.addEventListener('click', function () {
      var reconfirm = confirm("Do you want to delete this product ?");
      if (reconfirm == true ) {
        delRow(z);
        showCart(data);
      }
    });
  }
}
function delRow(z) {
  var dt = dataGetJson['myProduct'];
  for (i of dt){
    if (z.getAttribute('data-id') == i.id) {
      var count = localStorage.getItem('num-product');
      localStorage.setItem('num-product', count - 1);
      var arraygetIdProduct = JSON.parse(localStorage.getItem('id-product'));
      var data_id = z.getAttribute('data-id');
      for (var q = 0; arr_len = arraygetIdProduct.length, q < arr_len; q++) {
        if (parseInt(data_id) === arraygetIdProduct[q]) {
          arraygetIdProduct.splice(q, 1);
        }  
      }
      localStorage.setItem('id-product',JSON.stringify(arraygetIdProduct));
    }
  }
}
function calculate(id) {
  var getId = id.getAttribute('data-id');
  var textBox = document.getElementById("number-"+getId);
  var check = textBox.getAttribute('data-id');
  for (var t = 0, len = getList.length; t < len; t++) {
    if (parseInt(check) == getList[t].id) {
      var changeNum = textBox.value;
      getList[t].quantity = changeNum;
      showCart(this.dataGetJson);
    }
  }
}
