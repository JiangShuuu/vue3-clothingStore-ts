import{C as e}from"./index.583c14a6.js";const n={getProducts(r,t,s,a){const c=new URLSearchParams({page:r,categoryId:t,sort:s,value:a});return e.get(`/products?${c.toString()}`)},getProduct(r){return e.get(`/product/${r}`)},searchProducts(r){const t=new URLSearchParams({keyword:r});return e.get(`/products/search?${t.toString()}`)}};export{n as p};
