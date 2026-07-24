const SHOPIFY_DOMAIN = "winnecinc.myshopify.com";
const TOKEN = "atkn_f81d1eb3e66f2c3427354af92654598daad17d4a83942c4a2eb9bcd36e1430dd";
console.log("Token length:", TOKEN.length);

console.log("Shopify script loaded");

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
          }
        }
      }
    }
    `
  })
})
.then(response => {
  console.log("Status:", response.status);
  return response.json();
})
.then(result => {
  console.log("Shopify result:", result);
})
.catch(error => {
  console.log("Fetch error:", error);
});