const eShop = {
  name: "Alser",
  phoneNumber: "87776543287",
  products: [
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
    { productName: "Phone 15", category: "Laptops", price: 1400, stock: 900 },
  ],
};

const changeShopName = () => {
  let newName = prompt("Enter new shop name");
  eShop.name = newName;
};

// changeShopName();

const changeShopPhone = () => {
  let newPhone = prompt("Enter new shop phone");

  if (newPhone !== "") eShop.phoneNumber = newPhone;
};

const listAllProducts = () => {
  let List = "";
  let products = eShop.products;

  for (let i = 0; i < products.length; i++) {
    list += products[i].productName + "\n";
  }
  return List;
};

//alert(listAllProducts());

const addProducts = () => {
  let productName = prompt("Enter product name");
  let price = prompt("Enter product price");
  let category = prompt("Enter category name");
  let stock = prompt("Enter stock");

  eShop.products.push({
    productName: productName,
    price: price,
    category: category,
    stock: stock,
  });
};

// addProducts();

// console.log(eShop.products);

const applyDiscountToCategory = () => {
  let category = prompt("Enter category name");
  let discount = +prompt("Enter discount amount");

  const filtered = eShop.products.filter(
    (product) => product.category === category
  );

  console.log(filtered());

  //   return filtered.map(
  //     (product) => product.price - (product.price * discount) / 100
  //   );

  return filtered.map((product) => ({
    productName: product.name,
    category: product.category,
    price: product.price - (product.price * discount) / 100,
    stock: product.stock,
  }));
};



// console.log(applyDiscountToCategory());

console.log(eShop.products);


// function menu(){
//     let choics=prompt("1. Дүкен атауын өзгерту\n2 2. Телефон нөмірін өзгерту\n33. Өнімдердің атауын шығару\n4 4. Жаңа өнім қосу\n5 5. Категорияға жеңілдік жасау\n6 6. Шығу\n7 Таңдауыңызды енгізіңіз:")


// }

