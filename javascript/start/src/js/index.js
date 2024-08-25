// Write your code here...
const container = document.querySelector('.list');
const total = document.querySelector('.total');
const addProductBtn = document.querySelector('#addProductBtn');

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

const getData = (uri) =>
  new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(){
      resolve(JSON.parse(this.response))
    })
    xhr.addEventListener('error', () => reject());
    xhr.open('GET', uri);
    xhr.send();
  });



async function loadAndRender(){
  try{
    const product =  await getData('http://localhost:3000/products')
    render(product);
  }catch{
    alert("Error in getting data")
  }
}

loadAndRender();


