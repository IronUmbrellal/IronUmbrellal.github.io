// Ініціалізація Web App
Telegram.WebApp.ready();

// Отримання даних користувача
const user = Telegram.WebApp.initDataUnsafe.user;

// Отримання user_id
const userId = user.id;

// Виведення інших даних користувача
console.log("User ID:", userId);
console.log("First Name:", user.first_name);
console.log("Last Name:", user.last_name);
console.log("Username:", user.username);

// Закриття Web App
Telegram.WebApp.close();