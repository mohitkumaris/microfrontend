const mount = (el) => {
  el.innerHTML = "This cart has 2 items";
  //ReactDom.render(<App/>,el)
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-item");
  // Assuming that container doesnt have element with id cart-item
  if (el) {
    mount(el);
  }
}

export { mount };
