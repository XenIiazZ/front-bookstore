import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import bookImage1 from "./assets/images/books/book-1.png";
import Cart from "./pages/Cart/Cart";
import Signin from "./pages/Signin/Signin";
import Registration from "./pages/Registration/Regestartion";
import Book from "./pages/Book/Book";

function App() {
  const booksList = {
    popularity: [
      {
        id: 1,
        img: bookImage1,
        title: "Сговор остолопов", 
        price: 344,
        author: "Джон Кеннеди Тул",
      },

      {
        id: 2,
        img: bookImage1,
        title: "Спокойной ночи, Горилла!",
        price: 197,
        author: "Пэгги Ратман",
      },

      {
        id: 3,
        img: bookImage1,
        title: "Идиот",
        price: 289,
        author: "Федор Михайлович Достоевский",
      },

      {
        id: 4,
        img: bookImage1,
        title: "Словарь Сатаны",
        price: 666,
        author: "Амброз Бирс",
      },

      {
        id: 5,
        img: bookImage1,
        title: "Москва Ква-Ква",
        price: 232,
        author: "Василий Аксёнов",
      },

      {
        id: 6,
        img: bookImage1,
        title: "Хочу бабу на роликах!",
        price: 430,
        author: "Вильмонт Е.Н.",
      },
    ],

    bestsellers: [
      {
        id: 7,
        img: bookImage1,
        title: "Как управлять рабами",
        price: 243,
        author: "Марк Сидоний Фалкс (вместе с Джерри Тонером)",
      },

      {
        id: 8,
        img: bookImage1,
        title: "Аристотель и муравьед едут в Вашингтон",
        price: 321,
        author: "Томас Каткарт, Дэн Клейн",
      },

      {
        id: 9,
        img: bookImage1,
        title: "Приключения какашки",
        price: 268,
        author: "Анна Сучкова",
      },

      {
        id: 10,
        img: bookImage1,
        title: "Человек, который принял жену за шляпу",
        price: 134,
        author: "Оливер Сакс",
      },

      {
        id: 11,
        img: bookImage1,
        title: "Кысь",
        price: 452,
        author: "Татьяна Толстая",
      },

      {
        id: 12,
        img: bookImage1,
        title: "Как жить с кошкой-невротиком",
        price: 234,
        author: "Стивен Бейкер",
      },
    ],
  };
  return (
    <div className="App">
      <Header booksList={booksList} />

      <main>
        <Routes>
          <Route path="/" element={<Home booksList={booksList} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/registartion" element={<Registration />} />
          <Route
            path="/book/:bookId"
            element={<Book booksList={booksList} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
