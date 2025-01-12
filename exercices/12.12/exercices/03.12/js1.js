const users = [
  { name: "Әлия", age: 30, isOnline: true },
  { name: "Алихан", age: 20, isOnline: false },
  { name: "Бауржан", age: 25, isOnline: true },
];

function LestOnlineUsers() {
  return users.filter((user) => user.isOnline == true);
}

console.log(LestOnlineUsers());

