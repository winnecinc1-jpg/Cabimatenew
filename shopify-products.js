const SHOPIFY_DOMAIN = "winnecinc.myshopify.com";

const TOKEN = "YOUR_STOREFRONT_TOKEN";

fetch(`https://${SHOPIFY_DOMAIN}/api/2025-07/graphql.json`, {
method: "POST",

headers: {
"Content-Type": "application/json",
"X-Shopify-Storefront-Access-Token": TOKEN
},

body: JSON.stringify({

query: `
{
products(first:5){
edges{
node{
title
featuredImage{
url
}
}
}
}
}
`

})

})

.then(response => response.json())

.then(result => {

console.log(result);

let box = document.getElementById("shopify-products");

box.innerHTML = "";

result.data.products.edges.forEach(item=>{

let product=item.node;

box.innerHTML += `

<div style="width:250px">

<img src="${product.featuredImage.url}" style="width:100%">

<h3>${product.title}</h3>

</div>

`;

});

})

.catch(error=>{

console.log("ERROR:", error);

});