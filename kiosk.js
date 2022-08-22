fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);
let myProducts = document.getElementById('products')
info.forEach(i => {
    let ItemList = document.createElement('li')
    ItemList.innerText = `${i.name}`
    myProducts.appendChild(ItemList)
})
})
.catch(function(error){
    console.log('error',error);
   });
   fetch('http://localhost:5000/products/vegetables')
   .then(function(response) {
       return response.json();
   })
   .then(function(info) {
    console.log(info);
   let myProducts = document.getElementById('products')
   info.forEach(i => {
       let ItemList = document.createElement('li')
       ItemList.innerText = `${i.name}`
       myProducts.appendChild(ItemList)
   })
   })
   .catch(function(error){
    console.log('error',error);
   })

   .catch(function(error){
 console.log('error',error);
});
fetch('http://localhost:5000/products/Fruits')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);
let myProducts = document.getElementById('products')
info.forEach(i => {
    let ItemList = document.createElement('li')
    ItemList.innerText = `${i.name}`
    myProducts.appendChild(ItemList)
})
});
