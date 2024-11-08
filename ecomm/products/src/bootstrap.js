import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};



// Situations
// 1.

//We are running this file in development in isolation
//we are using our local index.html file
// which Definitely has an element with an id of 'dev-product'
//we want to imediaely render our app into that element

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

    //Assuming our container doesnt have an element
    //with id 'dev-products'

    if(el){

        //we are probabbly running in isolation
        mount(el);
    }
}


//2.

//we are running this file in development or production
//through the Container app
//No guarantee that an element with an id of 'dev-products' exist in that
// we do not wnt to render the app imediately

export {mount};