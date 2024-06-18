const result = document.querySelector("ul");
const buttonShow = document.querySelector(".show-all");
const buttomMap = document.querySelector(".map-each");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return newValue;
}
function mostrarTela(productsArray) {
  let myLi = "";
  productsArray.forEach((item) => {
    myLi += `
               <li>
                     <img src=${item.src}>
                     <p>${item.name}</p>
                     <p class="item-prace">R$ ${formatCurrency(item.price)}</p>
              </li>
          
          `;
  });

  result.innerHTML = myLi;
}
function mapEach() {
  const newPrice = menuOptions.map((product) => ({
    ...product, // Spread Operator

    price: product.price * 0.9, // dar 10% de desconto
    //     name: product.name,
    //     vagan: product.vegan,
    //     src: product.src,
  }));

  mostrarTela(newPrice);

  //   console.log(newPrice);
}
function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  result.innerHTML = `
       <li>
          <p>A soma de  todos<br> os itens do <br> manu é: R$ ${formatCurrency(totalValue)}</p>
       </li>
          
 
 `;

  console.log(totalValue);
}

function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);

  mostrarTela(filterJustVegan);
}

buttonShow.addEventListener("click", () => mostrarTela(menuOptions));
buttomMap.addEventListener("click", mapEach);
sumAll.addEventListener("click", sumAllItems);
filterAll.addEventListener("click", filterAllItems);
