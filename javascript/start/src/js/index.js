import Http from './Https';

// Write your code here...
const container = document.querySelector('.list');
const total = document.querySelector('.total');
const addProductBtn = document.querySelector('#addProductBtn');
const http = new Http('http://localhost:3000/products')

const Row = ({ product, price,id }) =>
  `<div class="product">
<span class="prod-name">${product}</span>
<span class="prod-cost">$${price}</span>
<div class="delete-btn"><a href="#" name="delete-btn" data-id="${id}">X</a></div>
</div>`;

const render = function (arr) {
  const elems = arr.map((e) => Row(e));
  const totalCost = arr.reduce((prev, curr) => prev + Number(curr.price), 0);

  container.innerHTML = elems.join('');
  total.innerHTML = Row({ product: 'TOTAL', price: totalCost });
};



async function loadAndRender(){
  try{
    const {status,response} =  await http.get()
    console.log(status);
    
    render(JSON.parse(response));
  }catch{
    alert("Error in getting data")
  }
}

loadAndRender();



addProductBtn.addEventListener("submit",function(e){
  e.preventDefault;
  let product = e.target.product;
  let price = e.target.price;
  console.log( product,price);

})

