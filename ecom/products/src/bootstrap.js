import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i <= 5; i++) {
    const name = faker.commerce.productName();
    products += `<div> ${name} </div>`;
  }

  el.innerHTML = products;
  //ReactDom.render(<App/>,el)
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#product-list");
  // Assuming that container doesnt have element with id product-list
  if (el) {
    mount(el);
  }
}

export { mount };
