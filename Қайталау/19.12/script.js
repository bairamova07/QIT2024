const container = document.getElementById("container");

const data = [
  { name: "Iphone 17", price: 600, rating: 5.0 },
  { name: "Iphone 15", price: 300, rating: 4.5 },
  { name: "Iphone 15 pro", price: 600, rating: 4.6 },
  { name: "Iphone 16 pro", price: 900, rating: 4.3 },
];

data.forEach((item) => {
  const card = document.createElement("div");
  const name = document.createElement("h2");
  const details = document.createElement("div");
  const button = document.createElement("button");
  details.innerHTML = `price:${item.price} rating:${item.rating}`;
  name.textContent = item.name;
  button.textContent = "Өшіру";

  card.appendChild(name);
  card.appendChild(details);
  card.appendChild(button);
});
